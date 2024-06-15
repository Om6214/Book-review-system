const mongoose = require("mongoose");

const uri = "mongodb+srv://omnathganapure9981:qcgvvTgEXgNxTQOG@cluster0.s2iufh4.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async()=>{
    try {
        await mongoose.connect(uri)
        console.log("connection to mongoDb successfull")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB;