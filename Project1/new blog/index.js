const express = require("express");
const connectToDB = require("./src/config/db.js");
const blogRouter = require("./src/routes/blogRoute.js");
const app = express();
connectToDB();
app.use("/api/v1/blog", blogRouter)
const port = 8000;
app.listen(port, () => {

})
