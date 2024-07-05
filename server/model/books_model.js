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
    Author:{
        type:String,
        required:true
    },
    Genre:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
})

const Book = mongoose.model("Book",bookSchema)

module.exports=Book;