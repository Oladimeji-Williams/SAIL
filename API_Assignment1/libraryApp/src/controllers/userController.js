const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/users.js");

exports.getAllUsers = async (request, response) =>{
    try {
        const allUsers = await Users.find({});
        if(!allUsers.length){
            return response.status(404).json({message: "No user found"});
        }

        response.status(200).json({message: "All users have been found", allUsers: allUsers})
    } catch (error) {
        console.error("Error fetching books: ", error);
        return response.status(500).json({message: "Error retrieving users"})
    }

}

exports.signUp = async (request, response) => {
    try {
        const {firstName, lastName, phoneNumber, email, password} = request.body;
        const saltRound = 10;
        const passwordSalt = await bcrypt.genSalt(saltRound);
        const hashedPassword = await bcrypt.hash(password, passwordSalt);
        let user = await Users.findOne({email});
        if(user){
            return response.status(400).json({message: "User already exists"});
        }
        let newUser = new Users({
            firstName,
            lastName,
            phoneNumber,
            email,
            password: hashedPassword
        })
        await newUser.save();
        return response.status(201).json({message: "User signed up successfully"});

    } catch (error) {
        console.error("Error on signup: ", error);
        return response.status(500).json({message: "Internal server error"});
    }
}

exports.signIn = async (request, response) => {
    try {
        const {email, password} = request.body;
        const user = await Users.findOne({email});
        if(!user){
            return response.status(401).json({message: "User not found"});
        } else{
            let isEqual = await bcrypt.compare(password, user.password);
            if(!isEqual){
                console.log("password incorrect");
                return response.status(401).json({message: "incorrect password"});
            } else{
                console.log("signed in successfully");
                return response.status(200).json({message: "successfully signed in"});
            }
        }

    } catch (error) {
        console.error("Signin error: ", error);
        return response.status(500).json({message: "Internal server error"});
    }
}

exports.deleteUser = async (request, response) => {

}