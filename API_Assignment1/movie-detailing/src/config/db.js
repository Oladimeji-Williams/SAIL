const mongoose = require("mongoose");
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("successfully connected to database");
    } catch (error) {
        console.error("error connecting to database");
        process.exit(1);
    }
};
module.exports = connectDB;