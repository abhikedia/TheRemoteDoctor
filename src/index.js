import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
