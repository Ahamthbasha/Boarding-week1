//constructor function

// function Car(name){
//     this.name = name
// }

// const audi = new Car("audi")

// console.log(audi)

//static methods

// class Mathutils{
//     static add(a,b){
//         return a +b
//     }
// }


// console.log(Mathutils.add(1,2))

//encapsulation

// class Bank{
//     #balance
    
//     constructor(owner,balance){
//         this.owner = owner
//         this.#balance = balance
//     }

//     withdraw(amount){
//         if(amount < 0 || amount > this.#balance){
//             return 'amount is invalid or amount is beyond your balance'
//         }else{
//             let withdrawedAmount = amount
//             this.#balance -= amount
//             return `${withdrawedAmount} amount is withdrawed`
//         }
//     }

//     deposit(amount){
//         if(amount < 0){
//             return 'amount is invalid'
//         }else{
//             this.#balance += amount
//             return `${amount} is deposited`
//         }
//     }

//     getBalance(){
//         return this.#balance
//     }
// }

// const i = new Bank("ahamathbasha",1000)

// console.log(i.deposit(20000))

// console.log(i.withdraw(20000))

// console.log(i.getBalance())

// i.#balance = 1000 you cannot access outside the class

// console.log(i.getBalance())


//inheritance

// class Animal{
//     speak(){
//         console.log("animal speak")
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log("dog also speaks")
//     }
// }

// const d = new Dog()
// d.speak()

//prototypal inheritance

// const Animal = {
//     speak:function(){
//         console.log("animal can speak")
//     }
// }

// const dog = Object.create(Animal)

// dog.speak()

//Multilevel inheritance

// class Math{
//     add(a,b){
//         return a + b
//     }
// }

// class Subtract extends Math{
//     sub(a,b){
//         return a - b
//     }
// }

// class Multiply extends Subtract{
//     mul(a,b){
//         return a * b
//     }
// }

// class Div extends Multiply{
//     div(a,b){
//         return a/b
//     }
// }

// const operation = new Div()

// console.log(operation.div(2,1))
// console.log(operation.mul(2,10))
// console.log(operation.sub(10,10))
// console.log(operation.add(1,2))

//hierarchial inheritance

// class Animal{
//     speak(){
//         console.log("animal speak")
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log("dog speak")
//     }
// }

// class Cat extends Animal{
//     speak(){
//         console.log("cat speak")
//     }
// }

// const c = new Cat()
// c.speak()


//multiple inheritance

// const canSound = {
//     sound:function(){
//         console.log("Animal Can Sound")
//     }
// }

// class Animal{
//     constructor(name){
//         this.name = name
//     }
// }

// class Dog extends Animal{}

// Object.assign(Dog.prototype,canSound)

// const d = new Dog()
// d.sound()

//polymorphism

//runtime polymorphism achieved by method overriding

// class Animal{
//     speak(){
//         console.log("animal can speak")
//     }
// }

// class Dog extends Animal{
//     speak(){
//         console.log("Dog speak")
//     }
// }

// class Cat extends Animal{
//     speak(){
//         console.log("Cat speaks")
//     }
// }

// const c = new Cat()
// c.speak()

//compile time polymorphism - method overloading

// class Math{
//     add(a,b,c,d){
//         if(a && b && !c && !d){
//             return a+b
//         }
//         else if(a && b && c && !d){
//             return a + b + c
//         }
//         else{
//             return a + b + c + d 
//         }
//     }
// }

// const m = new Math()

// console.log(m.add(1,2))
// console.log(m.add(1,2,3))

//abstraction

// class Payment{
//     pay(amount){
//         throw new Error("pay() must be implemented")
//     }
// }

// class CredicardPayment extends Payment{
//     pay(amount){
//         console.log(`${amount} is paid by credit`)
//     }
// }

// class UpiPayments extends Payment{
//     pay(amount){
//         console.log(`${amount} is paid by upi`)
//     }
// }

// class COD extends Payment{
//     pay(amount){
//         console.log(`${amount}`)
//     }
// }

// function ProcessPayment(paymentMethod,amount){
//     paymentMethod.pay(amount) // abstraction
// }

// ProcessPayment(new COD(),1000)