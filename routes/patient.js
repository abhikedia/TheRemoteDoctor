const express = require("express");
const app = express.Router();
const connection = require("./connection");

app.get("/getPatientReports/:patientid", function (req, res) {
  const query = `Select Appointments.appointment_number, Appointments.date, Appointments.visited, Doctors.name
                    from Appointments
                    INNER JOIN Doctors ON
                    Appointments.doctor_id = Doctors.doctorid 
                    where Appointments.visited is NOT NULL
                    and Appointments.patient_id = ${req.params.patientid}`;

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

app.get("/checkPatientRegistration/:email/:password", function (req, res) {
  const query = `Select * from Patients where email = '${req.params.email}' and password = '${req.params.password}'`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.get("/getPatientData/:id", function (req, res) {
  const query = `Select name, dob, height, weight, account from Patients where patientid = '${req.params.id}'`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
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

module.exports = app;
