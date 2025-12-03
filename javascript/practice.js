// destructuring


// const user = { name: "John", age: 25 };
// const { name, age } = user;
// console.log(name, age);


// const obj = { country: "India" };
// const { city } = obj;
// console.log(city);

// const product = { id: 1 };
// const { price = 10 } = product;
// console.log(price + 10);


// const settings = { theme: "dark" };
// const { theme, mode = "auto" } = settings;
// console.log(theme, mode);


// const person = { name: "Alice", age: undefined };
// const { age = 30 } = person;
// console.log(age);

// const emp = { id: 101, salary: 5000 };
// const { id: empId, salary: empSalary } = emp;
// console.log(empId, empSalary);

// const student = { name: "Kavin" };
// const { name: studentName } = student;
// console.log(studentName);

// const user = {
//   name: "Ravi",
//   address: { city: "Chennai", pin: 600001 }
// };

// const { address: { city } } = user;
// console.log(city);

// const obj = {
//   info: {
//     details: {
//       value: 42
//     }
//   }
// };

// const { info: { details: { value } } } = obj;
// console.log(value);


// const data = {};
// const { user: { id } } = data;
// console.log(id);

// const company = {
//   dept: {
//     manager: { name: "Shiva" }
//   }
// };

// const { dept: { manager: { name }, role = "Engineer" } } = company;
// console.log(name, role);


// new learning

// destructuring means just extracting values from objects or arrays assign it to the variable. It does not over write the original object or array. In case some object property is undefined then only default value will be used

// const car = { brand: null };
// const { brand = "Honda" } = car;
// console.log(brand);

// const config = { port: 3000 };
// const { port: p = 8000 } = config;
// console.log(p);

// const obj = {
//   user: {
//     profile: {
//       name: "Jenifer",
//       age: 21
//     }
//   }
// };

// const { user: { profile: { name: n, age = 30 } } } = obj;
// console.log(n, age);


// const settings = {
//   mode: undefined,
//   config: { speed: 50 }
// };

// const {
//   mode = "auto",
//   config: { speed: s = 10 }
// } = settings;

// console.log(settings.mode)

// console.log(mode, s);
// console.log(settings.mode)

// methods

// normal
// const calculator ={
//     add:function(a,b){
//         return a+b
//     }
// }

// console.log(calculator.add(2,3));

// //this

// const person ={
//     name:"Ahamathbasha",
//     greet:function(){
//         return `Hello, ${this.name}!`
//     }
// }

// console.log(person.greet());


// //chain

// const chainObj = {
//     val : 10,
//     add:function(val){
//         this.val += val;
//     },
//     get:function(){
//         return this.val
//     }
// }

// chainObj.add(10)
// console.log(chainObj.get())

// email regex

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/

// const email = "bashagi@gmail.com"

// console.log(emailRegex.test(email))


// regex practical

// console.log("banana".match(/a/));
// console.log("banana".match(/a/g));

// 2.write a regex to find all vowels in a string

// const name = "ahamathbasha AAradi Kaathue"
// const vowelRegex = /[aeiouAEIOU]/g

// console.log(name.match(vowelRegex))

// what is the difference between /a/ and /a/g in regex?
// console.log(/a/.test("JavaScript"));
// console.log(/a/g.test("JavaScript"));


// when we use g it always remember the last index if we call it multiple times if the string is not there it will give false and again it will start from the beginning.It is stateful.

// without g it always start from the beginning.It is stateless.

// console.log(/[abc]/.test("dog"));

// console.log("year2025".match(/[0-9]/g));


// const str = "Pin: 600, Code: 123, Zip: 999"
// const regEx = /[0-9]/g

// console.log(str.match(regEx))



// const phone = "Phone: 987 654 3210"

// const phoneRegex = /\d/g

// console.log(phone.match(phoneRegex))

// console.log(/\bcar/.test("carrace"));

// const regEx = /\bpro/g

// const str = "programming is a process to produce a product"

// console.log(regEx.test(str))


// console.log(/(cat|dog)/.test("hotdog"));


// const colorRegEx = /(green|red)/g
// const colors = "red green blue yellow green red"

// console.log(colors.match(colorRegEx));

// console.log("Hi there".match(/\s/g));

