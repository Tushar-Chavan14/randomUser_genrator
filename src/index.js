import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Brouter } from "react-router-dom";

ReactDOM.render(
  <Brouter>
    <App />
  </Brouter>,
  document.getElementById("root")
);
