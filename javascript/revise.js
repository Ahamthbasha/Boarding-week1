// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-z]{2,}$/

// const email = "ahamathbasha@gmail.com"

// console.log(emailRegex.test(email))


// //legal shadowing

// let a = 20

// {
//     let a = 30
//     console.log(a)
// }

// console.log(a)

// //illegal shadowing

// let b = 30
// {
//     var b =30
// }


// const person = {
//   name: "Basha",
//   greet() {
//     console.log("Hello " + this.name);
//   }
// };

// setTimeout(person.greet.bind(person), 1000);


// const obj = {
//     name: 'Charlie',
//     greet: () => {
//         console.log(`Hello, ${this.name}`); // 'this' refers to the outer context
//     }
// };
// obj.greet.bind(obj)(); 


// const object = {name:'ahamathbasha',salary:100000}

// const obj = Object.create(object)

// console.log(obj.name)


// const animal = {
//     speak: function() {
//         console.log('Animal speaks');
//     }
// };
// const dog = Object.create(animal);

// console.log(dog)


// const obj = {}

// Object.defineProperty(obj,'name',{
//     value:"ahamathbahsa",
//     writable:false,
//     enumerable:true
// })

// console.log(Object.getOwnPropertyDescriptor(obj,'name'))

// console.log(obj)



// const Animal = {
//     category :"All Animal"
// }

// const Cat = Object.create(Animal)
// Cat['name']="cat"

// console.log(Animal == Object.getPrototypeOf(Cat))

// const obj = {
//     name : "ahamathbasha F",
//     set (name){
//         this.name = name
//     },
//     get(){
//         return this.name
//     }
// }

// console.log(obj.get())

// obj.name = "Jersey"

// console.log(obj.get())

// class MathUtils{
//     static add(a,b){
//         return a+b
//     }
// }

// const addition = MathUtils.add(5,5)
// console.log(addition)

// function calculator(){}

// calculator.prototype.Add = function(a,b){
//     return a+b
// }

// const mathOperation = new calculator()
// console.log(mathOperation.Add(10,20))

// function scientificCalculator(){
//     // calculator.call(this)
// }

// scientificCalculator.prototype = Object.create(calculator.prototype)

// scientificCalculator.prototype.mul = function(a,b){
//     return a * b
// }

// const mathOperation2 = new scientificCalculator()

// console.log(mathOperation2.mul(20,10))
// console.log(mathOperation2.Add(10,10))



// class Calculator{
//     constructor(name){
//         this.name = name
//     }
// }

// Calculator.prototype.Add = function(a,b){
//     return a+b
// }

// class ScientificCalculator extends Calculator{
//     constructor(name){
//         super(name)
//     }
// }

// ScientificCalculator.prototype.mul = function(a,b){
//     return a * b
// }

// const bashaCalci = new ScientificCalculator("basha")
// console.log(bashaCalci.mul(10,20))
// console.log(bashaCalci.Add(10,20))


// const obj1 = {
//     name:"ahamathbasha"
// }

// const obj2 = {
//     __proto__ : obj1,
//     greetName:function(){
//         return `Hello ${this.name}`
//     }
// }

// console.log(obj2.greetName())


// const obj = {
//     name:"ahamathbasha",
//     age:30
// }

// const handler ={
//     get(target,props){
//         return props in target ? obj[target] : "prop is invalid"
//     },
//     set(target,props,value){
//         if(props in target){
//             obj[target] = value
//         }else{
//             return "prop is invalid"
//         }
//     },
// }

// const object = new Proxy(obj,handler)

// const obj = {
//     name:"ahamathbasha",
//     age:30
// }

// const handler = {
//     set(target,props,value){
//         if(props in target){
//             target[props] = value
//         }
//     },
//     get(target,props){
//         return props in target ? target[props] : "props invalid"
//     }
// }

// const proxyObj = new Proxy(obj,handler)

// proxyObj.name = "bash bai"

// console.log(obj)

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
//         if(amount > this.#balance){
//             console.log("you don't have such balance")
//         }
//         else if(amount > 0 && this.#balance == 0){
//             console.log("balance is zer")
//         }
//         else{
//             this.#balance -= amount
//             console.log("requested amount debited")
//         }
//     }

//     get(){
//         console.log(this.#balance)
//     }
// }

// const indian =new BankAccount(1000)
// console.log(indian)

// indian.get()

//multiple inheritance

// const canSwim = {
//     swim:function (){
//         console.log("you can swim")
//     }
// }

// class Birds{
//     constructor(name){
//         this.name = name
//     }
// }

// class Penguin extends Birds{}

// Object.assign(Penguin.prototype,canSwim)

// const penguin = new Penguin("penguin")
// console.log(penguin)

// penguin.swim()


//abstraction

class Car{
    constructor(name){
        this.name = name
        this.engine = false
    }

    startCar(){
        this.engine = true
        console.log("car is started")
    }

    stopCar(){
        this.engine = false
        console.log("car is stopped")
    }
}

const bmw = new Car("BMW")
bmw.startCar()