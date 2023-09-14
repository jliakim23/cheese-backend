const express = require('express')
const Cheese = require('../models/Cheese')
const router = express.Router();


//Index
router.get('/', async (req,res) => {
    try{
       res.json(await Cheese.find())
    }catch(error){
       res.status(400).json(error)
    }
   });

//Create
router.post('/', async (req,res) => {
    try{
        res.json(await Cheese.create(req.body))
    }catch(error){
        res.status(400).json(error)
    }
});

//Update
router.put('/:id', async (req,res) => {
    try{
        res.json(await Cheese.findByIdAndUpdate(req.params.id, req.body, { new: true}))
     }catch(error){
        res.status(400).json(error)
     }
});

//Delete
router.delete("/:id", async (req,res) => {
    try{
        res.json(await Cheese.findByIdAndDelete(req.params.id))
     }catch(error){
        res.status(400).json(error)
     }
});

//Show
router.get('/:id', async (req,res) => {
    try{
        res.json(await Cheese.findById(req.params.id))
     }catch(error){
        res.status(400).json(error)
     }
});
module.exports = router;