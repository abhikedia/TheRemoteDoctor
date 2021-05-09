import React, { useState } from "react";
import EmailIcon from "@material-ui/icons/Email";
import { Button, Grid, TextField, Avatar } from "@material-ui/core";
import Doctor from "../../assets/images/doctor.png";
import Patient from "../../assets/images/patient.jpg";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { LogIn } from "../../state/PatientLogAction/action";
import Dashboard from "../Patient Dashboard/index";
import "./index.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); //Patient or Doctor
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(0);

  const onSubmit = () => {
    if (email === "" || password === "" || role === "") {
      setErrorMessage("All the fields are compulsory!");
      return;
    }
    let url =
      role === "patient"
        ? "http://localhost:4000/checkPatientRegistration/"
        : "http://localhost:4000/checkDoctorRegistration/";
    url += email + "/" + password;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (!response.length) {
          setErrorMessage("Incorrect Email/Password or user not registered!");
          return;
        }
        const data = {
          id: response[0].patientid,
          email: response[0].email,
          name: response[0].name,
          gender: response[0].gender,
          phone: response[0].phone,
          avatar: response[0].avatar,
          dob: response[0].dob,
          blood: response[0].blood,
          height: response[0].height,
          weight: response[0].weight,
        };
        LogIn(data);
      })
      .then(setLoggedIn(1))
      .catch((err) => console.log(err));
  };

  const renderLoginPage = () => {
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
                role !== ""
                  ? role === "patient"
                    ? "blur"
                    : "avatar"
                  : "avatar"
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
            {errorMessage !== "" ? (
              <div className="error-message">{errorMessage}</div>
            ) : (
              ""
            )}
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
            alt="Doctor"
          />
        </div>
      </div>
    );
  };

  return loggedIn ? <Dashboard /> : renderLoginPage();
}
