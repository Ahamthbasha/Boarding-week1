// const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// const email = "ahamathbasa@gmail.com"

// console.log(emailReg.test(email))

// let a = 10

// {
//     let a = 20
//     console.log(a)
// }

// console.log(a)

//illegal shadowing

// let b = 10

// {
//     var b = 20
// }

//arrow 

// const person = {
//     name :"ahamathbasha",
//     greet:()=>{
//         console.log(`hello ${this.name}`)
//     }
// }

// person.greet.bind(person)()

//normal function.If you pass the method to a callback function which lost this context we need to control it thats why we bind to the specified object

// const person2 = {
//     name:"dhurandhar",
//     greet:function(){
//         console.log("Tere ishq mein")
//     }
// }

// setTimeout(person2.greet.bind(person2),1000)

// const normalObj= {name:"ahamathbasha",age:20,skills:"good human,multi tasker,Problem solver"}

// const createObj = Object.create(normalObj)
// createObj['name'] = "Maaveeran"

// console.log("createdObj",createObj)
// console.log(createObj.name)

// console.log('normal Obj',normalObj)

// const assignObj = Object.assign(normalObj)
// console.log("assignedObj",assignObj)

//accessors

// const obj = {
//     firstName:"ahamathbasha",
//     lastName:"F",
//     set fullname(name){
//         [this.firstName,this.lastName] = name.split(" ")
//     },
//     get fullname(){
//         return this.firstName + " " + this.lastName
//     }
// }

// console.log(obj.fullname)

// obj.fullname = "dhurandhar ikkis"

// console.log(obj.fullname)

// class MathUtils{
//     static add(a,b){
//         return a+b
//     }
// }

// console.log(MathUtils.add(10,10))

// function calculator(){}

// calculator.prototype.add = function(a,b){
//     return a+b
// }

// function mathOperastion(){}

// mathOperastion.prototype = Object.create(calculator.prototype)

// mathOperastion.prototype.mul = function(a,b){
//     return a*b
// }
// // const mathOps = new calculator()

// const mathOps = new mathOperastion()
// console.log(mathOps.add(5,5))
// console.log(mathOps.mul(5,5))

// const movie1 = {
//     name:"Mask"
// }

// const movie2 = {
//     actor:"ahamathbasha",
//     __proto__:movie1
// }

// const movie3 = {
//     director:"vikramam ashokan",
//     __proto__:movie2
// }

// console.log(movie3.name)

//proxy object

// const obj ={
//     name:"ahamathbasha",
//     age:20
// }

// const handler ={
//     get(target,props){
//         return props in target ? target[props] : null
//     },
//     set(target,props,value){
//         if(props in target){
//             target[props] = value
//         }else{
//             return null
//         }
//     },
// }

// const proxyObj = new Proxy(obj,handler)

// console.log(proxyObj)

// proxyObj.name = "maaveran"

// console.log(proxyObj)

// console.log(obj.name)


//encapsulation

// class BankAccount{
//     #balance

//     constructor(balance){
//         this.#balance = balance
//     }

//     deposit(amount){
//         this.#balance += amount
//     }

//     debit(amount){
//         if(this.#balance >= amount){
//             this.#balance -= amount
//         }
//         else if(amount > this.#balance){
//             console.log("amount is bigger but you dont have the balance")
//         }
//         else{
//             console.log("you dont have enough balance")
//         }
//     }

//     getBalance(){
//         console.log(this.#balance)
//     }
// }

// const india = new BankAccount(1000)

// india.deposit(2000)

// india.debit(24500)

// india.getBalance()

//multiple inheritance

// const canSwim = {
//     swim(){
//         console.log("swim")
//     }
// }

// class Birds{
//     constructor(name){
//         this.name = name
//     }
// }

// Object.assign(Birds.prototype,canSwim)

// class Penguin extends Birds{}

// const penguin = new Penguin("marco")

// penguin.swim()

// //abstraction


