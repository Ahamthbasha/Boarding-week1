//get data by terminal

// function greet(name){
//     return `hi ${name}`
// }
// console.log(greet(process.argv[2]))

// console.log(__dirname)
// console.log(__filename)

// file operation

// const fs = require('fs/promises')

//read File

// fs.readFile('RajKumarHirani.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

//write File

// fs.writeFile('RajkumarHirani.txt',"I love all of his films",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("writed")
// })

// let date = new Date().toString()

// for(let i=1;i<=10;i++){
//     fs.writeFile(`date${i}.txt`,date,(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     console.log(`date${i}.txt created`)
// }

//async await based

// async function read(){
//     try {
//         const result = await fs.readFile('date1.txt','utf-8')
//         console.log(result)
//     } catch (error) {
//         throw error
//     }
// }

// read()

//rename File

// fs.rename('RajkumarHirani.txt','RH.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })
// console.log("renamed")

//append File

// fs.appendFile('RH.txt','\nmunnabhai\nLage Raho Munnabhai MBBS\n3idiots\npk\ndunki',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// console.log("appended")

//delete File

// fs.unlink('RH.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// console.log("deleted")

//file system logical question

//1.Read and count

// const fs = require('fs')

// fs.readFile('data.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         if(data.length == 0){
//             console.log('no of words',0)
//             console.log('no of lines',0)
//         }else{
//             let noOfLines = data.trim().split("\n").length
//             let noOfWords = data.trim().split(/\s+/).length

//             console.log(noOfLines,noOfWords)
//         }
//     }
// })

// file exists or not

// const fs = require('fs')

// const checkTheFileExistsOrNot = fs.existsSync(process.argv[2])

// if(checkTheFileExistsOrNot){
//     fs.readFile(process.argv[2],'utf-8',(err,data)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//         }
//     })
// }else{
//     fs.writeFile(`${process.argv[2]}`,'File created',(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     console.log("file created")
// }

//read multiple files sequentially

// const fs = require('fs/promises')

// let files = ['data.txt','dhurandhar.txt','mangal.txt']

// async function readSequentially(files){
//     try {
//         for(let file of files){
//             const response = await fs.readFile(file,'utf-8')
//             console.log(response)
//         }
//     } catch (error) {
//         throw error
//     }
// }

// readSequentially(files)

//merge files

// const fs = require('fs/promises')

// let files = ['data.txt','dhurandhar.txt']

// async function mergeFile(files){
//     try {
//         for(let i=0;i<files.length;i++){
//             const response = await fs.readFile(files[i],'utf-8')
//             if(i == 0){
//                 await fs.writeFile('merged.txt',response)
//             }else{
//                 await fs.appendFile('merged.txt',`${response}`)
//             }
//         }
//     } catch (error) {
//         throw error
//     }
// }

// mergeFile(files)

// read all files in the directory sequentially

// const fs = require('fs/promises')

// async function readAllFileInDir(dir){
//     try {
//         const files =await fs.readdir(dir)

//         const textFiles = files.filter((val)=>val.includes('.txt'))

//         for(let file of textFiles){
//             const response = await fs.readFile(file,'utf-8')
//             console.log(response)
//         }
//     } catch (error) {
//         throw error
//     }
// }

// readAllFileInDir("../node")

// read all files in the directory parallely

// const fs = require('fs/promises')

// async function parallelRead(dir){
//     const files = await fs.readdir(dir)

//     const takeTextFiles = files.filter((val)=>val.includes('.txt'))

//     console.log(takeTextFiles)

//     const textedFiles = takeTextFiles.map((val)=>fs.readFile(val,"utf-8"))

//     const content = await Promise.all(textedFiles)

//     content.forEach((val)=>{
//         console.log(val)
//     })
// }

// parallelRead("../node")

//search a word in files if it is present return true with filename

// const fs = require('fs/promises')

// async function searchFile(dir,word){
//     try {
//         const readDir = await fs.readdir(dir)

//         const textFiles = readDir.filter((val)=>val.includes('.txt'))

//         for(let file of textFiles){
//             const response = await (await fs.readFile(file,'utf-8')).toLowerCase()

//             if(response.includes(word.toLowerCase())){
//                 console.log(file,true)
//             }
//         }
//     } catch (error) {
//         throw error
//     }
// }

// searchFile('../node',"Idiot")

// search a word in a file if it exists return filename,line number and line count.

// const fs = require('fs')
// const fsPromises = require('fs/promises')
// const readLine = require("readline")

// async function searchWord(dir,text){
//     try {
//         const filesInDir = await fsPromises.readdir(dir)

//         const textedFiles = filesInDir.filter((val)=>val.includes('.txt'))

//         for(let file of textedFiles){
//             const fileStream = fs.createReadStream(file)

//             const rl = readLine.createInterface({
//                 input:fileStream,
//                 CRLFDelay:Infinity
//             })

//             let lineNumber = 0

//             for await(let l of rl){
//                 lineNumber++
//                 if(l == text){
//                     console.log(`${file} -> ${lineNumber} ->${l}`)
//                     break
//                 }
//             }
//         }
//     } catch (error) {
//         throw error
//     }
// }

// searchWord("../node",'Idiot')

//create server using http

// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url == "/" && req.method=="GET"){
//         res.end("Hello world")
//     }
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })

//create a server using express

// const express = require('express')
// const app = express()

// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//streams

// //readableStram

// const fs = require('fs')

// const readableStream = fs.createReadStream('dhar.txt')

// readableStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readableStream.on('end',()=>{
//     console.log("read finished")
// })

// readableStream.on('error',(err)=>{
//     console.log(err)
// })

// //writable Stream

// const writableStream = fs.createWriteStream('velayudham.txt')

// writableStream.write("Hello nanba")

// writableStream.end()

// writableStream.on('close',()=>{
//     console.log('writing finished')
// })

// writableStream.on('error',(err)=>{
//     console.log(err)
// })

// writableStream.on('finish',()=>{
//     console.log('writing over')
// })

// //duplex stream

// const {Duplex} = require('stream')
// class MyDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ''
//     }

//     _write(chunk,encoding,callback){
//         this.data += chunk.toString()
//         callback()
//     }

//     _read(size){
//         this.push(this.data)
//         this.push(null)
//     }
// }

// const d = new MyDuplex()

// d.write("Naanum rowdy dhaan")
// d.end()

// d.on('close',()=>{
//     console.log("writing is finished")
// })

// d.on('error',(err)=>{
//     console.log(err)
// })

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// d.on('end',()=>{
//     console.log("duplex stream reading finished")
// })

// d.on('error',(err)=>{
//     console.log(err)
// })

// //Transform Stream

// const {Transform} = require('stream')

// class MyTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         const upperCase = chunk.toString().toUpperCase()
//         this.push(upperCase)
//         callback()
//     }
// }

// const readStream = fs.createReadStream('data.txt')
// const writeStream = fs.createWriteStream('upperData.txt')

// const t = new MyTransform()

// readStream
// .pipe(t)
// .pipe(writeStream)
// .on('finish',()=>{
//     console.log('transform stream finished')
// })

// child process

// const {exec,execFile, spawn, fork} = require('child_process')
// const { error } = require('console')

// exec('dir',(error,stderr,stdout)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// })

// execFile('node',['practical2.js'],(error,stderr,stdout)=>{
//     if(error){
//         console.log(error)
//     }

//     if(stderr){
//         console.log(stderr)
//     }

//     if(stdout){
//         console.log(stdout)
//     }
// })

// const childProcess = spawn('cmd.exe',['/c','dir'])

// childProcess.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// childProcess.stderr.on('error',(err)=>{
//     console.log(err)
// })

// childProcess.on('close',(code)=>{
//     console.log(`code is exited with ${code}`)
// })

//fork

// const newChilProcess = fork('practical2.js')

// newChilProcess.on('message',(msg)=>{
//     console.log("message received from parent",msg)
// })

// newChilProcess.send("hello child")

//events

// const { EventEmitter } = require("events");

// class MyEvent extends EventEmitter {}

// const e = new MyEvent();

// const greetFn = (name) => {
//   console.log(name);
// };

// e.on("greet", greetFn);

// e.emit("greet", "sharma Ji");

// e.removeListener('greet',greetFn)

// e.on('greet',greetFn)
// e.on('greet',greetFn)
// e.on('greet',greetFn)

// e.once('greet',greetFn)

// e.emit('greet','basha ji')
// e.emit('greet','basha ji')
// e.emit('greet','basha ji')

// middleware

// import express from "express"
// import userRouter from "./routerMiddleware/routerMiddleware.js"

// const app = express()
// app.use("/api/user",userRouter)

// app.listen(3000,()=>{
//     console.log("server is running")
// })

//get the fileName check if it is exists or not if it exists update with current Date otherwise show file not found

// import express from "express"
// import fs from "fs"

// const app = express()

// function checkFileExistsOrNot(fileName){
//     return fs.existsSync(fileName)
// }

// function updateFile(fileName){
//     fs.writeFile(fileName,new Date().toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     console.log("file updated")
// }


// app.get("/file",(req,res)=>{
//     const {fileName} = req.query

//     if(checkFileExistsOrNot(fileName)){
//         updateFile(fileName)
//         res.send("file is updated with new content")
//     }else{
//         res.send('no file found')
//     }
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// block a particular method request

// import express from "express"
// const app = express()

// app.use((req,res,next)=>{
//     if(req.method == 'GET'){
//         res.status(403).json({message:`${req.method} method is blocked`})
//     }else{
//         next()
//     }
// })

// app.get("/check",(req,res)=>{
//     res.send("check")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })


//take two numbers from the request and write it in a file

// import express from "express"
// import fs from "fs"

// const app = express()

// function storeResult(result){
//     fs.writeFile('sum.txt',result.toString(),(err)=>{
//         if(err){
//             console.log(err)
//         }
//     })
// }

// app.get('/no',(req,res)=>{
//     const {a,b} = req.query
//     const result =Number(a)+Number(b)
//     storeResult(result)
//     res.send(result)
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// block the particular header request

// import express from 'express'
// const app = express()

// app.use((req,res,next)=>{
//     if(req.headers.hello == "basha"){
//         res.status(403).json({message:"this header is blocked"})
//     }else{
//         next()
//     }
// })

// app.get("/home",(req,res)=>{
//     res.send("home page")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })