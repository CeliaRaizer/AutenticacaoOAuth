const express = require("express");
const passport = require("passport");

require("./config/passport");

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use("/auth", require("./routes/authRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use(express.static("public"));

module.exports = app;