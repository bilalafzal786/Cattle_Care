import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import listBullet from "../images/ellipse.png";

const Subscriptions = () => {
  const [appState, changeState] = useState({
    objects: [
      { id: 1, title: "50", price: "99" },
      { id: 2, title: "150", price: "199" },
      { id: 3, title: "300", price: "299" },
      { id: 4, title: "500", price: "399" },
    ],
  });

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h1 className="pricesHeading">
            <span>Our Prices</span>
          </h1>
        </div>
        <div className="xrow my-5 d-flex">
          {appState.objects.map((ele, index) => (
            <div
              className="xcard p-0 mx-1 my-3 "
              key={index}
              id="col-res"
              style={{ border: "1px solid #707070" }}
            >
              <p className="text-center pt-2 m-0">
                {appState.objects[index].title} Cattle Package
              </p>
              <p className="mb-0 pl-3">
                US <span className="text-primary m-0">$</span>
              </p>

              <div className="d-flex flex-column justify-content-center pb-0 mb-0">
                <p className="text-center m-0">
                  <span
                    className="text-primary pb-0 mb-0"
                    style={{ fontSize: "72px" }}
                  >
                    {appState.objects[index].price}
                  </span>{" "}
                  /mon
                </p>
                <Link
                  to="/payment"
                  className="btn btn-primary mx-3 rounded-pill"
                >
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
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Subscriptions;
