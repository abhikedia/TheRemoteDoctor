import React, { useEffect, useState } from "react";
import { Avatar, Button, useScrollTrigger } from "@material-ui/core";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import Grid from "@material-ui/core/Grid";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Modal from "@material-ui/core/Modal";
import Appointment from "../Appointment/index";
import { connect } from "react-redux";
import HistoryIcon from "@material-ui/icons/History";
import Records from "../Records/index";
import TrackAppointment from "../TrackAppointment/index";
import History from "./history";
import { loadWeb3 } from "../utils/web3";
import getAge from "../utils/ageCalculator";
import "./index.scss";

function Dashboard(props) {
  const [newAppointment, setNewAppointment] = useState(false);
  const [trackAppointment, setTrackAppointment] = useState(false);
  const [history, showHistory] = useState(false);
  const [age, setAge] = useState("");
  const [avatarImage, setAvatar] = useState("");

  const swarm = require("swarm-js").at("http://swarm-gateways.net");

  useEffect(() => {
    loadWeb3();
    setAge(getAge(props.dob));
    // try {
    //   swarm
    //     .download(props.avatar)
    //     .then((array) => {
    //       setAvatar(base64toBlob(swarm.toString(array)));
    //     })
    //     .catch((err) => {
    //       throw err;
    //     });
    // } catch (err) {
    //   console.log("Couldn't download data from swarm");
    // }
  }, []);

  const handleCallBack = () => {
    setNewAppointment(false);
  };

  function base64toBlob(base64Data, contentType) {
    contentType = contentType || "";
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);

    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);

      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }

  function newAppointmentModal() {
    return (
      <Modal
        className="appointment-modal"
        open={newAppointment}
        onClose={() => setNewAppointment(false)}
      >
        <Appointment parentCallBack={handleCallBack} />
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

  function displayHistory() {
    return (
      <Modal
        className="appointment-modal"
        open={history}
        onClose={() => showHistory(false)}
      >
        <History patientid={props.patientid} />
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
              <HistoryIcon />
            </Grid>
            <Grid item>
              <Button
                className="dashboard-buttons"
                onClick={() => {
                  showHistory(true);
                }}
              >
                History
              </Button>
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
        {displayHistory()}

        <div className="dashboard-user">
          <div id="dashboard-user-profile">
            <div className="dashboard-avatar">
              <Avatar src={avatarImage} />
            </div>
            <div className="dashboard-name">{props.name}</div>
            <div className="profile-data">
              <div>
                <span className="data-head">Age: </span>
                <span className="data-ans">{age}</span>
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
