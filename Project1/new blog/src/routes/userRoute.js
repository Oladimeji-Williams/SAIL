const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
userRouter.get("/", userController.fetchAllUsers);
userRouter.post("/signup", userController.SignUp);
userRouter.post("/signin", userController.SignIn);
userRouter.get("/user-blog-posts/:id", userController.getUserBlogPosts);
module.exports = userRouter;