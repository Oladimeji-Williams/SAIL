const express = require("express");
const expenseRouter = require("./routes/expenseRoute.js");
const app = require("express");
app.use(express.json());
app.use("/api/vi/expenseTracker", expenseRouter);
module.exports = app;