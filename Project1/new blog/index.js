require("dotenv").config();
const connectToDB = require("./src/config/connectToDB.js");
const app = require("./src/app.js");
const PORT = process.env.PORT || 8000;

const startServer = async () => {
    await connectToDB();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};
startServer();