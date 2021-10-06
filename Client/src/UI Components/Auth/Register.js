import React, { Fragment, useState, useContext, useEffect } from "react";
import logo from "../images/logo.png";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    address: "",
    password: "",
    password2: "",
  });
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exist") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);
  const { firstName, lastName, email, tel, address, password, password2 } =
    user;
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      tel === "" ||
      address === "" ||
      password === "" ||
      password2 === ""
    )
      setAlert("Please enter all fields", "danger");
    else if (password !== password2)
      setAlert("Password do not match", "danger");
    else {
      register({
        firstName,
        lastName,
        email,
        tel,
        address,
        password,
      });
      console.log("USer registered");
    }
  };
  return (
    <Fragment>
      <div className="center-container " style={style.centerContainer}>
        <div className="container xborder  mt-5 rounded">
          <div className="row flex-column align-items-center">
            <img src={logo} alt="" style={style.logoImage} />
            <h6 className="text-primary">Cattle Care</h6>
            <h4 className="mt-3 text-dark">Create Cattle Care Account</h4>
            <p className="text-dark">to use our services</p>
          </div>
          <div className="row ">
            <form
              className="text-secondary d-flex flex-wrap justify-content-center"
              onSubmit={onSubmit}
            >
              <div className="col-lg-6 col-sm-12  p-lg-4 pb-sm-0 mb-sm-0 ">
                <div className="row flex-row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="firstName">First name</label>
                      <input
                        type="text"
                        name="firstName"
                        onChange={onChange}
                        value={firstName}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="lastName">Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={onChange}
                        value={lastName}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        value={email}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="tel">Phone number</label>
                      <input
                        type="tel"
                        name="tel"
                        onChange={onChange}
                        value={tel}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-lg-4 pt-sm-0 mt-sm-0 col-sm-12  border-left ">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        onChange={onChange}
                        value={address}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={onChange}
                        value={password}
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
                        onChange={onChange}
                        value={password2}
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
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block m-lg-4"
              />
              <p className="mt-2 click-here  ">
                If you have already account <Link to="/login">login here.</Link>
              </p>
            </form>
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
    width: "15%",
    margin: "20px",
    height: "auto",
  },
};

export default Register;
