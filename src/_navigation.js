import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard/Dashboard"));
const ItRisk = React.lazy(() => import("./views/ItRisks/ItRisk.jsx"));
const Entity = React.lazy(() => import("./views/Entity/Entity"));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const navigation = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/itrisk", exact: true, name: "ItRisk", component: ItRisk },
  { path: "/entity", exact: true, name: "entity", component: Entity }
];

export default navigation;
