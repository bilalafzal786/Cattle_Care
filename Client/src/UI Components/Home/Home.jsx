import React, { useEffect, useContext } from "react";
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Subscriptions from "./Subscriptions";
import Footer from "./Footer";
import Testimonial from "../Home/Testimonial";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
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
