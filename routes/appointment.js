const express = require("express");
const app = express.Router();
const connection = require("./connection");

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

app.get("/getAppointmentNumber/", function (req, res) {
  connection.query(
    "select appointment_number from Appointments order by appointment_number DESC LIMIT 1",
    function (err, results) {
      err ? res.send(err) : res.json({ data: results });
    }
  );
});

app.get("/getAppointmentByNumber/:an/:patientid", function (req, res) {
  const query = `Select date,time from Appointments where appointment_number = '${req.params.an}' and patient_id = '${req.params.patientid}'`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.get("/fetchAppointments/:id", function (req, res) {
  const query = `Select Appointments.appointment_number, Appointments.patient_id, Appointments.date, 
                    Appointments.notes, Patients.name 
                    from Appointments 
                    INNER JOIN Patients ON 
                    Appointments.patient_id=Patients.patientid 
                    where Appointments.time = '00:00:00' and 
                    Appointments.date >= CURDATE() and 
                    doctor_id = '${req.params.id}'`;

  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.get("/fetchScheduledAppointments/:id", function (req, res) {
  const query = `Select Appointments.appointment_number, Appointments.patient_id, Appointments.date, Patients.name, Appointments.time
                    from Appointments 
                    INNER JOIN Patients ON
                    Appointments.patient_id = Patients.patientid 
                    where Appointments.date >= CURDATE() 
                    and time != '00:00:00'
                    and visited is NULL
                    and doctor_id = '${req.params.id}'`;

  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

app.put("/updateHash/:appointment/:hash", function (req, res) {
  const query = `UPDATE Appointments SET visited = '${req.params.hash}' where appointment_number = ${req.params.appointment}`;
  connection.query(query, function (err, results) {
    err ? res.send(err) : res.json(results);
  });
});

module.exports = app;
