export default function LoginButton() {
    const login42Url = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-547779c992c3a9abf188824536a1ca43540b19444f999f302920045e34873a75&redirect_uri=http%3A%2F%2F127.0.0.1%3A5500%2Ffrontend%2Findex.html&response_type=code";
    return `
        <div class="loginButton" onclick="window.location.replace('https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-547779c992c3a9abf188824536a1ca43540b19444f999f302920045e34873a75&redirect_uri=http%3A%2F%2F127.0.0.1%3A5500%2Ffrontend%2Findex.html&response_type=code')">
            <div class="loginText">42seoul</div>
        </div>
    `;
}