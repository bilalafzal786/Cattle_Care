import React, { Fragment } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  // const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (name === "" || email === "" || password === "" || password2 === "")
  //     setAlert("Please enter all fields", "danger");
  //   else if (password !== password2)
  //     setAlert("Password do not match", "danger");
  //   else {
  //     registerUser({
  //       name,
  //       email,
  //       password,
  //     });
  //   }
  // };
  return (
    <Fragment>
      <div className="center-container " style={style.centerContainer}>
        <div className="container xborder  mt-5 rounded">
          <div className="row">
            <div className="col-lg-6 col-sm-12 text-danger p-4">
              <h6 className="text-primary">Cattle Care</h6>
              <h4 className="mt-3 text-dark">Create Cattle Care Account</h4>
              <p className="text-dark">to use our services</p>
              <form className="text-secondary">
                {/* onSubmit={} */}
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name">First name</label>
                      <input
                        type="text"
                        name="name"
                        // onChange={onChange}
                        // value={name}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="name">Last name</label>
                      <input
                        type="text"
                        name="name"
                        // onChange={onChange}
                        // value={name}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    // onChange={onChange}
                    // value={email}
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="tel">Phone number</label>
                  <input
                    type="tel"
                    name="tel"
                    // onChange={onChange}
                    // value={email}
                    required
                  />
                </div> */}
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        // onChange={onChange}
                        // value={password}
                        required
                        minLength="6"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="password2">Confirm</label>
                      <input
                        type="password"
                        name="password2"
                        // onChange={onChange}
                        // value={password2}
                        required
                        minLength="6"
                      />
                    </div>
                  </div>
                </div>
                <p>
                  Use 8 or more characters with a mix of letters, numbers &#38;
                  symbols
                </p>

                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary btn-block"
                />
                <p className="mt-2 click-here">
                  If you have already account{" "}
                  <Link to="/login">login here.</Link>
                </p>
              </form>
            </div>
            <div
              className="col   d-sm-block d-none logoBox "
              style={style.logoBox}
            >
              <img src={logo} alt="" style={style.logoImage} />
              <p className="text-center">
                Your cattle is our priority.<br></br>Be Bold
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const style = {
  centerContainer: {
    width: "60%",
    margin: "0 auto",
  },
  logoBox: {},
  logoImage: {
    width: "100%",
    height: "auto",
  },
};

export default Register;