// Write a regex to collapse multiple spaces into one space.

// const text = "This    is  a   sample    text."

// const spaceRegex = /\s+/g

// const str = text.replace(spaceRegex," ")

// console.log(str)

// console.log("aaaaa".match(/a+/));

// "Order: 555 items"

// const order = "Order: 555 items"
// const multiple = /\d+/g
// const consecutiveNo = order.match(multiple)
// console.log(consecutiveNo)

// const regEx = /go*/g
// const str = "go gooo gone g"
// console.log(str.match(regEx))

// const str1 = "ice-cream"
// const str2 = "icecream"
// const regEx1= /ice(-)?cream/g
// const regEx2 = /icecream/g

// console.log(str1.match(regEx1))
// console.log(str2.match(regEx2))

// const numObj = new Number()
// console.log(numObj)
// console.log(numObj.valueOf())

// const checkValueOf = {
//     a:10,
//     b:20,
//     valueOf:function(){
//         return this.a + this.b
//     }
// }

// console.log(checkValueOf.valueOf())



// let arr = [1,2,3,4,5,6,7,8,9,10]

// arr.copyWithin(0,5)

// console.log(arr);

// pure function

// function add(a,b){
//     return a+b
// }

// //impure function

// function add2(a,b){
//     console.log(a+b)
//     return a+b
// }

// function sayHi1(args1){
//     console.log("hi "+ this.name + args1)
// }

// const person = { name: "Alice" }

// sayHi1.call(person,", welcome to the team!")

// function sayHi2(...args){
//     console.log(`hi ${this.name} ${args}`)
// }

// sayHi2.apply(person,["!"," How are you?"])  


// function sayHi(){
//     console.log(`hi ${this.name}`)
// }
// setTimeout(sayHi.bind(person),100)


// let target = {}
// let source = { a: 1, b: 2 }
// Object.assign(target,source)
// console.log(target)


// closure

// function counter(){
//     let count = 0
//     return function(){
//         count++
//         return count
//     }
// }

// console.log(counter()())
// console.log(counter()())
// console.log(counter()())
// console.log(counter()())

// let makeCounter = counter()

// console.log(makeCounter())
// console.log(makeCounter())
// console.log(makeCounter())
// console.log(makeCounter())

// generator function

// function* generateAlternateNo(){
//     let num = 100
//     while(num != 0){
//         yield num
//         num -= 2
//     }
// }

// const generate = generateAlternateNo()

// for(let  i=1;i<=50;i++){
//     if(i % 2 != 0){
//         console.log(generate.next().value)
//     }else{
//         generate.next()
//     }
// }

// currying 

// function multiply(a){
//     return function(b){
//         return function(c){
//             return a * b * c
//         }
//     }   
// }

// const result = multiply(2)(1)(5)

// console.log(result)

// callback 

// function take(fn){
//     setTimeout(()=>{
//         let a = 10
//         let b = 20
//         fn(a,b)
//     })
// }

// take((a,b)=>{
//     console.log(a+b)
// })


// callback hell

// function take(fn){
//     setTimeout(()=>{
//         let a = 10
//         let b = 20
//         fn(a,b)
//     })
// }

// function double(a,b,fn){
//     setTimeout(()=>{
//         let aDouble = a*a
//         let bDouble = b*b
//         fn(aDouble*bDouble)
//     })
// }

// function squareOfDouble(result,fn){
//     setTimeout(()=>{
//         let square = result * result
//         fn(square)
//     })
// }

// take((a,b)=>{
//     console.log("values of the variable we get",a+b)
//     double(a,b,(result)=>{
//         console.log("result",result)
//         squareOfDouble(result,(squareOfResult)=>{
//             console.log("square of Double",squareOfResult)
//         })
//     })
// })

// promise and types

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let data = 10
//         if(data){
//             resolve(data)
//         }else{
//             reject(data)
//         }
//     },1000)
// })


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let data
//         if(data){
//             resolve(data)
//         }else{
//             reject(data)
//         }
//     },500)
// })


// Promise.race([promise1,promise2])
// .then((resolve)=>{
//     console.log("success result",resolve)
// })
// .catch((reject)=>{
//     console.log("rejected result",reject)
// })

