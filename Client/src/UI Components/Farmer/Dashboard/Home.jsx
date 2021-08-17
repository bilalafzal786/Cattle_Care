import React, { useEffect, useState } from "react";
import graph1 from "../../images/graph1.png";
import cow from "../../images/cow2.png";
import { Link } from "react-router-dom";
const Home = () => {
  const [state, setState] = useState({
    objects: [
      {
        id: 1,
        title: "Total Profit",
        value: "$30,006,20",
        number: "1.3",
        descp: " less than last year",
        img: `${graph1}`,
      },
      {
        id: 2,
        title: "Total Animals",
        value: "450",
        number: "3.7",
        descp: " less than last year",
        img: `${graph1}`,
      },
      {
        id: 3,
        title: "Yield Production",
        value: "3137",
        number: "4.3",
        descp: "than last year",
        img: `${graph1}`,
      },
    ],
  });

  return (
    <>
      <div className="container">
        <div className="row d-flex flex-row justify-content-around">
          {state.objects.map((elements, index) => (
            <div
              className="col-lg-3 col-sm-12 d-flex flex-row p-2 m-1 mt-4"
              style={{ backgroundColor: "#E9EFF2" }}
              key={index}
            >
              <div className="row">
                <div className="col-6 p-2 ">
                  <p>{state.objects[index].title}</p>
                  <h3>{state.objects[index].value}</h3>
                  <p>
                    {" "}
                    <span className="text-danger pt-5 font-weight-bold">
                      {state.objects[index].number}
                    </span>{" "}
                    {state.objects[index].descp}
                  </p>
                </div>

                <div className="col-6 pt-5">
                  <img
                    src={state.objects[index].img}
                    alt="img"
                    className="pt-5"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* <div
            className="col-lg-4 col-sm-12 m-1 mt-4"
            style={{ backgroundColor: "#E9EFF2" }}
          >
            <div className="row">
              <div className="col-6 p-2 ">
                <p>Total Animals</p>
                <h3 className="text-left">450</h3>
                <p>
                  {" "}
                  <span className="text-danger pt-5 font-weight-bold">
                    2.4{" "}
                  </span>{" "}
                  less than last year{" "}
                </p>
              </div>

              <div className="col-6 pt-5">
                <img src={graph1} alt="img" className="pt-5" />
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-12 m-1 mt-4"
            style={{ backgroundColor: "#E9EFF2" }}
          >
            {" "}
            <div className="row">
              <div className="col-6 p-2 ">
                <p>Yield Production</p>
                <h3 className="text-left">31,450</h3>
                <p>
                  {" "}
                  <span className="text-primary pt-5 font-weight-bold">
                    4.3{" "}
                  </span>{" "}
                  than last year{" "}
                </p>
              </div>

              <div className="col-6 pt-5">
                <img src={graph1} alt="img" className="pt-5" />
              </div>
            </div>
          </div> */}
        </div>

        <div className="urow   my-2">
          <div className="mcol">
            <Link to="/" className="btn btn-light ">
              Buffalo
            </Link>
            <Link to="/" className="btn btn-light">
              Got
            </Link>
            <Link to="/" className="btn btn-primary">
              Cow
            </Link>
          </div>
        </div>
        <div className="yrow">
          <div className="col-lg-3 mx-5" style={{ backgroundColor: "#E9EFF2" }}>
            <img src={cow} className="fluid-img" alt="" />
          </div>
          <div className="col-lg-7 p-3" style={{ backgroundColor: "#E9EFF2" }}>
            <div className="styleForm">
              <h5>Total Cows</h5>
              <p>450</p>
            </div>
            <div className="styleForm">
              <h5>Vaccinated</h5>
              <p>350</p>
            </div>
            <div className="styleForm">
              <h5>Active in production</h5>
              <p>288</p>
            </div>
            <div className="styleForm">
              <h5>Total milk production</h5>
              <p>50000 </p>
            </div>

            <div className="styleForm">
              <h5>Profit this year</h5>
              <p>4,500,000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
