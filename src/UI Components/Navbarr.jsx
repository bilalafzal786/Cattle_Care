import { Fragment, useState } from "react";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const Navbarr = () => {
  function HeaderView() {
    const location = useLocation();
    console.log(location.pathname);
    return location.pathname;
  }
  const [homepath, setHomepath] = useState(true);
  // const loadingMethod = () => {
  //   const loc = HeaderView();
  //   if (loc != "/") {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  const [appState, setColorchange] = useState({
    homepath: false,
    changeCo: false,
  });

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange({ ...appState, changeCo: true });
    } else {
      setColorchange({ ...appState, changeCo: false });
    }
  };
  const componentDidMount = () => {
    window.addEventListener("load", () => {
      const loc = HeaderView();
      if (loc != "/") {
        setColorchange({ ...appState, homepath: false });
      } else {
        setColorchange({ ...appState, homepath: true });
      }
    });
    window.addEventListener("scroll", changeNavbarColor);
  };
  const test = () => {
    console.log("Im in Test func");
    if ((appState.homepath = false) || (appState.changeCo = true)) {
      console.log(appState.homepath);
      return "bg-primary";
    } else {
      console.log(appState.changeCo);

      return "bg-transparent";
    }
  };

  return (
    <Fragment>
      <Navbar
        expand="lg"
        // fixed="top"
        className={test()}
        style={{ margin: "0px" }}
      >
        <LinkContainer to="/">
          <Navbar.Brand id="color">CATTLE CARE</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link id="color">HOME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/payment">
              <Nav.Link id="color">SUBSCRIPTIONS</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link id="color">ABOUT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link id="color">LOGIN</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Navbarr;
