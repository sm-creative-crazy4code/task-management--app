
const mongoose= require('mongoose')

// "mongodb+srv://<username>:<password>@node-and-express-projec.kembqwh.mongodb.net/?retryWrites=true&w=majority"
// here we have to pass actual user name and password with whichwe  want to connect

//when we are  passing only connection string to the mongoose.connect object we may get certain deprecation warnings and hencr we are passing certain additional object to it
// if we have a function inside a function and the function is invoked then and there then we dont need to export the function ...we can just invoke it
//we just need to require the module


/**setup mongoose.connect as a function and invoke it in the app.js */

const connectDB=(url)=>{


return mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})

}

module.exports= connectDB






 