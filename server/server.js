//importing express and dotenv

const express = require("express");
const dotenv = require("dotenv");
//import the db config
const {connectDb} = require ("./config/databaseConfig.js");

//import the user signup router 
const userRouter =require("./routes/authRoutes.js")

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//initialize database configuration 
connectDb();

app.use (express.json());

app.use("/api/v1/user", userRouter);

//root entry 
app.get("/",(req,res) =>{
    res.send("hello world");
})

//listening on port 
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});