// class Car{
//     constructor(name){
//         this.name = name
//         this.startOrStop = true
//     }

//     startEngine(){
//         this.startOrStop = true
//         console.log("started")
//     }

//     stopEngine(){
//         this.startOrStop = false
//         console.log("car is stopped")
//     }
// }

// const bmw = new Car("BMW")
// bmw.startEngine()

// const data = {};
// const { user: { id } } = data;
// console.log(id);

// const car = { brand: undefined };
// const { brand = "Honda" } = car;
// console.log(brand);


// function pureFunction(a,b){
//     return a+b
// }

// console.log(pureFunction(5,5))

// function impureFunction(a,b){
//     console.log(a+b)
//     return a+b
// }
// console.log(impureFunction(10,20))


//call apply bind

// function greet(arg1){
//     return `hi ${this.name}.The argument i received ${arg1}`
// }

// const obj = {
//     name:"ahamathbasha"
// }

// console.log(greet.call(obj,"how are you?"))

// function greet2(args1,args2){
//     return `hello ${this.name}.The arguments we received ${args1} and ${args2}`
// }

// console.log(greet2.apply(obj,["hello mister","how are you"]))

// function greet3(args){
//     return `Hi ${this.name} and the arguments i have received are ${args}`
// }
// const greetFn = greet3.bind(obj,"hello ji")

// console.log(greetFn())

//closure

// let count = 0

// function closure(){
//     return function(){
//         count++
//         return count
//     }
// }

// let counter = closure()

// console.log(counter())
// console.log(counter())
// console.log(counter())

// const newClosure = closure()

// console.log(newClosure())
// console.log(newClosure())
// console.log(newClosure())
// console.log(newClosure())

// function* generatorFn(start,end){
//     while(start <= end){
//         let val = start+1
//         yield val
//         start = start+1
//         start++
//     }
// }

// const genEven = generatorFn(1,100)

// for(let i=1;i<=50;i++){
//     if(i%2 == 0){
//         console.log(genEven.next().value)
//     }else{
//         genEven.next()
//     }        
// }


// function sumCurry(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// const result = sumCurry(10)(20)(30)

// console.log(result)


//callback

// function getVal(callback){
//     let a = 10
//     let b = 20
//     callback(a,b)
// }

// getVal((a,b)=>{
//     console.log('result of the variable',a+b)
// })

//callbackHell

// function takeValue(a,b,callback1){
//     callback1(a,b)
// }

// function sumOfVariable(a,b,callback){
//     let result = a+b
//     callback(result)
// }

// function squareOfTheResult(result,callback){
//     let square = result * result
//     callback(square)
// }

// function HalfOfTheSquare(square,callback){
//     let halfOfSquare = Math.sqrt(square)
//     callback(halfOfSquare)
// }

// takeValue(10,20,(a,b)=>{
//     console.log('values you passed',a,b)
//     sumOfVariable(a,b,(result)=>{
//         console.log("sum Of Variable",result)
//         squareOfTheResult(result,(square)=>{
//             console.log("square of the result",square)
//             HalfOfTheSquare(square,(half)=>{
//                 console.log('half of the square',half)
//             })
//         })
//     })
// })

//promise example

// let Promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let data = 10
//         if(data){
//             resolve(data)
//         }else{
//             reject(data)
//         }
//     })
// })

// Promise1
// .then((resolve)=>{
//     console.log("resolved",resolve)
// })
// .catch((reject)=>{
//     console.log("rejected",reject)
// })


//async await

// function getNo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let data = 20
//             if(data){
//                 resolve(data)
//             }else{
//                 reject(data)
//             }
//         },1000)
//     })
// }

// async function Example(){
//     try {
//         const result = await getNo()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

// Example()

//deepCopy

// let obj = {name:'dhurandhar',movieInfo:{stars:["ranbir","akshay khanna"],director:"adhitya dhar"}}

// let shallowCopy = {...obj}

// console.log(shallowCopy)

