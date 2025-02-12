const Users = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose"); // Add this at the top


exports.fetchAllUsers = async (request, response) =>{
    try {
        let allUsers = await Users.find({});
        response.status(200).send(allUsers);
        console.log("All users have been found");
    } catch (error) {
        console.log(error);
        response.status(500).send("Resolve the error(s)");
    }
    
}

exports.SignUp = async (request, response) => {
    try{
        let {firstName, lastName, phoneNumber, email, password} = request.body;
        let saltRound = 10;
        let passwordSalt = await bcrypt.genSalt(saltRound);
        let hashedPassword = await bcrypt.hash(password, passwordSalt);
        let user = await Users.findOne({
            email
        });
        if(user){
            return response.status(400).send("User already exists");
        } else{ 
            let newUser = new Users({
                firstName,
                lastName,
                phoneNumber,
                email,
                password: hashedPassword
            });
            await newUser.save();
            response.status(201).send("User signed up successfully");
        }
    } catch(error){
        console.error("Signup error:", error);
        response.status(500).send("Internal server error");
    }
}


exports.SignIn = async (request, response) => {
    try {
        let { email, password } = request.body;
        let user = await Users.findOne({ email });

        if (!user) {
            return response.status(401).send("User not found");
        }

        let isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            return response.status(401).send("Password incorrect");
        }

        let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secretKey", { expiresIn: "1h" });

        return response.status(200).json({
            message: "Welcome home",
            userData: user,
            token: token,
        });

    } catch (error) {
        console.error("Signin error:", error);
        response.status(500).send("Internal server error");
    }
};


exports.getUserBlogPosts = async (request, response) => {
    try {
        if (!mongoose.isValidObjectId(request.params.id)) {
            return response.status(400).json({ message: "Invalid ID" });
        }

        let userPosts = await Users.findById(request.params.id).populate("posts");
        if (!userPosts) {
            return response.status(404).json({ message: "User not found" });
        }

        return response.status(200).json(userPosts);
    } catch (error) {
        console.error("Error fetching user blog posts:", error);
        response.status(500).json({ message: "Internal server error" });
    }
};
