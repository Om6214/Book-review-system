const mongoose = require("mongoose")
const replyModel = new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        require:true
    }
})

const Reply = mongoose.model("Reply",replyModel)
module.exports=Reply