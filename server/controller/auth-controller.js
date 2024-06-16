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

module.exports = {registration,login};
