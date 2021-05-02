import React, { useEffect, useState } from "react";
import "./index.scss";
import TextField from "@material-ui/core/TextField";
import states from "../utils/states";
import city from "../utils/cities";
import { Button, Select, InputLabel } from "@material-ui/core";

export default function Appointment() {
  const [otpText, setOTP] = useState("Click to get OTP");
  const [stateSelected, setStates] = useState("");
  const [citySelected, setCity] = useState("");
  const [department, selectDepartment] = useState([]);
  const [dept, selectDept] = useState("");
  const [hospital, selectHospital] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [docs, selectDoctor] = useState([]);
  const [doctor, setDoctor] = useState("");

  let departments = [];

  useEffect(() => {
    const url = "http://localhost:4000/getDepartments/";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        for (var i = 0; i < response.length; i++)
          departments.push(
            <option value={response[i].deptid}>{response[i].name}</option>
          );
      })
      .catch((err) => console.log(err));
    selectDepartment(departments);
  }, []);

  useEffect(() => {
    let hosp = [];
    if (citySelected !== "") {
      const url =
        "http://localhost:4000/getHospitals/" +
        stateSelected +
        "/" +
        citySelected;
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          for (var i = 0; i < response.length; i++)
            hosp.push(
              <option value={response[i].hospitalid}>{response[i].name}</option>
            );
        })
        .catch((err) => console.log(err));
      setHospitals(hosp);
    }
  }, [citySelected]);

  useEffect(() => {
    let doc = [];
    let temp = hospital !== "" ? hospital : "none";
    if (citySelected !== "" && dept !== "") {
      var url =
        "http://localhost:4000/getDoctors/" +
        citySelected +
        "/" +
        dept +
        "/" +
        temp;
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          for (var i = 0; i < response.length; i++)
            doc.push(
              <option value={response[i].name} key={states.key}>
                {response[i].name + "Fees:" + response[i].fees}
              </option>
            );
        })
        .catch((err) => console.log(err));
      selectDoctor(doc);
    }
  }, [dept, hospital]);

  const handleOTP = () => {
    setOTP("Enter OTP Received, Click again to resend!");
  };

  const displayStateList = () => {
    let state = [];
    states.map((states, index) => {
      state.push(
        <option value={states.name} key={states.key}>
          {states.name}
        </option>
      );
    });
    return state;
  };

  const displayCities = () => {
    const cities = [];
    city.map((city) => {
      if (city.state === stateSelected)
        cities.push(<option value={city.name}>{city.name}</option>);
    });
    return cities;
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
            required={true}
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
            required={true}
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
            required={true}
            onChange={(event) => {
              setDoctor(event.target.value);
            }}
          >
            {docs}
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
          <InputLabel className="color">2. Select City</InputLabel>
          <Select
            required={true}
            fullWidth={true}
            color="secondary"
            variant="outlined"
            required={true}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          >
            {displayCities()}
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
              selectHospital(event.target.value);
            }}
          >
            {hospitals}
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
