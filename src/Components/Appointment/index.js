import React, { useState } from "react";
import "./index.scss";
import TextField from "@material-ui/core/TextField";
import { Button, Avatar, Select, InputLabel } from "@material-ui/core";

export default function Appointment() {
  const [otpText, setOTP] = useState("Click to get OTP");

  const handleOTP = () => {
    setOTP("Enter OTP Received, Click again to resend!");
  };

  const LeftCol = () => {
    return (
      <div className="form-col-1 width">
        <div>
          <InputLabel className="color">Select State</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            required={true}
            onChange={(event) => {
              // setGender(event.target.value);
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans</option>
          </Select>
        </div>
        <div>
          <InputLabel className="color">Select Department</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            required={true}
            onChange={(event) => {
              // setGender(event.target.value);
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans</option>
          </Select>
        </div>

        <div>
          <InputLabel className="color">Select Doctor</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            required={true}
            onChange={(event) => {
              // setGender(event.target.value);
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans</option>
          </Select>
        </div>

        <div>
          <InputLabel className="color">Select Time</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            required={true}
            onChange={(event) => {
              // setGender(event.target.value);
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans</option>
          </Select>
        </div>
      </div>
    );
  };

  const RightCol = () => {
    return (
      <div className="form-col-2 width">
        <div>
          <InputLabel className="color">Select City</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            required={true}
            onChange={(event) => {
              // setGender(event.target.value);
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans</option>
          </Select>
        </div>
        <div>
          <InputLabel className="color">Select Hospital</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            required={true}
            onChange={(event) => {
              // setGender(event.target.value);
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Trans">Trans</option>
          </Select>
        </div>
        <div>
          <InputLabel className="color">Select Date</InputLabel>
          <form noValidate>
            <TextField
              type="date"
              defaultValue="2017-05-24"
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>

        <TextField
          className="width"
          label={otpText}
          onClick={() => handleOTP()}
        />
      </div>
    );
  };
  return (
    <div id="appointment-main">
      <div className="heading">
        <u>New Appointment</u>
      </div>
      <div id="appointment-form">
        {LeftCol()}
        {RightCol()}
      </div>
      <Button color="secondary" variant="contained" className="book-button">
        Book
      </Button>
    </div>
  );
}
