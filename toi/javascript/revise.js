//memoization

// function factorial(n){
//     if(n <= 1){
//         return n
//     }
//     return n * factorial(n-1)
// }

// const memo = (fns)=>{
//     let cache = {}
//     return function(args){
//         if(args in cache){
//             return cache[args]
//         }
//         else{
//             let result = fns(args)
//             cache[args] = result
//             return result
//         }
//     }
// }

// const factory = memo(factorial)

// console.time()
// console.log(factory(5))
// console.timeEnd()

// console.time()
// console.log(factory(5))
// console.timeEnd()


//deep Freeze

// function deepFreeze(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let val of propNames){
//         let value = obj[val]
//         if(typeof value == 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

//deep copy

// function deepCopy(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     let copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }

//accessors

// const object = {
//     firstName : "ahamathbasha",
//     lastName : "f",
//     set fullName(name){
//         let [start,end] =name.split(" ")
//         this.firstName = start
//         this.lastName = end
//     },
//     get fullName(){
//         return this.firstName + ' ' +this.lastName
//     }
// }


// console.log(object.fullName)
// object.fullName = "manick basha"
// console.log(object.fullName)


//proxy object

// const obj = {
//     name : "ahamathbasha",
//     age:20
// }

// const handler = {
//     set(target,prop,value){
//         if(prop == 'name'){
//             target[prop] = value
//             return true
//         }

//         if(prop == 'age'){
//             if(value < 0){
//                 return false
//             }
//             target[prop] = value
//             return true
//         }
//     },
//     get(target,prop){
//         return prop in target ? target[prop] : null
//     }
// }

// const proxyObject = new Proxy(obj,handler)

// console.log(proxyObject)

// proxyObject.name = "manick basha"

// console.log(proxyObject)

// console.log(obj)

// console.log(proxyObject.age)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1.
// const article = [{id:1,name:'basha'}];
// const videos = [{id:10,name:'abcde',url:"http",articleId:1}];
// Expected Output:

// [
//   {
//     article: { id: 1, name: 'basha' },
//     videos: [
//       { id: 10, name: 'abcde', url: 'http', articleId: 1 }
//     ]
// }
// ]

// const article = [{id:1,name:'basha'}];
// const videos = [{id:10,name:'abcde',url:"http",articleId:1}];

// let result = []

// let articleVideoMap = {}

// for(let key of article){
//     let articleVideo = videos.filter((val)=>val.articleId == key.id)
//     let final = {
//         article:key,
//         videos:articleVideo
//     }

//     result.push(final)
// }

// console.log(result)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.

// const data = {
//   users: [
//     {id:1, name:"A", details:{age:25, city:"NY"}},
//     {id:2, name:"B", details:{age:30, city:"LA"}}
//   ]
// }

//output should be like this

// [
//   { id: 1, name: 'A', age: 25, city: 'NY' },
//   { id: 2, name: 'B', age: 30, city: 'LA' }
// ]

// let result = []

// for(let key in data){
//     for(let val of data[key]){
//         let newObj = {}
//         let take = val
//         for(let key in take){
//             if(typeof take[key] == 'object'){
//                 for(let val in take[key]){
//                     newObj[val] = take[key][val]
//                 }
//             }else{
//                 console.log(take[key])
//                 newObj[key] = take[key]
//             }
//         }
//         result.push(newObj)
//     }
// }

// console.log(result)


//alternative approach by using spread operator

// function normalizeObj(obj,result=[]){
//     for(let key in obj){
//         for(let val of obj[key]){
//             let newObj = {}
//             for(let key in val){
//                 if(typeof val[key] == 'object'){
//                     newObj = {...newObj,...val[key]}
//                 }
//                 else{
//                     newObj[key] = val[key]
//                 }
//             }
//             result.push(newObj)
//         }
//     }
//     return result
// }

// console.log(normalizeObj(data))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3.products

// const products = [
//   {name:"apple", qty:2},
//   {name:"banana", qty:3},
//   {name:"apple", qty:4}
// ];

// Expected output: [{name:"apple",qty:6},{name:"banana",qty:3}]

// let productFreq = {}

// for(let val of products){
//     if(productFreq[val.name]){
//         productFreq[val.name] += val.qty
//     }
//     else{
//         productFreq[val.name] = val.qty
//     }
// }

// let result = []

// for(let key in productFreq){
//     result.push({name:key,qty:productFreq[key]})
// }

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4.swap key values

// let object = {
//     g:"green",
//     r:"red",
//     y:"yellow"
// }

