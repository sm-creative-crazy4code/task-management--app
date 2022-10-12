const asyncwrapper = require("../middleware/asyncwrapper")
const { findOne } = require("../models/tasks")
const Task= require("../models/tasks")


// herr  we will be accessing all the query objects using the find method and since we are not passing any parameters we will be geytting all the objects 
// queries are not promises but they have a .then() to return promisesherr
// here we are using an async wrappper to wrap our functions ..in place of try catch blocks'o
// our controller is still async and hence it will return a promise
const getRequest= asyncwrapper(async (req,res)=>{


         const task = await Task.find({})
         res.status(200).json(task)

         /**here we are assigining the task to the task object  but we can also specify the no. of tasks we want to send as response using  the fallowing syntax  and setting the task.length property to 1
          * res.status(200).json(task,amount:task.length)
          * setting a flag
          *  res.status(200).json({succes:true})
         */
    })



// in the task we will be sending the data we want to store in the database but that data we are already sending through the response object
// hence we can directly grab the data through response through response body



const postRequest= asyncwrapper( async (req,res)=>{

const task= await Task.create(req.body)

    res.status(201).json({task})


}
)

//here we need the request params as well as request body
// here in order to update the data we are using new:true and to check for validators we will be using runValidators:true

const updateRequest= asyncwrapper( async (req,res)=>{


    const {id:taskID}=req.params
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
 if(!task){
        return res.status(404).json({msg:`no task with id ${taskID}`})
     }
    res.status(200).json({task})}
    

)

    


const deleteRequest=  asyncwrapper( async (req,res)=>{
    
        const {id:taskID}= req.params
        const task=  await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskID}`})
         }
         res.status(200).json({task})
    
        
    
})



// grabbing the name with the correct id
// if the id is in correct syntax we get the 404 not found error 
// but if the id syntax is wrong we get the cast error from mongoose 
const getOneRequest= asyncwrapper( async (req,res)=>{
  

  const {id:taskID} = req.params
  const task =  await Task.findOne({_id:taskID})
 if(!task){
    return res.status(404).json({msg:`no task with id ${taskID}`})
 }
res.status(200).json({task})
    
 

    
}
)



module.exports={
    getOneRequest,
    getRequest,
    postRequest,
    updateRequest,
    deleteRequest

}