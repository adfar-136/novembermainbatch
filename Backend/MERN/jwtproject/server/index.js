const express = require("express");
const mongoose = require("mongoose")
const router = require("./routes/user")
const app = express();
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/novemberAuth").then(()=>{
    console.log("Connected to MongoDB")
})
app.use("/auth",router)
app.listen(4000,()=>{
    console.log("server is running on fport 4000")
})