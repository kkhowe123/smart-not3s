const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");

const User = require ("../models/userModel");

exports.signUp = async(req,res)=>{
    try{
        const {name, email, password} = req.body;
        if (!username || !password) {
            return res
              .status(400)
              .json({ message: "Please Input Username and Password" });
          }

//check if the user already exists 
          const existingUser =  await User.findOne({email});

          if(existingUser)
          {
            return res.status(400).json({message:"User already exist"})
          }

          //hash the password 
          const saltRounds =10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);

          //save the user to the database
          const newUser = new User({
            name,
            email,
            password: hashedPassword,
          });

          await newUser.save();


          return res.status(200).json({ message: "User Created Successfully", newUser });

        }

    catch (error){
        console.log(error.message);
        return res.status(500).json({ message: "Error creating user" });

    }
}