const express =require("express")
const router = express.Router()



const{getOneRequest,
    getRequest,
    postRequest,
    updateRequest,
    deleteRequest}=require("../controllers/task")

router.get("/",getRequest)
router.post("/",postRequest)
router.route("/:id").patch(updateRequest).get(getOneRequest)
router.route("/:id").delete(deleteRequest)




module.exports=router

