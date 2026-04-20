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

// const readableStream = fs.createReadStream('youth.txt')

// readableStream.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// readableStream.on('end',()=>{
//     console.log('reading finished')
// })

// readableStream.on('error',(err)=>{
//     console.log(err)
// })

// writable stream

// const writableStream = fs.createWriteStream('ken.txt')

// writableStream.write("youth is good entertaining film")

// writableStream.end("\n youth")

// writableStream.on('finish',()=>{
//     console.log("writing completed")
// })

// writableStream.on('error',(err)=>{
//     console.log('err',err)
// })

//duples stream

// import { Duplex } from 'stream'

// class MyDuplex extends Duplex{
//     constructor(){
//         super()
//         this.data = ''
//     }

//     _write(chunk,encoding,callback){
//         this.data +=chunk.toString() 
//         callback()
//     }

//     _read(size){
//         this.push(this.data)
//         this.push(null)
//     }
// }

// const d = new MyDuplex()

// d.read('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// d.write("hello everybody")

// d.read('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// d.end()

// transform stream

import { Transform } from 'stream'

class MyTransform extends Transform{
    _transform(chunk,encoding,callback){
        let data = chunk.toString().toUpperCase()
        this.push(data)
        callback()
    }
}

const readable = fs.createReadStream('ken.txt')
const writable = fs.createWriteStream('KEN2.TXT')

const t = new MyTransform()



readable.pipe(t).pipe(writable)