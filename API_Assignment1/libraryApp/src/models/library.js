const mongoose = require("mongoose");
const librarySchema = new mongoose.Schema({
    
    isbn: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: false
    },
    description: {
        type: String
    },
    quantityBought: {
        type: Number,
        required: false
    },
    quantityBorrowed:{
        type: Number,
        required: false
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
);

const Library = mongoose.model("library", librarySchema);
module.exports = Library;