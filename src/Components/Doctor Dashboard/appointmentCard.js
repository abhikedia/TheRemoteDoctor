import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Modal from "@material-ui/core/Modal";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { showTimeKeeper } from "../../state/TimePicker/action";
import { connect } from "react-redux";
import TimeKeeper from "../TimeKeeper/index";
import { bindActionCreators } from "redux";
import store from "../../store";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "gray",
    height: "9vh",
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
    fontSize: "3em",
  },
}));

const timeSelectorModal = () => {
  return (
    <Modal className="timer-modal" open={true}>
      <TimeKeeper />
    </Modal>
  );
};

function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      {props.displayTimeSelector ? timeSelectorModal() : ""}
      <Card
        className={classes.root}
        onClick={async () => {
          await props.showTimeKeeper();
          console.log(store.getState());
        }}
      >
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
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
  showTimeKeeper: () => dispatch(showTimeKeeper()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(MediaControlCard);
