require("dotenv").config();

const express = require("express");
const bookRouter = require("./routes/bookRoute.js");
const app = express();
app.use(express.json());
app.use("/api/v1/library", bookRouter);
module.exports = app;