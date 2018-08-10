import Dashboard from '../views/Dashboard/Dashboard.jsx';
import Buttons from '../views/Components/Buttons.jsx';
import GridSystem from '../views/Components/GridSystem.jsx';
import Panels from '../views/Components/Panels.jsx';
import SweetAlert from '../views/Components/SweetAlertPage.jsx';
import Notifications from '../views/Components/Notifications.jsx';
import Icons from '../views/Components/Icons.jsx';
import Typography from '../views/Components/Typography.jsx';
import RegularForms from '../views/Forms/RegularForms.jsx';
import ExtendedForms from '../views/Forms/ExtendedForms.jsx';
import ValidationForms from '../views/Forms/ValidationForms.jsx';
import Wizard from '../views/Forms/Wizard/Wizard.jsx';
import RegularTables from '../views/Tables/RegularTables.jsx';
import ExtendedTables from '../views/Tables/ExtendedTables.jsx';
import DataTables from '../views/Tables/DataTables.jsx';
import GoogleMaps from '../views/Maps/GoogleMaps.jsx';
import FullScreenMap from '../views/Maps/FullScreenMap.jsx';
import VectorMap from '../views/Maps/VectorMap.jsx';
import Charts from '../views/Charts/Charts.jsx';
import Calendar from '../views/Calendar/Calendar.jsx';
import UserPage from '../views/Pages/UserPage.jsx';

import FacebookFeeds from '../views/Facebook/FacebookFeeds.jsx';

import pagesRoutes from './pages.jsx';

var pages = [{ path: "/admin/pages/user-page", name: "User Page", mini: "UP", component: UserPage }].concat(pagesRoutes);

var dashRoutes = [
    { visibile: true, path: "/admin/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { collapse: true, visibile: true, path: "/admin/facebook", name: "Facebook", state: "openFacebook", icon: "pe-7s-plugin", views:[
        { visibile: true, path: "/admin/facebook/feeds", name: "Feeds", mini: "F", component: FacebookFeeds }]
    },
    { collapse: true, visibile: false, path: "/admin/components", name: "Components", state: "openComponents", icon: "pe-7s-plugin", views:[
        { visibile: false, path: "/admin/components/buttons", name: "Buttons", mini: "B", component: Buttons },
        { visibile: false, path: "/admin/components/grid-system", name: "Grid System", mini: "GS", component: GridSystem },
        { visibile: false, path: "/admin/components/panels", name: "Panels", mini: "P", component: Panels },
        { visibile: false, path: "/admin/components/sweet-alert", name: "Sweet Alert", mini: "SA", component: SweetAlert },
        { visibile: false, path: "/admin/components/notifications", name: "Notifications", mini: "N", component: Notifications },
        { visibile: false, path: "/admin/components/icons", name: "Icons", mini: "I", component: Icons },
        { visibile: false, path: "/admin/components/typography", name: "Typography", mini: "T", component: Typography }]
    },
    { collapse: true, visibile: false, path: "/admin/forms", name: "Forms", state: "openForms", icon: "pe-7s-note2", views:
        [{ visibile: false, path: "/admin/forms/regular-forms", name: "Regular Forms", mini: "RF", component: RegularForms },
        { visibile: false, path: "/admin/forms/extended-forms", name: "Extended Forms", mini: "EF", component: ExtendedForms },
        { visibile: false, path: "/admin/forms/validation-forms", name: "Validation Forms", mini: "VF", component: ValidationForms },
        { visibile: false, path: "/admin/forms/wizard", name: "Wizard", mini: "W", component: Wizard }]
    },
    { collapse: true, visibile: false, path: "/admin/tables", name: "Tables", state: "openTables", icon: "pe-7s-news-paper", views:
        [{ visibile: false, path: "/admin/tables/regular-tables", name: "Regular Tables", mini: "RT", component: RegularTables },
        { visibile: false, path: "/admin/tables/extended-tables", name: "Extended Tables", mini: "ET", component: ExtendedTables },
        { visibile: false, path: "/admin/tables/data-tables", name: "Data Tables", mini: "DT", component: DataTables }]
    },
    { collapse: true, visibile: false, path: "/admin/maps", name: "Maps", state: "openMaps", icon: "pe-7s-map-marker", views:
        [{ visibile: false, path: "/admin/maps/google-maps", name: "Google Maps", mini: "GM", component: GoogleMaps },
        { visibile: false, path: "/admin/maps/full-screen-maps", name: "Full Screen Map", mini: "FSM", component: FullScreenMap },
        { visibile: false, path: "/admin/maps/vector-maps", name: "Vector Map", mini: "VM", component: VectorMap }]
    },
    { visibile: false, path: "/admin/charts", name: "Charts", icon: "pe-7s-graph1", component: Charts },
    { visibile: false, path: "/admin/calendar", name: "Calendar", icon: "pe-7s-date", component: Calendar },
    { collapse: true, visibile: false, path: "/admin/pages", name: "Pages", state: "openPages", icon:"pe-7s-gift", views: pages
    },
    { redirect: true, path: "/", pathTo: "/admin/dashboard", name: "Dashboard" },
];
export default dashRoutes;
