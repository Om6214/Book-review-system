const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    Img:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true
    },
    Pages:{
        type:Number,
        require:true
    },
    Link:{
        type:String,
        require:false
    },
    Author:{
        type:String,
        required:true
    },
    Genre:{
        type:String,
        required:true
    },
    Avgrating:{
        type:Number,
        required:false,
        default:0
    },
    Description:{
        type:String,
        required:true
    }
})

const Book = mongoose.model("Book",bookSchema)

module.exports=Book;