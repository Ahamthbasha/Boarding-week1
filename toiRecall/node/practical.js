import fs, { read } from 'fs'

// fs.writeFile("date.txt",new Date().toString(),(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("writed")
// })

// fs.readFile('date.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     if(data){
//         console.log(data)
//     }
// })

// fs.rename('date.txt','currentDate.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("renamed")
// })


// fs.appendFile('currentDate.txt',"hello vro",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("file appended")
// })

// fs.unlink('currentDate.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("file deleted")
// })

// let check = fs.existsSync('currentDate.txt')

// console.log(check)


// import { promisify } from 'util'

// const readFile = promisify(fs.readFile)

// async function read(){
//     try {
//         const result = await readFile('Basha.txt','utf-8')
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// read()

// read stream

// const readStream = fs.createReadStream('Basha.txt')

// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readStream.on('close',()=>{
//     console.log('stream readed successfully')
// })

// // write stream

// const writeStream = fs.createWriteStream('basha.txt')

// writeStream.write("hello basha how ae you")

// writeStream.end()

// writeStream.on('finish',()=>{
//     console.log("finished writing")
// })

// // duplex strea

// import { Duplex } from 'stream'

// class Myduplex extends Duplex{
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

// const d = new Myduplex()

// d.write("hello basha bhai epdi irukkeenga")

// d.end()

// d.on('finish',()=>{
//     console.log("finished writing")
// })

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// d.on('close',()=>{
//     console.log("reading finished")
// })

// import { Transform } from 'stream'

// class UpperTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         let upperData = chunk.toString().toUpperCase()
//         this.push(upperData)
//         callback()
//     }
// }

// const readable = fs.createReadStream('Basha.txt')
// const write = fs.createWriteStream('Upper.txt')

// const t = new UpperTransform()

// readable
// .pipe(t)
// .pipe(write)
// .on('finish',()=>{
//     console.log("executed successfully")
// })


// child process

// import {exec, execFile, fork, spawn} from 'child_process'

// // exec
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

// execFile
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

// spawn
// const child = spawn('cmd.exe',['/c','dir'])

// child.stderr.on('err',(err)=>{
//     console.log(err)
// })

// child.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// child.on('close',(code)=>{
//     console.log(`${code} is exited`)
// })

// fork

// const parent = fork('practical2.js')

// parent.on('message',(msg)=>{
//     console.log("child message",msg)
// })

// parent.send("hello child")

// server

import express from 'express'

const app = express()

app.get('/add',(req,res)=>{
    const {a,b} = req.query
    const sum = Number(a) + Number(b)
    res.status(200).json({message:"added",data:sum})
})

app.listen(3000,()=>{
    console.log("server is running")
})