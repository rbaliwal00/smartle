const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const StudentRoutes = require("./routes/student");
const CourseRoutes = require("./routes/courses");
const TrainerRoutes = require("./routes/trainers");
const SessionRoutes = require("./routes/session");
const EnrollmentRoutes = require("./routes/enrollment");

var app = express();
app.use(bodyParser.json());

app.use("/students", StudentRoutes);
app.use("/courses", CourseRoutes);
app.use("/trainers", TrainerRoutes);
app.use("/session", SessionRoutes);
app.use("/enrollment", EnrollmentRoutes);

app.listen(3000);