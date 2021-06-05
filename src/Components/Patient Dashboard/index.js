import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import Grid from "@material-ui/core/Grid";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import Modal from "@material-ui/core/Modal";
import Appointment from "../Appointment/index";
import { connect } from "react-redux";
import HistoryIcon from "@material-ui/icons/History";
import Reports from "./reports";
import Records from "../Records/index";
import TrackAppointment from "../TrackAppointment/index";
import "./index.scss";

function Dashboard(props) {
  const [newAppointment, setNewAppointment] = useState(false);
  const [trackAppointment, setTrackAppointment] = useState(false);
  const [reports, showReports] = useState(false);
  const [finalReports, setFinalReports] = useState([]);

  useEffect(() => {
    const rep = [];
    const url = "http://localhost:4000/getPatientReports/" + 4;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        res.map((appointment, index) => {
          rep.push(
            <div className="patient-card">
              <Reports details={appointment} />
            </div>
          );
        });
      });

    setFinalReports(rep);
  }, []);

  function newAppointmentModal() {
    return (
      <Modal
        className="appointment-modal"
        open={newAppointment}
        onClose={() => setNewAppointment(false)}
      >
        <Appointment />
      </Modal>
    );
  }

  function trackAppointmentModal() {
    return (
      <Modal
        className="appointment-modal"
        open={trackAppointment}
        onClose={() => setTrackAppointment(false)}
      >
        <TrackAppointment patientid={props.patientid} />
      </Modal>
    );
  }

  function displayReports() {
    return (
      <Modal
        className="appointment-modal"
        open={reports}
        onClose={() => showReports(false)}
      >
        {/* {finalReports} */}
      </Modal>
    );
  }

  const LeftPane = () => {
    return (
      <div id="dashboard-sidepane-left">
        <div className="dashboard-header">
          <u>The Remote Doctor</u>
        </div>

        <div className="dashboard-options">
          <Grid container alignItems="center">
            <Grid item>
              <AllInclusiveIcon />
            </Grid>
            <Grid item>
              <Button className="dashboard-buttons">Overview</Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <ApartmentIcon />
            </Grid>
            <Grid item>
              <Button
                className="dashboard-buttons"
                onClick={() => {
                  setNewAppointment(true);
                }}
              >
                New Appointment
              </Button>
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item>
              <AssessmentIcon />
            </Grid>
            <Grid item>
              <Button
                className="dashboard-buttons"
                onClick={() => {
                  setTrackAppointment(true);
                }}
              >
                Track Appointment
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <TrackChangesIcon />
            </Grid>
            <Grid item>
              <Button
                className="dashboard-buttons"
                onClick={() => showReports(true)}
              >
                Reports
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <HistoryIcon />
            </Grid>
            <Grid item>
              <Button className="dashboard-buttons">History</Button>
            </Grid>
          </Grid>
        </div>

        <Grid className="dashboard-logout" container alignItems="center">
          <Grid item>
            <ExitToAppIcon />
          </Grid>
          <Grid item>
            <Button className="dashboard-buttons">LogOut</Button>
          </Grid>
        </Grid>
      </div>
    );
  };

  const MainPane = () => {
    return (
      <div id="dashboard-mainportal">
        {newAppointmentModal()}
        {trackAppointmentModal()}
        {displayReports()}

        <div className="dashboard-user">
          <div id="dashboard-user-profile">
            <div className="dashboard-avatar">
              <Avatar src={props.avatar} />
            </div>
            <div className="dashboard-name">{props.name}</div>
            <div className="profile-data">
              <div>
                <span className="data-head">Age: </span>
                <span className="data-ans">{}</span>
              </div>
              <div>
                <span className="data-head">Height: </span>
                <span className="data-ans">{props.height}</span>
                <span className="data-ans">&nbsp;cm</span>
              </div>
              <div>
                <span className="data-head">Weight: </span>
                <span className="data-ans">{props.weight}</span>
                <span className="data-ans">&nbsp;kg</span>
              </div>
              <div>
                <span className="data-head">Blood Group: </span>
                <span className="data-ans">{props.blood}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-records">{<Records />}</div>
      </div>
    );
  };

  return (
    <div id="dashboard-main">
      {LeftPane()}
      {MainPane()}
    </div>
  );
}

const mapStatetoProps = (state) => ({
  patientid: state.patientLogAction.id,
  name: state.patientLogAction.name,
  gender: state.patientLogAction.gender,
  avatar: state.patientLogAction.avatar,
  dob: state.patientLogAction.dob,
  height: state.patientLogAction.height,
  weight: state.patientLogAction.weight,
  blood: state.patientLogAction.blood,
});

export default connect(mapStatetoProps, null)(Dashboard);
