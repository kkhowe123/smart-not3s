const mongoose = require("mongoose");

exports.connectDb = async ()=>{
    try
    {   await mongoose.connect(process.env.URI);
    console.log("CONNECTED TO MONGO");}

    catch (error){
        console.log(error.message);

    }
    

}