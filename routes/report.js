const express = require("express");
const app = express.Router();
const connection = require("./connection");

app.get("/getTotalAppointments/", function (req, res) {
  const query = `Select COUNT(*) from Appointments`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.get("/getAppointmentsToday/", function (req, res) {
  const query = `Select COUNT(*) from Appointments 
                    where date = CURDATE()`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.get("/getAppointmentsToday/", function (req, res) {
  const query = `Select COUNT(*) from Appointments 
                    where date = CURDATE()`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

module.exports = app;
