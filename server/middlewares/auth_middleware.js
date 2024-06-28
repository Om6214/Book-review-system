const jwt = require("jsonwebtoken")
const User = require("../model/user_model")

const authmiddleware = async(req,res,next)=>{
    const token = req.header("Authorization")
    if(!token){
        return res.status(404).json({message:"Token not provided"})
    }
    const jwtToken = token.replace("Bearer","").trim()
    try {
        const isVerified = jwt.verify(jwtToken,process.env.secretKey)
        const userData = await User.find({Email:isVerified.Email}).select({Password:0})
        req.user=userData
        req.token=jwtToken
        req.Id=userData._id
        next();
    } catch (error) {
        console.log(error)
    }
}
module.exports=authmiddleware