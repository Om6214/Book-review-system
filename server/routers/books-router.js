const express = require("express")
const BookRouter = express.Router()
const bookController = require("../controller/book-controller")

BookRouter.route("/addbook").post(bookController.addbooks)
BookRouter.route("/getbook").get(bookController.getbook)
BookRouter.route("/getbook/:genre").get(bookController.getBookByGen)
BookRouter.route("/deleteBook/:id").delete(bookController.deleteBook)
BookRouter.route("/updateBook/:id").put(bookController.updateBook)

module.exports=BookRouter