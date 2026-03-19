// //deep Copy

// function deepCopy(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     let copy = Array.isArray(obj) ? [] : {}

//     for(let key of Object.keys(obj)){
//         copy[key] = deepCopy(obj[key])
//     }

//     return copy
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //deep freeze

// function deepFreeze(obj){
//     if(obj == null || typeof obj != 'object'){
//         return obj
//     }

//     let propNames = Object.getOwnPropertyNames(obj)

//     for(let val of propNames){
//         let value = obj[val]

//         if(value && typeof value == 'object'){
//             deepFreeze(value)
//         }
//     }

//     return Object.freeze(obj)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // memoization

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
//         }
//         else{
//             let result = fn(args)
//             cache[args] = result
//             return result
//         }
//     }
// }

// let memo = memoization(factorial)

// console.time()
// console.log(memo(5))
// console.timeEnd()

// console.time()
// console.log(memo(5))
// console.timeEnd()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//prototype

// function calculator(){}

// calculator.prototype.add = function(a,b){
//     return a+b
// }

// const calci = new calculator()

// console.log(calci.add(5,5))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//prototype chaining

// function calculator(){}

// calculator.prototype.add = function(a,b){
//     return a+b
// }

// function scientificCalculator(){
//     calculator.call(this)
// }

// scientificCalculator.prototype = Object.create(calculator.prototype)

// scientificCalculator.prototype.multi = function(a,b){
//     return a*b
// }

// const calci = new scientificCalculator()

// console.log(calci.multi(5,5))

// console.log(calci.add(5,5))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// prototype iheritance

// const obj1 = {
//     name:"ahamathbasha"
// }

// const obj2 = {
//     __proto__:obj1,
//     name:"kingKhan",
//     callName(){
//         console.log(obj2.name)
//     }
// }

// obj2.callName()


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//proxy

// const object = {
//     name:'ahamathbasha',
//     age:34
// }

// const handler = {
//     set(obj,prop,value){
//         if(prop == 'name'){
//             obj[prop] = value
//         }

//         if(prop == 'age'){
//             obj[prop] = value
//         }
//     },
//     get(obj,prop){
//         return prop in obj ? obj[prop] : 'not exist'
//     }
// }

// const proxyObject = new Proxy(object,handler)
// console.log('before',object)
// console.log('before',proxyObject)
// proxyObject.name = "ahamath"
// console.log(proxyObject)
// console.log(object)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// accessors

// const object = {
//     firstName : 'goodFellas',
//     lastName : 'fellow',

//     set fullName(fullName){
//         [this.firstName,this.lastName] = fullName.split(' ')
//     },

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// object.fullName = "ahamath basha"

// console.log(object.fullName)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
