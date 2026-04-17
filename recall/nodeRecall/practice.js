//write a file

import fs from 'fs'

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

fs.unlink('youthReview.txt',(err)=>{
    if(err){
        console.log(err)
    }
    console.log("deleted")
})