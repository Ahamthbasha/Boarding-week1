//single responsiblity principle

// class UserService {
//   createUser(user) {
//     // create user
//   }

//   saveToDatabase(user) {
//     // DB logic
//   }

//   sendEmail(user) {
//     // email logic
//   }
// }


// convert this into to SRP

// class CreateUserService{
//     createUser(user){

//     }
// }

// class SaveUserService{
//     saveUserDB(user){

//     }
// }

// class SendEmailService{
//     sendEmail(user){

//     }
// }


//OCP

/*

🔹 What is the Strategy Pattern?

Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.

In simple words:

Put different behaviors in separate classes

Use composition instead of if/else

Switch behavior without changing the main class

*/

// class PaymentService {
//   pay(method, amount) {
//     if (method === "card") {
//       console.log("Paid with card");
//     } else if (method === "upi") {
//       console.log("Paid with UPI");
//     }
//   }
// }


// ocp

// class PaymentService{
//     constructor(paymentMethod){
//         this.paymentMethod = paymentMethod
//     }

//     pay(amount){
//         this.paymentMethod.pay(amount)
//     }
// }

// class CardPaymentService{
//     pay(amount){
//         console.log(`${amount} paid using card`)
//     }
// }

// class UpiPaymentService{
//     pay(amount){
//         console.log(`${amount} is paid by Upi`)
//     }
// }

// const payToUser = new PaymentService(new CardPaymentService())

// payToUser.pay(1000)

//ocp another example

// class NotificationService {
//   send(type, message) {
//     if (type === "email") {
//       console.log(`Sending Email: ${message}`);
//     } else if (type === "sms") {
//       console.log(`Sending SMS: ${message}`);
//     } else if (type === "push") {
//       console.log(`Sending Push Notification: ${message}`);
//     }
//   }
// }

//ocp implementation

// class NotificationService{
//     constructor(serviceName){
//         this.serviceName = serviceName
//     }

//     notify(message){
//         this.serviceName.send(message)
//     }
// }

// class EmailService{
//     send(message){
//         console.log(`sending Email : ${message}`)
//     }
// }

// class SmsService{
//     send(message){
//         console.log(`sending sms : ${message}`)
//     }
// }

// class PushService{
//     send(message){
//         console.log(`Sending push notification:${message}`)
//     }
// }

// const m = new NotificationService(new SmsService())

// m.notify("vanakkam da mapla")

//violated ocp code

// class DiscountService {
//   applyDiscount(type, price) {
//     if (type === "student") {
//       return price * 0.8;
//     } 
//     else if (type === "festival") {
//       return price * 0.7;
//     } 
//     else if (type === "premium") {
//       return price * 0.9;
//     }

//     return price;
//   }
// }

// convert the class to OCP code

// class DiscountService{
//     constructor(discountServiceMethod){
//         this.discountServiceMethod = discountServiceMethod
//     }

//     applyDiscount(price){
//         this.discountServiceMethod.discount(price)
//     }
// }

// class StudentDiscountService{
//     discount(price){
//         console.log(`discount price for student : ${price * 0.8}`)
//     }
// }

// class FestivalDiscountService{
//     discount(price){
//         console.log(`discount price for festive : ${price * 0.7}`)
//     }
// }

// class PremiumDiscountService{
//     discount(price){
//         console.log(`discount price for premium : ${price * 0.9}`)
//     }
// }

// const d = new DiscountService(new PremiumDiscountService())

// d.applyDiscount(100)

//libskov substituition principle

// class Shape{
//     getArea(){
//     }
// }

// class Rectange extends Shape{
//     constructor(width,height){
//         super()
//         this.width = width
//         this.height = height
//     }

//     getArea(){
//         return this.width * this.height
//     }
// }

// class Square extends Shape{
//     constructor(side){
//         super()
//         this.side = side
//     }

//     getArea(){
//         return this.side * this.side
//     }
// }

// function calculateArea(shape){
//     return shape.getArea()
// }

// console.log(calculateArea(new Square(10)))

// class Bird{}

// class flyingBird extends Bird{
//     fly(){
//         console.log("flying")
//     }
// }

// class Penguin extends Bird{
//     swim(){
//         console.log("penguin will swim")
//     }
// }

// const p = new Penguin()

// p.swim()

//lsp medium

//lsp violated class

// class FileHandler {
//     read() {
//         console.log("Reading file");
//     }

