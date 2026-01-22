// class UserService {
//   createUser(user) {
//     if (!user.email.includes("@")) {
//       throw new Error("Invalid email");
//     }
//     database.save(user);
//     emailService.sendWelcomeEmail(user.email);
//   }
// }


// class EmailService{
//     sendWelcomeEmail(email){
//         console.log(`emailSended to this user`,email)
//     }
// }

// class UserDB{
//     save(user){
//         console.log('user saved',user)
//     }
// }

// class UserService{
//     constructor(emailService,userDB){
//         this.EmailService = emailService
//         this.userDB = userDB
//     }

//     createUser(user){
//         if (!user.email.includes("@")) {
//             throw new Error("Invalid email");
//         }
//         this.EmailService.sendWelcomeEmail(user.email)
//         this.userDB.save(user)
//     }
// }

// const u = new UserService(new EmailService(),new UserDB())

// u.createUser({name:"ahamathbasha",email:"abcd@gmail.com"})


//open close

// function calculateDiscount(customerType, amount) {
//   if (customerType === "regular") {
//     return amount * 0.05;
//   }
//   if (customerType === "premium") {
//     return amount * 0.1;
//   }
//   return 0;
// }


// class RegularDiscount{
//     discount(amount){
//         console.log(`discount amount is ${amount * 0.05}`)
//     }
// }

// class PremiumDiscount{
//     discount(amount){
//         console.log(`discount amount is ${amount * 0.1}`)
//     }
// }

// class CalculateDiscount{
//     constructor(discountMethod){
//         this.discountMethod = discountMethod
//     }
    

//     calculateDiscountAmount(amount){
//         this.discountMethod.discount(amount)
//     }
// }

// const c = new CalculateDiscount(new PremiumDiscount())

// c.calculateDiscountAmount(100)

// const reg = new CalculateDiscount(new RegularDiscount())

// reg.calculateDiscountAmount(100)

//lsp



// class Bird {
//   fly() {
//     return "Flying";
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error("Penguins can't fly");
//   }
// }


// class Bird{}

// class FlyingBird{
//     fly(){

//     }
// }

// class NonFlyingBird{}

// class Crow extends FlyingBird{
//     fly(){
//         console.log("Crow can fly")
//     }
// }

// class SwimmingBird{}

// class Penguin extends SwimmingBirdBird{
//     swimg(){
//         console.log("Penguin can swim")
//     }
// }



// class Worker {
//   work() {}
//   eat() {}
// }


// class Workable{
//     work(){

//     }
// }

// class Eatable{
//     eat(){

//     }
// }


// class Robot extends Workable{

// }

// class HumanWork extends Workable{

// }

// class HumanEat extends Eatable{

// }

// class HumanWorkAndEat extends WorkableAndEatable{

// }


// class OrderService {
//   constructor() {
//     this.paymentGateway = new StripePayment();
//   }

//   processPayment(amount) {
//     this.paymentGateway.pay(amount);
//   }
// }



class StripePayment{
    pay(amount){
        console.log(`${amount} is paid through StripePayment`)
    }
}

class RazorPayment{
    pay(amount){
        console.log(`${amount} is paid through razorpay payment`)
    }
}

class OrderService{
    constructor(payment){
        this.paymentGateway = payment
    }

    processPayment(amount){
        this.paymentGateway.pay(amount)
    }
}


const o = new OrderService(new RazorPayment())

o.processPayment(1000)