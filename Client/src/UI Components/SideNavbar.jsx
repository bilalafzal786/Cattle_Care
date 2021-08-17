import React, { Fragment } from "react";
import { Router, Route, Link } from "react-router-dom";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { FaHome } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import dashboard from "./images/home.png";

const SideNavbar = () => {
  return (
    <>
      {/* <Router>
        <Route
          render={({ location, history }) => (
            <Fragment> */}
      <SideNav
        style={{ backgroundColor: "#0275d8", marginTop: "3.8em" }}
        onSelect={(selected) => {
          // const to = "/dashboard" + selected;
          // if (location.pathname !== to) {
          //   history.push(to);
          // }
        }}
      >
        <Toggle />
        <Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <FaHome />
            </NavIcon>
            <NavText>
              <Link to="/dashboard/">Dashboard</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="analytics">
            <NavIcon>
              <FaChartLine />
            </NavIcon>

            <NavText>
              <Link to="/dashboard/analytics">Analytics</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="reg">
            <NavIcon>
              <FaRegFileAlt />
            </NavIcon>
            <NavText>
              <Link to="/dashboard/registerNew">Register New</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="insights">
            <NavIcon>
              <FaRegCommentDots />
            </NavIcon>
            <NavText>
              <Link to="/dashboard/insights">Insights</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="help">
            <NavIcon>
              <FaRegQuestionCircle />
            </NavIcon>
            <NavText>
              <Link to="/dashboard/help">Help</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="setting">
            <NavIcon>
              <FaCog />
            </NavIcon>
            <NavText>
              <Link to="/dashboard/setting">Setting</Link>
            </NavText>
          </NavItem>
        </Nav>
      </SideNav>
      {/* <main>
                <Route
                  path="/dashboard/"
                  exact
                  component={(props) => <Home />}
                />
                <Route
                  path="/dashboard/analytics"
                  component={(props) => <Analytics />}
                />
                <Route
                  path="/dashboard/registerNew"
                  component={(props) => <RegisterNew />}
                />
              </main>
              <Fragment />
            </Fragment>
          )}
        /> */}
      {/* </Router> */}
    </>
  );
};

export default SideNavbar;
