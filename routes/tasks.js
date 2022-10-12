const express =require("express")
const router = express.Router()

/** difference between patch and put method
 * put replaces the existing object permanatly and all property will be removed 
 * though put methods only replaces the data mongoose will only update that data that has been changed 
 * to completely remove it we need to set overwrite property as true
 * 
 * patch is like a partial update only the changed property is updated
 */



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

