var express = require("express");
var bookRouter = require("./book");

var app = express();

app.use("/book/", bookRouter);

module.exports = app;