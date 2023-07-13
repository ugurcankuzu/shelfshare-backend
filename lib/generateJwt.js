const jwt = require("jsonwebtoken")
function generateJwt(data){
    return jwt.sign(data,process.env.TOKEN_SECRET_KEY,{algorithm: "HS256",expiresIn: "86400s"})
}

module.exports = generateJwt