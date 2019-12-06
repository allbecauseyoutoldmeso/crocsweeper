import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Timer from "./timer";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Layout} />
      <Route path="/timer" component={Timer} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
