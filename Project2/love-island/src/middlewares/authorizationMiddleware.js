const jwt = require("jsonwebtoken");

const authMiddleware = async (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader){
        return response.status(401).json({message: "please provide the token"});
    } else{
        const token = authHeader.split(" ")[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            request.user = decodedToken;
            next();   
        } catch (error) {
            return response.status(401).json({message: "error "})
        }
    }
}

module.exports = authMiddleware;