require("dotenv").config();

const express = require("express");
const postRouter = require("./routes/postRoute");
const userRouter = require("./routes/userRoute");
const app = express();
app.use(express.json());
app.use("/api/v1/blogs/post", postRouter);
app.use("/api/v1/blogs/user", userRouter);
module.exports = app;