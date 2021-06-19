import React, { useState, useEffect } from "react";
import Header from "../Header/index";
import { Button, Avatar, Select, InputLabel } from "@material-ui/core";
import Background from "../../assets/images/avatar.png";
import imageToBase64 from "image-to-base64/browser";
import TextField from "@material-ui/core/TextField";
import "./index.scss";

export default function SignUp() {
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("Gender");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [avatar, setAvatar] = useState(Background);
  const [avatarHash, setAvatarHash] = useState("");
  const [count, setCount] = useState(0);
  const [height, setHeight] = useState("NA");
  const [weight, setWeight] = useState("NA");
  const [blood, setBlood] = useState("NA");

  const swarm = require("swarm-js").at("http://swarm-gateways.net");

  useEffect(() => {
    (async () => {
      var url = "http://localhost:4000/getPatientCount";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          if (response.data.length === 0) setCount(0);
          else setCount(response.data[0].patientid);
        })
        .catch((err) => console.log(err));
    })();
  }, [count]);

  const signUpButton = async () => {
    if (
      name === "" ||
      dob === "" ||
      gender === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorMessage(
        "All the fields are required. Kindly fill before proceeding."
      );
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords Mismatch!");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];

    var url = "http://localhost:4000/addPatient";
    try {
      fetch(url, {
        method: "POST", // or 'PUT'
        mode: "cors",
        body: JSON.stringify({
          patientid: count + 1,
          email: email,
          name: name,
          gender: gender.charAt(0),
          password: password,
          phone: phone,
          avatar: avatarHash,
          dob: dob,
          height: height,
          weight: weight,
          blood: blood,
          account: account,
        }), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.body)
        .then((response) => {
          console.log("Success");
          setCount(count + 1);
        })
        .then(() => window.location.replace("http://localhost:3000"))
        .catch((error) => console.error("Error:", error));
    } catch (err) {
      alert("Try Again!");
    }
  };

  return (
    <div className="signup-main">
      <div className="signup-header">
        <Header />
      </div>
      <div className="signup-col">
        <div className="signup-col-1">
          <Avatar
            alt="Display Picture"
            variant="square"
            src={avatar}
            className="signup-avatar"
          />
          <input
            className="signup-input"
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={async (event) => {
              imageToBase64(URL.createObjectURL(event.target.files[0])) // Path to the image
                .then((response) => {
                  swarm
                    .upload(response)
                    .then((hash) => {
                      console.log("Uploaded Avatar. Address:", hash);
                      setAvatarHash(hash);
                    })
                    .then(() =>
                      setAvatar(URL.createObjectURL(event.target.files[0]))
                    );
                })
                .catch((error) => {
                  console.log(error); // Logs an error if there was one
                });
            }}
          />
        </div>
        <div className="signup-col-2">
          <div className="signup-form">
            <div>
              <TextField
                label="Name"
                color="secondary"
                required={true}
                autoFocus={true}
                fullWidth={true}
                variant="outlined"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="Date of Birth (YYYY-MM-DD)"
                color="secondary"
                required={true}
                fullWidth={true}
                variant="outlined"
                onChange={(event) => {
                  setDOB(event.target.value);
                }}
                // type='Date'
              />
            </div>
            <div>
              <InputLabel required>Gender</InputLabel>
              <Select
                label="Gender"
                fullWidth={true}
                color="secondary"
                variant="outlined"
                placeholder="Gender"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Trans">Trans</option>
              </Select>
            </div>
            <div>
              <TextField
                label="Phone Number"
                color="secondary"
                required={true}
                fullWidth={true}
                variant="outlined"
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="Height (in cms)"
                color="secondary"
                type="Number"
                fullWidth={true}
                variant="outlined"
                onChange={(event) => {
                  setHeight(event.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="Weight (in kgs)"
                color="secondary"
                type="Number"
                fullWidth={true}
                variant="outlined"
                onChange={(event) => {
                  setWeight(event.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="Blood Group"
                color="secondary"
                fullWidth={true}
                variant="outlined"
                onChange={(event) => {
                  setBlood(event.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="Email"
                color="secondary"
                required={true}
                fullWidth={true}
                variant="outlined"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="Password"
                color="secondary"
                type="password"
                required={true}
                fullWidth={true}
                variant="outlined"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                label="Confirm Password"
                color="secondary"
                type="password"
                required={true}
                fullWidth={true}
                variant="outlined"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
            </div>
            <div className="signup-error">{errorMessage}</div>
          </div>
        </div>
        <div>
          <div className="hospitals-text">
            Everything is moving online. Why not hospitals?
          </div>
          <img
            className="signup-col-3"
            src="https://media.giphy.com/media/M9ZMQFPANNm0b9uBhc/giphy.gifhttps://media.giphy.com/media/M9ZMQFPANNm0b9uBhc/giphy.gif"
          />
        </div>
      </div>
      <div className="signup-button">
        <Button
          color="secondary"
          variant="contained"
          size="large"
          onClick={() => signUpButton()}
        >
          Signup
        </Button>
      </div>
    </div>
  );
}
