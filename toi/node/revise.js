// import fs from 'fs'

// fs.writeFile('abcd.txt',new Date().toString(),(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('writed')
// })

// fs.readFile('abcd.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     if(data){
//         console.log(data)
//     }
// })

// fs.appendFile('abcd.txt','ahamathbasha',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('appended')
// })

// fs.rename('abcd.txt','revist.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("renamed")
// })

// fs.unlink('revist,txt',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("deleted")
// })

// const check = fs.existsSync('revise.txt')
// console.log(check)

//promise based file reading

// import fs from 'fs'
// import util from 'util'

// const read = util.promisify(fs.readFile)

// async function readData(filename){
//     try{
//         const data = await read(filename,'utf-8')
//         console.log("read data",data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// readData("revise.txt")

// streams

// import fs from 'fs'

// const readStream = fs.createReadStream('revise.txt')

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readStream.on('end',()=>{
//     console.log('reading done')
// })

// readStream.on('error',(err)=>{
//     console.log(err)
// })

//writable stream

// const writeStream = fs.createWriteStream('revise1.txt')

// writeStream.write("hello basha")

// writeStream.end("writing ended")

// writeStream.on('close',()=>{
//     console.log(`It is exited`)
// })

// writeStream.on('error',(err)=>{
//     console.log(err)
// })

//duplex

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

// d.write("vanakkam da sagodhara")

// d.end()

// d.on('close',()=>{
//     console.log("writing is ended")
// })

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// d.on('end',()=>{
//     console.log('file reading is ended')
// })

// d.on('error',()=>{
//     console.log("error is finished")
// })

//transform stream

// import fs from 'fs'
// import { Transform } from 'stream'

// class UpperCaseTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         let upperData = chunk.toString().toUpperCase()
//         this.push(upperData)
//         callback()
//     }
// }

// const t = new UpperCaseTransform()

// const read = fs.createReadStream('revise1.txt')
// const write = fs.createWriteStream('revise2.txt')

// read
// .pipe(t)
// .pipe(write)
// .on('finish',()=>{
//     console.log("transformation completed")
// })

//child process

// import {exec, execFile, spawn, fork } from 'child_process'

// exec('dir',(err,stdout,stderr)=>{
//     if(err){
//         console.log(err)
//     }

//     if(stdout){
//         console.log(stdout)
//     }

//     if(stderr){
//         console.log(stderr)
//     }
// })

// execFile('node',['revise2.js'],(err,stdout,stderr)=>{
//     if(err){
//         console.log(err)
//     }

//     if(stdout){
//         console.log(stdout)
//     }

//     if(stderr){
//         console.log(stderr)
//     }
// })


// const lp = spawn('cmd.exe',['/c','dir'])

// lp.stderr.on('error',(err)=>{
//     console.log(err)
// })

// lp.stdout.on('data',(chunk)=>{
//     console.log('spawned',chunk.toString())
// })

// //fork

// const parent = fork('revise2.js')

// parent.on('message',(msg)=>{
//     console.log('message received from child',msg)
// })

// parent.send("hi how are you child")

//evenEmitter

// import {EventEmitter} from 'events'

// class MyEventEmitter extends EventEmitter{

// }

// const e = new MyEventEmitter()

// const greetFn = (name)=>{
//     console.log(`My name is ${name}`)
// }

// e.on('greet',greetFn)
// e.emit('greet','basha')

// e.once('greet',greetFn)
// e.emit('greet','basha')

// e.emit('greet','basha')

// e.on('greet',greetFn)
// e.emit('greet','basha')
// e.removeListener('greet',greetFn)
// e.emit('greet','basha')

// import express from 'express'

// const app = express()

// app.listen(3000,()=>{
//     console.log('server is running')
// })

// import express from 'express'

// const app = express()

// app.use((req,res,next)=>{
//     if(req.method == 'GET'){
//         res.status(403).json({message:"the request method is blocked"})
//     }
//     else{
//         next()
//     }
// })

// app.use(express.json())

// app.get("/home",(req,res)=>{
//     res.send("home page loaded")
// })

// app.post('/createUser',(req,res)=>{
//     const {data} = req.body
//     res.send(data)
// })

// app.use((err,req,res,next)=>{
//     console.log(err)
// })


// app.listen(3000,()=>{
//     console.log('server is running')
// })


// import express from 'express'
// import fs from 'fs'
// import util from 'util'

// const app = express()
// const write = util.promisify(fs.writeFile)

// app.use((req,res,next)=>{
//     if(req.headers['role'] == 'admin'){
//         next()
//     }else{
//         res.status(403).json({message:'only admin has the permission to write the file'})
//     }
// })

// async function writeFile(fileName){
//     try {
//         await write(fileName,new Date().toString)
//         return true
//     } catch (error) {
//         return false
//     }
// }


// app.post('/writeDate',(req,res)=>{
//     const {fileName} = req.query
//     if(fileName.length == 0){
//         return res.status(400).json({message:"request missing fileName"})
//     }

//     const result = writeFile(fileName)

//     if(result){
//         res.status(201).json({message:"file is updated with current date and time"})
//     }else{
//         res.status(500).json({message:"Internal server error"})
//     }
// })


// app.listen(3000,()=>{
//     console.log('server is running')
// })

//add two no from query and add in middleware update in sum.txt file

// import express from 'express'
// import fs from 'fs'

// const app = express()

// function writeFile(fileName,result){
//     fs.writeFile(fileName,result.toString(),(err)=>{
//         if(err){
//             return false
//         }
//     })

//     return true
// }

// const addNoWriteInFile = ((req,res,next)=>{
//     const {a,b} = req.query
//     let no1 = Number(a)
//     let no2 = Number(b)
//     let result = no1 + no2

//     let final = writeFile('sum.txt',result)

//     if(final){
//         res.status(201).json({message:"sum.txt is updated"})
//     }else{
//         res.status(500).json({message:"internal server error"})
//     }

// })

// app.post('/addTwoNo',addNoWriteInFile,(req,res)=>{
//     const {a,b} = req.query
//     res.send(`${Number(a)} + ${Number(b)} = ${Number(a)+Number(b)}`)
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//create a middleware which log all the name of the parameters (query parameters,path parameters,body parameters) of the incoming request

// import express from 'express'
// const app = express()

// app.use(express.json())

// app.use((req,res,next)=>{
//     console.log('query parameters',req.query)
//     console.log('path parameters',req.params)
//     console.log('body parameters',req.body)
//     next()
// })

// app.post("/createUser",(req,res)=>{
//     const {data} = req.body
//     res.status(200).json({message:"logged everything"})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//connect with mongodb

// import mongoose from "mongoose";

// const db = async()=>{
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/connect')
//         console.log("mongodb connected")
//     } catch (error) {
//         console.log("mongodb error",error)
//     }
// }

// db()

//encrypt and decrypt the string

// import crypto from 'crypto'

// let string = 'hi i am the king of the world'

// let algo = 'aes-256-cbc'
// let key = crypto.randomBytes(32)
// let iv = crypto.randomBytes(16)

// const cipher = crypto.createCipheriv(algo,key,iv)
// let encrypt = cipher.update(string,'utf-8','hex')
// encrypt += cipher.final('hex')
// console.log(encrypt)

// const decipher = crypto.Decipheriv(algo,key,iv)
// let decrypt = decipher.update(encrypt,'hex','utf-8')
// decrypt += decipher.final('utf-8')
// console.log(decrypt)

//create a api which encrypt the data to written in a file and write operation only done by the admin. Create an another api which decrypts and read the content

import express from 'express'
import fs from 'fs'
import crypto from 'crypto'

const app = express()
app.use(express.json())

const algo = 'aes-256-cbc'
const key = crypto.randomBytes(32)

function encrypt(data){
    const iv = crypto.randomBytes(16)

    const cipher = crypto.createCipheriv(algo,key,iv)

    let encrypt = cipher.update(JSON.stringify(data),'utf-8','hex')
    encrypt += cipher.final('hex')
    return {
        iv:iv.toString('hex'),
        content:encrypt
    }
}

function decrypt(encryptedData){
    const decipher = crypto.createDecipheriv(algo,key,Buffer.from(encryptedData.iv,'hex'))
    let decryptedData = decipher.update(encryptedData.content,'hex','utf-8')
    decryptedData += decipher.final('utf-8')
    return JSON.parse(decryptedData)
}

const adminCheck = ((req,res,next)=>{
    if(req.headers.role == 'admin'){
        next()
    }
    else{
        res.status(403).json({message:"Admin has the only rights to write the file"})
    }
})

app.post('/writeFile',adminCheck,(req,res)=>{
    const {data} = req.body

    let encryptedData = encrypt(data)

    fs.writeFile('encrypt.txt',JSON.stringify(encryptedData),(err)=>{
        if(err){
            res.status(500).json({message:"internal server error"})
        }

        res.status(201).json({message:'file is updated'})
    })
})

app.get('/readFile',(req,res)=>{

    fs.readFile('encrypt.txt','utf-8',(err,data)=>{
        if(err){
            res.status(500).json({message:"internal server error"})
        }
    
        try {
            let encryptedData = JSON.parse(data)
            let decryptedData = decrypt(encryptedData)
            res
            .status(200)
            .json({message:"readed file",data:decryptedData})
        } catch (error) {
            
        }
    })


})

app.listen(3000,()=>{
    console.log('server is running')
})