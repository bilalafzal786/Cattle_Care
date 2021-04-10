import React, { Fragment } from "react";
import roundImage from "../images/round.jpg";

const About = (props) => {
  return (
    <Fragment>
      <div
        className="container my-5 "
        style={{
          border: "1px solid #707070",
          background:
            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(217,217,231,1) 91%, rgba(188,186,186,1) 100%)",
        }}
      >
        <div className="row flex-column-reverse flex-sm-row p-3">
          <div className="col-md-6  ">
            <h2 className="text-left">Why Cattle Care</h2>
            <p className="text-justify py-4" id="quotes">
              Cattle Care is platform where you can increase your production by
              monitoring data of your animals. It helps you to see economic data
              and it provide profit and loss report. You can see health report
              of your animals. Monitor your form on just a single click.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center ">
            <img
              className="about-img-col "
              src={roundImage}
              alt=""
              style={{ borderRadius: "50%", width: "50%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
