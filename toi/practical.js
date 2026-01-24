// create an express route which takes two numbers as query parameters and a route middleware to double the values and write the sum of two in a file named sum.txt


import express from 'express'
import fs from 'fs'

const app = express()

function writeFile(result){
    fs.writeFile('sum.txt',result.toString(),(err)=>{
        if(err){
            return false
        }
        return true
    })
    return true
}

const addValues = ((req,res,next)=>{
    let a = req.query.a
    let b = req.query.b
    let doubledA = Number(a) + Number(a)
    let doubledB = Number(b) + Number(b)
    let result = doubledA + doubledB

    let response = writeFile(result)
    console.log(response)
    if(response){
        next()
    }else{
        res.status(500).json({message:"Internal server error"})
    }

})

app.post("/getValue",addValues,(req,res)=>{
    res.status(200).json({message:"file is created and updated"})
})


app.listen(3000,()=>{
    console.log("server is running")
})