// function deepCopy(obj){
//     if(obj == null || typeof obj != "object"){
//        return obj 
//     }

//     const copy = Array.isArray(obj) ? [] :{}
//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }

// let deepCopyObj = deepCopy(obj)
// console.log(deepCopyObj)

// let builtInDeepCopy = JSON.parse(JSON.stringify(obj))
// console.log(builtInDeepCopy)

// let structuredCloneCopy = structuredClone(obj)
// console.log(structuredCloneCopy)


//super

// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     speak(){
//         console.log("all animal can speak")
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }

//     speak(){
//         super.speak()
//     }
// }

// const puppy = new Dog("puppy")
// puppy.speak()

//memoization

// function factorial(no){
//     let fact = 1
//     for(let i=1;i<=no;i++){
//         fact *= i
//     }
//     return fact
// }


// const memoization = (fn)=>{
//     let cache = {}
//     return function(args){
//         let take = args
//         if(take in cache){
//             return cache[take]
//         }else{
//             let result = fn(take)
//             cache[take] = result
//             return result
//         }
//     }
// }

// const memoize = memoization(factorial)
// console.time()
// console.log(memoize(5))
// console.timeEnd()

// console.time()
// console.log(memoize(5))
// console.timeEnd()

//deep Freeze

// function deepFreeze(obj){
//     let propsNames = Object.getOwnPropertyNames(obj)

//     for(let val of propsNames){
//         const value = obj[val]

//         if(value != null && typeof value == "object"){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// let obj = {
//     name: "john",
//     details: {
//         age: 20,
//         skills: ["js", "react"]
//     }
// }

// deepFreeze(obj);

// obj.details.age = 30;       
// obj.details.skills.push("c");


// const person = {
//   name: "John",
//   getName() {
//     return this.name;
//   },
// };

// const ref = person.getName;
// console.log(person.getName())
// console.log(ref.bind(person)())


// function removeDuplicates(arr){
//     let newArr = []
//     for(let val of arr){
//         if(!newArr.includes(val)){
//             newArr.push(val)
//         }
//     }
//     return newArr
// }

// console.log(removeDuplicates([1,1,1,1,2,3,3,42,4]))

// function removeDuplicates(arr){
//     let newArr = []
    
//     for(let i=0;i<arr.length;i++){
//         let check = false
//         for(let j=0;j<newArr.length;j++){
//             if(arr[i] == newArr[j]){
//                 check = true
//                 break
//             }
//         }
//         if(!check){
//             newArr.push(arr[i])
//         }
//     }

//     return newArr
// }

// console.log(removeDuplicates([1,1,2,2,2,2,2,2,3,4,3,4,23,42]))


// function flatArr(arr,result=[]){
//     for(let val of arr){
//         if(Array.isArray(val)){
//             flatArr(val,result)
//         }else{
//             result.push(val)
//         }
//     }
//     return result
// }

// console.log(flatArr([1,[2,[3,[4,5,6,[7,10,20,21]]]]]))

//anagram

// function anagram(str1,str2){

//     if(str1.length != str2.length){
//         return false
//     }

//     let freqMap = {}

//     for(let val of str1){
//         if(freqMap[val]){
//             freqMap[val]++
//         }else{
//             freqMap[val] = 1
//         }
//     }

//     for(let val of str2){
//         if(!freqMap[val]){
//             return false
//         }
//         else{
//             freqMap[val]--
//         }
//     }

//     return true
// }

// console.log(anagram("i","iam"))

// Array.prototype.myMap = function(callback){
//     let newArr = []

//     for(let i=0;i<this.length;i++){
//         newArr.push(callback(this[i],i,this))
//     }

//     return newArr
// }

// let arr = [1,2,3,4,5]

// let result = arr.myMap((val)=>{
//     return val * val
// })

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//1. Find total spending per user across all months
//output
// {
//   Rahul: 2900,
//   Meera: 2350,
//   Vijay: 2300
// }

// let result = {}

