// const article = [{id:1,name:'basha'}];
// const videos = [{id:10,name:'abcde',url:"http",articleId:1}];
// // Expected Output:
// [
//   {
//     article: { id: 1, name: 'basha' },
//     videos: [
//       { id: 10, name: 'abcde', url: 'http', articleId: 1 }
//     ]
// }
// ]


// let result = []

// for(let val of article){
//     let filterVideos = videos.filter((value)=>{
//         return value.articleId == val.id
//     })

//     result.push(
//         {
//             article:val,
//             videos:filterVideos
//         }
//     )
// }

// console.log(result)


// const data = {
//   users: [
//     {id:1, name:"A", details:{age:25, city:"NY"}},
//     {id:2, name:"B", details:{age:30, city:"LA"}}
//   ]
// }

// let result = []
// for(let key in data){
//     for( let val of data[key]){
//         let take = val
//         let obj = {}
//         for(let key in take){
//             if(typeof take[key] == "object"){
//                 for(let val in take[key]){
//                     obj[val] = take[key][val]
//                 }
//             }else{
//                 obj[key] = take[key]
//             }
//         }
//         result.push(obj)
//     }
// }

// console.log(result)


// const products = [
//   {name:"apple", qty:2},
//   {name:"banana", qty:3},
//   {name:"apple", qty:4}
// ];

// Expected output: [{name:"apple",qty:6},{name:"banana",qty:3}]

// let result = []
// let map = new Map()
// for(let val of products){
//     if(map[val.name]){
//         let get = map(val.name)
//         map.set(val.name,get+val.qty)
//     }else{
//         map.set(val.name,val.qty)
//     }
// }

// for(let [name,qty] of map){
//     result.push({name:name,qty:qty})
// }

// console.log(result)

//swap key values

// let object = {
//     g:"green",
//     r:"red",
//     y:"yellow"
// }

// let swap  = {}

// for(let key in object){
//     swap[object[key]] = key
// }

// console.log(swap)

// find the lowest salary

// const employees = [
//     {name:"vinayak mahadev",salary:2000000,age:40},
//     {name:"vinayagam",salary:200,age:40},
//     {name:"vinnai thandi varuva",salary:10000,age:40},
//     {name:"vintage",salary:9000000,age:40}
// ]


// let result = employees.reduce((acc,cur)=>{
//     return cur.salary < acc.salary ? cur : acc
// })

// console.log(result)

//largest

// function largest(arr){

//     let result = arr.reduce((acc,cur)=>{
        
//         if(cur == acc.first || cur == acc.second || cur == acc.third || cur == acc.fourth){
//             return acc
//         }

//         if(cur > acc.first){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur > acc.second){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur > acc.third){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur > acc.fourth){
//             acc.fourth = cur
//         }

//         return acc
//     },{first:-Infinity,second:-Infinity,third:-Infinity,fourth:-Infinity})

//     return result
// }

// console.log(largest([10,101,20,30,100000,1,1000000000001]))


// function smallest(arr){
//     let result = arr.reduce((acc,cur)=>{
//         if(cur == acc.first || cur == acc.second || cur == acc.third || cur == acc.fourth){
//             return acc
//         }

//         if(cur < acc.first){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur < acc.second){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur < acc.third){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur < acc.fourth){
//             acc.fourth = cur
//         }
//         return acc
//     },{first:Infinity,second:Infinity,third:Infinity,fourth:Infinity})
//     return result
// }

// console.log(smallest([100000,-10,-1,0,0,1,-10,78]))


//largest str compare with string itself

// function largestWord(str){
//     let arr = str.split(" ")
//     let result = arr.reduce((acc,cur)=>{
//         if(cur == acc.first || cur == acc.second || cur == acc.third || cur == acc.fourth){
//             return acc
//         }

//         if(cur.length > acc.first.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur.length > acc.second.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur.length > acc.third.length){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur.length > acc.fourth.length){
//             acc.fourth = cur
//         }
//         return acc
//     },{first:"",second:"",third:"",fourth:""})
//     return result
// }

