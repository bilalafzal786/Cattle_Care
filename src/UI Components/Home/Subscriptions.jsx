import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import listBullet from "../images/ellipse.png";
const Subscriptions = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h1 className="pricesHeading">
            <span>Our Prices</span>
          </h1>
        </div>
        <div className="xrow my-5 d-flex">
          <div
            className="xcard p-0 m-1 "
            id="col-res"
            style={{ border: "1px solid #707070" }}
          >
            <p className="text-center pt-2 m-0">50 Cattle Package</p>
            <p className="mb-0 pl-3">
              US <span className="text-primary m-0">$</span>
            </p>

            <div className="d-flex flex-column justify-content-center pb-0 mb-0">
              <p className="text-center m-0">
                <span
                  className="text-primary pb-0 mb-0"
                  style={{ fontSize: "72px" }}
                >
                  99
                </span>{" "}
                /mon
              </p>
              <Link to="/payment" className="btn btn-primary mx-3 rounded-pill">
                Subscribe
              </Link>
            </div>
            <ul className="mt-2">
              <li className="p-2">
                <img
                  src={listBullet}
                  alt="bullet"
                  style={{
                    display: "inline-block",
                    width: "10px",
                  }}
                />
                <span className="pl-2">15 days free trial</span>
              </li>
              <li className="px-2 pb-2">
                <img
                  src={listBullet}
                  alt="bullet"
                  style={{
                    display: "inline-block",
                    width: "10px",
                  }}
                />
                <span className="pl-2">
                  Within trial period cancel any time.
                </span>
              </li>
            </ul>
          </div>
          <div
            className="card  p-0 m-1 "
            id="col-res"
            style={{ border: "1px solid #707070" }}
          >
            <p className="text-center pt-2 m-0">150 Cattle Package</p>
            <p className="mb-0 pl-3">
              US <span className="text-primary m-0">$</span>
            </p>

            <div className="d-flex flex-column justify-content-center pb-0 mb-0">
              <p className="text-center m-0">
                <span
                  className="text-primary pb-0 mb-0"
                  style={{ fontSize: "72px" }}
                >
                  199
                </span>{" "}
                /mon
              </p>
              <Link to="/payment" className="btn btn-primary mx-3 rounded-pill">
                Subscribe
              </Link>
            </div>
            <ul className="mt-2">
              <li className="p-2">
                <img
                  src={listBullet}
                  alt="bullet"
                  style={{
                    display: "inline-block",
                    width: "10px",
                  }}
                />
                <span className="pl-2">15 days free trial</span>
              </li>
              <li className="px-2 pb-2">
                <img
                  src={listBullet}
                  alt="bullet"
                  style={{
                    display: "inline-block",
                    width: "10px",
                  }}
                />
                <span className="pl-2">
                  Within trial period cancel any time.
                </span>
              </li>
            </ul>
          </div>
          <div
            className="card p-0 m-1 "
            id="col-res"
            style={{ border: "1px solid #707070" }}
          >
            <p className="text-center pt-2 m-0">300 Cattle Package</p>
            <p className="mb-0 pl-3">
              US <span className="text-primary m-0">$</span>
            </p>

            <div className="d-flex flex-column justify-content-center pb-0 mb-0">
              <p className="text-center m-0">
                <span
                  className="text-primary pb-0 mb-0"
                  style={{ fontSize: "72px" }}
                >
                  299
                </span>{" "}
                /mon
              </p>
              <Link to="/payment" className="btn btn-primary mx-3 rounded-pill">
                Subscribe
              </Link>
            </div>
            <ul className="mt-2">
              <li className="p-2">
                <img
                  src={listBullet}
                  alt="bullet"
                  style={{
                    display: "inline-block",
                    width: "10px",
                  }}
                />
                <span className="pl-2">15 days free trial</span>
              </li>
              <li className="px-2 pb-2">
                <img
                  src={listBullet}
                  alt="bullet"
                  style={{
                    display: "inline-block",
                    width: "10px",
                  }}
                />
                <span className="pl-2">
                  Within trial period cancel any time.
                </span>
              </li>
            </ul>
          </div>

          <div
            className="card p-0 m-1 "
            id="col-res"
            style={{ border: "1px solid #707070" }}
          >
            <p className="text-center pt-2 m-0">500 Cattle Package</p>
            <p className="mb-0 pl-3">
              US <span className="text-primary m-0">$</span>
            </p>

            <div className="d-flex flex-column justify-content-center pb-0 mb-0">
              <p className="text-center m-0">
                <span
                  className="text-primary pb-0 mb-0"
                  style={{ fontSize: "72px" }}
                >
                  399
                </span>{" "}
                /mon
              </p>
              <Link to="/payment" className="btn btn-primary mx-3 rounded-pill">
                Subscribe
              </Link>
            </div>
            <ul className="mt-2">
              <li className="p-2">
                <img
                  src={listBullet}
                  alt="bullet"
                  style={{
                    display: "inline-block",
                    width: "10px",
                  }}
                />
                <span className="pl-2">15 days free trial</span>
              </li>
              <li className="px-2 pb-2">
                <img
                  src={listBullet}
                  alt="bullet"
                  style={{
                    display: "inline-block",
                    width: "10px",
                  }}
                />
                <span className="pl-2">
                  Within trial period cancel any time.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Subscriptions;
