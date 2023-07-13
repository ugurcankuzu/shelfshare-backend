const mongoose = require("mongoose");


async function connectDatabase(){
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_URL);
        console.log("Connected to Database");
    }catch(e){
        console.log("Failed to connect to Database: " + e.message);
    }
}

module.exports = connectDatabase