const checkUserLoggedInStatus = (request, response, next) =>{
    console.log(request.headers);
    next();
}

module.exports = checkUserLoggedInStatus;