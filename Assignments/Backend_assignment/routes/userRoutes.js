const express=require("express")
const userCtrl=require("../controllers/usersctrl")

const router=express.Router()

router.get("/",userCtrl.getUsers)
router.get("/:id",userCtrl.getUser)
router.post("/addUser",userCtrl.addUser)
router.patch("/updateUser",userCtrl.patchUser)
router.put("/updateUser",userCtrl.putUser)
router.delete("/deleteUser",userCtrl.deleteUser)

module.exports=router