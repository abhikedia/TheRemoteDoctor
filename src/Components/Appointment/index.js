import React, { useEffect, useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { Button, Select, InputLabel, TextField } from "@material-ui/core";
import {
  departments,
  hospitals,
  doctors,
  displayStateList,
  displayCities,
} from "./apiCalls";
import "./index.scss";

export default function Appointment() {
  const [stateSelected, setStates] = useState("");
  const [citySelected, setCity] = useState("");
  const [department, selectDepartment] = useState([]);
  const [dept, selectDept] = useState("");
  const [hospital, selectHospital] = useState("");
  const [hosp, setHospitals] = useState([]);
  const [docs, selectDoctor] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [notes, setNotes] = useState("");
  const [count, setCount] = useState("");

  useEffect(() => {
    selectDepartment(departments());
    const url = "http://localhost:4000/getAppointmentNumber/";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.data.length == 0) setCount(0);
        else setCount(response.data);
      });
  }, []);

  useEffect(() => {
    if (citySelected !== "") {
      setHospitals(hospitals(stateSelected, citySelected));
    }
  }, [citySelected]);

  useEffect(() => {
    if (citySelected !== "" && dept !== "") {
      selectDoctor(doctors(hospital, citySelected, dept));
    }
  }, [dept, hospital]);

  const notifyDoctor = () => {
    const data = {
      appointment_number: count + 1,
      // patient_id=
    };
  };

  const LeftCol = () => {
    return (
      <div className="form-col-1 width">
        <div>
          <InputLabel className="color">1. Select State</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            onChange={(event) => {
              setStates(event.target.value);
            }}
          >
            {displayStateList()}
          </Select>
        </div>
        <div>
          <InputLabel className="color">Select Department</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            onChange={(event) => {
              selectDept(event.target.value);
            }}
          >
            {department}
          </Select>
        </div>

        <div>
          <InputLabel className="color">Select Doctor</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            onChange={(event) => {
              setDoctor(event.target.value);
            }}
          >
            {docs}
          </Select>
        </div>
      </div>
    );
  };

  const RightCol = () => {
    return (
      <div className="form-col-2 width">
        <div>
          <InputLabel className="color">2. Select City</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          >
            {displayCities(stateSelected)}
          </Select>
        </div>
        <div>
          <InputLabel className="color">Select Hospital</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            onChange={(event) => {
              selectHospital(event.target.value);
            }}
          >
            {hosp}
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
      <div>
        <TextField
          className="notes"
          label="Notes for doctor (if any)"
          onChange={(event) => setNotes(event.target.value)}
        />
      </div>
      <Button
        color="secondary"
        variant="contained"
        className="book-button"
        onClick={() => notifyDoctor()}
      >
        Proceed to Payment
      </Button>
    </div>
  );
}
