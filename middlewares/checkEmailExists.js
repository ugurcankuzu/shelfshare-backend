const Error = require("../error");
const Users = require("../models/User");

async function checkEmailExists(req,res,next){
    const {email} = req.body;
    const result = await Users.findOne({email: email});
    if(result){
        return res.status(400).send(Error.EmailExists)
    }else{
        next();
    }
}

module.exports = checkEmailExists;