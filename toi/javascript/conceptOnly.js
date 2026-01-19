// //memoization

// function factorial(n){
//     if(n <= 1){
//         return n
//     }
//     return n * factorial(n-1)
// }

// const memoization = (fns)=>{
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

// const memo = memoization(factorial)

// console.time()
// console.log(memo(5))
// console.timeEnd()

// console.time()
// console.log(memo(5))
// console.timeEnd()


//deepCopy

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

//deep Freeze

// function deepFreeze(obj){
//     const propNames = Object.getOwnPropertyNames(obj)

//     for(let key of propNames){
//         const value = obj[key]

//         if(typeof obj == 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

//call apply and bind

// function greet(greeting){
//     return `hi ${this.name} ${greeting}`
// }

// const obj = {
//     name:"ahamathabasha"
// }

// console.log(greet.call(obj,"hello world"))
// console.log(greet.apply(obj,['hello world']))

// const g = greet.bind(obj)

// console.log(g("hello world"))

//generator function

// If you give setTimeout 1000 it will show all after one second delay

// if you specify setTimeout i * 1000 each will print after one second delay.

// function *multiply(no){
//     let limit = 100
//     while(limit != 0){
//         let result = limit * no
//             yield `${limit} * ${no} = ${result}`
//         limit--
//     }
// }

// const m = multiply(2)


// for(let i=1;i<=100;i++){
//     setTimeout(()=>{
//         console.log(m.next().value)
//     },i*1000)
// }

// print table with one second delay

// function sleep(ms){
//     return new Promise((resolve)=>{
//         return setTimeout(resolve,ms)
//     })
// }

// async function table(n){
//     for(let i=1;i<=100;i++){
//         console.log(`${i} * ${n} = ${i * n}`)
//         await sleep(1000)
//     }
// }

// table(2)

//currying

// function sum(a){
//     return function(b){
//         return function(c){
//             return a + b + c
//         }
//     }
// }

// const add = sum(1)(2)(3)
// console.log(add)

//factory function

// function factory(name,age){
//     return {
//         username:name,
//         age:age
//     }
// }

// console.log(factory("ahamathbasha",10))

//closure

// function outer(){
//     let count = 0
//     return function inner(){
//         count++
//         return count
//     }
// }

// let count = outer()

// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())

//function composition

// const add5 = (x) => x+5
// const multiply2 = (x) => x*2

// const compose = (...fns)=>(x)=>fns.reduceRight((acc,fn)=>fn(acc),x)
// const result = compose(add5,multiply2)(10)
// console.log("result",result)

//pipe

// const pipe = (...fns)=>(x)=>fns.reduce((acc,fn)=>fn(acc),x)
// const pipeResult = pipe(add5,multiply2)(10)
// console.log("pipeResult",pipeResult)

//prototype

// function Calulator(){}

// Calulator.prototype.add = function(a,b){
//     return a+b
// }

// const addition = new Calulator()
// console.log(addition.add(5,5))

//prototype chain

// function Calci(){}
// Calci.prototype.add = function(a,b){
//     return a + b
// }

// function ScientificCalci(){
//     Calci.call(this)
// }

// ScientificCalci.prototype = Object.create(Calci.prototype)

// ScientificCalci.prototype.multiply = function(a,b){
//     return a * b
// }

// const c = new ScientificCalci()

// console.log(c.multiply(5,5))
// console.log(c.add(5,5))

//prototype inheritance

// const obj1 = {
//     name: 'ahamathbasha'
// }

// const obj2 = {
//     role: 'SDE-III',
//     __proto__ : obj1
// }

// const obj3 = {
//     __proto__ : obj2
// }

// console.log(obj3.role)

//proxy object

// const obj = {
//     name:'ahamathbasha',
//     age:20
// }

// const handler = {
//     set (target,prop,value){
//         if(prop == 'name'){
//             target[prop] = value
//             return true
//         }

//         if(prop == 'age'){
//             target[prop] = value
//             return  true
//         }
//     },
//     get(target,props){
//         return props in target ? target[props] : null
//     }
// }

// const proxy = new Proxy(obj,handler)
// console.log(proxy.age)

// proxy.age = 30

// console.log(proxy)
// console.log(obj)

