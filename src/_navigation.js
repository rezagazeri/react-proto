import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard/Dashboard"));
const ItRisk = React.lazy(() => import("./views/ItRisks/ItRisk"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const navigation = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/itrisk", exact: true, name: "ItRisk", component: ItRisk }
];

export default navigation;
