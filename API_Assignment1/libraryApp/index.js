require("dotenv").config();
const connectDB = require("./src/config/db.js");
const app = require("./src/app.js");
const PORT = process.env.PORT || 8000; // Port set from .env file or default to 5000

const startServer = async(require, response) => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server currently running on port ${PORT}`)
        })
    } catch (error) {
        console.error("There is an error")
    }
};

startServer();