//     write() {
//         console.log("Writing file");
//     }
// }

// class ReadOnlyFile extends FileHandler {
//     write() {
//         throw new Error("Cannot write");
//     }
// }

// // lsp followed class

// class Read{
//     read(){}
// }

// class Write{
//     write(){}
// }

// class Readable extends Read{
//     read(){
//         console.log("file readed")
//     }
// }

// class writable extends Write{
//     write(){
//         console.log("file writed")
//     }
// }

// class ReadWrite extends Read{
//     read(){
//         console.log("file readed")
//     }

//     write(){
//         console.log("file writed")
//     }
// }

// function handleReadWrite(operation){
//     operation.read()
//     operation.write()
// }

// handle(new ReadWrite())

// function handleRead(operation){
//     operation.read()
// }

// handleRead(new Read())

//lsp violated class

// class AuthService {
//     login(username, password) {
//         return true;
//     }
// }

// class OAuthService extends AuthService {
//     login(token) {
//         return true;
//     }
// }


//lsp following class

// class CredentialAuth{
//     login(email,password){
//     }
// }

// class TokenAuth{
//     login(token){
//     }
// }

// class LoginWithCredentials extends CredentialAuth{
//     login(email,password){
//         console.log(`email is ${email} and password is ${password}`)
//         return true
//     }
// }

// class LoginWithToken extends TokenAuth{
//     login(token){
//         console.log(`token is ${token}`)
//         return true
//     }
// }

// const credAuth = new LoginWithCredentials()
// console.log(credAuth.login("abc@gmail.com","123"))

// const tokenAuth = new LoginWithToken()
// console.log(tokenAuth.login("cddd"))

//violation of lsp

// class OrderService {
//     placeOrder(amount) {
//         if (amount <= 0) {
//             throw new Error("Invalid amount");
//         }
//     }
// }

// class FreeOrderService extends OrderService {
//     placeOrder(amount) {
//         if (amount !== 0) {
//             throw new Error("Only free orders allowed");
//         }
//     }
// }

//follows lsp

// class OrderService {
//     placeOrder(amount) {
//         throw new Error("Must be implemented");
//     }
// }

// class PaidOrderService extends OrderService {
//     placeOrder(amount) {
//         if (amount <= 0) {
//             throw new Error("Invalid amount");
//         }
//         console.log("Paid order placed");
//     }
// }

// class FreeOrderService extends OrderService {
//     placeOrder(amount) {
//         if (amount !== 0) {
//             throw new Error("Free order must be zero amount");
//         }
//         console.log("Free order placed");
//     }
// }

// function processOrder(orderService, amount) {
//     orderService.placeOrder(amount);
// }

// processOrder(new PaidOrderService(), 100);
// processOrder(new FreeOrderService(), 0);


//violates lsp

// class Account {
//     withdraw(amount) {
//         if (amount <= 0) {
//             throw new Error("Invalid amount");
//         }
//         console.log(`Withdrawing ${amount}`);
//     }
// }

// class FixedDepositAccount extends Account {
//     withdraw(amount) {
//         throw new Error("Withdrawals not allowed from Fixed Deposit");
//     }
// }


//abstract class
// Base abstraction: every account is an account
// class Account {
//     getBalance() {
//         throw new Error("Must be implemented");
//     }
// }

// // Narrow abstraction: only accounts that support withdrawal
// class WithdrawableAccount extends Account {
//     withdraw(amount) {
//         throw new Error("Must be implemented");
//     }
// }

// // Concrete withdrawable account
// class SavingsAccount extends WithdrawableAccount {
//     constructor(balance) {
//         super();
//         this.balance = balance;
//     }

//     getBalance() {
//         return this.balance;
//     }

//     withdraw(amount) {
//         if (amount <= 0) {
//             throw new Error("Invalid amount");
//         }
//         if (amount > this.balance) {
//             throw new Error("Insufficient balance");
//         }

//         this.balance -= amount;
//         console.log(`Withdrew ${amount}. Remaining balance: ${this.balance}`);
//     }
// }

// // Concrete non-withdrawable account
// class FixedDepositAccount extends Account {
//     constructor(balance) {
//         super();
//         this.balance = balance;
//     }

//     getBalance() {
//         return this.balance;
//     }
// }

// // Client code (LSP-safe)
// function processWithdrawal(account, amount) {
//     account.withdraw(amount);
// }

