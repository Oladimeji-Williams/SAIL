require('dotenv').config();
const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to database...');
    } catch (err) {
        console.log('Error connecting to databse:\n', err);
    }
};

module.exports = connectToDB;