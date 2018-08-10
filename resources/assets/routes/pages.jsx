import LoginPage from '../views/Pages/LoginPage.jsx';
import RegisterPage from '../views/Pages/RegisterPage.jsx';
import LockScreenPage from '../views/Pages/LockScreenPage.jsx';

var pagesRoutes = [
    { path: "/admin/pages/login", name: "Login Page", mini: "LP", component: LoginPage },
    { path: "/admin/pages/register", name: "Register", mini: "RP", component: RegisterPage },
    { path: "/admin/pages/lock-screen", name: "Lock Screen Page", mini: "LSP", component: LockScreenPage }
];

export default pagesRoutes;
