import express from 'express'
import cors from 'cors'
import db from './db/db.js'
import userRouter from './routes/userRouter.js'

db()

const app = express()
app.use(express.json())
const corsOption = {
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','PATCH','DELETE'],
    credentials:true,
}

app.use(cors(corsOption))

app.use('/user',userRouter)


app.listen(3000,()=>{
    console.log('server is running')
})