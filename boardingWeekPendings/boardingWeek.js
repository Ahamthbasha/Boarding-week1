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

// let arr = [7,1,2,1,1,2,3,4,5,7,7,10]

// let freqMap ={}

// let oddNoAppearMoreThanOnce = []
// let seen = new Set()
// for(let val of arr){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val] = 1
//     }
// }

// for(let [key,value] of Object.entries(freqMap)){
//     if(Number(key) % 2 != 0 && value > 1){
//         if(!seen.has(Number(key))){
//             seen.add(Number(key))
//             oddNoAppearMoreThanOnce.push(Number(key))
//         }
//     }
// }

// console.log(oddNoAppearMoreThanOnce)

//  Write a recursive function to check if a given string is a palindrome

// function checkPalindrome(str){
//     if(str.length < 2){
//         return true
//     }

//     let first = str[0]
//     let takeLast = str[str.length-1]

//     if(first != takeLast){
//         return false
//     }

//     return checkPalindrome(str.slice(1,str.length-1))
// }

// console.log(checkPalindrome("malayalamaa"))

// sum of first 2 and last 2 values in linkedList

// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     getSize(){
//         return this.size
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let temp = this.head
//             while(temp.next){
//                 temp = temp.next
//             }
//             temp.next = node
//         }
//         this.size++
//     }

//     getValue(){
//         if(this.isEmpty()){
//             return []
//         }else{
//             let list = []
//             let temp = this.head

//             while(temp){
//                 list.push(temp.value)
//                 temp = temp.next
//             }

//             return list
//         }
//     }

//     firstTwoAndLastTwoSum(){
//         let value = this.getValue()
//         if(value.length == 0){
//             return null
//         }
//         else{
//             if(value.length < 4){
//                 return null
//             }
//             let firstTwo = value[0] + value[1]
//             let LastTwo = value[value.length-1] + value[value.length-2]

//             let sum = firstTwo + LastTwo
//             return sum
//         }
//     }
// }


// Find sum of all using normal and recursion  
 
// const ab = [{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34}]

// let sum = 0

// for(let val of ab){
//     let localSum = val.a.reduce((acc,cur)=>{
//         return acc + cur
//     })

//     let n = val.n

//     sum += localSum + n
// }

// console.log(sum)


// function findSumObj(obj,index=0,sum = 0){
//     if(obj.length == index){
//         return sum
//     }

//     let take = obj[index].a.reduce((acc,cur)=>acc+cur)
//     let n = obj[index].n
//     let result = take + n

//     return findSumObj(obj,index+1,sum+=result)
// }

// console.log(findSumObj(ab))


// Write a function that takes an array of integers as input and returns all possible subsets of the array, where each subset is represented as an object with keys a1, a2, ..., an and values corresponding to the elements of the subset.

//detailed explaination for the above question

// 1️⃣ What are “all possible subsets”?

// Given an array:

// [1, 2, 3]


// All subsets (also called the power set) are:

// []
// [1]
// [2]
// [3]
// [1,2]
// [1,3]
// [2,3]
// [1,2,3]


// ✔ Includes empty set
// ✔ Includes full set
// ✔ Order inside subset doesn’t matter

// Total subsets = 2^n

// 2️⃣ What does “each subset is represented as an object” mean?

// Instead of returning arrays like [1,2], they want objects.

// Key format:

// Keys must be: a1, a2, a3, ...

// Values are the elements of the subset

// 3️⃣ Concrete example (THIS IS THE KEY PART)
// Input
// [1, 2]

// All subsets
// []
// [1]
// [2]
// [1,2]

// Required output format
// [
//   {},                       // empty subset
//   { a1: 1 },                 // subset [1]
//   { a1: 2 },                 // subset [2]
//   { a1: 1, a2: 2 }           // subset [1,2]
// ]

// function generateSubsets(arr){
//     let result = [[]]
//     for(let num of arr){
//         let size = result.length
//         for(let i=0;i<size;i++){
//             result.push([...result[i],num])
//         }
//     }
//     return result
// }

// let subset = generateSubsets([1,2,3])
// let final = []
// for(let val of subset){
//     if(val.length == 0){
//         final.push({})
//     }
//     else{
//         let result = {}
//         let i = 1
//         for(let no of val){
//             result[`a${i}`] = no
//             i++
//         }
//         final.push(result)
//     }
// }
// console.log(final)

//This is subArray

//input : let arr = [1,2,3]
//output : [
//   [],       [ 1 ],
//   [ 2 ],    [ 3 ],
//   [ 1, 2 ], [ 1, 3 ],
//   [ 2, 3 ], [ 1, 2, 3 ]
// ]

