/*********************************************************************************
 * WEB322 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Harshkumar Panchal Student ID: 125611210 Date: 2022-09-07
 *
 * Online (Cyclic) URL: _______________________________________________________
 *
 ********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Name: Harshkumar Mukeshbhai Panchal ---- ID: 125611210");
});

app.listen(HTTP_PORT);
