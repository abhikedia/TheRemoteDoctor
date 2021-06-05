import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./index.scss";

export default function TrackAppointment() {
  return (
    <div id="track-appointment">
      <div>
        <span>Track Appointment:</span>
        <span>
          <TextField />
        </span>
      </div>
      <Button color="primary" >Submit</Button>
    </div>
  );
}
