// here we will first check if the error we are getting is equal to our custum error or not then we will passing our status code and custum error message

const {CustomAPIError}=require("../errors/custom-errors")
const errorhandler= (err,req,res,next)=>{
    console.log(err)
    if(err instanceof CustomAPIError){

        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:"something went wrong please try again later"})
}



module.exports= errorhandler