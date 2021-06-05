import React, { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
      
  }, []);

  return (
    <div id="history">
      <div className="history-text">Your Previous Consultations...</div>
    </div>
  );
}
