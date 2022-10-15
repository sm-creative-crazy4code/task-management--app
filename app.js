const express = require("express"); 
const apitask=require("./routes/tasks");
const connectDB = require('./db/connection');
const errorhandler= require("./middleware/errofr_handler")
const notfound=require("./middleware/not_found.")
require('dotenv').config()

const app= express();

app.use(express.static('./public'))

// middleware to read json response

app.use(express.json())



// setting routes
app.use("/api/task/v1",apitask)
app.use(notfound)
app.use(errorhandler)

// we must not hardcode the value of port as it must be set according to the enviroment we are deploying

const port=process.env.PORT || 5000

/** here we will first invoke the function connectDB only if we are successful then we will setup the server 
 * 
 */


/**refactoring our code so that our server and database can actually work with sink
 * first we need to connect to the database only then our server will be able to serve our queries
 * we will try to connect to the database and if and only if we are successful then we will spin up the server
 */



 

const start= async()=>{

await connectDB(process.env.MONGO_URI)
try{

app.listen(port,()=>{

    console.log("port started on 5000")
})}catch(error){
    console.log(error)
}


}



start()
