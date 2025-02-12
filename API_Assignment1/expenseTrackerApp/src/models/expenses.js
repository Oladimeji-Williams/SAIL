const mongoose = require("mongoose");
const expenseSchema = new mongoose.Schema({
    nameOfOrphanage: {
        type: String,
        required: true
    },
    addressOfOrphanage: {
        type: String,
        required: false
    },
    sizeOfOrphanage: {
        type: Number,
        required: true
    },
    itemsDonated: {
        type: String,
        required: false
    },
    amountSpent: {
        type: Number,
        required: true
    }
})

const ExpenseSchema = mongoose.model("expenseSchema", expenseSchema);
module.exports = ExpenseSchema;