// Promise.any([promise1,promise2])
// .then((resolve)=>{
//     console.log("success result",resolve)
// })
// .catch((reject)=>{
//     console.log("rejected result",reject)
// })

// Promise.all([promise1,promise2])
// .then((resolve)=>{
//     console.log("promise all success result",resolve)
// })
// .catch((reject)=>{
//     console.log("promise all rejected result",reject)
// })

// Promise.allSettled([promise1,promise2])
// .then((resolve)=>{
//     console.log("promise all success result",resolve)
// })

// let pomise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let data = 10
//         if(data){
//             resolve(data)
//         }else{
//             reject(data)
//         }
//     })
// })
// pomise.then((result)=>{
//     console.log("success",result)
// })
// .catch((error)=>{
//     console.log("error",error)
// })
// .finally(()=>{
//     console.log("cleanup activity")
// })  

// async await

// function promise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data = "success"
//             if (data) {
//                 resolve(data)
//             } else {
//                 reject(data)
//             }
//         })
//     })
// }

// async function callPromise(){
//     try{
//         const response = await promise()
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }
// callPromise()

//copy

// let obj = {a:10,b:20,c:{d:30,e:40}}

// let shallowCopy = {...obj}

// console.log(shallowCopy)


// function deepCopy(obj){
//     if(obj == null || typeof obj != "object"){
//         return obj
//     }
    
//     const copy = Array.isArray(obj) ? [] : {}
    
//     for(let key in obj){
//         copy[key] = deepCopy(obj[key])
//     }
    
//     return copy
// }


// const alterNateDeepCopy = JSON.parse(JSON.stringify(obj))

// const alterNateDeepCopy2 = structuredClone(obj)

//class and inheritance
// class Math{
//     add(n1,n2){
//         return n1+n2
//     }
// }

// class ExtraMath extends Math{
//     mul(n1,n2){
//         return n1 * n2
//     }
// }

// const operation = new ExtraMath()

// console.log(operation.mul(10,20))

//constructor function

// function createObj(name){
//     this.name = name
// }

// const person = new createObj("basha")
// console.log(person)


//super keyword

// class Animal{
//     constructor(name){
//         this.name = name
//     }
    
