import { Button, Modal, TextField } from "@material-ui/core";
import LineGraph from "../utils/line_chart";
import React, { useEffect, useState } from "react";
import Card from "./appointmentCard";
import PatientCard from "./patientsCard";
import { fetchAppointments, fetchScheduledAppointments } from "./apiCalls";
import "./index.scss";
import { connect } from "react-redux";
import Report from "../Report/index";
import { loadWeb3 } from "../utils/web3";
import Records from "../Records/index";

function Doctor(props) {
  const [appointments, setAppointments] = useState([]);
  const [scheduled, setScheduled] = useState([]);

  useEffect(async () => {
    loadWeb3();

    let appointments = [];
    let scheduled = [];

    const res = await fetchAppointments(props.id);
    const app = await fetchScheduledAppointments(props.id);

    res.map((appointment, index) => {
      // console.log(appointment);
      appointments.push(
        <div className="appointment-cards">
          <Card details={appointment} />
        </div>
      );
    });

    app.map((appointment, index) => {
      console.log(appointment);
      scheduled.push(
        <div className="patient-card">
          <PatientCard details={appointment} />
        </div>
      );
    });

    setScheduled(scheduled);
    setAppointments(appointments);
  }, [props.updateAppointments]);

  const reportModal = () => {
    return (
      <Modal id="report-modal" open={props.showModal}>
        <Report id={props.patientid} />
      </Modal>
    );
  };

  return (
    <div id="doctor-main">
      {reportModal()}
      <div id="main-area">
        <div id="row-1">
          <div className="hello-doctor">
            Welcome Back,
            <br /> {props.name}
          </div>
          <div className="patients-graph">
            <h3>Analytics</h3>
            <LineGraph />
          </div>
        </div>

        <div id="lower-panel">
          <div id="upcoming-patients">
            <div className="upcoming-patients-text">
              Here are your upcoming patients...
            </div>
            {scheduled}
          </div>
          <hr />
          <div id="open-record">
            <div className="check-record">Check your patient's record</div>
            <div className="search">
              <span>
                <TextField placeholder="Appointment Number" />
              </span>
              <span>
                <Button
                  color="secondary"
                  variant="contained"
                  // className="book-button"
                  // onClick={() => findAppointment()}
                >
                  Find
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div id="schedule-patients">
        <div className="schedule-header">Schedule your patients</div>
        <div className="line">
          <hr />
        </div>
        {appointments}
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  name: state.doctorLogAction.name,
  id: state.doctorLogAction.id,
  displayTimeKeeper: state.toggleTimeKeeper.displayTimeKeeper,
  showModal: state.toggleReportModal.modalopen,
  patientid: state.toggleReportModal.id,
  updateAppointments: state.update.updateAppointments,
});

export default connect(mapStatetoProps, null)(Doctor);
