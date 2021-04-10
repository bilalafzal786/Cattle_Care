import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotLogin = () => {
  return (
    <Fragment>
      <div className="center-container " style={style.centerContainer}>
        <div className="container border border-left">
          <div className="row bg-light">
            <div className="col">
              <p className="text-center p-2" style={{ textAlign: "right" }}>
                Login / create account
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6 col-md-12  ">
              <p>
                Enter your email address to sign in or create a new account:
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    style={{ fontSize: "14px" }}
                  />
                </div>
              </form>
              <p className="text-left">
                By continuing, I agree that I have read and accepted the{" "}
                <Link to="/terms">Terms of Use</Link> and that the Cattle Care
                can keep me informed by sending personalized emails about
                services. See our <Link to="/privacy">Privacy Policy</Link> for
                details or to opt-out at any time.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 pt-3">
              <p>You're signing up for:</p>
              <div className="content border border-sm border-primary p-3">
                <h6>50 cattle package</h6>
                <ul className="list">
                  <li>15 days free trial.</li>
                </ul>
              </div>
              <div className="bill text-right pt-3">
                <p>Total: US$99</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col bg-primary p-2 d-flex justify-content-center">
              <Link to="/" className="btn btn-outline-light rounded-pill">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const style = {
  centerContainer: {
    width: "60%",
    margin: "0 auto",
  },
};

export default NotLogin;
