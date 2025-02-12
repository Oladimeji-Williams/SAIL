const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("Error connecting to the database:", error);
        process.exit(1);
    }
};

module.exports = connectToDB;
