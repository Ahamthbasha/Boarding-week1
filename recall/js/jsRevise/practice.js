// //deep copy

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

// //deepFreeze

// function deepFreeze(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     const propNames = Object.getOwnPropertyNames(obj)

//     for(let val of propNames){
//         let value = obj[val]

//         if(value && typeof value == 'object'){
//             return deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

// //memoization

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
//         if(args in cache){
//             return cache[args]
//         }else{
//             let result = fn(args)
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

//prototype

// function Calculator(){}

// Calculator.prototype.add = function(a,b){
//     return a+b
// }

// const calci = new Calculator()
// console.log(calci.add(4,5))

//prototype chain

// function Calculator(){}

// Calculator.prototype.add = function(a,b){
//     return a+b
// }

// function ScientificCalculator(){
//     Calculator.call(this)
// }

// ScientificCalculator.prototype = Object.create(Calculator.prototype)

// ScientificCalculator.prototype.multiply = function(a,b){
//     return a * b
// }

// const calculation = new ScientificCalculator()

// console.log(calculation.multiply(5,5))

// console.log(calculation.add(5,5))

//prototype inheritance

// const obj1 = {
//     name:"ahamathbasha"
// }

// const obj2 = {
//     __proto__ : obj1,
//     readName:function(){
//         console.log(this.name)
//     }
// }

// const obj3 = {
//     __proto__:obj2,
//     role:function(){
//         console.log("what is your role")
//     }
// }

// console.log(obj3.name)
// obj3.readName()

//proxy

// const obj = {name:'ahamathbasha',age:30}

// const handler = {
//     set(obj,props,value){
//         if(props in obj){
//             if(props == 'name'){
//                 obj[props] = value
//                 return true
//             }

//             if(props == 'age'){
//                 obj[props] = value
//                 return true
//             }
//         }else{
//             return false
//         }
//     },
//     get(obj,props){
//         return props in obj ? obj[props] : ''
//     }
// }

// const proxyObject = new Proxy(obj,handler)

// console.log(proxyObject.name)

// proxyObject.name = "ahamath"

// console.log(proxyObject.name)

// console.log(obj)

//accessors

// const obj = {
//     firstName:'peter',
//     lastName:'parker',
    
//     set fullName(fullName){
//         [this.firstName,this.lastName] = fullName.split(' ')
//     },

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(obj.fullName)

// obj.fullName = "ahamath basha"

// console.log(obj.fullName)