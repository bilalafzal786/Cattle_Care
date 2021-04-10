import React from "react";
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Subscriptions from "./Subscriptions";
import Footer from "./Footer";
import Testimonial from "../Home/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Info />
        <About />
        <Subscriptions />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
