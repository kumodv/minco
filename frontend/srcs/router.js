import Redirect from "./components/Login/Redirect.js";
// import EndGame from "./pages/EndGame.js";
// import Game from "./pages/Game.js";
// import GameRoom from "./pages/GameRoom.js";
// import Game3D from "./pages/Game3D.js";
import Login from "./pages/Login.js";
// import Main from "./pages/Main.js";
// import NotFound from "./pages/NotFound.js";
import { getIsLogin } from "./state/state.js";
import sidebar from './components/Sidebar.js';

const routes = [
    { path: "/", page: Login, style: "Login" },
    { path: "/login/oauth2/code", page: Redirect, style: "redirect" },
    { path: "/sidebar", page: sidebar, style: "sidebar" }
];

function checkUrl(requestedUrl) {
    let match = routes.find((route) => route.path === requestedUrl);
    return match || routes[0];
}


export default function changeUrl(requestedUrl, element) {
    console.log("Changing URL to:", requestedUrl);
    resetLayout();

    const $app = document.getElementById('app');
    if (!$app) {
        console.error("Content element not found");
        return;
    }
    $app.innerHTML = "";

    const match = checkUrl(requestedUrl);

    const cssPath = `/srcs/styles/${match.style}.css`;
	console.log(match.style);
	console.log(cssPath);
	// frontend\srcs\styles\Login.css
    document.getElementById("styles").setAttribute("href", cssPath);

    if (match.page === Redirect) {
        match.page();
    } else {
        match.page();
    }

    history.pushState(null, null, requestedUrl);
}

function resetLayout() {
    // const $app = document.getElementById('app');
    // const $sidebar = document.getElementById('sidebar');
    const $content = document.getElementById('content');
    // const $friends = document.getElementById('friends');

    // if ($app) $app.innerHTML = "";
    // if ($sidebar) $sidebar.innerHTML = "";
    if ($content) $content.innerHTML = "";
    // if ($friends) $friends.innerHTML = "";
}

window.addEventListener("popstate", () => {
    changeUrl(window.location.pathname);
});
/* export default function changeUrl(requestedUrl, element) {
	//화면 초기화
	const $app = document.querySelector(".App");
	$app.innerHTML = "";
	const $nav = document.querySelector(".nav");
	$nav.innerHTML = "";
	const $sidebar = document.querySelector(".sidebar");
	$sidebar.innerHTML = "";

	const match = checkUrl(requestedUrl);
	if (match === undefined) changeUrl("/404");

	const cssPath = `/src/styles/${match.style}.css`;
	document.getElementById("styles").setAttribute("href", cssPath);

	if (match.page !== Redirect) history.pushState(null, null, match.path);

	if (
		match.page === Main ||
		match.page === GameRoom ||
		match.page === Game ||
		match.page === Game3D ||
		match.page === EndGame
	) {
		if (getIsLogin() === null) {
			changeUrl("/"); //로그인하지 않은 경우 로그인 페이지로 이동
			return;
		}
	}

	if (
		match.page === GameRoom ||
		match.page === Game ||
		match.page === Game3D ||
		match.page === EndGame
	) {
		if (element) match.page(element);
		else changeUrl("/main");
	} else if (match.page === Login) {
		// $app.style.visibility = "hidden";
		match.page();
	}
	else match.page();
}

window.addEventListener("popstate", () => {
	changeUrl(window.location.pathname);
});
 */