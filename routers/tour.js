const express = require("express")
const router = new express.Router();
const TRanking = require("../models/t")

// post/create request
router.post("/tours", async(req,res) => {
    try{
        const addingTRecords = new TRanking(req.body)
        console.log(req.body);
        const inserttdata = addingTRecords.save();
        res.status(201).send(inserttdata)
    }catch(e){
        res.status(400).send(e);
    }
})

// get request
router.get("/tours", async(req,res) => {
    try{
        const gettours =  await TRanking.find({}).sort({"price":1});
        res.send(gettours);
    }catch(e){
        res.status(400).send(e);
    }
})

// we will handle req of individual
router.get("/tours/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const gettours =  await TRanking.findById({_id:_id});
        res.send(gettours);
    }catch(e){
        res.status(400).send(e);
    }
})

// we will handle patch req of individual
router.get("/tours/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const gettours =  await TRanking.findByIdAndUpdate(_id, req.body,{
            new: true
        }
            // "name":"Hello"
           
        );
        res.send(gettours);
    }catch(e){
        res.status(500).send(e);
    }
})

// we will handle delete req of individual
router.delete("/tours/:id", async(req,res) => {
    try{
        const gettours =  await TRanking.findByIdAndDelete(req.params.id);
        res.send(gettours);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;