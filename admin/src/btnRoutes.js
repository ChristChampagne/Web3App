import Index from "views/Index.js";
import Lungs from "views/examples/Lungs.js";
import LungsResult from "views/examples/LungsResult.js";
import LungsSend from "views/examples/LungsSend.js";

var routes = [
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
