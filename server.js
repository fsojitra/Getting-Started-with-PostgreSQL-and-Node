const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/route");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);
app.set("view engine", "ejs");

app.use(function(err, req, res, next) {
  res.status(err.code || 500).json({
    status: "error",
    message: err
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
