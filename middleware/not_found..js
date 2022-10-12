//creating our coustum not found message if a route is not found
const notfound= (req,res)=>{
res.status(404).send("Route not found")


}

module.exports=notfound