const express = require("express");
const app = express.Router();
const connection = require("./connection");

app.get("/getDepartments/", function (req, res) {
  const query = `Select * from Department`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.get("/getHospitals/:state/:city", function (req, res) {
  const query = `Select hospitalid, name from Hospitals where state = '${req.params.state}' and city = '${req.params.city}'`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

module.exports = app;
