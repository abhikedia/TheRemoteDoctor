import { Button } from "@material-ui/core";
import LineGraph from "../utils/line_chart";
import React, { useEffect, useState } from "react";
import Card from "./appointmentCard";
import PatientCard from "./patientsCard";
import { fetchAppointments } from "./apiCalls";
import "./index.scss";
import { connect } from "react-redux";

function Doctor(props) {
  const [appointments, setAppointments] = useState([]);

  useEffect(async () => {
    let appointments = [];
    const res = await fetchAppointments(props.id);

    res.map((appointment, index) => {
      console.log(appointment)
      appointments.push(
        <div className="appointment-cards">
          <Card details={appointment} key={appointment.appointment_number}/>
        </div>
      );
    });

    setAppointments(appointments);
  }, []);

  return (
    <div id="doctor-main">
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

        <div id="upcoming-patients">
          <div className="upcoming-patients-text">
            Here are your upcoming patients...
          </div>
          <div className="patient-card">
            <PatientCard />
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
});

export default connect(mapStatetoProps, null)(Doctor);
