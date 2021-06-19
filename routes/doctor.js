const express = require("express");
const app = express.Router();
const connection = require("./connection");

app.get("/getDoctors/:city/:dept/:hospital", function (req, res) {
  let query;
  if (req.params.hospital !== "none")
    query = `Select doctorid, name, fees from Doctors where city = '${req.params.city}' and dept = ${req.params.dept} and hospital = ${req.params.hospital}`;
  else
    query = `Select doctorid, name, fees from Doctors where city = '${req.params.city}' and dept = ${req.params.dept}`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.get("/getTotalDoctors/", function (req, res) {
  const query = `Select COUNT(*) from Doctors`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.get("/checkDoctorRegistration/:email/:password", function (req, res) {
  const query = `Select name, email, doctorid from Doctors where email = '${req.params.email}' and password = '${req.params.password}'`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

module.exports = app;
