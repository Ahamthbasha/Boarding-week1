//closure

// function counter(){
//     let count = 0
//     return function(){
//         count++
//         return count
//     }
// }

// let counter1 = counter()

// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())

// console.log(counter()())

//syntax of callback

// function getNo(callback1){
//     setTimeout(()=>{
//         let a = 10
//         callback1(a)
//     },1000)
// }

// function add(no,callback2){
//     setTimeout(()=>{
//         callback2(no+no)
//     },1000)
// }

// function square(no,callback3){
//     setTimeout(()=>{
//         callback3(no * no)
//     })
// }

// getNo((no)=>{
//     console.log('no we get',no)
//     add(no,(result)=>{
//         console.log('result',result)
//         square(result,(squareOfresult)=>{
//             console.log("square",squareOfresult)
//         })
//     })
// })

//longest repeating character

// let str =  "etrrrtutraaaaab"

// let current = ""
// let longest = ""

// for(let i=0;i<str.length;i++){
//     if(i == 0 || str[i] == str[i-1]){
//         current += str[i]
//     }else{
//         current = str[i]
//     }

//     if(current.length > longest.length){
//         longest = current
//     }
// }

// console.log(longest)

// Give the non-repeating string using hashtable. Input:  "helloworlddyttt", Output : "hewry"

// let str = "helloworlddyttt"

// let freqMap = {}

// for(let val of str){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val]=1
//     }
// }

// let nonRepeatingChar = ''

// for(let key in freqMap){
//     if(freqMap[key] == 1){
//         nonRepeatingChar += key
//     }
// }

// console.log(nonRepeatingChar)


// const users = [
//   { id: 5, name: "Rahul", age: 28, salary: 55000 },
//   { id: 2, name: "Anita", age: 24, salary: 42000 },
//   { id: 9, name: "Vikram", age: 35, salary: 90000 },
//   { id: 1, name: "Neha", age: 30, salary: 60000 },
//   { id: 7, name: "Amit", age: 26, salary: 48000 },
//   { id: 4, name: "Priya", age: 32, salary: 75000 },
//   { id: 6, name: "Karan", age: 29, salary: 58000 },
//   { id: 3, name: "Sneha", age: 22, salary: 40000 }
// ];


// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i].id < pivot.id){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// console.log(quickSort(users))

// given linked list code with duplicate ,elements write a friction to remove duplicate elements from LL

// function removeDuplicates(){
//     let temp = this.head
//     let prev = null
//     let seen = new Set()
//     while(temp){
//         if(seen.has(temp.value)){
//             prev.next = temp.next
//             this.size--
//         }else{
//             seen.add(temp.value)
//             prev = temp
//         }
//         temp = temp.next
//     }
// }

//give a student object and replace all values with your name

// const student = {
//     id: 101,
//     name: "Aarav Sharma",
//     age: 20,
//     grade: "A",
//     subjects: ["Math", "Physics", "Chemistry"],
//     isActive: true,
//     address: {
//         city: "Mumbai",
//         state: "Maharashtra",
//         pin: "400001"
//     }
// };

// function replaceValue(obj){
//     for(let key in obj){
//         if(typeof obj[key] == 'object'){
//              replaceValue(obj[key])
//         }else{
//             obj[key] = "ahamathbasha"
//         }
//     }

//     return obj
// }

// console.log(replaceValue(student))


// Write a program to identify and return the odd numbers that appear more than once in an array

//  Write a recursive function to check if a given string is a palindrome

// sum of first 2 and last 2 values in linkedList

// Find sum of all using normal and recursion  const ab = [{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34}]


// Write a function that takes an array of integers as input and returns all possible subsets of the array, where each subset is represented as an object with keys a1, a2, ..., an and values corresponding to the elements of the subset.

//reverse a digit

//remove duplicates from string