const express = require("express")
const router = express.Router()
const Task = require("../models/Task")
router.get("/",async(req,res)=>{
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})
router.post("/",async (req,res)=>{
    const {title,description,dueDate,priority} = req.body;
    const newTask = new Task({title,description,dueDate,priority})
    try {
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
module.exports = router