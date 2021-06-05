import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./index.scss";

export default function TrackAppointment(props) {
  const [an, setAn] = useState("");
  const [data, setData] = useState("");

  const checkAppointment = () => {
    const url =
      "http://localhost:4000/getAppointmentByNumber/" +
      an +
      "/" +
      props.patientid;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.length === 0) setData("No record found");
        else
          setData(
            `Your appointment is scheduled for ${res[0].date.slice(0, 10)} at ${
              res[0].time
            }.`
          );
      });
  };

  return (
    <div id="track-appointment">
      <div className="track">
        <span>
          <TextField
            placeholder="Appointment Number"
            onChange={(event) => setAn(event.target.value)}
          />
        </span>
        <span>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => checkAppointment()}
          >
            Track
          </Button>
        </span>
      </div>
      {data}
    </div>
  );
}
