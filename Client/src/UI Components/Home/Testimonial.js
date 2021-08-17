import React, { Fragment } from "react";
import quote from "../images/start.png";
import Carousel from "react-multi-carousel";
import former1 from "../images/former1.jpg";
import former2 from "../images/former2.jpg";
import former3 from "../images/former3.jpg";
import former4 from "../images/former4.jpg";

import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Fragment>
      <div className="container my-3 p-3">
        <div className="row">
          <h1 className="pricesHeading">
            <span>Our Clients</span>
          </h1>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        // autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={200}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="my-5"
      >
        <div class="card border-1 m-2 p-0">
          <div class="card-header d-flex justify-content-center">
            <img
              class="img-1 img-fluid"
              src={former1}
              alt="img"
              style={{ width: "200px", borderRadius: "50%" }}
            />
          </div>
          <div class="card-body text-center ">
            <div class="quotes">
              <img
                class="quotes-img card-title m-3"
                src={quote}
                alt="img"
                style={{ width: "30px" }}
              />
              <p class="card-text bold text-center px-md-3 intro">
                It is very useful platform for growing form production and easy
                profit.
              </p>
              <h6 class="font-weight-bold mt-4">Khusal Khattak</h6>
            </div>
          </div>
        </div>
        <div class="card border-1 m-2 p-0">
          <div class="card-header d-flex justify-content-center">
            <img
              class="img-1 img-fluid"
              src={former2}
              alt="img"
              style={{ width: "200px", borderRadius: "50%" }}
            />
          </div>
          <div class="card-body text-center ">
            <div class="quotes">
              <img
                class="quotes-img card-title m-3"
                src={quote}
                alt="quote"
                style={{ width: "30px" }}
              />
              <p class="card-text bold text-center px-md-3 intro">
                Now it is easy for me to manage 150 cattles on jsut single click
              </p>
              <h6 class="font-weight-bold mt-4">Amir Liaqat</h6>
            </div>
          </div>
        </div>
        <div class="card border-1 m-2 p-0">
          <div class="card-header d-flex justify-content-center">
            <img
              class="img-1 img-fluid"
              src={former3}
              alt="img"
              style={{ width: "200px", borderRadius: "50%" }}
            />
          </div>
          <div class="card-body text-center ">
            <div class="quotes">
              <img
                class="quotes-img card-title m-3"
                src={quote}
                alt="img"
                style={{ width: "30px" }}
              />
              <p class="card-text bold text-center px-md-3 intro">
                I used this platform and my production increased by 10%
              </p>
              <h6 class="font-weight-bold mt-4">Usman Tariq</h6>
            </div>
          </div>
        </div>
        <div class="card border-1 m-2 p-0">
          <div class="card-header d-flex justify-content-center">
            <img
              class="img-1 img-fluid"
              alt="img"
              src={former4}
              style={{ width: "200px", borderRadius: "50%" }}
            />
          </div>
          <div class="card-body text-center ">
            <div class="quotes">
              <img
                class="quotes-img card-title m-3"
                src={quote}
                alt="img"
                style={{ width: "30px" }}
              />
              <p class="card-text bold text-center px-md-3 intro">
                Cattle care is best platform for formers. I would definetly
                recommend to formers
              </p>
              <h6 class="font-weight-bold mt-4">Malik Kashan</h6>
            </div>
          </div>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default Testimonial;
