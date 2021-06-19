var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
const PORT = process.env.PORT || 4000;

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

const doctor = require("./routes/doctor");
const appointment = require("./routes/appointment");
const patient = require("./routes/patient");
const report = require("./routes/report");
const utils = require("./routes/utilRoutes");

app.use(doctor, appointment, patient, report, utils);