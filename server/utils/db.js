const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI

const connectDB = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connection to mongoDb successfull")
    } catch (error) {
        console.log(error)
        throw error
    }
}
module.exports=connectDB;