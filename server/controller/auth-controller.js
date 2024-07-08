const User = require("../model/user_model")
const bcrypt = require("bcrypt")

const registration = async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const userExist = await User.findOne({ Email });
    if (userExist) {
      return res.status(404).json({ message: "User already exist" });
    }
    const hashedpassword = await bcrypt.hash(Password,10)
    const user = await User.create({ Name, Email, Password : hashedpassword });
    res.status(200).json({
        message:"Registration successfull",
        token: await user.generateToken(),
        userID: user._id.toString()
    })
  } catch (error) {
    console.log(error);
    return res.status(404).json({message:"Internal server error"})
  }
};
const getuserById=async(req,res)=>{
  try {
    const id = req.params.id
    const data = await User.find({_id:id}).select({Password:0})
    if(!data){
      return res.status(404).json({message:"User Not found"})
    }
    return res.status(200).json({data})
  } catch (error) {
    console.log(error)
  }
}

const login = async(req,res)=>{
  try {
    const {Email,Password}=req.body
    const userExist = await User.findOne({Email})
    if(!userExist){
      return res.status(404).json({message:"User not found"});
    }
    const matchPass = await bcrypt.compare(Password,userExist.Password)
    if(!matchPass){
      return res.status(404).json({message:"Invalid Credendials"})
    }

    res.status(200).json({
      message:"Login successfully",
      token: await userExist.generateToken(),
      userID: userExist._id.toString()
    })

  } catch (error) {
    console.log(error)
  }
}
const getusers = async(req,res)=>{
  try {
      const userdata = req.user
      return res.status(200).json({userdata})
  } catch (error) {
      return res.status(500).json({message:"server error : unable to fetch user"})
  }
}

module.exports = {registration,login,getusers,getuserById};
