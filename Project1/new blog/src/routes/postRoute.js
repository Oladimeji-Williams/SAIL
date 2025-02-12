const express = require("express");
const checkUserLoggedInStatus = require("../middlewares/authValidation.js")
const postController = require("../controllers/postController.js");
const postRouter = express.Router();
postRouter.get("/", postController.fetchAllPosts);
postRouter.get("/post-by-user", postController.getAllPostsWithAuthor);
postRouter.post("/create", checkUserLoggedInStatus, postController.createPost);
postRouter.patch("/update-single-post", postController.updateSinglePostById);
module.exports = postRouter;