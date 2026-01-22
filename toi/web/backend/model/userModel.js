import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

export const user = mongoose.model('USER',userModel)