import User from "../model/UserModel.js";

const createUser = async(req,res)=>{
    try {
        const {name,email} = req.body

        if(!name || !email){
            return res.status(400).json({
                message:"name and email both are required"
            })
        }

        const user = await User.create({name,email})

        res.status(201).json({
            message:"User Created"
        })
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

const getAllUser = async(req,res)=>{
    try {
        const allUser = await User.find()
        res.status(200).json({message:"userRetrieved",data:allUser})
    } catch (error) {
        
    }
}

const checkExistingName = async(req,res)=>{
    try {
        const {name} = req.params

        const existingCheck = await User.findOne({name})

        if(existingCheck){
            res.status(409).json({message:"already user is with this name"})
        }

    } catch (error) {
        res.status(500).json({
            message:"internal server error"
        })
    }
}

export default {
    createUser,
    getAllUser,
    checkExistingName
}