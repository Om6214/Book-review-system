const express = require("express")
const Review = express.Router()
const reviewCont= require("../controller/review_controller")

Review.route("/addReview").post(reviewCont.addReview)
Review.route("/getReview").get(reviewCont.getReview)
Review.route("/updRev/:id").put(reviewCont.updateReview)

module.exports=Review;