import React, { Fragment, useState } from "react";
import easypasia from "../images/easypaisapng.png";
import jazzcash from "../images/jazzcashpng.png";
import creditcard from "../images/creditcard2.png";
import visa from "../images/pngegg.png";

import { Link } from "react-router-dom";
const PaymentOptons = () => {
  const [count, setCount] = useState(true);
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { id: 1, img: `${easypasia}`, title: "Easypaisa", resId: "1" },
      { id: 2, img: `${jazzcash}`, title: "Jazzcash", resId: "2" },
      { id: 3, img: `${creditcard}`, title: "Credit/debit card", resId: "3" },
    ],
  });
  const onSubmit = (props) => {
    console.log("notging");
  };
  const activeStatus = (index) => {
    changeState({ ...appState, activeObject: appState.objects[index] });
    appState.objects.map((i) => {
      const yu = document.getElementById(i.resId);
      if (i.id === appState.objects[index].id) {
        yu.style.display = "block";
      } else {
        yu.style.display = "none";
      }
    });
    // const yu = document.getElementById(appState.objects[index].resId);
    // console.log(yu);
    // yu.style.display = "block";
    //appState.objects[index].resId.style.display = "block";
    // let idOfMethod;
    // if (appState.objects[index].id === 1) {
    //   idOfMethod = document.getElementById("easypaisa");
    // } else if (appState.objects[index].id === 2) {
    //   idOfMethod = document.getElementById("jazzcash");
    // } else {
    //   idOfMethod = document.getElementById("creditcard");
    // }

    // if (appState.objects[index] === appState.activeObject) {
    //   idOfMethod.style.display = "block";
    // } else {
    //   idOfMethod.style.display = "none";
    // }
  };

  const styleCss = (index) => {
    console.log(appState.objects[index].id);
    if (appState.objects[index].id === 1) {
      return {
        marginTop: "auto",
      };
    } else if (appState.objects[index].id === 2) {
      return {
        marginTop: "60px",
        marginBottom: "0",
      };
    } else {
      return {
        marginTop: "60px",
        marginBottom: "0",
      };
    }
  };
  const setBackgroundColor = (index) => {
    if (appState.objects[index] === appState.activeObject) {
      return "activeChoice";
    } else {
      return "inactiveChoice";
    }
  };
  const style = {
    logoImage: {
      width: "200px",
      margin: "0 auto",
    },
    logoImage2: {
      width: "200px",
      marginTop: "50px",
    },
    formGroup: {
      color: "black",
      display: "block",
    },
  };
  return (
    <Fragment>
      <div className={`container ${appState.activeObject ? "mb-0" : "mb-5"}`}>
        <div className="row my-5">
          <h1 className="pricesHeading">
            <span>Select payment method</span>
          </h1>
        </div>
        <div className="row justify-content-center m-0">
          {appState.objects.map((elements, index) => (
            <div
              className={`col-lg-3 col-md-6 col-sm-10 d-flex justify-content-center  flex-column ml-2 mr-2 mt-2 mb-2 flex-nowrap ${setBackgroundColor(
                index
              )}`}
              key={index}
              // count ?  :
              onClick={() => {
                activeStatus(index);
              }}
            >
              <img src={appState.objects[index].img} alt="img" />
              <p
                className="text-center font-weight-bold "
                style={styleCss(index)}
              >
                {appState.objects[index].title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/*  ************************* EasyPaisa Module **********************/}
      <div
        className="container mb-2"
        id="1"
        style={{ display: "none", backgroundColor: "#d4d0cb" }}
      >
        <div className="row">
          <div className="col p-4">
            <p>
              Please ensure your Easypaisa account is Active and has sufficient
              balance.
            </p>
            <p>To confirm your payment after providing OTP:</p>
            <p>
              - USSD prompt for Telenor Customers Only. <br></br>• Unlock your
              phone and enter 5 digit PIN in the prompt to pay.
            </p>
            <p>OR</p>
            <p>
              Approve Payment in your Easypaisa App (Telenor and Other Networks)
            </p>
            <ul className="list">
              <li>
                Login to Easypaisa App and tap on payment notification to
                approve
              </li>
              <li>
                If you miss the notification, go to My Approvals in side menu to
                confirm
              </li>
            </ul>
            <form onSubmit={onSubmit}>
              <div className="group d-flex justify-content-center flex-column">
                <div className="form-group d-flex flex-column">
                  <label htmlFor="tel">Easypaisa Account Number:</label>
                  <input
                    type="tel"
                    name="tel"
                    required
                    style={{ width: "250px", border: "none" }}
                  />
                </div>
                <Link
                  to="/dashboard"
                  className="btn btn-primary btn-sm"
                  style={{ width: "200px" }}
                >
                  Submit
                </Link>

                {/* <input
                  type="submit"
                  value="Pay Now"
                  className="btn btn-primary "
                  style={{ width: "250px" }}
                /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*  ************************* Jazzcash Module **********************/}
      <div
        className="container mb-2"
        id="2"
        style={{ display: "none", backgroundColor: "#d4d0cb" }}
      >
        <div className="row">
          <div className="col p-4">
            <p>
              ➊ FOR JAZZ/WARID<br></br>↳ Unlock your phone and you will receive
              a MPIN Input Prompt
            </p>
            <p>
              ➋ FOR OTHER NETWORKS <br></br>↳ Log-in to your JazzCash App and
              enter your MPIN
            </p>
            <p>
              Note: Ensure your JazzCash account is Active and has sufficient
              balance.
            </p>

            <form onSubmit={onSubmit}>
              <div className="group d-flex justify-content-center flex-column">
                <div className="form-group d-flex flex-column">
                  <label htmlFor="tel">Jazzcash Account Number:</label>
                  <input
                    type="tel"
                    name="tel"
                    required
                    style={{ width: "250px", border: "none" }}
                  />
                </div>
                <Link
                  to="/dashboard"
                  className="btn btn-primary btn-sm"
                  style={{ width: "200px" }}
                >
                  Submit
                </Link>

                {/* <input
                  type="submit"
                  value="Pay Now"
                  className="btn btn-primary "
                  style={{ width: "250px" }}
                /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*  ************************* Credit Card  Module **********************/}
      <div
        className="container mb-2"
        id="3"
        style={{ display: "none", backgroundColor: "#d4d0cb" }}
      >
        <div className="row">
          <div className="col p-4">
            <form className="text-secondary" onSubmit={onSubmit}>
              {/* onSubmit={} */}

              <div className="form-group w-100">
                <label htmlFor="cardNumber" style={style.formGroup}>
                  Card Number
                </label>
                <input
                  type="number"
                  name="cardNumber"
                  // onChange={onChange}
                  // value={name}
                  style={{ width: "100%" }}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="nameOnCard" style={style.formGroup}>
                  Name on Card
                </label>
                <input
                  type="text"
                  name="nameOnCard"
                  // onChange={onChange}
                  // value={email}

                  required
                />
              </div>

              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  {" "}
                  <div className="form-group">
                    <label htmlFor="expDate" style={style.formGroup}>
                      Exp date
                    </label>
                    <input
                      type="date"
                      name="expDate"
                      // onChange={onChange}
                      // value={password2}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label htmlFor="csvNumber" style={style.formGroup}>
                      CVV Number
                    </label>
                    <input
                      type="number"
                      name="csvNumber"
                      // onChange={onChange}
                      // value={password}
                      required
                    />
                  </div>
                </div>
              </div>
              <Link to="/dashboard" className="btn btn-primary btn-block">
                Submit
              </Link>
              {/* <input
                type="submit"
                value="Pay Now"
                className="btn btn-primary btn-block"
              /> */}
            </form>
          </div>
          <div
            className="col-lg-6 d-none  d-lg-block "
            style={{
              position: "relative",
              bottom: "0",
              top: "auto",
              margin: "auto",
            }}
          >
            <img
              src={visa}
              alt="img"
              className="rounded"
              style={{
                width: "250px",
                display: "block",
                margin: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PaymentOptons;
