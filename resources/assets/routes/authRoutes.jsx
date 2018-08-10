import LoginPage from '../views/Auth/LoginPage.jsx';

var authRoutes = [
    { path: "/login", name: "Login Page", mini: "LP", component: LoginPage },
    { redirect: true, path: "/", pathTo: "/login", name: "Login" }
];

export default authRoutes;
