import { Fragment, useState, useContext, useEffect } from "react";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
const Navbarr = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user, loadUser } = authContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  const onLogout = () => {
    logout();
  };
  const authLinks = (
    <Fragment>
      {/* <li>{user && user.firstName}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <span className="hide-sm">Logout</span>
        </a>
      </li> */}
      <Nav.Link id="color">{user && user.firstName + user.lastName}</Nav.Link>
      <LinkContainer onClick={onLogout} to="#!">
        <Nav.Link id="color" className="hide-sm">
          Logout
        </Nav.Link>
      </LinkContainer>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      {/* <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li> */}
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
    </Fragment>
  );

  return (
    // <div className="navbar bg-primary">
    //   <h1>
    //     <Link to="/">Cattle Care</Link>
    //   </h1>
    //   <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    // </div>
    <Fragment>
      <Navbar
        expand="lg"
        // fixed="top"
        className="bg-primary"
        style={{ margin: "0px" }}
      >
        <LinkContainer to="/">
          <Navbar.Brand id="color">CATTLE CARE</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {console.log(isAuthenticated)}
    </Fragment>
  );
};

export default Navbarr;
