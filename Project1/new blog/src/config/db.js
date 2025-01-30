const mongoose = require("mongoose");
const connection_string = "mongodb+srv://OladimejiWilliams:Fmaths.1995@cluster0.vr3ba.mongodb.net/blog_db?retryWrites=true&w=majority&appName=Cluster0";
// async function connectToDB(){

// }
const connectToDB = async () => {
    try {
        await mongoose.connect(connection_string);
        console.log("connection to database successful");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDB;