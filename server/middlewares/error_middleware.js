const error_middleware=(err,req,res,next)=>{
    const status = err.status || 422;
    const message = err.message || "Fill the input properly"
    return res.status(status).json({message})
}

module.exports=error_middleware