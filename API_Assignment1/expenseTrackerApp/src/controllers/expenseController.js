const ExpenseSchema = require("../models/expenses.js");
exports.fetchAllExpenses = async(request, response) => {
    try {
        const allExpenses = await ExpenseSchema.find({});
        if(!allExpenses.length){
            return response.status(404).json({message: "No expense found"});
        } else{
            response.status(200).json(allExpenses);
            response.send("All expenses have been retrieved");
        }
    } catch (error) {
        response.status(500).json("Error fetching expenses", error);
    }
}