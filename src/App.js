import "./App.css";
import react, { Fragment } from "react";
import Navbar from "./UI Components/Navbarr";
import Home from "./UI Components/Home/Home";
import About from "./UI Components/About";
import Subscriptions from "./UI Components/Subscriptions/Subscriptions";
import Login from "./UI Components/Auth/Login";
import Register from "./UI Components/Auth/Register";
import Payment from "./UI Components/Payments/Payment";

import NotLogin from "./UI Components/Subscriptions/NotLogin";
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/subscriptions" component={Subscriptions} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/notlogin" component={NotLogin} />
          <Route exact path="/payment" component={Payment} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
