import React, { useEffect, useState } from "react";
import Reports from "./reportDisplay";

export default function History(props) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/getPatientReports/" + 5;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const data = [];
        response.map((reports) => {
          data.push(<Reports data={reports} />);
        });
        setHistory(data);
      });
  }, []);

  return (
    <div id="history">
      <div className="history-text">Your Previous Consultations...</div>
      <div className="history-data">{history}</div>
    </div>
  );
}
