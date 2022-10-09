const mongoose = require("mongoose")

// using schema we are going to define the structure we are going to store our data in database
// once we are having the structure for the data , we will set up the model
    // model is a representation of a collection
    // we will create a task collection and push all the task we want into that collection
    //model is a wrapper for the schema
// defining the schema

const TaskSchema= new mongoose.Schema({
name:{
type: String,
required: [true,'must providej a name'],
trim:true,//removes extra spaces if present
maxlength:[20,"name cannot be more than 20 charecter"]

}, 
completed:{
type:Boolean,
default:false}
    
})

// we will export the model and the and it takes 2 parameters name and schema

module.exports= mongoose.model("Task",TaskSchema)