// console.log(largestWord("i am the best and i can do anything"))

// function smallest(str){
//     let arr = str.split(" ")
//     let result = arr.reduce((acc,cur)=>{
//         if(cur == acc.first || cur == acc.second || cur == acc.third || cur == acc.fourth){
//             return acc
//         }

//         if(cur.length < acc.first.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(cur.length < acc.second.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(cur.length < acc.third.length){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(cur.length < acc.fourth.length){
//             acc.fourth = cur
//         }
//         return acc
//     },{first:"a".repeat(1000),second:"a".repeat(1000),third:"a".repeat(1000),fourth:"a".repeat(1000)})
//     return result
// }

// console.log(smallest("raja raja dhan and supreme and sankrathiki vasthunam"))

// let str = "my name is ahamathbasha my home is india"

// let result = str.split(" ").map((val)=>{
//     return val[0].toUpperCase() + val.slice(1)
// }).join(" ")

// console.log(result)

//end letter caps

// let str = "my name is ahamathbasha my home is india"

// let endLetterCapsStr = str.split(" ").map((val)=>{
//     return val.slice(0,val.length-1) + val[val.length-1].toUpperCase()
// }).join(" ")

// console.log(endLetterCapsStr)

// const students = [
//   {
//     id: 1,
//     name: 'Aarav',
//     grade: '10',
//     scores: { math: 85, science: 90, english: 78 },
//     activities: ['cricket', 'music'],
//   },
//   {
//     id: 2,
//     name: 'Diya',
//     grade: '9',
//     scores: { math: 92, science: 88, english: 95 },
//     activities: ['debate', 'chess'],
//   },
//   {
//     id: 3,
//     name: 'Kabir',
//     grade: '10',
//     scores: { math: 76, science: 70, english: 82 },
//     activities: null,
//   },
//   {
//     id: 4,
//     name: 'Maya',
//     grade: '8',
//     scores: { math: 89, science: 94, english: 91 },
//     activities: ['dance'],
//      },
//   {
//     id: 5,
//     name: 'Arjun',
//     grade: '9',
//     scores: { math: 55, science: 65, english: 60 },
//     activities: ['football'],
//   },
// ];

// let subject = "math"

// function maximumMarkObject(obj,subject){
//     let maximumMark = 0
//     let object 
//     for(let val of obj){
//         let takeSubject = val.scores
//         let check = false
//         for(let key in takeSubject){
//             if(key == subject){
//                 let copy = maximumMark
//                 maximumMark = Math.max(maximumMark,takeSubject[key])
    
//                 if(copy != maximumMark){
//                     check = true
//                 }else{
//                     check = false
//                 }
//             }
//         }
//         if(check){
//             object = val
//         }
//     }
//     return object
// }
// console.log(maximumMarkObject(students,subject))

// const fileSystem = {
//   name: 'root',
//   files: ['file1.txt', 'file2.txt'],
//   folders: [
//     {
//       name: 'docs',
//       files: ['doc1.pdf', 'doc2.pdf'],
//       folders: [
//         {
//           name: 'personal',
//           files: ['resume.docx'],
//           folders: [],
//         },
//       ],
//     },
//     {
//       name: 'images',
//       files: ['photo1.jpg', 'photo2.jpg'],
//       folders: [],
//     },
//   ],
// };



// function flatFile(obj,arr=[]){
//     for(let key in obj){
//         if(key == "files"){
//             let value = obj[key]
//             for(let val of value){
//                 arr.push(val)
//             }
//         }else if(key == "folders"){
//             for(let val of obj[key]){
//                 flatFile(val,arr)
//             }
//         }
//     }
//     return arr
// }

// console.log(flatFile(fileSystem))

