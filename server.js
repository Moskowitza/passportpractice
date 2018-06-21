const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;


// Initialize Express
var PORT = 3001;
var app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//set up passport
app.use(passport.initialize());
app.use(passport.session());

const User= require('./models/user');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/passportpractice");

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
