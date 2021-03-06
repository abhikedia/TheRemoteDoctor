import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { updatePatientTime } from "./apiCalls";
import Modal from "@material-ui/core/Modal";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { showTimeKeeper } from "../../state/TimePicker/action";
import { connect } from "react-redux";
import TimeKeeper from "../TimeKeeper/index";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "gray",
    height: "8vh",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
  },
  content: {
    flex: "1 0 auto",
  },
  icon: {
    backgroundColor: "whitesmoke",
    width: "30%",
    display: "flex",
    justifyContent: "center",
  },
  cover: {
    alignSelf: "center",
    fontSize: "2.5em",
  },
}));

function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    console.log(props);
  }, []);

  const callBack = (time, id) => {
    console.log("parent", time, id);
    updatePatientTime(time, id);
  };

  const timeSelectorModal = () => {
    return (
      <Modal className="timer-modal" open={true}>
        <TimeKeeper parentCallBack={callBack} />
      </Modal>
    );
  };

  return (
    <div>
      {props.displayTimeSelector ? timeSelectorModal() : ""}
      <Card
        className={classes.root}
        onClick={() => {
          props.showTimeKeeper(props.details.appointment_number);
        }}
      >
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.details.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.details.date.slice(0, 10)}
            </Typography>
          </CardContent>
        </div>
        <div className={classes.icon}>
          <CardMedia className={classes.cover}>
            <ScheduleIcon fontSize="inherit" />
          </CardMedia>
        </div>
      </Card>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  displayTimeSelector: state.toggleTimeKeeper.displayTimeKeeper,
});

const mapDispatchToProps = (dispatch) => ({
  showTimeKeeper: (modal_id) => dispatch(showTimeKeeper(modal_id)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(MediaControlCard);
