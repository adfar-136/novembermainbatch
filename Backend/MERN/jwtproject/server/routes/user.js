const express = require("express")
const userModel = require("../models/userr")
const bcrypt = require("bcrypt");
const router = express.Router()
router.post("/signup",async (req,res)=>{
    const {username,email,password} = req.body;
    const user = await userModel.findOne({email})
    if(user){
        return res.status(400).json({message:"Email already exists"})
    }
    const newUser = new userModel({
        username,
        email,
        password
    })
    await newUser.save()
    return res.json({message:"User created successfully"})
})
module.exports = router