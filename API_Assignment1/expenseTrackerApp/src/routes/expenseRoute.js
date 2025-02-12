const express = require("express");
const expenseController = require("../controllers/expenseController.js");
const expenseRouter = express.Router();
expenseRouter.get("/", expenseController.fetchAllExpenses);
module.exports = expenseController;