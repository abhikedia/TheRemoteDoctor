import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

export default function Header() {
  const history = useHistory();
  return (
    <div>
      <div className="appbar">
        <div className="options">
          <span>
            <Button
              className="header-options"
              onClick={() => history.replace("/")}
            >
              Home
            </Button>
          </span>
          <span>
            <Button className="header-options">Support</Button>
          </span>
          <span>
            <Button
              className="header-options"
              onClick={() => history.push("/signup")}
            >
              Signup
            </Button>
          </span>
          <span>
            <Button
              className="header-options"
              onClick={() => history.push("/login")}
            >
              SignIn
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}