// let swap ={}

// for(let key in object){
//     swap[object[key]] = key
// }

// console.log(swap)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// find the lowest salary

// const employees = [
//     {name:"vinayak mahadev",salary:2000000,age:40},
//     {name:"vinayagam",salary:200,age:40},
//     {name:"vinnai thandi varuva",salary:10000,age:40},
//     {name:"vintage",salary:9000000,age:40}
// ]

// let lowest = employees.reduce((acc,cur)=>{
//     if(cur.salary < acc.salary){
//         acc.salary = cur.salary
//         acc.first = cur
//     }
//     return acc
// },{first:null,salary:Infinity})

// console.log(lowest.first)

// let lowest = employees.reduce((acc,cur)=>cur.salary < acc.salary ? cur : acc)

// console.log(lowest)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function largest

// function largest(arr){
//     let large = arr.reduce((acc,cur)=>{
//         if(acc.first == cur || acc.second == cur || acc.third == cur || acc.fourth == cur){
//             return acc
//         }
//         if(acc.first < cur){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(acc.second < cur){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(acc.third < cur){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(acc.fourth < cur){
//             acc.fourth = cur
//         }
//         return acc
//     },{first:-Infinity,second:-Infinity,third:-Infinity,fourth:-Infinity})

//     return large
// }

// console.log(largest([1000,90,1000,10,20,900,500,100,29]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//smallest

// function smallest(arr){
//     let small = arr.reduce((acc,cur)=>{
//         if(acc.first == cur || acc.second == cur || acc.third == cur || acc.fourth == cur){
//             return acc
//         }

//         if(acc.first > cur){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(acc.second > cur){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(acc.third > cur){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(acc.fourth > cur){
//             acc.fourth = cur
//         }
//         return acc
//     },{first:Infinity,second:Infinity,third:Infinity,fourth:Infinity})
//     return small
// }

// console.log(smallest([1000,90,1000,10,20,900,500,100,29,1,1,-10,-10,0]))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//str

// function largest(str){
//     let arr = str.split(" ")
//     let large = arr.reduce((acc,cur)=>{
//         if(acc.first == cur || acc.second == cur || acc.third == cur||acc.fourth == cur){
//             return acc
//         }

//         if(acc.first.length < cur.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(acc.second.length < cur.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(acc.third.length < cur.length){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(acc.fourth.length < cur.length){
//             acc.fourth = cur
//         }
//         return acc
//     },{first:'',second:'',third:'',fourth:''})
//     return large
// }

// console.log(largest("Hi i am the king of the world"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//smallest

// function smallest(str){
//     let arr = str.split(' ')
//     let smallest = arr.reduce((acc,cur)=>{
//         if(acc.first == cur || acc.second == cur || acc.third == cur || acc.fourth == cur){
//             return acc
//         }

//         if(acc.first.length > cur.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = acc.first
//             acc.first = cur
//         }
//         else if(acc.second.length > cur.length){
//             acc.fourth = acc.third
//             acc.third = acc.second
//             acc.second = cur
//         }
//         else if(acc.third.length > cur.length){
//             acc.fourth = acc.third
//             acc.third = cur
//         }
//         else if(acc.fourth.length > cur.length){
//             acc.fourth = cur
//         }
//         return acc
//     },{first:'a'.repeat(1000),second:'a'.repeat(1000),third:'a'.repeat(1000),fourth:'a'.repeat(1000)})
//     return smallest
// }

// console.log(smallest("Hi i am the king of the world"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//convert this string each word starting letter in caps

// let str = "my name is ahamathbasha my home is india"

// str = str.split(" ")

// let modifiedJoin = str.map((val)=>{
//     return val[0].toUpperCase() + val.slice(1)
// })

// console.log(modifiedJoin.join(" "))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//convert this string each word ending letter in caps

// let str = "my name is ahamathbasha my home is india"

// str = str.split(" ")

// let endLetterCapsStr = str.map((val)=>{
//     return val.slice(0,val.length-1) + val[val.length-1].toUpperCase()
// })

// console.log(endLetterCapsStr.join(" "))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//write a function which takes the object and subject parameter return the object which one has higher marks in that subject

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
// let givenSubject = 'math'


// function highestScorer(students,givenSubject){
//     let obj = null
//     let maxScore = 0
//     for(let val of students){
//         for(let key in val){
//             if(key == 'scores'){
//                 for(let subject in val[key]){
//                     if(subject == givenSubject){
//                         if(val[key][subject] > maxScore){
//                             maxScore = val[key][subject]
//                             obj = val
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return obj
// }

