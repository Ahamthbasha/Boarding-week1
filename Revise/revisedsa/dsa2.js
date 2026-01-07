// function bubbleSort(arr){
//     let swapped = true
    
//     while(swapped){
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 swapped = true
//             }
//         }
//     }

//     return arr
// }

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let cur = arr[i]
//         let j = i-1

//         while(j >= 0 && arr[j] > cur){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = cur
//     }
//     return arr
// }

// function selectionSort(arr){
//     let minElement

//     for(let i=0;i<arr.length-1;i++){
//         minElement = i
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[j] < arr[minElement]){
//                 minElement = j
//             }
//         }
//         [arr[i],arr[minElement]] = [arr[minElement],arr[i]]
//     }
//     return arr
// }

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArr = mergeSort(arr.slice(0,mid))
//     let rightArr = mergeSort(arr.slice(mid))
//     return merge(leftArr,rightArr)
// }

// function merge(leftArr,rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }

//     return sortedArr.concat(leftArr,rightArr)
// }


// Input: [4,4,1,2,1,1,3]
// Output: [1,1,1,4,4,2,3]

// let arr = [4,4,1,2,1,1,3]

// let freqMap = {}

// for(let val of arr){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val]=1
//     }
// }

// let result = Object.entries(freqMap)

// result.sort((a,b)=>{
//     if(a[1] == b[1]){
//         return a-b
//     }
//     else{
//         return b[1] - a[1]
//     }
// })

// let finalArr = []

// for(let [no,freq] of result){
//     for(let i=0;i<freq;i++){
//         finalArr.push(Number(no))
//     }
// }

// console.log(finalArr)

// Input: [2, -7, 3, -2, 5]
// Output: [2, -2, 3, 5, -7]

// let arr = [2, -7, 3, -2, 5]

// let swapped = true

// while(swapped){
//     swapped = false
//     for(let i=0;i<arr.length-1;i++){
//         if(Math.abs(arr[i]) > Math.abs(arr[i+1])){
//             [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//             swapped = true
//         }
//     }
// }

// console.log(arr)

//Input : ["apple", "bat", "car", "a", "dog"]

//output : ["a", "bat", "car", "dog", "apple"]

// let s = ["apple", "bat", "car", "a", "dog"]

// s.sort((a,b)=>{
//     if(a.length == b.length){
//         return a.localeCompare(b)
//     }
//     else{
//         return a.length - b.length
//     }
// })

// console.log(s)

// let arr = [5, 10, 7]

// arr.sort((a,b)=>a-b)

// console.log(arr[0]+arr[1] > arr[2])

// s1 = "listen"
// s2 = "silent"

// let s1 = "listen"
// let s2 = "silent"

// s1 = s1.split("").sort().join("")
// s2 = s2.split("").sort().join("")
// console.log(s1 == s2)

// A = [2, 1, 2, 5, 7, 1, 9]
// B = [2, 1, 8]

// let A = [2,1,2,5,7,1,9]
// let B = [2,1,8]

// let index = 0
// let count = 0
// while(count != B.length){
//     let take = B[count]
//     for(let i=0;i<A.length;i++){
//         if(A[i] == take){
//             let temp = A[index]
//             A[index] = A[i]
//             A[i] = temp
//             index++
//         }
//     }
//     count++
// }

// A = A.slice(0,index).concat(A.slice(index).sort((a,b)=>a-b))

// console.log(A)


// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]

// let str = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let freqMap = {}

// for(let val of str){
//     let take = val.split("").sort().join("")
//     if(freqMap[take]){
//         freqMap[take].push(val)
//     }else{
//         freqMap[take]=[val]
//     }
// }

// let final = []

// for(let key in freqMap){
//     final.push(freqMap[key])
// }

// console.log(final)

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// let arr = [2,0,2,1,1,0]

// // arr.sort((a,b)=>a-b)

// let low = 0
// let high = arr.length - 1
// let mid = 0

// while(mid <= high){
//     if(arr[mid] == 0){
//         [arr[low],arr[mid]] = [arr[mid],arr[low]]
//         low++
//         mid++
//     }
//     else if(arr[mid] == 1){
//         mid++
//     }
//     else{
//         [arr[high],arr[mid]] = [arr[mid],arr[high]]
//         high--
//     }
// }

// console.log(arr)

// let arr = [7, 10, 4, 3, 20, 15]
// let k = 4

// function quickSelect(arr,k){
//     if(arr.length == 1){
//         return arr[0]
//     }

//     let pivot = arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     if(leftArr.length == k-1){
//         return pivot
//     }
//     else if(leftArr.length >= k){
//         return quickSelect(leftArr,k)
//     }
//     else{
//         return quickSelect(rightArr,k-leftArr.length-1)
//     }
// }

// console.log(quickSelect(arr,k))

// class Stack{
//     constructor(){
//         this.item = []
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     push(value){
//         this.item.push(value)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.item.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.item[this.item.length-1]
//     }

//     print(){
//         return this.item
//     }

//     reverseArr(arr){
//         let m = new Stack()

//         for(let val of arr){
//             m.push(val)
//         }

//         let reversedArr = []

//         while(m.item.length){
//             reversedArr.push(m.pop())
//         }

//         return reversedArr
//     }

//     reverseStr(str){
//         let s = new Stack()

//         for(let val of str){
//             s.push(val)
//         }

//         let reversedStr = []

//         while(s.item.length){
//             reversedStr.push(s.pop())
//         }

//         return reversedStr.join('')
//     }

//     getSize(){
//         return this.item.length
//     }
// }

// const stack = new Stack()

// // Stack operations
// console.log(stack.isEmpty())        // true
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.peek())           // 30
// console.log(stack.pop())            // 30
// console.log(stack.peek())           // 20
// console.log(stack.getSize())        // 2
// console.log(stack.print())          // [10, 20]

// // Reverse Array
// const arr = [1, 2, 3, 4, 5]
// console.log(stack.reverseArr(arr))  // [5, 4, 3, 2, 1]

// // Reverse String
// const str = "stack"
// console.log(stack.reverseStr(str))  // "kcats"

// // Pop remaining elements
// stack.pop()
// stack.pop()
// console.log(stack.isEmpty())        // true


//stack based on object


// class Stack{
//     constructor(){
//         this.items = {}
//         this.top = 0
//     }

//     isEmpty(){
//         return this.top == 0
//     }

//     push(val){
//         this.items[this.top] = val
//         this.top++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return 
//         }

//         let val = this.items[this.top-1]
//         delete this.items[this.top-1]
//         this.top--
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return 
//         }

//         return this.items[this.top-1]
//     }

//     display(){
//         return this.items
//     }

//     getSize(){
//         return this.top
//     }
// }

// const s = new Stack()

// console.log(s.isEmpty())   // true
// s.push(10)
// s.push(20)
// s.push(30)

// console.log(s.peek())      // 30
// console.log(s.pop())       // 30
// console.log(s.peek())      // 20
// console.log(s.getSize())   // 2
// console.log(s.display())  // { '0': 10, '1': 20 }

// s.pop()
// s.pop()
// console.log(s.isEmpty())   // true


//linkedlist stack

// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }

// class LL{
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

//     push(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }
//         else if(this.size == 1){
//             let val = this.head.value
//             this.head = null
//             this.size--
//             return val
//         }
//         else{
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.head.value
//     }

//     print(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             let list = ''
//             let temp = this.head

//             while(temp){
//                 list += temp.value + '->'
//                 temp = temp.next
//             }

//             list += 'null'

//             return list
//         }
//     }
// }

// const s = new LL()

// console.log(s.isEmpty())  // true

// s.push(10)
// s.push(20)
// s.push(30)

// console.log(s.print())    // 30->20->10->null
// console.log(s.peek())     // 30
// console.log(s.pop())      // 30
// console.log(s.print())    // 20->10->null
// console.log(s.getSize())  // 2


//valid parenthesis

// let str = "{}[[]()"

// let bracketMap = {
//     "(" : ")",
//     "{" : "}",
//     "[" : "]"
// }

// let stack = []

// for(let val of str){
//     if(bracketMap[val]){
//         stack.push(val)
//     }else{
//         if(stack.length == 0 || bracketMap[stack.pop()] != val){
//             return false
//         }
//     }
// }

// console.log(stack.length == 0)

//next greater element

// Input: [4,5,2,10]
// Output: [5,10,10,-1]

// let arr = [4,5,2,10]

// let newArr = new Array(arr.length).fill(-1)

// let stack = []

// for(let i=0;i<arr.length;i++){
//     while(stack.length > 0 && arr[i] > arr[stack[stack.length-1]]){
//         let index = stack.pop()
//         newArr[index] = arr[i]
//     }
//     stack.push(i)
// }

// console.log(newArr)

//removeAdjacentDuplicates


// Input: "abbaca"
// Output: "ca"

// let str = "abbaca"

// let stack = []

// for(let i=0;i<str.length;i++){
//     if(i == 0){
//         stack.push(str[i])
//     }
//     else if(stack[stack.length-1] == str[i]){
//         stack.pop()
//     }
//     else{
//         stack.push(str[i])
//     }
// }

// console.log(stack.join(""))

// Input: "23*54*+9-"
// Output: 17

// let str = "23*54+9-"

// let stack = []

// for(let ch of str){
//     if(/\d/.test(ch)){
//         stack.push(Number(ch))
//     }
//     else{
//         let result 
//         let right = stack.pop()
//         let left = stack.pop()

//         switch(ch){
//             case "+":
//                 result = left + right
//                 break
//             case "-":
//                 result = left - right
//                 break
//             case "*":
//                 result = left * right
//                 break
//             case "/":
//                 result = Math.trunc(left/right)
//                 break
//         }
//         stack.push(result)
//     }
// }

// console.log(stack)

// let str = "23*54*+9-"
// let stack = []

// for (let ch of str) {
//     if (/\d/.test(ch)) {
//         stack.push(Number(ch))
//     } else {
//         let right = stack.pop()
//         let left = stack.pop()
//         let result

//         switch (ch) {
//             case "+":
//                 result = left + right
//                 break
//             case "-":
//                 result = left - right
//                 break
//             case "*":
//                 result = left * right
//                 break
//             case "/":
//                 result = Math.trunc(left / right)
//                 break
//         }
//         stack.push(result)
//     }
// }

// console.log(stack[0]) // 17

//multi digit post fix

// let input = "333 3 * 222 2 * + 90 -"

// let arr = input.split(' ')
// let stack = []

// for(let ch of arr){
//     if(/[0-9]/.test(ch)){
//         stack.push(Number(ch))
//     }
//     else{
//         let result 
//         let right = stack.pop()
//         let left = stack.pop()

//         switch(ch){
//             case "+":
//                 result = left + right
//                 break
//             case "-":
//                 result = left - right
//                 break
//             case "*":
//                 result = left * right
//                 break
//             case "/":
//                 result = Math.trunc(left/right)
//                 break
//         }
//         stack.push(result)
//     }
// }

// console.log(stack[0])

// build stack by queue

// class Queue{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     enqueue(value){
//         this.items.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.items.shift()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.items[0]
//     }

//     print(){
//         return this.items
//     }
// }

// class Stack{
//     constructor(){
//         this.stackItem = new Queue()
//     }

//     isEmpty(){
//         return this.stackItem.isEmpty()
//     }

//     push(value){
//         this.stackItem.enqueue(value)

//         let size = this.stackItem.items.length - 1
        
//         for(let i=0;i<size;i++){
//             this.stackItem.enqueue(this.stackItem.dequeue())
//         }
//     }

//     pop(){
//         if(this.stackItem.isEmpty()){
//             return null
//         }
//         return this.stackItem.dequeue()
//     }

//     peek(){
//         if(this.stackItem.isEmpty()){
//             return null
//         }
//         return this.stackItem.peek()
//     }

//     print(){
//         return this.stackItem.print()
//     }
// }

// let s = new Stack()

// s.push(1)
// s.push(2)
// s.push(3)

// console.log(s.pop())  // 3
// console.log(s.peek()) // 2
// console.log(s.pop())  // 2
// console.log(s.pop())  // 1
// console.log(s.pop())  // null


// class Queue{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     enqueue(value){
//         this.items.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.items.shift()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items[0]
//     }

//     print(){
//         return this.items
//     }

//     getSize(){
//         return this.items.length
//     }

//     reverseArr(arr){
//         let q = new Queue()

//         for(let val of arr){
//             q.enqueue(val)
//         }

//         let s = []

//         while(q.items.length){
//             s.push(q.dequeue())
//         }

//         let result = []

//         while(s.length){
//             result.push(s.pop())
//         }

//         return result
//     }

//     reverseStr(str){
//         let q = new Queue()

//         for(let val of str){
//             q.enqueue(val)
//         }

//         let s = []

//         while(q.items.length){
//             s.push(q.dequeue())
//         }

//         let result = []

//         while(s.length){
//             result.push(s.pop())
//         }

//         return result.join("")
//     }
// }

// let q = new Queue()

// // ---------- BASIC QUEUE OPERATIONS ----------
// console.log("Is Empty:", q.isEmpty())   // true

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log("Queue after enqueue:", q.print()) // [10, 20, 30]
// console.log("Peek:", q.peek())                 // 10
// console.log("Size:", q.getSize())              // 3

// console.log("Dequeue:", q.dequeue())           // 10
// console.log("Queue now:", q.print())           // [20, 30]
// console.log("Size:", q.getSize())              // 2

// console.log("Dequeue:", q.dequeue())           // 20
// console.log("Dequeue:", q.dequeue())           // 30
// console.log("Dequeue on empty:", q.dequeue())  // null
// console.log("Is Empty:", q.isEmpty())           // true

// // ---------- REVERSE ARRAY ----------
// console.log("Reverse Array [1,2,3,4]:", q.reverseArr([1,2,3,4]))
// // Expected: [4,3,2,1]

// console.log("Reverse Array []:", q.reverseArr([]))
// // Expected: []

// console.log("Reverse Array [5]:", q.reverseArr([5]))
// // Expected: [5]

// // ---------- REVERSE STRING ----------
// console.log("Reverse String 'hello':", q.reverseStr("hello"))
// // Expected: "olleh"

// console.log("Reverse String 'a':", q.reverseStr("a"))
// // Expected: "a"

// console.log("Reverse String '':", q.reverseStr(""))
// // Expected: ""

// // ---------- MIXED DATA ----------
// console.log("Reverse Array mixed:", q.reverseArr([1,"a",true,null]))
// // Expected: [null, true, "a", 1]


// class Queue{
//     constructor(){
//         this.items = {}
//         this.head = 0
//         this.tail = 0
//     }

//     isEmpty(){
//         return this.tail - this.head == 0
//     }

//     getSize(){
//         return this.tail - this.head
//     }

//     enqueue(value){
//         this.items[this.tail] = value
//         this.tail++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }

//         let val = this.items[this.head]
//         delete this.items[this.head]
//         this.head++
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.items[this.head]
//     }

//     print(){
//         return this.items
//     }
// }


// let q = new Queue()

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.dequeue()) // 10
// console.log(q.dequeue()) // 20
// console.log(q.peek())    // 30
// console.log(q.getSize()) // 1

