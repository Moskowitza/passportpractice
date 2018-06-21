var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");



// Initialize Express
var PORT = 3001;
var app = express();


// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
// app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/passportpractice");

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