// for(let val of transactions){
//     if(result[val.user]){
//         result[val.user] += val.amount
//     }else{
//         result[val.user] = val.amount
//     }
// }

// console.log(result)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. Group transactions by month

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

// let groupTransactionByMonth = {}

// for(let val of transactions){
//     if(groupTransactionByMonth[val.date.slice(0,7)]){
//         groupTransactionByMonth[val.date.slice(0,7)].push(val)
//     }else{
//         groupTransactionByMonth[val.date.slice(0,7)] = [val]
//     }
// }

// console.log(groupTransactionByMonth)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Find the highest entire transaction per month

//output format

// {
//   '2025-01': { user: 'Meera', amount: 1500 },
//   '2025-02': { user: 'Vijay', amount: 1600 },
//   '2025-03': { user: 'Rahul', amount: 2000 }
// }

// let groupByMonth = {}

// for(let val of transactions){
//     if(groupByMonth[val.date.slice(0,7)]){
//         groupByMonth[val.date.slice(0,7)].push(val)
//     }else{
//         groupByMonth[val.date.slice(0,7)] = [val]
//     }
// }

// console.log(groupByMonth)

// let finalResult = {}

// for(let key in groupByMonth){
//     let highAmountUser = {}
//     for(let val of groupByMonth[key]){
//         if(highAmountUser[val.user]){
//             highAmountUser[val.user] += val.amount
//         }else{
//             highAmountUser[val.user] = val.amount
//         }
//     }

//     let values = Object.entries(highAmountUser)
//     values.sort((a,b)=>b[1]-a[1])

//     finalResult[key] = {user:values[0][0],amount:values[0][1]}
// }

// console.log(finalResult)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. find the highest single transaction

//output format

// {
//   '2025-01': { user: 'Meera', amount: 1500, date: '2025-01-20' },
//   '2025-02': { user: 'Vijay', amount: 1600, date: '2025-02-14' },
//   '2025-03': { user: 'Rahul', amount: 2000, date: '2025-03-14' }
// }

// let result = {}

// for(let val of transactions){
//     let month = val.date.slice(0,7)
//     if(!result[month]){
//         result[month] = {...val}
//     }else{
//         let takeValue = result[month].amount
//         if(val.amount > takeValue){
//             result[month] = {...val}
//         }
//     }
// }

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5.count no of transactions done by each user per month
// {
//   '2025-01': { Rahul: 2, Meera: 1 },
//   '2025-02': { Meera: 1, Vijay: 1, Rahul: 1 },
//   '2025-03': { Rahul: 1, Meera: 1, Vijay: 1 }
// }

// let result = {}

// for(let val of transactions){
//     let month = val.date.slice(0,7)
//     if(result[month]){
//         let user = val.user
//         if(!result[month][user]){
//             result[month][user]=1
//         }else{
//             result[month][user]++
//         }

//     }else{
//         let user = val.user
//         result[month] = {}  
//         result[month][user] = 1

//     }
// }

// console.log(result)

// 6.find average spending per user per month

//output format

// {
//   '2025-01': [
//     { user: 'Rahul', avgAmount: 350 },
//     { user: 'Meera', avgAmount: 1500 }
//   ],
//   '2025-02': [
//     { user: 'Meera', avgAmount: 350 },
//     { user: 'Vijay', avgAmount: 1600 },
//     { user: 'Rahul', avgAmount: 200 }
//   ],
//   '2025-03': [
//     { user: 'Rahul', avgAmount: 2000 },
//     { user: 'Meera', avgAmount: 500 },
//     { user: 'Vijay', avgAmount: 700 }
//   ]
// }

// let result = {}

// for(let val of transactions){
//     let month = val.date.slice(0,7)
//     if(result[month]){
//         result[month].push(val)
//     }else{
//         result[month] = [val]
//     }
// }

// let final = {}

