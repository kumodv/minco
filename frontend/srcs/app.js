import { setupMockAPI } from './components/Login/Redirect.js';
import sidebar from './components/sidebar.js';
import Login from './pages/Login.js';
import changeUrl from './router.js';

document.addEventListener('DOMContentLoaded', function() {
    // Login();
    sidebar();
    // changeUrl(window.location.pathname);
});