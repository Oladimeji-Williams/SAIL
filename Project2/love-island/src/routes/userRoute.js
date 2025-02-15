const express = require('express');
const {signUp, signIn, getSuggestions} = require('../controllers/userController');
const authMiddleware = require("../middlewares/authorizationMiddleware.js");

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.get("/suggestions", authMiddleware, getSuggestions);

module.exports = router;