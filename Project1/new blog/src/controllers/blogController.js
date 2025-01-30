const Blog = require("../models/blog.js")

exports.fetchAllBlogs = async (request, response) =>{
    try {
        let allBlogs = await Blog.find({});
        console.log(allBlogs);
        response.send("All blogs have been found");    
    } catch (error) {
        console.log(error);
        response.send("Resolve the error(s)");
    }
    
}