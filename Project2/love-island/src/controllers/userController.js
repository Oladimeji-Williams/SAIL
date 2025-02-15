const User = require('../models/userModel.js');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, username, password } = req.body;
        const existingUser = await User.findOne({$or: [{username}, {email}]});
        
    
        if (existingUser) {
            return res.status(400).json({
                message: 'User already exist.'
            });
        } else {

            const salt = await bcrypt.genSalt(10);
            const hasshedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({
                firstName,
                lastName,
                email,
                username,
                password: hasshedPassword
            });
            await newUser.save();
            return res.status(201).json({
                message: 'User successfully created'
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            error: err
        });
    }
    
};


const signIn = async (request, response) => {
    try {
        const {email, username, password} = request.body;
        const user = await User.findOne({$or: [{username}, {email}]});
        if (user){
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch){
                return response.status(400).json({message: "signin credentials wrong"});
            } else{
                const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: "30m"});
                return response.status(200).json({message: "Welcome", token: token});
            }
        } else{
            return response.status(400).json({message: "user does not exist"});
        }
    } catch (error) {
        return response.status(404).json({message: "sign in error"});
    }
}


const getSuggestions = async (request, response) => {
    try {
        console.log(request.user);
        return response.status(200).json({message: "this is all our users"});
    } catch (error) {
        return response.status(400).json({message: "error fetching suggestions"});
    }
}




module.exports = {signUp, signIn, getSuggestions};