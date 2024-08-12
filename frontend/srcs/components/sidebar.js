import { setLoginState, getMyinfo, logout } from '../state/state.js';

// 테스트를 위한 로그인 상태 설정
setLoginState(true, 'user1', 'fake-token', 'fake-email', 'fake-nickname', "srcs/logo/pepe.png");

function sideProfile() {
    const myinfo = getMyinfo();
    if (!myinfo.userId) {
        return null;
    }

    const sideProfile = document.createElement('div');
    sideProfile.classList.add('user-profile');
    sideProfile.innerHTML = `
        <div class="user-info">
            <img src="${myinfo.image}" alt="User Avatar" class="rounded-circle">
            <div class="user-details">
                <span class="user-id">${myinfo.userId}</span>
            </div>
        </div>
        <a href="#" class="exit" id="logoutButton">
            <img src="srcs/logo/exit.svg" alt="Exit" class="exit-icon">
        </a>
    `;

    sideProfile.querySelector('#logoutButton').addEventListener('click', async (e) => {
        e.preventDefault();
        await logout();
    });

    return sideProfile;
}

function Sidebar() {
    console.log("Rendering sidebar");
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = `
        <div class="d-flex flex-column h-100">
            <div class="sidebar-header">
                <a href="/" class="text-decoration-none">
                    <div class="icon-background">
                        <img src="srcs/logo/default.svg" alt="PingPong">
                    </div>
                    <span>PongPong</span>
                </a>
            </div>
            <hr class="sidebar-hr">
            <ul class="nav flex-column mb-auto w-100">
                <li class="nav-item">
                    <a href="/home" class="nav-link text-light">
                        <i class="bi bi-house-door"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/profile" class="nav-link text-light">
                        <i class="bi bi-person"></i>
                        <span>Profile</span>
                    </a>
                </li>
            </ul>
        </div>
    `;
    const profileElement = sideProfile();
    if (profileElement) {
        sidebar.appendChild(profileElement);
    }
}

export default Sidebar;