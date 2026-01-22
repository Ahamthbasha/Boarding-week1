import { user } from "../model/userModel.js";


const createUser = async function(req,res){
    try {
        const {name,email} = req.body

        const checkAlreadyExist = await user.find({name:name})

        if(checkAlreadyExist.length > 0){
           return res.status(409).json({conflict:true,message:"This name is already exist"})
        }else{
            await user.create({name,email})
            return res.status(201).json({success:true,message:"user saved successfully"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export default {createUser}