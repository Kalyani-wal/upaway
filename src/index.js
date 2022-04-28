import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import $ from 'jquery';

if (navigator.appVersion.indexOf("Windows") != -1) {
  $("body").addClass("onlywindows");
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
