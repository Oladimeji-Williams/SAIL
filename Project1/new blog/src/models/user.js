const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }]
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model("User", userSchema);
module.exports = Users;