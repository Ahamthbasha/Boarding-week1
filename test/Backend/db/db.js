import mongoose from "mongoose"

const db = async function(){
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/learningPurpose`)

        console.log("db is connected")
    } catch (error) {
        console.log("db connection is failed",error)
        throw error
    }
}

export default db