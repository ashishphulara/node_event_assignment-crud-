const mongoose = require("mongoose");

const EventSchema =  new mongoose.Schema({
    title : {type :"string", required : true},
    description : {type :"string", required : true},
    location : {type :"string", required : true}
},
 {timestamps : true})

 module.exports = mongoose.model("Events", EventSchema)