//     speak(){
//         console.log("all animal makes a sound")
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     speak(){
//     super.speak()
//     }
// }

// const puppy = new Dog("puppy")

// puppy.speak()

//Object.create

// let obj = {
//     name:"ahamathbasha",
//     speak:function(){
//         console.log('i love you')
//     }
// }

// let obj2 = Object.create(obj)

// obj2.speak()

// //object.defineProperty
// let obj3 = {}

// Object.defineProperty(obj3,'name',{
//     value : "basha",
//     writable : false,
//     enumerable : true
// })

// console.log(obj3)

// //object.getOwnPropertyDescriptor

// const descriptor = Object.getOwnPropertyDescriptor(obj3,'name')
// console.log(descriptor)

// //Object.getPrototypeOf

// let obj4 = {
//     name:"basha",
//     speak:function(){
//         console.log("basha ji")
//     }
// }

// const obj5 = Object.create(obj4)

// console.log(obj4 === Object.getPrototypeOf(obj5))

// //Object.keys

// const keys = Object.keys(obj4)

// //Object.values

// const values = Object.values(obj4)

// //Object.entries

// const entries = Object.entries(obj4)

// //Object.seal

// const objSeal = Object.seal(obj4)

// const objFreeze = Object.freeze(obj4)

// const isFrozen = Object.isFrozen(objFreeze)


// Object.preventExtensions(obj4)

// const object = {
//     firstName : "Arjun",
//     lastName : "Sarkar",
//     set fullName(name){
//         let [firstName,secondName] = name.split(" ")
//         this.firstName = firstName
//         this.lastName = secondName
//     },
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(object.fullName)

// object.fullName = "Ahamathbasha F"

// console.log(object.fullName)

// class MathUtils{
//     static add(a,b){
//         return a + b
//     }
// }

// const result = MathUtils.add(10,20)
// console.log(result)


// function data(name){
//     this.name = name
// }

// const person = new data("basha")
// console.log(person.name)

//prototype

// function calculator(){}

// calculator.prototype.add = function(a,b){
//     return a+b
// }

// const addOperation =new calculator()

// console.log(addOperation.add(5,4))

// //prototype chaining

// function calculator(){}

// calculator.prototype.add = function(a,b){
//     return a + b
// }

// function scientificCalculator(){
//     calculator.call(this)
// }

// scientificCalculator.prototype = Object.create(calculator.prototype)

// scientificCalculator.prototype.mul = function(a,b){
//     return a * b
// }

// const mathsOperation = new scientificCalculator()
// console.log(mathsOperation.mul(10,20))
// console.log(mathsOperation.add(20,10))

//prototype inheritance

// const parent = {
//     greet:function(){
//         console.log("hello parent")
//     }
// }

// const child = {
//     __proto__ : parent,
//     sayHi:function(){
//         console.log("hi")
//     }
// }

// child.sayHi()

//proxy object

// const obj = {
//     name:"ahamathbasha",
//     age:30
// }

// const handler = {
//     get(target,props){
//         if(props in target){
//             return target[props] 
//         }
//     },
    
//     set(target,props,value){
//         if(props in target){
//             target[props] = value
//         }
//     }
// }

// const proxy = new Proxy(obj,handler)

// console.log(proxy)

// console.log(proxy.name)

// proxy.name = "arjun sarkar"

// console.log(proxy)

// console.log(obj)

//encapsulation

// class BankAccount{
//     #balance
    
//     constructor(balance){
//         this.#balance = balance
//     }
    
//     deposit(balance){
//         this.#balance += balance
//     }
    
//     debit(balance){
//         if(this.#balance > 0){
//             this.#balance -= balance
//         }else{
//             return 'minimum balance not met'
//         }
//     }
    
//     get(){
//         return this.#balance
//     }
// }

// const acc = new BankAccount(1000);
// acc.deposit(500);

// console.log(acc.get()); 

//inheritance

// class Math{
//     add(a,b){
//         return a+b
//     }
// }

// class ExtraMath extends Math{
//     mul(a,b){
//         return a * b
//     }
// }

// const ops = new ExtraMath()
// console.log(ops.mul(4,4))

//multiple inheritance using mixins

// const canSwim = {
//     swim:function(){
//         console.log("swim")
//     }
// }

// class Animal{
//     constructor(name){
//         this.name = name
//     }
// }

// class Dog extends Animal{}

// Object.assign(Dog.prototype,canSwim)

// const dog = new Dog()

// dog.swim()

//polymorphism runtime polymorphism method overriding

// class Animal{
//     constructor(name){
//         this.name = name
//     }
    
//     speak(){
//         console.log("animal can speak")
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
    
//     speak(){
//         console.log("bark")
//     }
// }

// const dog = new Dog("puppy")

// dog.speak()

//method overloading

// class Math{
//     add(a,b,c){
//         if(c != undefined){
//             return a + b + c
//         }
//         if(b != undefined){ 
//             return a + b
//         }

//         return a
//     }
// }


// const operation = new Math()

// console.log(operation.add(10,30))

//abstraction

// class Car{
//     #startEngine = false

//     start(){
//         this.#startEngine = true
//         console.log("engine started")
//     }

//     stop(){
//         this.#startEngine = false
//         console.log("engine stopped")
//     }

//     drive(){
//         if(this.#startEngine){
//             console.log("car is driving")
//         }else{
//             console.log("start the engine first")
//         }
//     }
// }

// const myCar = new Car()

// myCar.start()

//memoization

// function factorial(n){
//     let fact = 1
//     for(let i=1;i<=n;i++){
//         fact *= i
//     }
//     return fact
// }

// const memoization = (fn)=>{
//     let cache = {}
//     return function(args){
//         let input = args
//         if(input in cache){
//             return cache[input]
//         }else{
//             let result = fn(input)
//             cache[input] = result
//             return result
//         }
//     }
// }

// const factMemoization = memoization(factorial)
// console.log(factMemoization(5))

//deep freeze

// function deepFreeze(obj){
//     let propNames = Object.getOwnPropertyNames(obj)
    
//     for(let name of propNames){
//         const value = obj[name]
//         if(value && typeof value == "object"){
//             deepFreeze(value)
//         }
//     }
    
//     return Object.freeze(obj)
// }

