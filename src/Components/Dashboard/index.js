import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import ApartmentIcon from "@material-ui/icons/Apartment";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import Grid from "@material-ui/core/Grid";
import Modal from '@material-ui/core/Modal';
import AssessmentIcon from "@material-ui/icons/Assessment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import HistoryIcon from "@material-ui/icons/History";
import Background from "../../assets/images/avatar.png";
import "./index.scss";

export default function Dashboard() {
  const [name, setName] = useState("Abhishek Kedia");
  const [blood, setBlood] = useState("B+");
  const [age, setAge] = useState("22");
  const [height, setHeight] = useState("180");
  const [weight, setWeight] = useState("70");
  const [avatar, setAvatar] = useState(Background);

  return (
    <div id="dashboard-main">
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
              <Button className="dashboard-buttons">New Appointment</Button>
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item>
              <AssessmentIcon />
            </Grid>
            <Grid item>
              <Button className="dashboard-buttons">Track Appointment</Button>
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item>
              <TrackChangesIcon />
            </Grid>
            <Grid item>
              <Button className="dashboard-buttons">Reports</Button>
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

      <div id="dashboard-mainportal">
        <div className="dashboard-user">
          <div id="dashboard-user-profile">
            <div className="dashboard-avatar">
              <Avatar src={avatar} />
            </div>
            <div className="dashboard-name">{name}</div>
            <div className="profile-data">
              <div>
                <span className="data-head">Age: </span>
                <span className="data-ans">{age}</span>
              </div>
              <div>
                <span className="data-head">Height: </span>
                <span className="data-ans">{height}</span>
              </div>
              <div>
                <span className="data-head">Weight: </span>
                <span className="data-ans">{weight}</span>
              </div>
              <div>
                <span className="data-head">Blood Group: </span>
                <span className="data-ans">{blood}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-chart">s</div>
      </div>

      <div id="dashboard-sidepane-right">pp</div>
    </div>
  );
}