// for(let key in result){
//     let month = key
//     let takeAmount = {}
//     let takeCount = {}
//     for(let val of result[key]){
//         if(takeAmount[val.user]){
//             takeAmount[val.user] += val.amount
//             takeCount[val.user]++
//         }else{
//             takeAmount[val.user] = val.amount
//             takeCount[val.user] = 1
//         }
//     }

//     for(let key in takeAmount){
//         let amount = takeAmount[key]
//         let count = takeCount[key]

//         let averageSpendingAmount = Math.floor(amount/count)

//         if(final[month]){
//             final[month].push({user:key,avgAmount:averageSpendingAmount})
//         }else{
//             final[month] = [{user:key,avgAmount:averageSpendingAmount}]
//         }
//     }
// }
// console.log(final)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// article and video id

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

// const result = []

// for(let value of article){
//     const filterVideo = videos.filter((val)=>{
//        return val.articleId == value.id 
//     })
//     result.push(
//         {article:value},
//         {videos:filterVideo}
//     )
// }

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const data = {
//   users: [
//     {id:1, name:"A", details:{age:25, city:"NY"}},
//     {id:2, name:"B", details:{age:30, city:"LA"}}
//   ]
// }

//Expected output format
// [
//   { id: 1, name: 'A', age: 25, city: 'NY' },
//   { id: 2, name: 'B', age: 30, city: 'LA' }
// ]

// let result = []

// for(let key in data){
//     for(let val of data[key]){
//         let newObj = val
//         let obj = {}
//         for(let key in newObj){
//             if(typeof newObj[key] == "object"){
//                 let val = newObj[key]
//                 obj = {...obj,...val}
//             }else{
//                 obj[key] = newObj[key]
//             }
//         }
//         result.push(obj)
//     }
// }

// console.log(result)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const products = [
//   {name:"apple", qty:2},
//   {name:"banana", qty:3},
//   {name:"apple", qty:4}
// ];

// // Expected output: [{name:"apple",qty:6},{name:"banana",qty:3}]

// let final = []
// let result = {}

// for(let val of products){
//     if(result[val.name]){
//         result[val.name] += val.qty
//     }else{
//         result[val.name]=val.qty
//     }
// }

// for(let key in result){
//     final.push({name:key,qty:result[key]})
// }

// console.log(final)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let object = {
//     g:"green",
//     r:"red",
//     y:"yellow"
// }

// // Expected output : {green:"g",red:"r",yellow:"y"}

// let newObj = {}
// for(let key in object){
//     newObj[object[key]] = key
// }

// console.log(newObj)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
//         acc.obj = cur
//     }
//     return acc
// },{salary:Infinity,obj:null})

// console.log(lowest.obj)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function largestArr(arr){
//     let result = arr.reduce((acc,cur)=>{
//         if([acc.first,acc.second,acc.third,acc.fourth].includes(cur)){
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


// console.log(largestArr([1,1,1,10000000000,1,21000,21000,200,200,10000,10000,11]))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function smallestArr(arr){
//     let result = arr.reduce((acc,cur)=>{
//         if([acc.first,acc.second,acc.third,acc.fourth].includes(cur)){
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

// console.log(smallestArr([1,1,2,2,-1,-1,0,0,1,1,1,2,90,90,90]))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function strLargest(str){
//     let arr = str.split(" ")

//     let largest = arr.reduce((acc,cur)=>{
//         if([acc.first,acc.second,acc.third,acc.fourth].includes(cur)){
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
//     return largest
// }

// console.log(strLargest("Hi I am ahamathbasha disco disco young man young man forever man arangam adhirattumey"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function strSmallest(str){
//     let arr = str.split(" ")

//     let smallest = arr.reduce((acc,cur)=>{
//         if(cur.length == acc.first.length || cur.length == acc.second.length || cur.length == acc.third.length || cur.length == acc.fourth.length){
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
//     },{first:".".repeat(1000),second:".".repeat(1000),third:".".repeat(1000),fourth:".".repeat(1000)})
//     return smallest
// }

// console.log(strSmallest("young man young man forever man arangam adhira visilu paraka way"))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//starts with caps

// let str = "i love movies"

// let startWordCaps = str.split(" ").map((val)=>{
//     return val[0].toUpperCase() + val.slice(1)
// }).join(" ")

// console.log(startWordCaps)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//end with caps

// let str2 = "i love movies"

// let endWordCaps = str2.split(" ").map((val)=>{
//     return val.slice(0,val.length-1) + val[val.length-1].toUpperCase()
// }).join(" ")

// console.log(endWordCaps)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//write a function which take array of object and subject as a parameter their which subject has higher marks show that object

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

// function highestScore(obj,given){
//     let max = 0
//     let highestScorer
//     for(let val of obj){
//         let takeScores = val.scores
//         let check = false
//         for(let key in takeScores){
//             if(key == given){
//                 let maxRef = max
//                 max = Math.max(takeScores[key],max)
//                 if(maxRef != max){
//                     check = true
//                 }else{
//                     check = false
//                 }
//             }
//         }
//         if(check){
//             highestScorer = val
//         }
//     }
//     return highestScorer
// }


// console.log(highestScore(students,"english"))
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//flat file system recursively. Expected output : ['file1.txt','file2.txt',]


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


// function flatFileSystem(obj,result=[]){
//     for(let key in obj){
//         if(key == "files"){
//             for(let val of obj[key]){
//                 result.push(val)
//             }
//         }
//         else if(key == "folders"){
//             for(let val of obj[key]){
//                 flatFileSystem(val,result)
//             }
//         }
//     }

//     return result
// }

// console.log(flatFileSystem(fileSystem))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


// let result = {}

// for(let val of transactions){
//     let month = val.date.slice(0,7)
//     if(result[month]){
//         result[month].push(val)
//     }else{
//         result[month] = [val]
//     }
// }

// let final = {}

// for(let key in result){
//     let amountMap = {}
//     for(let val of result[key]){
//         if(amountMap[val.user]){
//             amountMap[val.user] += val.amount
//         }else{
//             amountMap[val.user] = val.amount
//         }
//     }
//     let hightest = 0
//     let person 
//    for(let key in amountMap){
//     if(amountMap[key] > hightest){
//         hightest = amountMap[key]
//         person = key
//     }
//    }

//    final[key] = {}
//    final[key]['topSpender'] = person
// }

// console.log(final)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const orders = [
//   { id: 1, customer: "Alice", items: ["apple", "banana"] },
//   { id: 2, customer: "Bob", items: ["banana", "orange"] },
//   { id: 3, customer: "Alice", items: ["orange"] },
//   { id: 4, customer: "Charlie", items: ["apple", "apple","banana"]}
// ];

//Expected Output:
// [
//   { customer: "Alice", items: ["apple", "banana", "orange"] },
//   { customer: "Bob", items: ["banana", "orange"] },
//   { customer: "Charlie", items: ["apple", "banana"] }
// ]

// let orderMap = {}

// for(let val of orders){
//     if(orderMap[val.customer]){
//         orderMap[val.customer].add(...val.items)
//     }else{
//         orderMap[val.customer]=new Set(val.items)
//     }
// }

// let result = []

// for(let key in orderMap){
//     result.push({
//         customer:key,
//         items:[...orderMap[key]]
//     })
// }

// console.log(result)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const obj = {
  newObj: {
    obj2: {
      obj5: {
        one: 1,
      },
    },
  },
  obj3: {
    obj4: {
      two: 2,
    },
  },
};

//expected output : { 'newObj..obj2.obj5.one': 1, 'obj3..obj4.two': 2 }

function mergeObj(obj,result={},prefix = ""){
    for(let key in obj){
        let newKey = prefix ? prefix + '.' + key : key
        if(typeof obj[key] == 'object'){
            mergeObj(obj[key],result,newKey)
        }else{
            result[newKey] = obj[key]
        }
    }
    return result
}

console.log(mergeObj(obj))

