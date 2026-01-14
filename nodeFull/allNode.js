//http module

// import http from 'http'
// import path from 'path'
// import url from "url"
// const server = http.createServer((req,res)=>{
//     const pathName = url.parse(req.url)

//     console.log(pathName)

//     res.writeHead(400,{'content-type':'application/json'})

//     res.write("it is never")

//     res.write("never ever give up")

//     res.end("response ended")
// })

// server.listen(3000,()=>{
//     console.log("server is running")
// })


//os module

// import os from 'os'
// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.arch())
// console.log(os.platform())


//path module

// import path from 'path'
// const joinedPath = path.join('abcd','efg')
// console.log(joinedPath)

// const baseName = path.basename("./allNode.js")
// console.log(baseName)

// const resolvedPath = path.resolve('acbcd','alumbunaties')
// console.log(resolvedPath)

//streams

// import fs from 'fs'

//readable stream

// const read = fs.createReadStream("pk.txt",'utf-8')

// read.on('data',(chunk)=>{
//     console.log(chunk)
// })

// read.on('end',()=>{
//     console.log("reading completed")
// })

//writable stream

// const write = fs.createWriteStream('jananaygan.txt')

// write.write("I AM coming....")

// write.close()

// write.on('finish',()=>{
//     console.log("writing completed successfully")
// })

//duplex stream

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

// d.write("hello how are you")

// d.write("\nwho are you what do you want")

// d.end()

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// d.on('end',()=>{
//     console.log("reading completed")
// })

//transform stream

// import { Transform } from 'stream'

// class MyTransform extends Transform{
//     _transform(chunk,encoding,callback){
//         const upperCase = chunk.toString().toUpperCase()
//         this.push(upperCase)
//         callback()
//     }
// }

// const t = new MyTransform()
// const read = fs.createReadStream('./pk.txt')
// const write = fs.createWriteStream("transformed.txt")

// read
// .pipe(t)
// .pipe(write)
// .on('finish',()=>{
//     console.log("reading completed")
// })


//child process

// import { exec,execFile, fork, spawn } from 'child_process'

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

// execFile('node',['./temp.js'],(error,stderr,stdout)=>{
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

// //spawn

// const newProcess = spawn('cmd.exe',['/c','dir'])

// newProcess.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// newProcess.stderr.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// newProcess.on('error',(err)=>{
//     console.log(err)
// })

// //fork

// const parent = fork('temp.js')

// parent.on('message',(msg)=>{
//     console.log(msg)
// })

// parent.send("hi child")


//buffer

// import { Buffer } from 'buffer'

// //convert str to buffer

// const result = Buffer.from("hello")
// console.log(result)


// //alloc buff

// const allocByte = Buffer.alloc(20)
// allocByte.write("hello basha")
// console.log(allocByte.toString())

// //convert buffer to json

// const buf = Buffer.from("alumbunaties")
// console.log(buf.toJSON())

//utility

// import util from "util"

// const fsReadFile = util.promisify(fs.readFile)

// async function readAsync(fileName){
//     try {
//         const result = await fsReadFile(fileName,"utf-8")
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// readAsync("jananaygan.txt")

// import EventEmitter from 'events'

// const e = new EventEmitter()

// const greetFunc = (name)=>{
//     console.log(`hello ${name}`)
// }

// e.on('greet',greetFunc)

// e.emit('greet',"basha")

//create hash

// import crypto from "crypto"

//crypto hash

// const text = "thani oruvan"
// const passwordToHash = "123"

// const hashedPassword = crypto.createHash('sha256').update(passwordToHash).digest('hex')

// console.log(hashedPassword)

//random bytes for secure token

// const token = crypto.randomBytes(20).toString('hex')
// console.log(token)

// 

// const algo = "aes-256-cbc"
// const key = crypto.randomBytes(32)
// const iv = crypto.randomBytes(16)

// const data = "hello BASHA"

// const cipher = crypto.createCipheriv(algo,key,iv)
// let encrypted = cipher.update(data,'utf-8','hex')
// encrypted += cipher.final('hex')
// console.log("encypted data",encrypted)

// //decrypt

// const decipher = crypto.createDecipheriv(algo,key,iv)
// let result = decipher.update(encrypted,'hex','utf-8')
// result += decipher.final('utf-8')
// console.log(result)

//dns

// import dns from "dns"

// dns.lookup('bashabooks.shop',(err,address,family)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log(address)

//     console.log(family)
// })

// dns.resolve4('bashabooks.shop',(err,address)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("address",address)
// })

// dns.resolve6('bashabooks.shop',(err,address)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("address",address)
// })

// dns.reverse('34.207.166.85',(err,domainName)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("domain name",domainName)
// })

//local module

// import addition from "./temp.js";
// console.log(addition(5,5))

//third party module

