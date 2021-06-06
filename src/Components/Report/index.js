import React, { useEffect, useState } from "react";
import "./index.scss";
import getDate from "../utils/getDate";
import { connect } from "react-redux";
import { Button, TextareaAutosize, TextField } from "@material-ui/core";
import { closeModal } from "../../state/ReportModal/action";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { updateAppointments } from "../../state/Updates/action";
import Web3 from 'web3';

const swarm = require("swarm-js").at("https://swarm-gateways.net");
var path = require("path");
var file = "/home/abkedia/Downloads/report.pdf";

function Report(props) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    console.log(network)
  },[])

  useEffect(() => {
    const url = "http://localhost:4000/getPatientData/" + 1;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setName(response[0].name);
        setHeight(response[0].height);
        setWeight(response[0].weight);
        setDob(response[0].dob);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateHash = async (hash) => {
    const url =
      // "http://localhost:4000/updateHash/" + props.appointment + "/" + hash;

      fetch(url, {
        method: "PUT", // or 'PUT'
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log("Success");
        })
        .catch((error) => console.error("Error:", error));
  };

  const updateBlockchain = (account) => {};

  const generateReport = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];

    const input = document.getElementById("report");
    await html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        format: [162.5, 162], //[vertical, horizontal]
      });
      pdf.addImage(imgData, "JPEG", 0, 0); //imgData contains the image of the report

      swarm
        .upload(imgData)
        .then((hash) => {
          console.log("Uploaded file. Address:", hash);
          updateHash(hash);
        })
        .then(() => updateBlockchain(account))
        .then(() => props.updateAppointments())
        .then(() => props.hideReportModal());
    });
  };

  return (
    <div id="report">
      <div id="patient-details">
        <div className="patient">
          <span>Patient's Name: {name}</span>
          <span className="date">Date: {getDate()}</span>
        </div>
        <div>
          <span>Age:</span>
          <span className="details">
            <span>Height: {height} cms</span>
            <span className="weight">Weight: {weight} kg</span>
          </span>
        </div>
        <div>Doctor: {props.doctorname}</div>
      </div>
      <hr className="line" />
      <div id="doctor-comments">
        <TextareaAutosize
          autoFocus={true}
          id="outlined-basic"
          className="text-box"
          multiline
          variant="outlined"
        />
      </div>
      <div id="create-report">
        <Button
          color="secondary"
          variant="contained"
          className="book-button"
          onClick={() => generateReport()}
        >
          Create Report
        </Button>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  doctorname: state.doctorLogAction.name,
  appointment: state.toggleReportModal.an,
});

const mapDispatchToProps = (dispatch) => ({
  hideReportModal: () => dispatch(closeModal()),
  updateAppointments: () => dispatch(updateAppointments()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Report);
