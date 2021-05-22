import { Button } from "@material-ui/core";
import LineGraph from "../utils/line_chart";
import React, { useEffect, useState } from "react";
import Card from "./appointmentCard";
import { fetchAppointments } from "./apiCalls";
import "./index.scss";
import { connect } from "react-redux";

function Doctor(props) {
  const [appointments, setAppointments] = useState([]);

  useEffect(async () => {
    let appointments = [];
    const res = await fetchAppointments(props.id);

    res.map((appointment, index) => {
      appointments.push(
        <div className="appointment-cards">
          <Card details={appointment} />
        </div>
      );
    });

    setAppointments(appointments);
  }, []);

  const showAppointmentCards = () => {};

  return (
    <div id="doctor-main">
      <div id="main-area">
        <div id="home-button">
          <h1 className="header">The Remote Doctor.</h1>
          <Button className="home">Home</Button>
        </div>
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
        <div id="row-2">
          <div className="upcoming-patients">Your next patients</div>
        </div>
      </div>
      <div id="schedule-patients">
        <div className="schedule-header">Schedule your upcoming patients</div>
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
