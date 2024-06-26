const Review = require("../model/review");

const addReview=async(req,res)=>{
    try {
        const {BookId,UserId,Rating,Comment} = req.body;
        const data = await Review.create({BookId,UserId,Rating,Comment})
        if(!data){
            return res.status(404).json({message:"unable to submit review"})
        }
        return res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
}
const getReview=async(req,res)=>{
    try {
        const data = await Review.find()
        if(!data){
            return res.status(400).json({message:"unabel to fetch reviews"})
        }
        return res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
}

module.exports={addReview,getReview}