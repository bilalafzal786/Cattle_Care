import React from "react";
import SideNav from "../../SideNavbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Analytics from "./Analytics";
import RegisterNew from "./RegisterNew";
import Insights from "./Insights";
import Help from "./Help";
import Setting from "./Setting";
const Dashboard = () => {
  return (
    <>
      <SideNav />
      <Router>
        <Switch>
          <Route exact path="/dashboard/" component={Home} />
          <Route exact path="/dashboard/analytics" component={Analytics} />
          <Route exact path="/dashboard/registerNew" component={RegisterNew} />
          <Route exact path="/dashboard/insight" component={Insights} />
          <Route exact path="/dashboard/help" component={Help} />
          <Route exact path="/dashboard/setting" component={Setting} />
        </Switch>
      </Router>
    </>
  );
};

export default Dashboard;
