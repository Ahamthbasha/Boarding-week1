//write a file

// import fs from 'fs'

// fs.writeFile('youth.txt','superbfilm',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('writed')
// })

// fs.readFile('youth.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log(data)
// })

// fs.rename('youth.txt','youthReview.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("renamed")
// })

// const check = fs.existsSync('youthReview.txt')

// console.log(check)

// fs.unlink('youthReview.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("deleted")
// })

// fs.writeFile('youth.txt','capcheck',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("writed")
// })

// fs.appendFile('youth.txt','\n do your best',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("appended")
// })

//////////////////////////////////////////////////////////

// readable stream

import fs from 'fs'

//write stream

// const writableStream = fs.createWriteStream('youth.txt')

// writableStream.write("hello youth")

// writableStream.end("\n writed")

// writableStream.on('finish',()=>{
//     console.log("writing completed")
// })

// writableStream.on('error',(err)=>{
//     console.log(err)
// })

//read Stream

// const readableStream = fs.createReadStream('youth.txt')

// readableStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readableStream.on('end',()=>{
//     console.log('reading ended')
// })

// readableStream.on('error',(err)=>{
//     console.log(err)
// })

//duplex

// import { Duplex } from 'stream'

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

// d.write("hello basha")

// d.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

//transform

import { Transform } from 'stream'

class MyTransform extends Transform{
    _transform(chunk,encoding,callback){
        let data = chunk.toString().toUpperCase()
        this.push(data)
        callback()
    }
}

const w = fs.createWriteStream('Upper.txt')
const r = fs.createReadStream('youth.txt')

const t = new MyTransform()

r.pipe(t).pipe(w)
.on('finish',()=>{
    console.log("finished")
})