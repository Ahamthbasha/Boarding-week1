// console.log(a); //reference error
// let a = 10;


// const person = {
//   name: "John",
//   getName() {
//     return this.name;
//   },
// };

// const ref = person.getName;
// console.log(person.getName())
// console.log(ref());


// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");


// function removeDuplicates(arr){
//     let newArr = []
//     for(let i=0;i<arr.length;i++){
//         if(!newArr.includes(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// function removeDuplicates2(arr){
//     let newArr = []
//     for(let i=0;i<arr.length;i++){
//         let take = arr[i]
//         let alreadyHave = false
//         for(let j=0;j<newArr.length;j++){
//             if(take == newArr[j]){
//                 alreadyHave = true
//             }else{
//                 alreadyHave = false
//             }
//         }
//         if(!alreadyHave){
//             newArr.push(take)
//         }
//     }
//     return newArr
// }
// console.log(removeDuplicates2([1,2,2,3,4,4,5]))
// console.log(removeDuplicates([1,2,2,3,4,4,5]))

// let arr = [1, [2, [3, 4], 5], 6]

// function flatArr(arr,result=[]){
//     for(let val of arr){
//         if(Array.isArray(val)){
//             flatArr(val,result)
//         }else{
//             result.push(val)
//         }
//     }
//     return result
// }

// console.log(flatArr(arr))

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;

// console.log(a)
// a[c] = 456;

// console.log(a[b]); // 123
// console.log(a[c]);


//anagram

// function anagram(str1,str2){
//     let freqMap = {}

//     for(let val of str1){
//         if(freqMap[val]){
//             freqMap[val]++
//         }else{
//             freqMap[val] = 1
//         }
//     }

//     for(let val of str2){
//         if(!freqMap[val]){
//             return false
//         }else{
//             freqMap[val]--
//         }
//     }
//     return true
// }

// console.log(anagram("listenv","silentvv"))


// for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// Array.prototype.myMap = function(callback){
//     let newArr = []

//     for(let i=0;i<this.length;i++){
//         newArr.push(callback(this[i],i,this))
//     }

//     return newArr
// }

// let arr = [1,3,5]

// let result = arr.myMap((val)=>{
//     return val * val
// })

// console.log(result)

const transactions = [
  { user: 'Rahul', amount: 300, date: '2025-01-20' },
  { user: 'Rahul', amount: 400, date: '2025-01-29' },
  { user: 'Meera', amount: 1500, date: '2025-01-20' },
  { user: 'Meera', amount: 350, date: '2025-02-10' },
  { user: 'Vijay', amount: 1600, date: '2025-02-14' },
  { user: 'Rahul', amount: 200, date: '2025-02-25' },
  { user: 'Rahul', amount: 2000, date: '2025-03-14' },
  { user: 'Meera', amount: 500, date: '2025-03-15' },
  { user: 'Vijay', amount: 700, date: '2025-03-12' },
];

//output
// {
//   Rahul: 2900,
//   Meera: 2350,
//   Vijay: 2300
// }

// Find total spending per user across all months
// let result = {}

// for(let val of transactions){
//     if(result[val.user]){
//         result[val.user] += val.amount
//     }else{
//         result[val.user] = val.amount
//     }
// }

// console.log(result)

// Group transactions by month

// let result = {}

// for(let val of transactions){
//     let month = val.date.slice(0,7)
//     if(result[month]){
//         result[month].push(val)
//     }else{
//         result[month] = [val]
//     }
// }

// console.log(result)

// Find the highest entire transaction per month

// let result = {}

// for(let val of transactions){
//     const month = val.date.slice(0,7)
//     if(result[month]){
//         result[month].push(val) 
//     }else{
//         result[month] = [val]
//     }
// }

// let final = {}

// for(let key in result){
//     let take = result[key]
//     let amount = 0
//     let map = {}
//     for(let val of take){
//         if(map[val.user]){
//             map[val.user] += val.amount
//         }else{
//             map[val.user] = val.amount
//         }
//     }

//     for(let [key,value] of Object.entries(map)){
//         if(value > amount){
//             amount = value
//             user = key
//         }
//     }
//     final[key]={user,amount}
// }

// console.log(final)

//find the highest single transaction
// let result = {}
// for(let val of transactions){
//     let month = val.date.slice(0,7)
//     if(!result[month] || val.amount > result[month].amount){
//         amount = val.amount
//         result[month] = {user:val.user,amount:val.amount}
//     }
// }
// console.log(result)

//count no of transactions done by each user

// let result = {}
// for(let val of transactions){
//     let month = val.date.slice(0,7)
//     if(!result[month]){
//         result[month] = [val]
//     }else{
//         result[month].push(val)
//     }
// }

// let final = {}

// for(let key in result){
//     let take = result[key]
//     let map = {}

//     for(let val of take){
//         if(map[val.user]){
//             map[val.user]++
//         }else{
//             map[val.user] = 1
//         }
//     }

//     final[key] = map
// }

// console.log(final)

//alternate or simple version

// let result = transactions.reduce((acc,cur)=>{
//     let month = cur.date.slice(0,7)
//     acc[month] = acc[month] || {}
//     acc[month][cur.user] = (acc[month][cur.user]||0)+1
//     return acc
// },{})

// console.log(result)

//find average spending per user per month

let result = transactions.reduce((acc,cur)=>{
    let month = cur.date.slice(0,7)
    acc[month] = acc[month] || {}
    let count = (acc[month][cur.user] || 0) + 1
    console.log(count)
    acc[month][cur.user] = acc[month][cur.user]+Math.floor((acc.amount||0+cur.amount)/count)
    return acc
},{})

console.log(result)