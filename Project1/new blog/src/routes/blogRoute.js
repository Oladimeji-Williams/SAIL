const express = require("express");
const blogController = require("../controllers/blogController.js");
const blogRouter = express.Router();
blogRouter.get("/", blogController.fetchAllBlogs)
module.exports = blogRouter;