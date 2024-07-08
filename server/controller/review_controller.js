const Review = require("../model/review");

const addReview=async(req,res)=>{
    try {
        const {BookId,UserId,Rate,Comment} = req.body;
        const data = await Review.create({BookId,UserId,Rate,Comment})
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
const getReviewById=async(req,res)=>{
    try {
        const id = req.params.id
        const data = await Review.find({BookId:id})
        if(!data){
            return res.status(400).json({message:"There is no review about this book"})
        }
        return res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
}

const updateReview = async(req,res)=>{
    try {
        const id = req.params.id
        const data = req.body
        const update = await Review.updateOne(
            {_id:id},
            {$set:data}
        )
        return res.status(201).json({update})
    } catch (error) {
        return res.status(404).json({message:"Internal server error"})
    }
}

module.exports={addReview,getReview,updateReview,getReviewById}