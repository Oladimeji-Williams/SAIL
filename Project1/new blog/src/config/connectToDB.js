require("dotenv").config();
const mongoose = require("mongoose");
// async function connectToDB(){

// }
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connection to database successful");
    } catch (error) {
        console.log("Database connection failed", error);
    }
}

module.exports = connectToDB;