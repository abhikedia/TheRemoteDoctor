import React, { useEffect } from "react";
import Header from "../Header/index";

import "./index.scss";

export default function Homepage() {
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    }
  }, []);

  return (
    <div id="homepage">
      <Header />
      <div className="heading">The Remote Doctor</div>
      <div className="text">
        A blockchain enabled Appointment Booking platform.
      </div>
    </div>
  );
}
