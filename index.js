const express = require("express");
const app = express();
const Events = require("./routes/Events")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
dotenv.config()


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to mongoose")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json());
app.use("/", Events)
app.get("/",(req , res)=>{
    res.send("hello")
})
app.listen(5000 ,console.log("port listening at 5000"));