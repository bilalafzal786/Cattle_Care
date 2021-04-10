import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="container" style={{ backgroundColor: "#f5f2f2" }}>
        <div className="row text-primary mt-5 mb-3">
          <div className="col">
            <h1 className="text-center">-Our Mission-</h1>
          </div>
        </div>
        <div className="row text-center mt-2 mb-5">
          <div className="col">
            <p className="mb-3">
              To provide our customer easy management of their forms
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              {" "}
              In modern life, people are faced with many problems, where the
              most common off is the inability of a person to remember a large
              amount of data and lack of space for storing that data in files.
              Cattle farmers are facing this problem of not having a proper
              system that can help them in managing their farm activities. So,
              those who have animals in large numbers usually find it difficult
              to track the production and performance of cattle. This
              surprisingly affected the feed consumption and feed wastage ratio
              in these farms. This can lead to serious consequences like
              decrease in production rate and loss of resources. Other common
              side effects include constantly decreasing weight of animal and
              consistent spread of diseases. Therefore, it is very important to
              manage that data in a systematic way that can help in preventing
              losses. This system is a web based project that will help in
              storing record of each animal, generate alerts if an animal is
              looking unhealthy and calculate profit and loss.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h4> Supervised by</h4>
            <p>Mr. Umer Zia</p>
            <h4>Developed by</h4>
            <p>
              Uzair Saeed <br></br>
              Muhammad Bilal Afzal
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
