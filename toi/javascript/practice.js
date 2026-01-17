// const person = {
//     name: 'Alice',
//     age: 30,
//     city: 'Wonderland'
// };
// let {name="ahamathbasha",age,city} = person

// console.log(name)
// console.log(name)


// const obj1={
//     name:"vipin vargheese",
//     role:"reviewer"
// }

// let {name,role,position="manager"} = obj1

// console.log(position)

// const obj2={
//     name:"harrish",
//     role:"developer"
// }

// const {name:fullName,role:Role} = obj2
// console.log(fullName,Role)

// const obj4={
//     id:"1",
//     profile:{
//         name:"vignesh",
//         age:30
//     }
// }

// const {id,profile:{name,age}} = obj4

// console.log(id,name,age)

//tdz

// function demo(){
//     console.log(a)
//     let a = 10
// }

// demo()

// function demo2(){
//     console.log(b)
//     let b = 20
// }

// demo2()

// function demo3(){
//     console.log(c)
//     var c = 30
// }

// demo3()

//normal method

// const mathematicalOperation = {
//     addition:function(a,b){
//         return a+b
//     },
//     subtraction:function(a,b){
//         return a-b
//     }
// }

// console.log(mathematicalOperation.addition(10,10))

//this method

// const greet = {
//     name:"ahamathbasha",
//     greet:function(){
//         return `hello ${this.name}`
//     }
// }

// console.log(greet.greet())

//chained

// const chained={
//     x:10,
//     add:function(no){
//         this.x+=no
//     },
//     get:function(){
//         return this.x
//     }
// }

// chained.add(50)
// console.log(chained.get())

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,}$/

// const email = "rangathan@gmail.com"

// console.log(emailRegex.test(email))

//global

// let globalReg = /a/g

// console.log(globalReg.test("abcd"))
// console.log("abcd".match(globalReg))

//multiline

// let multilineReg = /^a/m

// console.log("ahamath\ngood\nadapatable".match(multilineReg))

//abc

// let charReg = /[abc]/g

// console.log(charReg.test("b"))

// let noReg = /[0-9]/g
// console.log(noReg.test(10))

// let orReg = /(cat|^dog)/
// console.log(orReg.test("tdoge"))

// let digitReg = /\d/g

// console.log(digitReg.test("i am 22 years old"))

// let spaceReg = /\s/g

// console.log(spaceReg.test("I"))

// console.log(spaceReg.test("I am the king"))

// let boundaryReg = /\bcat\b/g

// console.log(boundaryReg.test("I have cat"))
// console.log(boundaryReg.test("I have cats"))

// let plusReg = /n+/
// console.log(plusReg.test("ahamath ana"))

// let mulReg = /n*/
// console.log(mulReg.test("pakka commerical"))

// let optReg = /n?/
// console.log(optReg.test("pakka mass"))

//valueOf()

// const noObj = new Number(123)
// console.log(noObj.valueOf())

// const obj = {
//     a:10,
//     b:20,
//     valueOf:function(){
//         return this.a + this.b
//     }
// }

// console.log(obj.valueOf())

//date

// const date = new Date()

// console.log(date.getFullYear())

//calculate no of days between two days

// let startDate = new Date('2024-01-01')
// let todayDate = new Date()
// todayDate = todayDate.toISOString().slice(0,10)
// let endDate = new Date(todayDate)

// const diffTime = Math.abs(endDate - startDate)

// const diffDays = Math.floor(diffTime/(1000*60*60*24))

// console.log(diffDays)

//update today date to 20

// const date = new Date()
// date.setDate(date.getDate()+4)
// console.log(date)

// const name =Symbol('name')

// const obj = {
//     [name]:"ahamathbasha"
// }

// console.log(obj[name])

// const str = "shivaji"
// console.log(str.at(-1))

// const content = [1,2,3,4,5]
// console.log(content.at(-1))

// const arr = [1,2,3,4,5]
// arr.copyWithin(1,3)

