const userModel = require("../models/userModel")
const { resObjGenerator } = require("../utils/utils")

const getUsers = async (req, res) => {
    let users = await userModel.find()
    res.status(200).json(users)
}

const getUser = async (req, res) => {
    let uid = req.params.id
    let users = await userModel.find()
    let user
    for (const val of users) {
        if (val._id == uid) {
            user = val
        }
    }
    if (user) {
        res.status(200).json(user)
    }
    else {
        res.status(404).json("User not found!")
    }
}

const addUser = async (req, res) => {
    try {
        const data = req.body
        const user = new userModel(data)
        await user.save()
        let obj = resObjGenerator("true", "Success", user)
        res.status(201).json(obj)
    } catch (e) {
        let obj = resObjGenerator(false)
        res.status(500).json(obj)
    }

}

//Working
const putUser = async (req, res) => {
    try {
        const uid = req.params._id
        const data = req.data
        let user = await userModel.updateOne(
            { _id: uid },
            {
                $set: {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    isActive: data.isActive,
                    userRole: data.userRole
                },
            },
            { new: true }
        )
        let obj = resObjGenerator(true, "User Updated Successfully", user)
        res.status(200).json(obj)
    }
    catch (e) {
        let obj = resObjGenerator(false)
        res.status(500).json(obj)
    }
}

//Working
const patchUser = async (req, res) => {
    try {
        let uid = req.params.id
        let data = req.body
        const user = await userModel.findByIdAndUpdate({ _id: uid }, { data }, { new: true })
        let obj = resObjGenerator(true, "User Updated Successfully", user)
        res.status(200).json(user)
    }
    catch (e) {
        let obj = resObjGenerator(false)
        res.status(500).json(obj)
    }
}

const deleteUser = async (req, res) => {
    try {
        let uid = req.params.id
        await userModel.deleteOne({_id:uid})
        let obj=resObjGenerator(true,"User deleted Successfully")
        res.status(200).json(obj)
    }
    catch(e){
        let obj = resObjGenerator(false)
        res.status(500).json(obj)
    }

 }

module.exports = {
    getUsers,
    getUser,
    addUser,
    putUser,
    patchUser,
    deleteUser
}