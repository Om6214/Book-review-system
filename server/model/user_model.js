const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userid:this._id.toString(),
            Email:this.Email,
            isAdmin:this.isAdmin
        },
        process.env.secretKey,
        {
            expiresIn:"30d"
        }          
    )
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model("User",userSchema);

module.exports=User;