const mongoose = require("mongoose")

const Review_Schema = new mongoose.Schema({
    BookId:{
        type:String,
        require:true
    },
    UserId:{
        type:String,
        require:true
    },
    Rate:{
        type:Number,
        require:true
    },
    Comment:{
        type:String,
        require:true
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
})

const Review = mongoose.model("Review",Review_Schema)
module.exports=Review;