// q.enqueue(40)
// console.log(q.dequeue()) // 30
// console.log(q.dequeue()) // 40
// console.log(q.dequeue()) // null


//linkedlist based on queue

// class Node{
//     constructor(val){
//         this.value = val
//         this.next = null
//     }
// }

// class LL{
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

//     enqueue(value){
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

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.head.value
//     }

//     print(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             let list = ''
//             let temp = this.head

//             while(temp){
//                 list += temp.value + '->'
//                 temp = temp.next
//             }

//             list += 'null'
//             return list
//         }
//     }
// }

// // Create queue
// let queue = new LL()

// console.log("Is empty:", queue.isEmpty())  // true
// console.log("Size:", queue.getSize())      // 0
// console.log("Peek on empty:", queue.peek())// null
// console.log("Dequeue on empty:", queue.dequeue()) // null

// // Enqueue elements
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)

// console.log("Queue after enqueue:", queue.print()) // 10->20->30->40->null
// console.log("Is empty:", queue.isEmpty())          // false
// console.log("Size:", queue.getSize())              // 4
// console.log("Peek:", queue.peek())                 // 10

// // Dequeue elements
// console.log("Dequeue:", queue.dequeue())           // 10
// console.log("Dequeue:", queue.dequeue())           // 20
// console.log("Queue now:", queue.print())           // 30->40->null
// console.log("Peek now:", queue.peek())             // 30
// console.log("Size now:", queue.getSize())          // 2

