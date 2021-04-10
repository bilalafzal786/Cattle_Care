import React, { Fragment } from "react";
import Fire from "../images/fire.png";
import Gaurantee from "../images/guarantee.png";
import Payment from "../images/padlock.png";

const Info = () => {
  return (
    <Fragment>
      <div className="container bg-light p-3 my-5 ">
        <div className="row d-flex align-items-center">
          <div className="col d-flex align-items-center col-sm my-3">
            <div className="col-3 p-0 m-0 ">
              <img src={Fire} alt="" style={style.img} />
            </div>
            <div className="col">
              <h4 className="text-left">Exclusive Deals</h4>
              <p style={{ fontSize: "12px" }}>
                We offer lifetime exclusive deals and discounts for limited time
                only.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-center col-sm my-3">
            <div className="col-3 p-0 m-0 ">
              <img src={Gaurantee} alt="" style={style.img} />
            </div>
            <div className="col">
              <h4 className="text-left">30 Days Gaurantee</h4>
              <p style={{ fontSize: "12px" }}>
                Money back guarantee for 30 days on our platform.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-center col-sm my-3">
            <div className="col-3  p-0 m-0 ">
              <img src={Payment} alt="" style={style.img} />
            </div>
            <div className="col">
              <h4 className="text-left">Secure Payments</h4>
              <p style={{ fontSize: "12px" }}>
                All payments are securely processed through Easypaisa, JazzCash
                and Mastercard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const style = {
  img: {
    width: "80px",
  },
};

export default Info;
