//destructuring


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


//new learning

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

//methods

//normal
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


//regex practical

// console.log("banana".match(/a/));
// console.log("banana".match(/a/g));

//2.write a regex to find all vowels in a string

// const name = "ahamathbasha AAradi Kaathue"
// const vowelRegex = /[aeiouAEIOU]/g

// console.log(name.match(vowelRegex))

//what is the difference between /a/ and /a/g in regex?
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