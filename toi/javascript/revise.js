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

// function destructureObj(obj,keys,result={}){
//     if(typeof obj[keys] != 'object'){
//         return obj
//     }

//     for(let key in obj){
//         let prefixKey = keys ? keys + '.' + key : ''
//         if(typeof obj[key] == 'object'){
//             destructureObj(obj[key],prefixKey,result)
//         }else{
//             result[prefixKey] = obj[key]
//         }
//     }

//     return result
// }

// console.log(destructureObj(obj))
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


// let result = {}


// for(let key in obj){
//     let keys = key.split(".")
//     let current = result
//     for(let i=0;i<keys.length;i++){
//         let part = keys[i]
//         if(i == keys.length-1){
//             current[part] = obj[key]
//         }

//         if(!current[part]){
//             current[part] = {}
//         }
//         current = current[part]
//     }
// }

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//incase of using object as a key it will convert the object into string behid the scence if you again an object as a key it will overwrite the value.

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;

// console.log(a.b)
// a[c] = 456;

// console.log(a[b]); // 123
// console.log(a[c]);

// console.log(a)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function anagram(str1,str2){
//     if(str1.length != str2.length){
//         return false
//     }

//     let freqMap = {}

//     for(let val of str1){
//         if(freqMap[val]){
//             freqMap[val]--
//         }else{
//             freqMap[val] = 1
//         }
//     }

//     for(let val of str2){
//         if(!freqMap[val]){
//             return false
//         }

//         freqMap[val]--
//     }

//     return true
// }

// console.log(anagram('silently',"ylistenllll"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for(let i = 1;i<=3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for(var i=1;i<=3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Array.prototype.myMap = function(callback){
//     let newArr = []

//     for(let i=0;i<this.length;i++){
//         newArr.push(callback(this[i],i,this))
//     }

//     return newArr
// }

// let arr = [1,2,3,4,5]

// let result = arr.myMap((val)=>val*val)

// console.log(result)

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

//output
// {
//   Rahul: 2900,
//   Meera: 2350,
//   Vijay: 2300
// }

// Find total spending per user across all months

// let result = {}

// for(let val of transactions){
//     if(result[val.user]){
//         result[val.user] += val.amount
//     }else{
//         result[val.user] = val.amount
//     }
// }

// console.log(result)

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

// Group transactions by month

//output format

// {
//   '2025-01': [
//     { user: 'Rahul', amount: 300, date: '2025-01-20' },
//     { user: 'Rahul', amount: 400, date: '2025-01-29' },
//     { user: 'Meera', amount: 1500, date: '2025-01-20' }
//   ],
//   '2025-02': [
//     { user: 'Meera', amount: 350, date: '2025-02-10' },
//     { user: 'Vijay', amount: 1600, date: '2025-02-14' },
//     { user: 'Rahul', amount: 200, date: '2025-02-25' }
//   ],
//   '2025-03': [
//     { user: 'Rahul', amount: 2000, date: '2025-03-14' },
//     { user: 'Meera', amount: 500, date: '2025-03-15' },
//     { user: 'Vijay', amount: 700, date: '2025-03-12' }
//   ]
// }

// let result = {}
// for(let val of transactions){
//     let date = val.date.slice(0,7)
//     if(result[date]){
//         result[date].push(val)
//     }else{
//         result[date]= [val]
//     }
// }

// console.log(result)


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

// Find the highest entire transaction per month

//output format

// {
//   '2025-01': { user: 'Meera', amount: 1500 },
//   '2025-02': { user: 'Vijay', amount: 1600 },
//   '2025-03': { user: 'Rahul', amount: 2000 }
// }

// let result = {}

// for(let val of transactions){
//     let date = val.date.slice(0,7)
//     if(result[date]){
//         result[date].push(val)
//     }
//     else{
//         result[date] = [val]
//     }
// }

// for(let [date,users] of Object.entries(result)){
//     let usersAmountMap = {}

//     for(let val of users){
//         if(usersAmountMap[val.user]){
//             usersAmountMap[val.user] += val.amount
//         }else{
//             usersAmountMap[val.user] = val.amount
//         }
//     }

//     let highest = -Infinity
//     let obj = null
//     for(let key in usersAmountMap){
//         if(usersAmountMap[key] > highest){
//             highest = usersAmountMap[key]
//             obj = key
//         }
//     }

//     let final = {}

//     final.user = obj
//     final.amount = highest

//     result[date] = final
// }

// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

//find the highest single transaction

//output format

// {
//   '2025-01': { user: 'Meera', amount: 1500, date: '2025-01-20' },
//   '2025-02': { user: 'Vijay', amount: 1600, date: '2025-02-14' },
//   '2025-03': { user: 'Rahul', amount: 2000, date: '2025-03-14' }
// }

// let result = {}

// for(let val of transactions){
//     let date = val.date.slice(0,7)
    
//     if(result[date]){
//         result[date].push(val)
//     }else{
//         result[date] = [val]
//     }
// }

// for(let [date,users] of Object.entries(result)){
//     let highestAmount = -Infinity
//     let obj = null

//     for(let val of users){
//         if(val.amount > highestAmount){
//             highestAmount = val.amount
//             obj = val
//         }
//     }

//     result[date] = obj
// }

// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//count no of transactions done by each user per month

// {
//   '2025-01': { Rahul: 2, Meera: 1 },
//   '2025-02': { Meera: 1, Vijay: 1, Rahul: 1 },
//   '2025-03': { Rahul: 1, Meera: 1, Vijay: 1 }
// }

// let result = {}

// for(let val of transactions){
//     let date = val.date.slice(0,7)
//     if(result[date]){
//         result[date].push(val)
//     }
//     else{
//         result[date] = [val]
//     }
// }

// for(let [key,users] of Object.entries(result)){
//     let temp = {}
//     for(let val of users){
//         if(temp[val.user]){
//             temp[val.user]++
//         }else{
//             temp[val.user] = 1
//         }
//     }
//     result[key] = temp
// }

// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

// let result = {}

// for(let val of transactions){
//     let date = val.date.slice(0,7)
//     if(result[date]){
//         result[date].push(val)
//     }
//     else{
//         result[date] = [val]
//     }
// }

// for(let [key,users] of Object.entries(result)){
//     let temp = {}
//     for(let val of users){
//         if(temp[val.user]){
//             temp[val.user]= {amount:temp[val.user].amount+val.amount,count:temp[val.user].count+1}
//         }
//         else{
//             temp[val.user] = {amount:val.amount,count:1}
//         }
//     }

//     result[key] = []
//     for(let [userName,amount] of Object.entries(temp)){
//         let averageAmount = Math.floor(amount.amount/amount.count)

//         result[key].push({
//             user:userName,
//             avgAmount:averageAmount
//         })
//     }
// }

// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let str = 'a1b1c10'

// let char = []
// let charIndex = []
// let no = []

// for(let i=0;i<str.length;i++){
//     if(/[a-zA-Z]/g.test(str[i])){
//         char.push(str[i])
//         charIndex.push(i)
//     }
// }

// for(let i=0;i<charIndex.length-1;i++){
//     no.push(str.slice(charIndex[i]+1,charIndex[i+1]))
// }

// no.push(str.slice(charIndex[charIndex.length-1]+1))


// let result = ''

// for(let i=0;i<char.length;i++){
//     result += char[i].repeat(no[i])
// }

// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////