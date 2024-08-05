import Redirect from "./components/Login/Redirect.js";
import EndGame from "./pages/EndGame.js";
import Game from "./pages/Game.js";
import GameRoom from "./pages/GameRoom.js";
import Game3D from "./pages/Game3D.js";
import Login from "./pages/Login.js";
import Main from "./pages/Main.js";
import NotFound from "./pages/NotFound.js";
import { getIsLogin } from "./state/State.js";

const routes = [
	{ path: "/", page: Login, style: "login" },
	{ path: "/login/oauth2/code", page: Redirect, style: "redirect" },
	{ path: "/main", page: Main, style: "main" },
	{ path: "/gameroom", page: GameRoom, style: "gameroom" },
	{ path: "/game", page: Game, style: "game" },
	{ path: "/3D", page: Game3D, style: "Game3D" },
	{ path: "/endgame", page: EndGame, style: "endgame" },
	{ path: "/404", page: NotFound, style: "notfound" },
];

function checkUrl(requestedUrl) {
	let findUrl = requestedUrl;
	if (requestedUrl.startsWith("/main")) findUrl = "/main";
	let match = routes.find((route) => route.path === findUrl);
	return match;
}

export default function changeUrl(requestedUrl, element) {
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
