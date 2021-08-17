import React, { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

import { Link } from "react-router-dom";
const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { loginUser, error, clearErrors, isAuthenticated } = authContext;
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "")
      setAlert("Please enter all fields", "danger");

    loginUser({
      email,
      password,
    });
  };
  return (
    <Fragment>
      <div className="center-container " style={style.centerContainer}>
        <div className="container xborder  mt-5 rounded">
          <div className="row">
            <div className="col text-danger p-4">
              <h6 className="text-primary text-center">Cattle Care</h6>
              <h4 className="mt-3 text-dark text-center">Sign in</h4>
              <p className="text-dark text-center">to use our services</p>
              <form className="text-secondary" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={email}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={password}
                    required
                    minLength="6"
                  />
                  <Link to="/" style={{ fontSize: "12px" }}>
                    Forgot Password
                  </Link>
                </div>
                <div className="div d-flex justify-content-between">
                  <Link to="/register" className="text-weight-bold">
                    {" "}
                    Create account
                  </Link>

                  <input
                    type="submit"
                    value="Sign in"
                    className="btn btn-primary "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const style = {
  centerContainer: {
    width: "30%",
    margin: "0 auto",
  },
};
export default Login;