// const transactions = [
//   { user: 'Rahul', amount: 300, date: '2025-01-20' },
//   { user: 'Rahul', amount: 400, date: '2025-01-29' },
//   { user: 'Meera', amount: 1500, date: '2025-01-20' },
//   { user: 'Meera', amount: 350, date: '2025-02-10' },
//   { user: 'Vijay', amount: 1600, date: '2025-02-14' },
//   { user: 'Rahul', amount: 200, date: '2025-02-25' },
//   { user: 'Rahul', amount: 2000, date: '2025-03-14' },
//   { user: 'Meera', amount: 500, date: '2025-03-15' },
//   { user: 'Vijay', amount: 700, date: '2025-03-12' },
// ];

// output
// {
//   '2025-01': { topSpender: 'Meera' },
//   '2025-02': { topSpender: 'Vijay' },
//   '2025-03': { topSpender: 'Rahul' }
// }


// const result = {}

// for(let val of transactions){
//     let month = val.date.slice(0,7)

//     if(!result[month]){
//         result[month] = {}
//     }

//     if(result[month][val.user]){
//         result[month][val.user] += val.amount
//     }else{
//         result[month][val.user] = val.amount
//     }
// }

// console.log(result)
// let finalOutput  = {}
// for(let month in result){
//     let max = 0
//     let totalSpend = null
//     let userObject = result[month]

//     for(let user in userObject){
//         if(userObject[user] > max){
//             max = userObject[user]
//             totalSpend = user
//         }
//     }

//     finalOutput[month] = {totalSpend}
// }

// console.log(finalOutput)

// const orders = [
//   { id: 1, customer: "Alice", items: ["apple", "banana"] },
//   { id: 2, customer: "Bob", items: ["banana", "orange"] },
//   { id: 3, customer: "Alice", items: ["orange"] },
//   { id: 4, customer: "Charlie", items: ["apple", "apple", "banana"] }
// ];

// let result = []
// let orderMap = {}
// for(let users of orders){
//     if(orderMap[users.customer]){
//         orderMap[users.customer].add(...users.items)
//     }else{
//         orderMap[users.customer] = new Set(users.items)
//     }
// }

// for(let val in orderMap){
//     result.push({
//         customer:val,
//         items:[...orderMap[val]]
//     })
// }

// console.log(result)

// //Expected output 

// [
//   { customer: "Alice", items: ["apple", "banana", "orange"] },
//   { customer: "Bob", items: ["banana", "orange"] },
//   { customer: "Charlie", items: ["apple", "banana"] }
// ]


// const obj = {
//   newObj: {
//     obj2: {
//       obj5: {
//         one: 1,
//       },
//     },
//   },
//   obj3: {
//     obj4: {
//       two: 2,
//     },
//   },
// };

// function mergeObject(obj,result={},prefix=""){
//     for(let key in obj){
//         const newKey = prefix ? prefix + "." + key : key
//         if(typeof obj[key] == "object"){
//             mergeObject(obj[key],result,newKey)
//         }else{
//             result[newKey] = obj[key]
//         }
//     }
//     return result
// }

// console.log(mergeObject(obj))

// function mergeObject(obj,result={},prefix=""){
//     for(let key in obj){
//         const newKey = prefix ? prefix+"."+key : key
//         if(typeof obj[key] == "object"){
//             mergeObject(obj[key],result,newKey)
//         }else{
//             result[newKey] = obj[key]
//         }
//     }
//     return result
// }

// console.log(mergeObject(obj))

// let stack = [{obj,prefix:""}]

// let result = {}

// while(stack.length){
//     let {obj,prefix} = stack.pop()

//     for(let key in obj){
//         const newKey = prefix ? prefix+"."+key : key
//         if(typeof obj[key] == "object"){
//             stack.push({obj:obj[key],prefix:newKey})
//         }else{
//             result[newKey] = obj[key]
//         }
//     }
// }

// console.log(result)

// output:
// {
//    'newObj.obj2.obj5.one': 1,
//    'obj3.obj4.two': 2,
//  }

// const array = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// function mergeArray(arr,result=[]){
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             mergeArray(arr[i],result)
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(mergeArray(array))

// function counter() {
//   let count = 0;
//   return function() {
//     return ++count;
//   };
// }

// const c1 = counter();
// console.log(c1());
// console.log(c1());
// const c2 = counter();
// console.log(c2());
