import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Doctor from "../../assets/images/doctor.png";
import Patient from "../../assets/images/patient.jpg";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import "./index.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); //Patient or Doctor

  const onSubmit = () => {};

  return (
    <div id="login-main">
      <div id="login-form">
        <div className="header">
          <u>The Remote Doctor</u>
        </div>
        <div className="welcome">Welcome Back :)</div>
        <div className="role-header">
          You are a?<sup>*</sup>
        </div>
        <div className="role">
          <Avatar
            className={
              role !== "" ? (role === "patient" ? "blur" : "avatar") : "avatar"
            }
            alt="doctor avatar"
            src={Doctor}
            onClick={() => {
              setRole("doctor");
            }}
          />
          <Avatar
            className={
              role !== "" ? (role === "doctor" ? "blur" : "avatar") : "avatar"
            }
            alt="patient avatar"
            src={Patient}
            onClick={() => {
              setRole("patient");
            }}
          />
        </div>
        <div className="form">
          <div className="email-main">
            <Grid container alignItems="flex-end">
              <Grid item>
                <EmailIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  required
                  label="Email"
                  className="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
            </Grid>
          </div>
          <div className="password-main">
            <Grid container alignItems="flex-end">
              <Grid item>
                <VpnKeyIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  required
                  label="Password"
                  className="email"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
            </Grid>
          </div>
          <Button
            className="login-button"
            size="large"
            onClick={() => onSubmit()}
          >
            Login
          </Button>
        </div>
      </div>
      <div id="login-image">
        <Button className="home-button">Home</Button>
        <img
          className="img"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Doctor_with_Patient_Cartoon.svg"
          alt="Doctor Image"
        />
      </div>
    </div>
  );
}