// // Dequeue remaining
// console.log("Dequeue:", queue.dequeue())           // 30
// console.log("Dequeue:", queue.dequeue())           // 40
// console.log("Dequeue on empty again:", queue.dequeue()) // null
// console.log("Queue now:", queue.print())           // null
// console.log("Is empty now:", queue.isEmpty())      // true

// let queue = [1,2,3,4,5]

// let stack = []

// while(queue.length){
//     stack.push(queue.shift())
// }

// let result = []

// while(stack.length){
//     result.push(stack.pop())
// }

// console.log(result)

// let arr = [1,2,3,4,5]

// function reverseArr(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let start = arr[0]
//     let rest = arr.slice(1)
//     return reverseArr(rest).concat(start)
// }

// console.log(reverseArr(arr))

//generate binary numbers

// let N = 5

// // for(let i=1;i<=N;i++){
// //     console.log(i.toString(2))
// // }

// let queue = []

// queue.push('1')

// let result = []

// for(let i=1;i<=N;i++){
//     let val = queue.shift()
//     result.push(val)

//     queue.push(val+'0')
//     queue.push(val+'1')
// }

// console.log(result)

//implement queue by using stack

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     push(val){
//         this.items.push(val)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.items.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.items[this.items.length-1]
//     }
// }

// class Queue{
//     constructor(){
//         this.s1 = new Stack()
//         this.s2 = new Stack()
//     }

//     isEmpty(){
//         return this.s1.isEmpty() && this.s2.isEmpty()
//     }

//     enqueue(val){
//         this.s1.push(val)
//     }

//     dequeue(){
//         if(this.s2.isEmpty()){
//             while(!this.s1.isEmpty()){
//                 this.s2.push(this.s1.pop())
//             }
//         }

//         return this.s2.pop()
//     }

//     peek(){
//         if(this.s2.isEmpty()){
//             while(!this.s1.isEmpty()){
//                 this.s2.push(this.s1.pop())
//             }
//         }

//         return this.s2.peek()
//     }

//     print(){
//         let s2Elem = [...this.s2.items].reverse()
//         let s1Elem = [...this.s1.items]
//         return [...s2Elem,...s1Elem]
//     }
// }

// let q = new Queue()

// console.log(q.isEmpty()) // true
// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// console.log(q.print()) // [1,2,3]
// console.log(q.peek())  // 1
// console.log(q.dequeue()) // 1
// console.log(q.print()) // [2,3]
// q.enqueue(4)
// console.log(q.print()) // [2,3,4]
// console.log(q.dequeue()) // 2
// console.log(q.peek())    // 3
// console.log(q.isEmpty()) // false
// console.log(q.dequeue()) // 3
// console.log(q.dequeue()) // 4
// console.log(q.isEmpty()) // true
// console.log(q.dequeue()) // null



// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hashKey(key){
//         let total = 0

//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hashKey(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.hashKey(key)
//         return this.table[index] ?? null
//     }

//     remove(key){
//         let index = this.hashKey(key)

//         if(this.table[index] != undefined){
//             this.table[index] = undefined
//             return true
//         }
//         else{
//             return false
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const ht = new Hashtable(10)

// // Insert
// ht.set("name", "Alice")
// ht.set("age", 25)
// ht.set("city", "Delhi")

// // Get
// console.log(ht.get("name"))   // Alice
// console.log(ht.get("age"))    // 25
// console.log(ht.get("city"))   // Delhi
// console.log(ht.get("country"))// null

// // Remove
// console.log(ht.remove("age")) // true
// console.log(ht.get("age"))    // null
// console.log(ht.remove("age")) // false

// // Overwrite test (no collision handling)
// ht.set("name", "Bob")
// console.log(ht.get("name"))   // Bob

// // Print table
// ht.print()


//separate chaining

// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hashKey(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index = this.hashKey(key)

//         let bucket = this.table[index]

//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }
//         else{
//             let sameBucket = bucket.find((item)=>item[0]==key)

//             if(sameBucket){
//                 sameBucket[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hashKey(key)

//         let bucket = this.table[index]

//         if(bucket){
//             let getValue = bucket.find((item)=>item[0]==key)

//             return getValue ? getValue[1] : null
//         }else{
//             return null
//         }
//     }

//     remove(key){
//         let index = this.hashKey(key)
//         let bucket = this.table[index]

//         if(bucket){
//             let bucketIndex = bucket.findIndex((val)=>val[0]==key)

//             if(bucketIndex != -1){
//                 bucket.splice(bucketIndex,1)
//                 return true
//             }
//         }

//         return false
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     console.log(i,bucket[j])
//                 }
//             }
//         }
//     }

//     findDuplicatesFromInput(arr){
//         let input = Array.isArray(arr) ? arr : arr.split('')

//         let t = new Hashtable(50)

//         for(let val of input){
//             let key = val.toString()
//             let count = t.get(key) || 0
//             t.set(key,count+1)
//         }

//         let duplicates = []
//         let unique = []

//         for(let i=0;i<t.table.length;i++){
//             let bucket = t.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     if(value == 1){
//                         unique.push(key)
//                     }

//                     if(value > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }
//         return {unique,duplicates}
//     }

//     removeDuplicatesFromInput(arr){
//         const input = Array.isArray(arr) ? arr : arr.split('')
//         let t = new Hashtable(50)

//         for(let val of input){
//             let key = val.toString()
//             let count = t.get(key) || 0
//             t.set(key,count+1)
//         }
//         let seen = new Set()
//         let removedDuplicates = []
//         for(let i=0;i<t.table.length;i++){
//             let bucket = t.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     let [key,value] = bucket[j]
//                     if(!seen.has(key)){
//                         seen.add(key)
//                         removedDuplicates.push(key)
//                     }
//                 }
//             }
//         }
//         return removedDuplicates
//     }

//     removeDuplicatesFromTable(){
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             let newBucket = []
//             let seen = new Set()
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     const [key,value] = bucket[j]
//                     if(!seen.has(key)){
//                         seen.add(key)
//                         newBucket.push([key,value])
//                     }
//                 }
//             }
//             this.table[i] = newBucket.length > 0 ? newBucket : undefined
//         }
//     }

//     findDuplicatesFromTable(){
//         let duplicates = []
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     const [key,value] = bucket[j]
//                     if(value > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }
//         return duplicates
//     }

//     nthMostFrequency(arr,k){
//         let t = new Hashtable(50)

//         for(let val of arr){
//             let key = val.toString()
//             let count = t.get(key) || 0
//             t.set(key,count+1)
//         }

//         let result = []

//         for(let i=0;i<t.table.length;i++){
//             let bucket = t.table[i]
//             if(bucket){
//                 for(let j=0;j<bucket.length;j++){
//                     const [key,value] = bucket[j]
//                     result.push([key,value])
//                 }
//             }
//         }

//         result.sort((a,b)=>b[1] - a[1])

//         return result[k-1] || null
//     }
// }

// // ===== TEST CASE FOR HASHTABLE =====

// const ht = new Hashtable(10)

// // ---- BASIC SET / GET ----
// ht.set("name", "Alice")
// ht.set("age", 25)
// ht.set("city", "Delhi")

// console.log(ht.get("name"))   // Alice
// console.log(ht.get("age"))    // 25
// console.log(ht.get("city"))   // Delhi
// console.log(ht.get("country"))// null

// // ---- UPDATE VALUE ----
// ht.set("name", "Bob")
// console.log(ht.get("name"))   // Bob

// // ---- REMOVE ----
// console.log(ht.remove("age")) // true
// console.log(ht.get("age"))    // null
// console.log(ht.remove("age")) // false

// // ---- COLLISION CHECK ----
// ht.set("ab", 1)
// ht.set("ba", 2) // likely collision due to same char sum
// console.log(ht.get("ab")) // 1
// console.log(ht.get("ba")) // 2

// // ---- PRINT TABLE ----
// console.log("Hashtable contents:")
// ht.print()

// // ---- FIND DUPLICATES FROM INPUT ----
// const dupResult = ht.findDuplicatesFromInput("aabbcdeff")
// console.log("Unique:", dupResult.unique)       // [ 'c', 'd', 'e' ]
// console.log("Duplicates:", dupResult.duplicates) // [ 'a', 'b', 'f' ]

// // ---- REMOVE DUPLICATES FROM INPUT ----
// console.log(
//     ht.removeDuplicatesFromInput("aabbccdde")
// ) // [ 'a', 'b', 'c', 'd', 'e' ]

// // ---- REMOVE DUPLICATES FROM TABLE ----
// const ht2 = new Hashtable(10)
// ht2.set("x", 1)
// ht2.set("x", 1)
// ht2.set("y", 2)
// ht2.set("z", 3)
// ht2.removeDuplicatesFromTable()
// console.log("After removing duplicates from table:")
// ht2.print()

// // ---- FIND DUPLICATES FROM TABLE ----
// const freqTable = new Hashtable(10)
// freqTable.set("a", 3)
// freqTable.set("b", 1)
// freqTable.set("c", 2)
// freqTable.set("d", 2)

// console.log(
//     freqTable.findDuplicatesFromTable()
// ) // ['a', 'c', 'd']

// // ---- Nth MOST FREQUENT ----
// console.log(
//     ht.nthMostFrequency("aabbbccccdd", 1)
// ) // ['c', 4]

// console.log(
//     ht.nthMostFrequency("aabbbccccdd", 2)
// ) // ['b', 3]

// console.log(
//     ht.nthMostFrequency("aabbbccccdd", 3)
// ) // ['a', 2]

// console.log(
//     ht.nthMostFrequency("aabbbccccdd", 10)
// ) // null


// let arr = [7, 10, 4, 3, 20, 15]
// let k = 2

// function quickSelect(arr,k){
//     if(arr.length == 0){
//         return arr[0]
//     }

//     let pivot = arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     if(leftArr.length == k-1){
//         return pivot
//     }
//     else if(leftArr.length >= k){
//         return quickSelect(leftArr,k)
//     }
//     else{
//         return quickSelect(rightArr,k-leftArr.length-1)
//     }
// }

// console.log(quickSelect(arr,k))