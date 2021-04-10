import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div className="center-container " style={style.centerContainer}>
        <div className="container xborder  mt-5 rounded">
          <div className="row">
            <div className="col text-danger p-4">
              <h6 className="text-primary text-center">Cattle Care</h6>
              <h4 className="mt-3 text-dark text-center">Sign in</h4>
              <p className="text-dark text-center">to use our services</p>
              <form className="text-secondary">
                {/* onSubmit={} */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    // onChange={onChange}
                    // value={email}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    // onChange={onChange}
                    // value={password}
                    required
                    minLength="6"
                  />
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
