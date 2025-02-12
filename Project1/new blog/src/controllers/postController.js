const Posts = require("../models/post.js");

exports.fetchAllPosts = async (request, response) =>{
    try {
        let allPosts = await Posts.find({});
        response.status(200).send(allPosts);
        console.log("All blogs have been found");
    } catch (error) {
        console.log(error);
        response.status(500).send("Resolve the error(s)");
    }
    
}

exports.updateSinglePostById = async (request, response) => {
    try {
        let allPosts = await Posts.findByIdAndUpdate(request.body.id, request.body, {new: true});
        response.send(allPosts);
    } catch (error) {
        console.log(error);
        response.status(500).send("Internal server error")
    }
}

exports.createPost = async (request, response) => {
    try {
        const { title, body, category, userId } = request.body;
        
        if (!title || !body || !userId) {
            return response.status(400).send("title, body, and userId are all required fields");
        }

        // Create a new post
        const newPost = new Posts({
            title: title,
            body: body,
            category: category,
            author: userId  // Ensure this is set to the userId
        });

        await newPost.save();
        response.status(201).json({ message: "Post created successfully", post: newPost });
    } catch (error) {
        console.error("Error creating post:", error);
        response.status(500).send("Internal server error");
    }
}

exports.getAllPostsWithAuthor = async (request, response) => {
    try {
        let allPostsByUser = await Posts.find({}).populate({
            path: "author",
            select: "firstName lastName email" // Only fetch required fields from User
        });

        if (!allPostsByUser || allPostsByUser.length === 0) {
            return response.status(404).json({ message: "No posts found" });
        }

        return response.status(200).json({
            message: "Posts retrieved successfully",
            allPosts: allPostsByUser
        });
    } catch (error) {
        console.error("Error fetching posts with authors:", error);
        response.status(500).json({ message: "Internal server error" });
    }
};
