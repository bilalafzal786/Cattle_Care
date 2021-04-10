import React, { Fragment } from "react";
import quote from "../images/start.png";
import Carousel from "react-multi-carousel";
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
              src="https://i.imgur.com/nUNhspp.jpg"
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
                I believe that one defines oneself by reinvention. To not be
                like your parents. To not be like your friends. .
              </p>
              <h6 class="font-weight-bold mt-4">Ujala Fatima</h6>
            </div>
          </div>
        </div>
        <div class="card border-1 m-2 p-0">
          <div class="card-header d-flex justify-content-center">
            <img
              class="img-1 img-fluid"
              src="https://i.imgur.com/At1IG6H.png"
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
                I believe that one defines oneself by reinvention. To not be
                like your parents. To not be like your friends. .
              </p>
              <h6 class="font-weight-bold mt-4">Amir Liaqat</h6>
            </div>
          </div>
        </div>
        <div class="card border-1 m-2 p-0">
          <div class="card-header d-flex justify-content-center">
            <img
              class="img-1 img-fluid"
              src="https://i.imgur.com/o5uMfKo.jpg"
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
                I believe that one defines oneself by reinvention. To not be
                like your parents. To not be like your friends. .
              </p>
              <h6 class="font-weight-bold mt-4">Kashmala Tariq</h6>
            </div>
          </div>
        </div>
        <div class="card border-1 m-2 p-0">
          <div class="card-header d-flex justify-content-center">
            <img
              class="img-1 img-fluid"
              alt="img"
              src="https://i.imgur.com/At1IG6H.png"
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
                I believe that one defines oneself by reinvention. To not be
                like your parents. To not be like your friends. .
              </p>
              <h6 class="font-weight-bold mt-4">Mike Pompio</h6>
            </div>
          </div>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default Testimonial;
