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

function calculator(){}

calculator.prototype.Add = function(a,b){
    return a+b
}

// const mathOperation = new calculator()
// console.log(mathOperation.Add(10,20))

function scientificCalculator(){
    // calculator.call(this)
}

scientificCalculator.prototype = Object.create(calculator.prototype)

scientificCalculator.prototype.mul = function(a,b){
    return a * b
}

const mathOperation2 = new scientificCalculator()

console.log(mathOperation2.mul(20,10))
console.log(mathOperation2.Add(10,10))