// let arr = [1,2,3]
// let subArr = []
// subArr.push([])
// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         subArr.push(arr.slice(i,j+1))
//     }
// }

// console.log(subArr)

//sum of a digit

// let n = 1001

// function sumOfDigits(n){
//     if(n <= 0){
//         return n
//     }
//     return (n % 10) + sumOfDigits(Math.floor(n/10))
// }

// console.log(sumOfDigits(n))


//reverse a digit

// let n2 = 1002

// n2 = parseInt(n2.toString().split('').reverse().join(""))
// console.log(n2)

//remove duplicates from string

// Input:  "banana"
// Output: "ban"

// let str = "banana"
// let finalStr = ''
// let seen = new Set()
// for(let val of str){
//     if(!seen.has(val)){
//         seen.add(val)
//         finalStr += val
//     }
// }

// console.log(finalStr)

//difference between two times in minutes

// function diffTimeInMinute(time1,time2){
//     let [h1,m1] = time1.split(":").map(Number)
//     let [h2,m2] = time2.split(":").map(Number)

//     const t1 = h1 * 60 + m1
//     const t2 = h2 * 60 + m2

//     return Math.abs(t2 - t1)
// }

// console.log(diffTimeInMinute("10:30", "11:15"))

// count hours until new year

// const now = new Date()

// const nextYear = now.getFullYear() + 1

// const newYear = new Date(nextYear,0,1,0,0,0)

// const diffMs = newYear - now

// const diffHours = Math.floor(diffMs/(1000*60*60))

// console.log(diffHours)

// //calculate hours,minutes,seconds,days until next year

// function timeUntilNewYear(unit = "hours") {
//     const now = new Date()
//     const newYear = new Date(now.getFullYear() + 1, 0, 1)

//     const diffMs = newYear - now

//     switch (unit) {
//         case "seconds":
//             return Math.floor(diffMs / 1000)
//         case "minutes":
//             return Math.floor(diffMs / (1000 * 60))
//         case "hours":
//             return Math.floor(diffMs / (1000 * 60 * 60))
//         case "days":
//             return Math.floor(diffMs / (1000 * 60 * 60 * 24))
//         default:
//             return diffMs
//     }
// }


//insert a node into the sorted List

// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size  == 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }
//         else{
//             let temp = this.head

//             while(temp.next){
//                 temp = temp.next
//             }

//             temp.next = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             let temp = this.head

//             let list = ''

//             while(temp){
//                 list += temp.value + '->'
//                 temp = temp.next
//             }
//             list += 'null'
//             return list
//         }
//     }

//     insert(index,value){
//         const node = new Node(value)
//         if(index < 0 || index > this.size){
//             return null
//         }
//         else if(index == 0){
//             this.prepend(value)
//         }
//         else if(index == this.size){
//             this.append(value)
//         }
//         else{
//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }

//             let nextNode = temp.next
//             temp.next = node
//             node.next = nextNode
//             this.size++
//         }
//     }

//     insertNodeInSortedList(node){
//         if(!this.head || node.value < this.head.value){
//             node.next = this.head
//             this.head = node
//         }else{
//             let temp = this.head
//             while(temp.next && temp.next.value < node.value){
//                 temp = temp.next
//             }
//             node.next = temp.next
//             temp.next = node
//         }
//         this.size++
//     }
// }

// const ll = new LinkedList()

// // Initial sorted list
// ll.append(10)
// ll.append(20)
// ll.append(40)
// ll.append(50)
// ll.append(60)
// console.log("Initial:", ll.print()) // 10->20->40->50->60->null

// // Insert at head
// ll.insert(0, 5)
// console.log("Insert at head:", ll.print()) // 5->10->20->40->50->60->null

// // Insert at tail
// ll.insert(ll.getSize(), 70)
// console.log("Insert at tail:", ll.print()) // 5->10->20->40->50->60->70->null

// // Insert in middle
// ll.insert(3, 25)
// console.log("Insert in middle:", ll.print()) // 5->10->20->25->40->50->60->70->null

// // Insert using sorted insert
// ll.insertNodeInSortedList(new Node(15))
// ll.insertNodeInSortedList(new Node(35))
// ll.insertNodeInSortedList(new Node(75))
// console.log("After sorted inserts:", ll.print())
// // 5->10->15->20->25->35->40->50->60->70->75->null


//test 

// console.log(1+ +'1') //2
// console.log('A'-1) //NaN
// console.log(null==undefined) //true