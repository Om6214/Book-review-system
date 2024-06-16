const express = require("express")
const BookRouter = express.Router()

BookRouter.route("/").get((req,res)=>{
    res.send("hello from book route")
})

module.exports=BookRouter