// // Usage
// const savings = new SavingsAccount(5000);
// processWithdrawal(savings, 1000); // ✅ works

// const fd = new FixedDepositAccount(10000);
// // processWithdrawal(fd, 1000); ❌ intentionally invalid — prevented by design

//violated lsp class

// class MediaPlayer {
//     play() {
//         console.log("Playing media");
//     }

//     pause() {
//         console.log("Pausing media");
//     }
// }

// class LiveStreamPlayer extends MediaPlayer {
//     pause() {
//         throw new Error("Live streams cannot be paused");
//     }
// }

// // lsp following class

// class Playable{
//     play(){}
// }

// class Pausable{
//     pause(){}
// }

// class Play extends Playable{
//     play(){
//         console.log("playing media")
//     }
// }

// class Pause extends Pausable{
//     pause(){
//         console.log("pausing media")
//     }
// }

// class PlayPause extends Playable{
//     play(){
//         console.log("playing media")
//     }

//     pause(){
//         console.log("pausing media")
//     }
// }

// function startOrStop(method){
//     method.play()
//     method.pause()
// }

// startOrStop(new PlayPause())


// function start(method){
//     method.play()
// }
// start(new Play())

// function stop(method){
//     method.pause()
// }

// stop(new Pause())

//violating lsp

// class Document {
//     print() {
//         console.log("Printing document");
//     }
// }

// class ReadOnlyDocument extends Document {
//     print() {
//         console.log("Printing read-only document");
//     }

//     edit() {
//         throw new Error("Cannot edit read-only document");
//     }
// }

// class EditableDocument extends Document {
//     print() {
//         console.log("Printing editable document");
//     }

//     edit() {
//         console.log("Editing document");
//     }
// }

// //modify that to lsp

// // Capability: can print
// class Readable {
//     print() {
//         throw new Error("print() not implemented");
//     }
// }

// // Capability: can edit
// class Editable {
//     edit() {
//         throw new Error("edit() not implemented");
//     }
// }

// // Read-only document: only implements printing
// class ReadOnlyDocument extends Readable {
//     print() {
//         console.log("Printing read-only document");
//     }
// }

// // Editable document: implements both printing and editing
// class EditableDocument extends Readable {
//     print() {
//         console.log("Printing editable document");
//     }
// }

// class ReadWriteDocument extends Readable {
//     print() {
//         console.log("Printing read/write document");
//     }

//     edit() {
//         console.log("Editing read/write document");
//     }
// }

// // Usage examples
// const readOnly = new ReadOnlyDocument();
// readOnly.print(); // ✅ Works

// const editable = new EditableDocument();
// editable.print(); // ✅ Works
// // editable.edit(); ❌ Not allowed, no edit capability

// const readWrite = new ReadWriteDocument();
// readWrite.print(); // ✅ Works
// readWrite.edit();  // ✅ Works


// class Vehicle {
//     startEngine() {
//         console.log("Engine started");
//     }

//     fly() {
//         console.log("Flying...");
//     }
// }

// class Car extends Vehicle {
//     fly() {
//         throw new Error("Cars cannot fly");
//     }
// }

// class Airplane extends Vehicle {
//     fly() {
//         console.log("Airplane is flying");
//     }
// }


// //follows lsp

// class FlyingVehicle{
//     fly(){

//     }
// }

// class NonFlyingVehilce{
//     startEngine(){

//     }
// }

// class Airplane extends FlyingVehicle{
//     fly(){
//         console.log("aeroplane is flying")
//     }
// }

// class Car extends NonFlyingVehilce{
//     startEngine(){
//         console.log("car started")
//     }
// }


//interface segregation principle

// class Worker {
//   work() {}
//   eat() {}
// }

// class Robot extends Worker {
//   eat() {
//     throw new Error("Robots don't eat");
//   }
// }

// // follows lsp

// class workable{
//     work(){

//     }
// }

// class eatable{
//     eat(){

//     }
// }

// class Human extends workable{
//     eat(){
//         console.log("human needs eating")
//     }
// }

// class Robot extends workable{
//     work(){
//         console.log("robot is working")
//     }
// }

// DI

// class MySQLDatabase {
//   connect() {
//     console.log("Connected to MySQL");
//   }
// }

// class UserService {
//   constructor() {
//     this.db = new MySQLDatabase();
//   }
// }

// convert to DI

// class Database{
//     connect(){

//     }
// }