// console.log(highestScorer(students,givenSubject))

//alternative approach

// let givenSub = 'english'

// let obj = null
// let maxScore = -Infinity
// for(let key of students){
//     for(let [keys,value] of Object.entries((key))){
//         if(keys == 'scores'){
//             for(let subject in value){
//                 if(givenSub == subject){
//                     if(value[subject] > maxScore){
//                         maxScore = value[subject]
//                         obj = key
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(obj)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//write a recursive function which store all files in an array

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

//output should be like this:

// [
//   'file1.txt',
//   'file2.txt',
//   'doc1.pdf',
//   'doc2.pdf',
//   'resume.docx',
//   'photo1.jpg',
//   'photo2.jpg'
// ]


// function flatFiles(obj,result=[]){
//     for(let key in obj){
//         if(key == 'files'){
//             let take =obj[key]
//             for(let val of take){
//                 result.push(val)
//             }
//         }
//         else if(key == 'folders'){
//             for(let val of obj[key]){
//                  flatFiles(val,result)
//             }
//         }
//     }
//     return result
// }

// console.log(flatFiles(fileSystem))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// let monthlySpendMap = {}

// for(let val of transactions){
//     let date = val.date.slice(0,7)
//    if((monthlySpendMap[date])){
//     monthlySpendMap[date].push(val)
//    }else{
//     monthlySpendMap[date] = [val]
//    }
// }

// let result = {}

// for(let [key,value] of Object.entries(monthlySpendMap)){
//     let max = -Infinity
//     let topSpender = null
//     let userAmountMap = {}
//     for(let key of value){
//         if(userAmountMap[key.user]){
//             userAmountMap[key.user] += key.amount
//         }
//         else{
//             userAmountMap[key.user] = key.amount
//         }
//     }

//     for(let key in userAmountMap){
//         if(userAmountMap[key] > max){
//             max = userAmountMap[key]
//             topSpender = key
//         }
//     }
    
//     result[key] = {topSpender}
// }

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const orders = [
//   { id: 1, customer: "Alice", items: ["apple", "banana"] },
//   { id: 2, customer: "Bob", items: ["banana", "orange"] },
//   { id: 3, customer: "Alice", items: ["orange"] },
//   { id: 4, customer: "Charlie", items: ["apple", "apple","banana"]}
// ];

//output:

// [
//   { customer: "Alice", items: ["apple", "banana", "orange"] },
//   { customer: "Bob", items: ["banana", "orange"] },
//   { customer: "Charlie", items: ["apple", "banana"] }
// ]


// let result = []

// let userMap = {}

// for(let val of orders){
//     if(userMap[val.customer]){
//         userMap[val.customer].add(...val.items)
//     }else{
//         userMap[val.customer] = new Set(val.items)
//     }
// }


// for(let key in userMap){
//     result.push({
//         customer:key,
//         items:[...userMap[key]]
//     })
// }

// console.log(result)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


//expected output:
// {'newObj.obj2.obj5.one':1,'obj3.obj4.two':2}


// let result = {}

// function normalizeObj(obj,prefixKey='',result={}){
//     if(typeof obj != 'object'){
//         return obj
//     }

//     for(let key in obj){
//         let constructKey = prefixKey + key+'.'
//         if(typeof obj[key] == 'object'){
//             normalizeObj(obj[key],constructKey,result)
//         }else{
//             result[constructKey] = obj[key]
//         }
//     }

//     return result
// }

// console.log(normalizeObj(obj))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let  obj = {'newObj.obj2.obj5.one':1,'obj3.obj4.two':2}

// Expected Output:
// {
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

let result = {}

for(let key in obj){
    let take = key.split(".")
    let part = result
    for(let i=0;i<take.length;i++){
        if(i == take.length-1){
            part[take[i]] = obj[key]
        }
        else{
            if(!part[take[i]]){
                part[take[i]] = {}
                part = part[take[i]]
            }
        }
    }
}

console.log(result)

// let result = {}
// for(let key in obj){
//     let take = key.split(".")
//     let current = result
//     for(let i=0;i<take.length;i++){
//         let part = take[i]
//         if(i == take.length-1){
//             current[part] = obj[key]
//         }
//         else{
//             if(!current[part]){
//                 current[part] = {}
//             }
//             current = current[part]
//             console.log(current)
//         }
//     }
// }

// console.log(result)
