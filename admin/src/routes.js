import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Lungs from "views/examples/Lungs.js";
import LungsResult from "views/examples/LungsResult.js";
import LungsSend from "views/examples/LungsSend.js";
import LandingPage from "views/examples/LandingPage.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/lung-analysis",
    name: "Lung analysis",
    icon: "fa fa-medkit text-info",
    component: Lungs,
    layout: "/admin",
  },
  {
    path: "/lung-analysis-result",
    name: "Lung analysis results",
    icon: "fa fa-medkit text-info",
    component: LungsResult,
    layout: "/admin",
  },
  {
    path: "/lung-analysis-send",
    name: "Lung analysis send",
    icon: "fa fa-medkit text-info",
    component: LungsSend,
    layout: "/admin",
  }
];
export default routes;
