import { Button } from "@material-ui/core";
import ColumnGraph from "../utils/column_chart";
import LineGraph from "../utils/line_chart";
import React from "react";
import "./index.scss";

export default function Doctor() {
  return (
    <div id="doctor-main">
      <div id="home-button">
        <h1 className="header">The Remote Doctor.</h1>
        <Button className="home">Home</Button>
      </div>
      <div id="row-1">
        <div className="hello-doctor">
          Welcome Back,
          <br /> Dr. Abhishek Kedia
        </div>
        <div className="patients-graph">
          <h3>Analytics</h3>
          <LineGraph />
        </div>
      </div>
      <hr className="hr" />
      <div id="row-2">
        <div className="overall-graph">
          <ColumnGraph />
        </div>
        <div className="upcoming-patients"></div>
      </div>
    </div>
  );
}
