// import fs, { read, write } from 'fs'

// fs.readFile('jananaygan.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     if(data){
//         console.log(data)
//     }
// })

// fs.writeFile("rh.txt",'lage raho munna bhai',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("writing completed")
// })

// fs.appendFile('rh.txt','\nmunna bhai mbbs',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("appended")
// })

// fs.rename('rh.txt','rajkumarHirani.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("file renamed")
// })

// fs.unlink('jananaygan.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("deleted")
// })

// let fileExistOrNot = fs.existsSync('pk.txt')
// console.log(fileExistOrNot)

//promise based file reading

// import util from "util"

// const readFile = util.promisify(fs.readFile)

// async function read(fileName){
//     try {
//         const result = await readFile(fileName,'utf-8')
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// read("rajkumarHirani.txt")

//streams

// const readStream = fs.createReadStream('rajkumarHirani.txt')

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readStream.on('end',()=>{
//     console.log('reading finished')
// })

// readStream.on("error",(err)=>{
//     console.log(err)
// })

// //writableStream

// const writeStream = fs.createWriteStream("jananayagan.txt")

// writeStream.write("hello sir")
// writeStream.write("\nI am coming...")

// writeStream.end()

// writeStream.on('close',()=>{
//     console.log("writing finished")
// })

// //duplex Stream

// import { Duplex } from 'stream'

// class MyDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = '' 
//     }

//     _read(size){
//         this.push(this.data)
//         this.push(null)
//     }

//     _write(chunk,encoding,callback){
//         this.data += chunk.toString()
//         callback()
//     }
// }

// const d = new MyDuplex()

// d.write("HELLO JI")
// d.write("\n HOW ARE you")

// d.end("writing ended")

// d.on('close',()=>{
//     console.log("writing is completed")
// })

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// d.on('end',()=>{
//     console.log("writing is ended")
// })

// d.on('error',(err)=>{
//     console.log(err)
// })

// //transform

// import { Transform } from 'stream'

// class MyTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         const upperCase = chunk.toString().toUpperCase()
//         this.push(upperCase)
//         callback()
//     }
// }

// const t = new MyTransform()

// const r = fs.createReadStream("jananayagan.txt")
// const w = fs.createWriteStream("H.vinoth.txt")

//  r.pipe(t).pipe(w).on('finish',()=>{
//     console.log("transformation finished")
//  })

//child process

// import { exec,execFile, spawn,fork } from 'child_process'
// import { stderr } from 'process'

// exec('dir',(error,stdout,stderr)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stdout){
//         console.log(stdout)
//     }

//     if(stderr){
//         console.log(stderr)
//     }
// })

// execFile('node',['nodeRevising.js'],(error,stdout,stderr)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stdout){
//         console.log(stdout)
//     }

//     if(stderr){
//         console.log(stderr)
//     }
// })

// const newProcess = spawn('cmd.exe',['/c','dir'])

// newProcess.stderr.on('error',(err)=>{
//     console.log(err)
// })

// newProcess.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// const parent = fork('nodeRevising.js')

// parent.on('message',(msg)=>{
//     console.log("parent received messages",msg)
// })

// parent.send("Hello child")

//event Emitter

// import EventEmitter from 'events'

// class MyEventEmitter extends EventEmitter{

// }

// const e = new MyEventEmitter()

// const greetFunc = (name)=>{
//     console.log("name is",name)
// }

// e.on('greet',greetFunc)

// e.emit('greet',"ahamathbasha")

//emit once

// e.once('greet',greetFunc)
// e.emit('greet','ahamathbasha')
// e.emit('greet','ahamathbasha')

//remove listener for removing we need a annonymous function

// e.on('greet',greetFunc)
// e.emit('greet','aley')

// e.removeListener('greet',greetFunc)
// e.emit('greet','aley')

//server creation

// import express from 'express'

// const app = express()

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//middleware using block particular method

// import express from 'express'
// const app = express()

// app.use((req,res,next)=>{
//     if(req.method === 'GET'){
//         res.status(403).json({message:"Get method is blocked"})
//     }
//     else{
//         next()
//     }
// })

// app.get("/get",(req,res)=>{
//     res.send("hello world")
// })

// app.post("/goodEvening",(req,res)=>{
//     res.send("resources created")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//middleware to check the role and give the permission to writing the file

// import express from 'express'

// const app = express()

// function writeFile(fileName){
//     fs.writeFile(fileName,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("writing is completed")
//     })
// }

// app.use((req,res,next)=>{
//     if(req.headers.role == "admin"){
//         next()
//     }
//     else{
//         res.status(403).json({message:"only admin has the right to write the file"})
//     }
// })

// app.post("/file",(req,res)=>{
//     const {name} = req.query
//     try {
//         writeFile(name)
//         res.send("file created successfully")
//     } catch (error) {
//         res.send(error)
//     }
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//add two no from query and add in middleware update in sum.txt file

// import express from "express"

// const app = express()

// const calculateSum = ((req,res,next)=>{
//     const {a,b} = req.query

//     if(a == undefined || b == undefined){
//         res.status(400).json({message:"values are invalid"})
//     }

//     let no1 = Number(a)
//     let no2 = Number(b)

//     req.sum = no1 + no2
//     next()
// })
// app.post("/add",calculateSum,(req,res)=>{
//     fs.writeFile('sum.txt',req.sum.toString(),(err)=>{
//         if(err){
//             res.status(500).json({message:"File write failed"})
//         }

//         res.status(201).json({message:"file written happened"})
//     })
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//create a middleware which log all the name of the parameters (query parameters,path parameters,body parameters) of the incoming request

// import express from 'express'
// const app = express()

// app.use(express.json())

// app.use((req,res,next)=>{
//     console.log("queryParams",req.query)
//     console.log("pathParams",req.params)
//     console.log("bodyParams",req.body)

//     next()
// })

// app.get("/home",(req,res)=>{
//     res.send("home page")
// })

// app.get("/user/:id",(req,res)=>{
//     res.send("user is retieved")
// })

// app.get("/numbers",(req,res)=>{
//     res.send("number is showed")
// })


// app.post("/createUser",(req,res)=>{
//     res.send("user created")
// })


// app.listen(3000,()=>{
//     console.log("server is running")
// })

//connect with mongodb

// import mongoose from 'mongoose'

// const db = async ()=>{
//     try{
//         await mongoose.connect("mongodb://127.0.0.1:27017/educate")
//         console.log("mongodb connected successfully")
//     }
//     catch(error){
//         console.log("error",error)
//     }
// }

// db()

//encrypt and decrypt the string

// import crypto from "crypto"

// let str = "hello world"

// let algo = "aes-256-cbc"
// let key = crypto.randomBytes(32)
// let iv = crypto.randomBytes(16)

// let cipher = crypto.createCipheriv(algo,key,iv)
// let encrypted = cipher.update(str,'utf-8','hex')
// encrypted += cipher.final('hex')
// console.log("encrypted",encrypted)

// let decipher = crypto.Decipheriv(algo,key,iv)
// let decrypted = decipher.update(encrypted,'hex','utf-8')
// decrypted += decipher.final('utf-8')
// console.log('decrypted',decrypted)

//open file

// import fs from 'fs'

// fs.open('jananayagan.txt','r',(err,fd)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("file descriptor",fd)
// })

// create a api which encrypt the data to written in a file and write operation only done by the admin. Create an another api which decrypts and read the content

import express from "express"
import fs from "fs"
import crypto from "crypto"

const app = express()

app.use(express.json())

const ALGORITH = "aes-256-cbc"
const SECKRET_KEY = crypto.createHash('sha256').update('hex').digest()

function encrypt(data){
    const iv = crypto.randomBytes(16)

    let cipher = crypto.createCipheriv(ALGORITH,SECKRET_KEY,iv)

    let encrypted = cipher.update(data,'utf-8','hex')
    encrypted += cipher.final('hex')

    return {
        iv:iv.toString('hex'),
        content:encrypted
    }
}

function decrypt(encryptedData){
    let encryptedIv = Buffer.from(encryptedData.iv,'hex')
    let encryptedContent = encryptedData.content

    let decipher= crypto.createDecipheriv(ALGORITH,SECKRET_KEY,encryptedIv)
    let decrypted = decipher.update(encryptedContent,'hex','utf-8')
    decrypted += decipher.final('utf-8')

    return decrypted
}

const adminValidator = ((req,res,next)=>{
    if(req.headers.role == "admin"){
        next()
    }else{
        return res.status(403).json({message:"Admin only has the right to write the file"})
    }
})

app.post("/writeEncrypted",adminValidator,(req,res)=>{
    const {data} = req.body

    if(!data){
        res.status(400).json({message:"No data"})
    }

    let encryptedData = JSON.stringify(encrypt(data))

    fs.writeFile('secure.txt',encryptedData,(err)=>{
        if(err){
            return res.status(500).json({message:"INTERNAL SERVER ERROR"})
        }

        res.status(201).json({message:"the data is encrypted successfully"})
    })
})

app.get("/read",(req,res)=>{
    fs.readFile('secure.txt','utf-8',(err,data)=>{
        if(err){
            return res.status(500).json({message:"internal server error"})
        }

        try {
         let encryptedData = JSON.parse(data)
        
         let decryptedData = decrypt(encryptedData)

         res.status(200).json({
            message:"file decrypted readed successfully",
            data:decryptedData
         })
        } catch (error) {
            return res.status(500).json({message:"internal server error"})
        }
    })
})


app.listen(3000,()=>{
    console.log("server is running")
})