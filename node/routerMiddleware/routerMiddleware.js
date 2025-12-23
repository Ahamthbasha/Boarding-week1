import express from "express"
const router = express.Router()

router.use((req,res,next)=>{
    console.log(req.url,req.method)
    next()
})

router.get("/home",(req,res)=>{
    res.send("home page")
})

router.get('/:userId',(req,res)=>{
    res.send(`userId is :${req.params.userId}`)
})

export default router