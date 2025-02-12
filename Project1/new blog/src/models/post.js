const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        category: {
            type: String
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)
const Posts = mongoose.model("Post", postSchema);
module.exports = Posts;

