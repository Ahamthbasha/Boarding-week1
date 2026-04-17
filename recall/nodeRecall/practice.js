//write a file

import fs from 'fs'

// fs.writeFile('youth.txt','superbfilm',(err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('writed')
// })

fs.readFile('youth.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }

    console.log(data)
})