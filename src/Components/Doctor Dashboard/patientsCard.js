import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Modal from "@material-ui/core/Modal";
import { showTimeKeeper } from "../../state/TimePicker/action";
import { connect } from "react-redux";
import { OpenModal } from "../../state/ReportModal/action";
import timeConvertor from "../utils/timeFormatter";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "gray",
    height: "3em",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
  },
  name: {
    width: "100%",
    fontSize: "1.5em",
    paddingLeft: "2vw",
  },
  date: {
    fontSize: "1.3em",
    alignSelf: "center",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "1vw",
  },
  icon: {
    backgroundColor: "whitesmoke",
    width: "30%",
    display: "flex",
    justifyContent: "center",
  },
  cover: {
    alignSelf: "center",
    fontSize: "1.3em",
  },
}));

function MediaControlCard(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log(props);
  }, []);

  const setReport = () => {
    props.showReportModal(
      props.details.patient_id,
      props.details.appointment_number
    );
  };

  return (
    <div>
      <Card
        className={classes.root}
        onClick={() => {
          setReport(true);
        }}
      >
        <div className={classes.details}>
          <div className={classes.name}>{props.details.name}</div>
          <div className={classes.date}>{props.details.date.slice(0, 10)}</div>
        </div>
        <div className={classes.icon}>
          <CardMedia className={classes.cover}>
            {timeConvertor(props.details.time)}
          </CardMedia>
        </div>
      </Card>
    </div>
  );
}

// const mapStatetoProps = (state) => ({
//   displayTimeSelector: state.toggleTimeKeeper.displayTimeKeeper,
// });

const mapDispatchToProps = (dispatch) => ({
  showReportModal: (id, appointment) => dispatch(OpenModal(id, appointment)),
});

export default connect(null, mapDispatchToProps)(MediaControlCard);
