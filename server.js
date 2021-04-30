var http = require("http");
var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");
var cors = require("cors");
const PORT = process.env.PORT || 4000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "theremotedoctor",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

app.post("/addPatient", function (req, res) {
  var postData = req.body;
  connection.query(
    "INSERT INTO Patients SET ?",
    postData,
    function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
});

app.get("/getPatientCount/", function (req, res) {
  connection.query(
    "select patientid from Patients order by patientid DESC LIMIT 1",
    function (err, results) {
      err ? res.send(err) : res.json({ data: results });
    }
  );
});

app.get("/checkPatientRegistration/:email/:password", function (req, res) {
  const query = `Select * from Patients where email = '${req.params.email}' and password = '${req.params.password}'`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});
