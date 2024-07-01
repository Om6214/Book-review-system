const express = require("express")
const Review = express.Router()
const reviewCont= require("../controller/review_controller")

Review.route("/addReview").post(reviewCont.addReview)

module.exports=Review;