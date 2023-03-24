const router = require("express").Router()
const bodyParser = require("body-parser")
const Event= require("../models/eventsModel")

router.use(bodyParser.urlencoded({ extended: false }))

router.use(bodyParser.json())

// post for events

router.post("/v1/events" , async (req , res)=>{
    try{
        const results = await Event.create({
            title : req.body.title,
            description : req.body.title,
            location : req.body.location
        }) 
        res.status(201).json({
            status : "event created successfully",
            results
        })
        if(!title || !description || !location){
            res.status(404).json({
                message : "Invalid Input format"
            })
        }
    }catch(err){
        res.status(500).json({message : err.message})
    }
    }
   
)

// to get all events

router.get("/v1/getevents" , async (req,res)=>{
    try{
        const results = await Event.find()
        res.status(200).json({
            status : "got all the events",
            results
        })

    }catch(err){
        res.status(500).json
        ({
            message : "event not found"
        })
    }
})

// to get particular event

router.get("v1/getevents/:id" ,async (req,res)=>{
    try{

    
    const results = await Event.find({_id : req.params.id} )
    res.status(200).json({
        status : "got the required  event",
        results
    })
}catch(err){
    res.status(500).json
    ({message : "event not found"})
}
})


// delete specific event

router.delete("v1/deleteevent/:id",async (req ,res)=>{
    try{
        const results = await Event.deleteOne({_id : req.params.id})
        res.status(200).json({
            status : "deleted the event",
            results
        })

    }catch(err){
        res.status(500).json
        ({message : "deleted the specific event"})
    }
})

 
// update specific event
 
router.put("v1/updateevent/:id" , async (req,res)=>{
    try{
        const results = await Event.updateMany({id : req.params.id},{
            title : req.body.title,
            description : req.body.title,
            location : req.body.location
        })
        res.status(201).json({
            message : " events updated sucessfully",
            results
        })
        if(!title || !description || !location){
            res.status(404).json({
                message : "Invalid Input format for updating"
            })
        }
       
    }catch(err){
        res.status(500).json({message : err.message})
    }
})
module.exports = router;