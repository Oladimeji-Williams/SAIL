const Library = require("../models/library.js");
exports.getAllBooks = async (request, response) =>{
    try {
        const allBooks = await Library.find({isDeleted: false});
        if(!allBooks.length){
            return response.status(404).json({message: "No book found"});
        } else{
            response.status(200).json(allBooks);
            response.send("All books have been found");
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        if(!response.headersSent){
            return response.status(500).json({message: "Error retrieving books."})
        };
        
    }
};

exports.getAllWithDeletedBooks = async (request, response) =>{
    try {
        const allBooks = await Library.find({});
        if(!allBooks.length){
            return response.status(404).json({message: "No book found"});
        } else{
            response.status(200).json(allBooks);
            response.send("All books have been found");
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        if(!response.headersSent){
            return response.status(500).json({message: "Error retrieving books."})
        };
        
    }
};
exports.getOneBook = async (request, response) => {
    try {
        const id = request.params.id;
        const title = request.params.title;
        let book;
        if(id){
            book = await Library.findById(id);
        } else if(title){
            book = await Library.findOne({title});
        }
        if(!book){
            return response.status(404).json({message: "Book not found"});
        }
        response.status(200).json(book);
    } catch (error) {
        console.error("Error in fetching book", error);
        response.status(500).json({message: "Failed to retrieve the book"});
        if(!response.headersSent){
            response.status(500).json({message: "Failed to add book"});
        }
    }
};

// module.exports = fetchAllBooks;

exports.addNewBook = async (request, response) =>{
    try {
        const {isbn, title, author, publishedDate, description, quantityBought, quantityBorrowed} = request.body;
        const existingBook = await Library.findOne({isbn});
        if(existingBook){
            return response.status(400).json({message: "Book with this title already exists"})
        }
        const newBook = new Library({isbn, title, author, publishedDate, description, quantityBought, quantityBorrowed});
        await newBook.save();
        response.status(201).json({message: "Book added successfully", book: newBook});
    } catch (error) {
        console.error("Error adding book:", error);
        response.status(500).json({message: "Failed to add new book."});
        if(!response.headersSent){
            response.status(500).json({message: "Failed to retrieve book."})
        }
    }
};





exports.softDeleteBook = async (request, response) => {
    try{
        const id = request.params.id;
        let book;
        if(id){
            book = await Library.findById(id);
        }
        if(!book){
            return response.status(404).json({message: "Book not found"});
        } else if(book && book.isDeleted == true){
            return response.status(404).json({message: "Book has been deleted before now"});
        }
        book.isDeleted = true;
        await book.save();
        const allBooks = await Library.find({isDeleted: false});
        response.status(200).json({message: "Book deleted successfully",
            deletedBook: book,
            allBooks: allBooks
        });
    } catch(error){
        console.error(error);
        response.status(500).json({message: "Interval server error"});
    }
};

exports.hardDeleteBook = async (request, response) => {
    try{
        const id = request.params.id;
        let book;
        if(id){
            book = await Library.findById(id);
        }
        if(!book){
            return response.status(404).json({message: "Book not found"});
        }
        await Library.deleteOne({_id: book.id});
        const allBooks = await Library.find({isDeleted: false});
        response.status(200).json({message: "Book deleted successfully",
            deletedBook: book,
            allBooks: allBooks
        });
    } catch(error){
        console.error(error);
        response.status(500).json({message: "Interval server error"});
    }
};