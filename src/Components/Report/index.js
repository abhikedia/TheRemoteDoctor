import React from "react";
import "./index.scss";
import getDate from "../utils/getDate";
import { connect } from "react-redux";
import { Button, TextareaAutosize, TextField } from "@material-ui/core";

function Report(props) {
  return (
    <div id="report">
      <div id="patient-details">
        <div className="patient">
          <span>Name: {props.patientname}</span>
          <span className="date">Date: {getDate()}</span>
        </div>
        <div>
          <span>Age:</span>
          <span className="details">
            <span>Height: {props.height}</span>
            <span className="weight">Weight: {props.weight}</span>
          </span>
        </div>
        <div>Doctor: {props.doctorname}</div>
      </div>
      <hr className="line" />
      <div id="doctor-comments">
        <TextareaAutosize
          autoFocus={true}
          id="outlined-basic"
          className="text-box"
          multiline
          variant="outlined"
        />
      </div>
      <div id="create-report">
        <Button
          color="secondary"
          variant="contained"
          className="book-button"
          // onClick={() => notifyDoctor()}
        >
          Create Report
        </Button>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  patientname: state.patientLogAction.name,
  dob: state.patientLogAction.dob,
  height: state.patientLogAction.height,
  weight: state.patientLogAction.weight,
  doctorname: state.doctorLogAction.name,
});

export default connect(mapStatetoProps, null)(Report);
