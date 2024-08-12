import Home from './pages/Home.js';
import { setupMockAPI } from './components/Login/Redirect.js';
import Sidebar from './components/Sidebar.js';
import Login from './pages/Login.js';
import changeUrl from './router.js';
import Friends from './components/friends.js';

document.addEventListener('DOMContentLoaded', function() {
    // Login();
    Sidebar();
    Home();
    Friends();
    // changeUrl(window/.location.pathname);
});