//it becomes redudant to set up try catch statement for all the functionalities .so we are creating a async function wraopper from scratch to impliment all its funcnality
//we will setup the try catch blocks inside the wrapper
//from this function we will return another function
//as we a wrapping our controller function in our in our middleware we are invoking our middleware function right there
//we will be are passing thr controller functions an argument to our async function and hence we are passing the req res object down to this as well
//here we async function will be returning another async function
//next we will be wrapping  our controller inside my middleware

const asyncwrapper= (fn)=>{
//passing the req , res and next object
return async(req,res,next)=>{
try{

await fn(req,res,next)}catch(error){
//basically we are passing the error to the next function(middleware) which we have not defined yet
next(error)


}
}


}

module.exports=asyncwrapper