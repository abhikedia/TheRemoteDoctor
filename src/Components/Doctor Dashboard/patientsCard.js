import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Modal from "@material-ui/core/Modal";
import { showTimeKeeper } from "../../state/TimePicker/action";
import { connect } from "react-redux";
// import Report from "./reportGenerator";
import TimeKeeper from "../TimeKeeper/index";
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
    width: "80%",
    alignSelf: "center",
  },
  name: {
    width: "40%",
    fontSize: "1.7em",
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

export default function MediaControlCard(props) {
  const [report, setReport] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    console.log(props);
  }, []);

  const reportCreatorModal = () => {
    return (
      <Modal
        className="report-modal"
        open={report}
        onClose={() => setReport(false)}
      >
        {/* <Report /> */}
      </Modal>
    );
  };

  return (
    <div>
      {reportCreatorModal()}
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

// const mapDispatchToProps = (dispatch) => ({
//   showTimeKeeper: () => dispatch(showTimeKeeper()),
// });

// export default connect(mapStatetoProps, mapDispatchToProps)(MediaControlCard);
