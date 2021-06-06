import React, { useEffect } from "react";
import Header from "../Header/index";
import Background from "../../assets/images/main_background.jpg";

import "./index.scss";

export default function Homepage() {
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    }
  }, []);

  return (
    <div className="homepage">
      <Header />
      <div className="main-body">
        <img src={Background} alt="Health Related img." />
      </div>
      <div className="footer">
        <div className="footer-text">
          Everything has moved online, why not Hospitals and Healthcare?
        </div>
        <div className="footer-buttons">
          <span>On-Boarding Manual</span>
          <span>Hospital Login</span>
        </div>
      </div>
    </div>
  );
}
