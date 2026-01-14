// const express = require('express')
// const app = express()
// const fs = require("fs")

// function readFile(fileName){
//     let exists = fs.existsSync(fileName)
//     if(exists){
//         fs.readFile(fileName,'utf-8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             console.log(data)
//         })
//         return "file readed"
//     }else{
//         return "file not found"
//     }
// }

// function writeFile(fileName){
//     fs.writeFile(fileName,"hello",(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("writed completed")
//     })
// }


// const isAdmin = ((req,res,next)=>{
//     if(req.headers.role == "admin"){
//         const {fileName} = req.query
//         writeFile(fileName)
//         next()
//     }
//     else{
//         res.status(403).json({message:"admin only allowed"})
//     }
// })


// app.get("/writeFile",isAdmin,(req,res)=>{
//     res.send("writing completed")
// })

// app.get("/readFile",(req,res)=>{
//     const {fileName} = req.query
//     let result = readFile(fileName)
//     res.send(result)
// })


// app.listen(3000,()=>{
//     console.log("server is running")
// })


// child process


// const {exec} = require('child_process')

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

//graph cycles

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }


//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }

//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return'vertex not found'
//         }

//         return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return 'vertex not found'
//         }

//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return 'vertex not exist'
//         }

//         for(let adjacencyVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjacencyVertex)
//         }

//         delete this.adjacencyList[vertex]
//     }

//     bfsCycleDetection(start){
//         const visitedNode = new Set()
//         visitedNode.add(start)

//         let queue = []
//         queue.push({vertex:start,parent:null})

//         while(queue.length){
//             const {vertex,parent} = queue.shift()

//             for(let neighbor of this.adjacencyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push({vertex:neighbor,parent:vertex})
//                 }
//                 else if(neighbor != parent){
//                     return "cycle detected"
//                 }
//             }
//         }

//         return "cycle not found"
//     }
// }


// const g = new Graph()

// g.addVertex('a')
// g.addVertex('b')
// g.addVertex("c")
// g.addVertex("d")
// g.addVertex("e")

// g.addEdge("a","b")
// g.addEdge("b","c")
// g.addEdge("c","d")

// console.log(g.bfsCycleDetection("a"))

// g.addEdge("d","a")

// console.log(g.bfsCycleDetection("a"))

// let arr = [1,2,3,5]

// let arr = [1,0,3,4]

// let min = Math.min(...arr)
// let max = Math.max(...arr)

// let missingNo = null

// for(let i=min;i<=max;i++){
//     let take = i
//     let checkHasOrNot = false
//     for(let j=0;j<arr.length;j++){
//         if(arr[j] == take){
//             checkHasOrNot = true
//         }
//     }
//     if(!checkHasOrNot){
//         missingNo = take
//     }
// }

// console.log(missingNo)


process.on('message',(msg)=>{
    console.log("child received message",msg)
    process.send("hello parent")
})