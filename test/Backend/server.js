import express from "express"
import cors from "cors"
import dataconnect from "./db/db.js"
import userRouter from "./router/userRouter.js"


dataconnect()


const app = express()
app.use(express.json())
app.use(cors())


app.use('/api/user',userRouter)

app.listen(3000,()=>{
    console.log("server is running")
})