// console.log(arr)

// const copyArr = [1,2,3,4,5,6,7,8,9,10]
// copyArr.copyWithin(2,5,8)
// // console.log(copyArr)

// const arr = [1, 2, 3, 4, 5];

// arr.splice(1,1)

// console.log(arr)

// arr.splice(1,0,10,7)
// console.log(arr)

// const arr = [1,2,3,4]

// const value = arr.find((val)=>val > 2)
// console.log(value)

//shadowing

// function outer(){
//     let a = 10
//     function inner(){
//         let a = 20
//         console.log(a)
//     }
//     inner()
//     console.log(a)
// }

// outer()

// //function shadowing

// let a= 10

// function shadow(){
//     let a = 20
//     console.log(a)
// }

// shadow()

// console.log(a)

//bock shadowing

// let a = 10

// {
//     let a = 20
//     console.log(a)
// }

// console.log(a)

//parameter shadowing

// let value = 100

// function parameter(value){
//     console.log(value)
// }

// parameter(105)
// console.log(value)

//illegal shadowin

// let a = 10

// {
//     var a = 10
// }

// legal shadowing


// var a = 10

// {
//     let a = 20
//     console.log(a)
// }

// console.log(a)

//call

// const object = {
//     name:'ahamathbasha'
// }

// function sayHi(arg){
//     return `hi ${this.name} ${arg}`
// }

// console.log(sayHi.call(object,"How are you"))

// console.log(sayHi.apply(object,["how are you"]))

// const greetFn = sayHi.bind(object)
// console.log(greetFn("How are you?"))

// const obj1 = {
//     name:"ahamathbasha"
// }

// const obj2 = {
//     profession : "software developer"
// }

// const target = {}

// Object.assign(target,obj1,obj2)

// console.log(target)

//generator function

// function *multiplyTable(n){
//     let limit = 100
//     while(limit != 0){
//         let result = limit * n
//         yield `${limit} * ${n} = ${result}`
//         limit--
//     }
// }

// const m = multiplyTable(3)

// for(let i=1;i<=100;i++){
//     console.log(m.next().value)
// }

//closure

// let count = 0

// function counter(){
//     return function(){
//         count++
//         return count
//     }
// }

// let counterCall = counter()
// console.log(counterCall())
// console.log(counterCall())
// console.log(counterCall())
// console.log(counterCall())
// console.log(counterCall())

// console.log(counter()())
// console.log(counter()())
// console.log(counter()())
// console.log(counter()())
// console.log(counter()())

//function composition

// const add5 = (x)=>{
//     return x + 5
// }

// const square = (x)=>{
//     return x * x
// }

// const compose = (...fns)=>(x)=>fns.reduceRight((acc,fn)=>fn(acc),x)

// const composedFunction=compose(add5,square)

// console.log(composedFunction(5))


//pipe -> left - to - right

// const add5 = (x)=>{
//     return x + 5
// }

// const squareFn = (x)=>{
//     return x * x
// }

// const compose = (...fns)=>(x)=>fns.reduce((acc,fn)=>fn(acc),x)

// const composed = compose(add5,squareFn)
// console.log(composed(5))

//currying

// function sum(a){
//     return function(b){
//         return function(c){
//             return a + b + c
//         }
//     }
// }

// console.log(sum(1)(2)(3))

// const sum = a => b => c =>a+b+c
// console.log(sum(1)(2)(3))

//callback example


// function processUser(callback){
//     setTimeout(()=>{
//         const userName = "ahamathbasha"
//         callback(userName)
//     },1000)
// }

// function professionByUserName(userName,callback){
//     setTimeout(()=>{
//         const userProfession = "AllRounder"
//         callback(userProfession)
//     })
// }


// processUser((userName)=>{
//     console.log("getting usersName",userName)
//     professionByUserName(userName,(profession)=>{
//         console.log("userProfession:",profession)
//     })
// })


//deep copy -> json object

// const obj={a:1,b:2,c:{d:1}}

