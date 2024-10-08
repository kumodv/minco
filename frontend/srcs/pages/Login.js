import sidebar from '../components/Sidebar.js';

export default function Login() {
    console.log("Rendering Login page");
    
    const loginElement = document.createElement("div");    
    loginElement.classList.add("login-container");
    loginElement.innerHTML = `
        <div class="login-box">
            <div class="login-title">Login</div>
            <div class="loginButton" id="loginButton">
                <div class="loginText">42seoul</div>
            </div>
        </div>
    `;

    const appElement = document.getElementById("app");
    appElement.innerHTML = "";
    appElement.appendChild(loginElement);

    document.getElementById("loginButton").addEventListener("click", () => {
        // sidebar();
    });
}

// import('../components/Login/Redirect.js').then(module => {
//     module.default();
// export default function Login() {
// 	const $app = document.querySelector(".App");    

//     $app.innerHTML = `
//         <div class="login-container">
//             <div class="login-box">
// 				<div class="login-title">Login</div>
//             <div class="loginButton" onclick="window.location.replace('https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-547779c992c3a9abf188824536a1ca43540b19444f999f302920045e34873a75&redirect_uri=http%3A%2F%2F127.0.0.1%3A5500%2Ffrontend%2Findex.html&response_type=code')">
//                 <div class="loginText">42seoul</div>
//             </div>
//             </div>
//         </div>
//     `;
// }