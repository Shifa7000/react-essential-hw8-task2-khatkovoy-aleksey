import React from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "./components/routes";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>{renderRoutes(routes)}</Router>
  </React.StrictMode>,
  document.getElementById("root")
);
