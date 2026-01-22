import mongoose from 'mongoose'

const db = async()=>{
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/userdb`)
        console.log("db is connected")
    } catch (error) {
        console.log("error in connecting db",error)
    }
}

export default db