// class MySqlDatabase{
//     connect(){
//         console.log('connecting mysql database')
//     }
// }

// class NoSqlDatabase{
//     connect(){
//         console.log("connection nosql database")
//     }
// }

// class UserService{
//     constructor(db){
//         this.db = db
//     }

//     init(){
//         this.db.connect()
//     }
// }

// const user = new UserService(new NoSqlDatabase())
// user.init()




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class UserManager {
//     constructor(user) { this.user = user; }

//     saveUser() {
//         // saves user to database
//     }

//     sendWelcomeEmail() {
//         // sends welcome email
//     }
// }

// //srp implementation is good 

// class saveUserDB{
//     saveUser(data){

//     }
// }

// class EmailService{
//     sendWelcomeEmail(data){

//     }
// }

// class Manager{
//     constructor(userdb,emailService,user){
//         this.saveUserDB = userdb
//         this.EmailService = emailService
//         this.user = user
//     }

//     ManageUser(){
//         this.saveUserDB.saveUser(this.user)
//         this.EmailService.sendWelcomeEmail(this.user)
//     }
// }

// 2️⃣ Open/Closed Principle (OCP)

// You have a discount calculator that currently only handles regular discounts:

// class DiscountCalculator {
//     calculate(order) {
//         if(order.type === 'regular') return order.total * 0.1;
//         if(order.type === 'premium') return order.total * 0.2;
//     }
// }

// class DiscountCalculatorService{
//     constructor(discountType){
//         this.discountType = discountType
//     }

//     calculate(totalAmount){
//         return this.discountType.calculate(totalAmount)
//     }
// }

// class RegularDiscountService {
//     calculate(totalAmount){
//         return totalAmount * 0.1
//     }
// }

// class PremiumDiscountService{
//     calculate(totalAmount){
//         return totalAmount * 0.2
//     }
// }

// const dc = new DiscountCalculatorService(new PremiumDiscountService())
// console.log(dc.calculate(1000))

// 3️⃣ Liskov Substitution Principle (LSP)

// You have the following classes:

// class Bird {
//     fly() { console.log("I can fly"); }
// }

// class Ostrich extends Bird {
//     fly() { throw new Error("I cannot fly"); }
// }


// Question: Explain why this violates LSP and propose a refactor that fixes the issue.


// class FlyingBird{
//     fly(){}
// }

// class NonFlyingBird{
//     run(){}
// }

// class SwimmingBird{
//     swim(){}
// }

// class Crow extends FlyingBird{
//     fly(){
//         console.log("crow can fly")
//     }
// }

// class Ostrich extends NonFlyingBird{
//     run(){
//         console.log("Ostrich can running")
//     }
// } 

// class Penguin extends SwimmingBird{
//     swim(){
//         console.log("Penguin can swim")
//     }
// }

// const ostrich = new Ostrich()
// ostrich.run()

// 4️⃣ Interface Segregation Principle (ISP)

// You have an interface for devices:

// interface Machine {
//     print(): void;
//     scan(): void;
//     fax(): void;
// }

// class OldPrinter implements Machine {
//     print() { console.log("Printing"); }
//     scan() { throw new Error("Not supported"); }
//     fax() { throw new Error("Not supported"); }
// }


// Question: Refactor the interface so that OldPrinter doesn’t need to implement unused methods

// export interface OldPrinterMachine{
//     print():void
// }

// class OldPrinter implements OldPrinterMachine{
//     print(){
//         console.log("printing")
//     }
// }

// 5️⃣ Dependency Inversion Principle (DIP)

// Currently, a ShoppingCart class directly creates a PayPalPayment object:

// class PayPalPayment {
//     pay(amount) { console.log(`Paid ${amount} via PayPal`); }
// }

// class ShoppingCart {
//     checkout(amount) {
//         const payment = new PayPalPayment();
//         payment.pay(amount);
//     }
// }

// di

class Payment{
    pay(amount){

    }
}

class PayPalPayment{
    pay(amount){
        console.log(`paid ${amount} via paypal`)
    }
}

class RazorPayPayment{
    pay(amount){
        console.log(`paid ${amount} via razorpay`)
    }
}

class Checkout{
    constructor(payment){
        this.payment = payment 
    }

    pay(amount){
        this.payment.pay(amount)
    }
}

const checkoutPay = new Checkout(new RazorPayPayment())
checkoutPay.pay(1000)