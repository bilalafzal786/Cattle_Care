import "./App.css";
import react, { Fragment } from "react";
import Navbar from "./UI Components/Navbarr";
import Home from "./UI Components/Home/Home";
import About from "./UI Components/About";
import Subscriptions from "./UI Components/Subscriptions/Subscriptions";
import Login from "./UI Components/Auth/Login";
import Register from "./UI Components/Auth/Register";
import Payment from "./UI Components/Payments/Payment";
import Profile from "./UI Components/Profile/Profile";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import NotLogin from "./UI Components/Subscriptions/NotLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Alerts from "./UI Components/Alerts";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./UI Components/Farmer/Dashboard/Dashboard";
import Charts from "./UI Components/Barcharts/Charts";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <AlertState>
      <AuthState>
        <Router>
          <Fragment>
            <Navbar />
            <Alerts />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/subscriptions" component={Subscriptions} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/charts" component={Charts} /> */}
              <Route exact path="/register" component={Register} />
              <Route exact path="/notlogin" component={NotLogin} />
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Fragment>
        </Router>
      </AuthState>
    </AlertState>
  );
}

export default App;
