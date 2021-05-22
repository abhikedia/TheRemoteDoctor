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

app.post("/createAppointment", function (req, res) {
  var postData = req.body;
  connection.query(
    "INSERT INTO Appointments SET ?",
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

app.get("/getAppointmentNumber/", function (req, res) {
  connection.query(
    "select appointment_number from Appointments order by appointment_number DESC LIMIT 1",
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

app.get("/checkDoctorRegistration/:email/:password", function (req, res) {
  const query = `Select name, email, doctorid from Doctors where email = '${req.params.email}' and password = '${req.params.password}'`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

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

app.get("/fetchAppointments/:id", function (req, res) {
  const query = `Select Appointments.appointment_number, Appointments.patient_id, Appointments.date, 
      Appointments.notes, Patients.name from Appointments INNER JOIN Patients ON 
      Appointments.patient_id=Patients.patientid where Appointments.time = '00:00:00' and doctor_id = '${req.params.id}'`;

  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.put("/updatePatientTime/:time/:id", function (req, res) {
  const query = `UPDATE Appointments SET time = '${req.params.time}' where appointment_number = ${req.params.id}`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});
