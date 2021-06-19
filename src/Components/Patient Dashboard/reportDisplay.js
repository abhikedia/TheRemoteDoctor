import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { contract, getAccount } from "../utils/web3";
import "./index.scss";

const swarm = require("swarm-js").at("http://swarm-gateways.net");

export default function ReportDisplay(props) {
  const [base, setBase] = useState("");

  const displayReport = async () => {
    const account = await getAccount();
    contract().then(async (res) => {
      const hash = await res.methods
        .getPatientHash(props.data.appointment_number)
        .call({ from: account });

      swarm.download(hash.slice(2)).then((array) => {
        setBase(swarm.toString(array));
      });
    });

    const linkSource = `data:image/png;base64,${base.slice(22)}`;
    const downloadLink = document.createElement("a");
    const fileName = `${props.data.appointment_number}.pdf`;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const revokeAccess = async () => {
    const account = await getAccount();
    contract().then((res) => {
      res.methods
        .revokePermission(props.data.appointment_number)
        .send({ from: account })
        .on("transactionHash", function (hash) {
          console.log(hash);
        });
    });
  };

  return (
    <div>
      <div id="report-display">
        <div>AN: {props.data.appointment_number}</div>
        <div>{props.data.name}</div>
        <div>{props.data.date.slice(0, 10)}</div>
        <div className="report-position">
          <Button color="secondary" onClick={() => displayReport()}>
            Download Report
          </Button>
        </div>
        <div className="report-position">
          <Button color="primary" onClick={() => revokeAccess()}>
            Revoke Doctor's Access
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
}
