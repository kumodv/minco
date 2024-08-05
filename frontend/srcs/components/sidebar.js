function sidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = `
        <div class="position-sticky">
            <ul class="nav flex-column">
                <li class="nav-item" >
                    <a href="#/" class="nav-link active">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#/explore" class="nav-link">Explore</a>
                </li>
                <li class="nav-item">
                    <a href="#/profile" class="nav-link">Profile</a>
                </li>
                <li class="nav-item">
                    <a href="#/settings" class="nav-link">Settings</a>
                </li>
            </ul>
        </div>
    `;
}

export default sidebar;