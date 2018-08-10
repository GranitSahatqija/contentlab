import Pages from '../containers/Pages/Pages.jsx';
import Dash from '../containers/Dash/Dash.jsx';

var appRoutes = [
    { path: "/admin/pages/login", name: "Pages", component: Pages },
    { path: "/admin/pages/register", name: "Pages", component: Pages },
    { path: "/admin/pages/lock-screen", name: "Pages", component: Pages },
    { path: "/", name: "Home", component: Dash }
];

export default appRoutes;