// const newObj = JSON.parse(JSON.stringify(obj))

// newObj.c.d = 5

// console.log(obj)

// console.log(newObj)

// function deepCopy(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }

// const original={a:1,b:2,c:{d:3}}
// const dCopy=deepCopy(original)
// console.log(dCopy)
// dCopy.c.d=4
// console.log("original",original)
// console.log("deep Copy after value changed in nested object:",dCopy)

// const name = 'ahamathbasha'

// const obj = {
//     name: 'Charlie',
//     greet: () => {
//         console.log(`Hello, ${this.name}`); // 'this' refers to the outer context
//     }
// };


// console.log(obj.greet.call(obj))

// class Maths{
//     constructor(a,b){
//         this.a = a
//         this.b = b
//     }

//     print(){
//         console.log(this.a)
//         console.log(this.b)
//     }
// }

// const p = new Maths(10,20)
// p.print()


//inheritance

// class Vehicle{
//     constructor(name,model){
//         this.name = name
//         this.model = model
//     }

//     displayInfo(){
//         console.log(`vehicle name is ${this.name} and model name is ${this.model}`)
//     }
// }

// class Car extends Vehicle{
//     constructor(name,model){
//         super(name,model)
//     }

//     displayInfo(){
//         console.log("parent method called")
//         super.displayInfo()
//     }

//     startVehicle(){
//         console.log("car started")
//     }
// }

// const audi = new Car("retro",2025)

// audi.displayInfo()

// audi.startVehicle()

//object related methods

// const object = {
//     name:"ahamathbasha"
// }

// const newObj = {}

// Object.defineProperty(newObj,'name',{
//     value:"ahamathbasha",
//     writable:false,
//     enumerable:true,
//     configurable:false
// })

// Object.getOwnPropertyDescriptor(newObj,'name')

// console.log(newObj)

//accessors

// const object = {
//     firstName : "ahamathbasha",
//     lastName : "f",
//     set fullName(name){
//         let [first,last] = name.split(" ")
//         this.firstName = first
//         this.lastName = last
//     },
//     get fullName(){
//         return this.firstName + " " + this.lastName
//     }
// }

// console.log(object.fullName)

// object.fullName = "Manick Basha"

// console.log(object.fullName)

//prototype

// function Calculator(){}

// Calculator.prototype.add = function(a,b){
//     return a + b
// }

// const calci = new Calculator()
// console.log(calci.add(5,3))

//prototype chaining

// function Calculator(){}

// Calculator.prototype.add = function(a,b){
//     return a + b
// }

// function ScientificCalculator(){
//     Calculator.call(this)
// }

// ScientificCalculator.prototype = Object.create(Calculator.prototype)

// ScientificCalculator.prototype.multiply = function(a,b){
//     return a * b
// }

// const calci = new ScientificCalculator()

// console.log(calci.multiply(5,5))
// console.log(calci.add(5,5))

//prototype inheritance

// const Director = {
//     name:"Rajkumar Hirani"
// }

// const movies = {
//     __proto__ : Director,
//     movies : ["Munna bhai M.B.B.S","Lage Raho Munna Bhai","3 IDIOTS","PK","SANJU","DUNKI"]
// }

// console.log(movies.name)

//Proxy Object

// const object = {
//     name:"ahamathbasha",
//     age:20
// }

// const handler = {
//     get(target,prop){
//         return prop in target ? target[prop] : null
//     },
//     set(target,prop,value){
//         if(prop == 'age'){
//             if(value <= 0){
//                 return false
//             }else{
//                 target[prop] = value
//                 return true
//             }
//         }

//         if(prop == 'name'){
//             if(value.length == 0){
//                 return false
//             }else{
//                 target[prop] = value
//                 return true
//             }
//         }
//     }
// }

// const proxy = new Proxy(object,handler)

// console.log(proxy.age)

// proxy.name = "lakshya lalwani"
// console.log(proxy)

// console.log(object)

