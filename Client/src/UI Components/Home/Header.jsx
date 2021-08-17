import React from "react";
import image from "../images/rename.jpg";
import logo from "../images/logo.png";

function Header() {
  return (
    <div id="header" style={style.header}>
      <div
        className="inside d-flex align-items-center justify-content-center"
        style={style.inside}
      >
        <div className="logoBox px-2" style={style.logoBox}>
          <img src={logo} alt="logoImage" style={style.logoImage} />
          <h1 className="font-italic text-center">CATTLE CARE</h1>
          <p className="text-center">Your cattle is our priority</p>
          <button
            className="btn btn-block btn-primary  "
            style={{ zIndex: "15", margin: "5px", borderRadius: "0px" }}
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
const style = {
  header: {
    background: `url(${image})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "none",
    backgroundSize: "cover",
  },
  inside: {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(2, 117, 216,0.3)",
  },
  logoBox: {
    display: "flex",
    position: "relative",
    flexDirection: "Column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    zIndex: "10",
    backgroundColor: "white",
  },
  logoImage: {
    width: "300px",
    height: "200px",
    color: "white",
    backgroundColor: "white",
  },
};
export default Header;
