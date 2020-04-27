import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";
import "./assets/fonts/font.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
