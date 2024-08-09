function sidebar() {
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
            <div class="user-profile">
                <div class="user-info">
                    <img src="srcs/logo/pepe.png" alt="User Avatar" class="rounded-circle">
                    <div class="user-details">
                        <span class="username">ZaAk Sidki</span>
                        <span class="user-id">zsidki</span>
                    </div>
                </div>
                <a href="/logout" class="exit">
                    <img src="srcs/logo/exit.svg" alt="Exit" class="exit-icon">
                </a>
            </div>
        </div>
    `;
}

export default sidebar;