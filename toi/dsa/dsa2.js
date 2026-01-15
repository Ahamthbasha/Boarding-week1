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
//         let j = i - 1

//         while(j>=0 && arr[j] > cur){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = cur
//     }

//     return arr
// }

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minElement = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minElement] > arr[j]){
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
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr))
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

// let arr = [64, 34, 25, 12, 22, 11, 90]

// console.log("Original:", [...arr])

// console.log("Bubble Sort:", bubbleSort([...arr]))
// // Output: [11, 12, 22, 25, 34, 64, 90]

// console.log("Insertion Sort:", insertionSort([...arr]))
// // Output: [11, 12, 22, 25, 34, 64, 90]

// console.log("Selection Sort:", selectionSort([...arr]))
// // Output: [11, 12, 22, 25, 34, 64, 90]

// console.log("Quick Sort:", quickSort([...arr]))
// // Output (after FIX): [11, 12, 22, 25, 34, 64, 90]

// console.log("Merge Sort:", mergeSort([...arr]))
// // Output: [11, 12, 22, 25, 34, 64, 90]

// // ===== EDGE CASES =====
// console.log(bubbleSort([]))             
// // Output: []

// console.log(insertionSort([5]))         
// // Output: [5]

// console.log(selectionSort([3,3,3]))     
// // Output: [3,3,3]

// console.log(quickSort([5,1,5,2,5]))     
// // Output (after FIX): [1,2,5,5,5]

// console.log(mergeSort([10,-1,2,0]))     
// // Output: [-1,0,2,10]


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
//         return a[0] - b[0]
//     }
//     else{
//         return b[1] - a[1]
//     }
// })

// let final = []

// for(let [key,value] of result){
//     for(let i=0;i<value;i++){
//         final.push(Number(key))
//     }
// }

// console.log(final)

//Absolute sort

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

// let words = ["apple", "bat", "car", "a", "dog"]

// words.sort((a,b)=>{
//     if(a.length == b.length){
//         return a.localeCompare(b)
//     }
//     else{
//         return a.length - b.length
//     }
// })
// console.log(words)

//can form rectangle

// let arr = [5, 10, 7]

// arr.sort((a,b)=>a-b)

// console.log(arr[0]+arr[1] > arr[2])

// s1 = "listen"
// s2 = "silent"

// let s1 = "listen"
// let s2 = "silent"

// s1 = s1.split("").sort().join("")
// s2 = s2.split("").sort().join("")
// console.log(s1,s2)
// console.log(s1 == s2)
// let freqS1 = {}

// for(let val of s1){
//     if(freqS1[val]){
//         freqS1[val]++
//     }else{
//         freqS1[val]=1 
//     }
// }

// console.log(freqS1)

// for(let val of s2){
//     if(freqS1[val]){
//         freqS1[val]--
//     }else{
//         console.log(false)
//         return 
//     }
// }

// console.log(true)

//relative sorting

// A = [2, 1, 2, 5, 7, 1, 9]
// B = [2, 1, 8]


// let A = [2, 1, 2, 5, 7, 1, 9]
// let B = [2, 1, 8]

// let length = B.length
// let loop = 0

// let index = 0
// while(loop != length){
//     for(let i=0;i<A.length;i++){
//         if(A[i] == B[loop]){
//             [A[i],A[index]] = [A[index],A[i]]
//             index++
//         }
//     }
//     loop++
// }

// A = A.slice(0,index).concat(A.slice(index).sort((a,b)=>a-b))

// console.log(A)

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]


// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let freqMap = {}

// for(let val of arr){
//     let key = val.split("").sort().join("")
//     if(freqMap[key]){
//         freqMap[key].push(val)
//     }else{
//         freqMap[key] = [val]
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

// let low = 0
// let mid = 0
// let high = arr.length - 1

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
//         [arr[mid],arr[high]] = [arr[high],arr[mid]]
//         high--
//     }
// }

// console.log(arr)

//quick Select

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
//         }
//         else{
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

//STACK

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     getSize(){
//         return this.items.length
//     }

//     push(value){
//         this.items.push(value)
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

//     reverseArr(arr){
//         let s = new Stack()

//         for(let val of arr){
//             s.push(val)
//         }

//         let reversed = []

//         while(s.items.length){
//             reversed.push(s.pop())
//         }

//         return reversed
//     }

//     reverseStr(str){
//         let s = new Stack()

//         for(let char of str){
//             s.push(char)
//         }

//         let reversedStr = ''

//         while(s.items.length){
//             reversedStr += s.pop()
//         }

//         return reversedStr
//     }

//     print(){
//         return this.items
//     }
// }

// let stack = new Stack()

// // ===== BASIC STACK OPERATIONS =====
// console.log(stack.isEmpty())
// // true

// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.print())
// // [10, 20, 30]

// console.log(stack.getSize())
// // 3

// console.log(stack.peek())
// // ❌ Before fix: 10
// // ✅ After fix: 30

// console.log(stack.pop())
// // 30

// console.log(stack.print())
// // [10, 20]

// console.log(stack.pop())
// // 20

// console.log(stack.pop())
// // 10

// console.log(stack.pop())
// // null

// console.log(stack.isEmpty())
// // true


// // ===== REVERSE ARRAY =====
// let arr = [1, 2, 3, 4, 5]
// console.log(stack.reverseArr(arr))
// // [5, 4, 3, 2, 1]


// // ===== REVERSE STRING =====
// let str = "hello"
// console.log(stack.reverseStr(str))
// // "olleh"


// // ===== EDGE CASES =====
// console.log(stack.reverseArr([]))
// // []

// console.log(stack.reverseStr(""))
// // ""

// console.log(stack.peek())
// // null


// class Stack{
//     constructor(){
//         this.items = {}
//         this.top = 0
//     }

//     isEmpty(){
//         return this.top == 0
//     }
    
//     getSize(){
//         return this.top
//     }

//     push(value){
//         this.items[this.top] = value
//         this.top++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }
//         let val = this.items[this.top-1]
//         delete this.items[this.top-1]
//         this.top--
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.items[this.top-1]
//     }

//     print(){
//         return this.items
//     }

// }

// let stack = new Stack()

// // ===== EMPTY STACK =====
// console.log(stack.isEmpty())
// // true

// console.log(stack.getSize())
// // 0

// console.log(stack.pop())
// // null

// console.log(stack.peek())
// // null


// // ===== PUSH OPERATIONS =====
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.print())
// // { '0': 10, '1': 20, '2': 30 }
// // (or [10, 20, 30] if using improved print)

// console.log(stack.getSize())
// // 3

// console.log(stack.peek())
// // 30


// // ===== POP OPERATIONS =====
// console.log(stack.pop())
// // 30

// console.log(stack.peek())
// // 20

// console.log(stack.pop())
// // 20

// console.log(stack.pop())
// // 10

// console.log(stack.pop())
// // null

// console.log(stack.isEmpty())
// // true


// // ===== MIXED OPERATIONS =====
// stack.push("A")
// stack.push("B")
// stack.push("C")

// console.log(stack.print())
// // { '0': 'A', '1': 'B', '2': 'C' }

// console.log(stack.getSize())
// // 3

// console.log(stack.peek())
// // "C"


//linkedlist based stack

// class Node{
//     constructor(value){
//         this.value = value
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

//     push(value){
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++
//     }

//     pop(){
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
//         else{
//             return this.head.value
//         }
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

// let stack = new LinkedList()

// // ===== EMPTY STACK =====
// console.log(stack.isEmpty())
// // true

// console.log(stack.getSize())
// // 0

// console.log(stack.pop())
// // null

// console.log(stack.peek())
// // null

// console.log(stack.print())
// // null


// // ===== PUSH OPERATIONS =====
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.print())
// // 30->20->10->null

// console.log(stack.getSize())
// // 3

// console.log(stack.peek())
// // 30


// // ===== POP OPERATIONS =====
// console.log(stack.pop())
// // 30

// console.log(stack.print())
// // 20->10->null

// console.log(stack.pop())
// // 20

// console.log(stack.pop())
// // 10

// console.log(stack.pop())
// // null

// console.log(stack.isEmpty())
// // true


// // ===== MIXED OPERATIONS =====
// stack.push("A")
// stack.push("B")
// stack.push("C")

// console.log(stack.print())
// // C->B->A->null

// console.log(stack.peek())
// // C

// console.log(stack.getSize())
// // 3


//valid parenthesis

// let str = "{}[]()"

// let bracketMap = {
//     "(" : ")",
//     "{" : "}",
//     "[" : "]"
// }

// let stack = []

// for(let val of str){
//     if(bracketMap[val]){
//         stack.push(val)
//     }
//     else{
//         if(stack.length == 0 || bracketMap[stack.pop()] != val){
//             return false
//         }
//     }
// }

// console.log(stack.length == 0)

// Input: [4,5,2,10]
// Output: [5,10,10,-1]

// let arr = [4,5,2,10]

// let newArray = new Array(arr.length).fill(-1)

// let stack = []

// for(let i=0;i<arr.length;i++){
//     while(stack.length != 0 && arr[i] > arr[stack[stack.length-1]] ){
//         let index = stack.pop()
//         newArray[index] = arr[i]
//     }
//     stack.push(i)
// }

// console.log(newArray)

// Input: "abbaca"
// Output: "ca"

// let str = "abbaca"

// let stack = []

// for(let i=0;i<str.length;i++){
//     if(i==0){
//         stack.push(str[i])
//     }
//     else if(str[i] != stack[stack.length-1]){
//         stack.push(str[i])
//     }
//     else{
//         stack.pop()
//     }
// }

// console.log(stack.join(""))

// Input: "23*54*+9-"
// Output: 17

// let str = "23*54*+9-"

// let stack = []

// for(let val of str){
//     if(/[0-9]/.test(val)){
//         stack.push(Number(val))
//     }
//     else{
//         let result
//         let right = stack.pop()
//         let left = stack.pop()

//         switch(val){
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
//                 result = Math.floor(left/right)
//                 break
//         }
//         stack.push(result)
//     }
// }

// console.log(stack[0])

// let input = "333 3 * 222 2 * + 90 -"

// input = input.split(" ")

// let stack = []

// for(let val of input){
//     if(/[0-9]/g.test(val)){
//         stack.push(Number(val))
//     }
//     else{
//         let result
//         let right = stack.pop()
//         let left = stack.pop()

//         switch(val){
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
//                 result = Math.floor(left/right)
//                 break
//         }
//         stack.push(result)
//     }
// }

// console.log(stack[0])

//build stack by queue

// class Queue{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     getSize(){
//         return this.items.length
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
//         this.Q = new Queue()
//     }

//     isEmpty(){
//         return this.Q.isEmpty()
//     }

//     getSize(){
//         return this.Q.getSize()
//     }

//     push(value){
//         this.Q.enqueue(value)

//         let size = this.Q.getSize()

//         for(let i=0;i<size-1;i++){
//             this.Q.enqueue(this.Q.dequeue())
//         }
//     }

//     pop(){
//         if(this.Q.isEmpty()){
//             return null
//         }
//         return this.Q.dequeue()
//     }

//     peek(){
//         if(this.Q.isEmpty()){
//             return null
//         }
//         return this.Q.peek()
//     }

//     print(){
//         return this.Q.print()
//     }
// }

// let stack = new Stack()

// // ===== EMPTY STACK =====
// console.log(stack.isEmpty())
// // true

// console.log(stack.pop())
// // null

// console.log(stack.peek())
// // null


// // ===== PUSH OPERATIONS =====
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.print())
// // [30, 20, 10]

// console.log(stack.peek())
// // 30

// console.log(stack.getSize())
// // 3


// // ===== POP OPERATIONS =====
// console.log(stack.pop())
// // 30

// console.log(stack.print())
// // [20, 10]

// console.log(stack.pop())
// // 20

// console.log(stack.pop())
// // 10

// console.log(stack.pop())
// // null

// console.log(stack.isEmpty())
// // true


// // ===== MIXED OPERATIONS =====
// stack.push("A")
// stack.push("B")
// stack.push("C")

// console.log(stack.print())
// // ["C", "B", "A"]

// console.log(stack.peek())
// // "C"

// console.log(stack.getSize())
// // 3

//queue

// class Queue{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     getSize(){
//         return this.items.length
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

//     reverseArr(arr){
//         let q = new Queue()

//         for(let val of arr){
//             q.enqueue(val)
//         }

//         let stack = []

//         while(q.items.length){
//             stack.push(q.dequeue())
//         }

//         while(stack.length){
//             q.enqueue(stack.pop())
//         }

//         return q
//     }

//     print(){
//         return this.items
//     }
// }

// let q = new Queue()

// // ===== EMPTY QUEUE =====
// console.log(q.isEmpty())
// // true

// console.log(q.getSize())
// // 0

// console.log(q.dequeue())
// // null

// console.log(q.peek())
// // null


// // ===== ENQUEUE OPERATIONS =====
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.print())
// // [10, 20, 30]

// console.log(q.peek())
// // 10

// console.log(q.getSize())
// // 3


// // ===== DEQUEUE OPERATIONS =====
// console.log(q.dequeue())
// // 10

// console.log(q.print())
// // [20, 30]

// console.log(q.dequeue())
// // 20

// console.log(q.dequeue())
// // 30

// console.log(q.dequeue())
// // null

// console.log(q.isEmpty())
// // true


// // ===== MIXED OPERATIONS =====
// q.enqueue("A")
// q.enqueue("B")
// q.enqueue("C")

// console.log(q.print())
// // ["A", "B", "C"]

// console.log(q.peek())
// // "A"

// console.log(q.getSize())
// // 3

// console.log(q.reverseArr([1,2,3,4,5]))

//queue object

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
//         else{
//             let val = this.items[this.head]
//             delete this.items[this.head]
//             this.head++
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             return this.items[this.head]
//         }
//     }

//     print(){
//         return this.items
//     }
// }

// let q = new Queue()

// // ===== EMPTY QUEUE =====
// console.log(q.isEmpty())
// // true

// console.log(q.getSize())
// // 0

// console.log(q.dequeue())
// // null

// console.log(q.peek())
// // null

// console.log(q.print())
// // {}


// // ===== ENQUEUE OPERATIONS =====
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.print())
// // { '0': 10, '1': 20, '2': 30 }

// console.log(q.peek())
// // 10

// console.log(q.getSize())
// // 3


// // ===== DEQUEUE OPERATIONS =====
// console.log(q.dequeue())
// // 10

// console.log(q.print())
// // { '1': 20, '2': 30 }

// console.log(q.dequeue())
// // 20

// console.log(q.dequeue())
// // 30

// console.log(q.dequeue())
// // null

// console.log(q.isEmpty())
// // true

// console.log(q.getSize())
// // 0


// // ===== MIXED OPERATIONS =====
// q.enqueue("A")
// q.enqueue("B")
// q.enqueue("C")

// console.log(q.print())
// // { '3': 'A', '4': 'B', '5': 'C' }

// console.log(q.peek())
// // "A"

// console.log(q.getSize())
// // 3


//linkedlist queue

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedListQueue{
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

//             node.next = temp.next
//             temp.next = node
//         }
//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//            let val = this.head.value
//            this.head = this.head.next
//            this.size--
//            return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             return this.head.value
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'empty'
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

// let q = new LinkedListQueue()

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.print())
// // 10->20->30->null

// console.log(q.dequeue())
// // 10

// console.log(q.peek())
// // 20

// console.log(q.getSize())
// // 2

// console.log(q.print())
// // 20->30->null

// let arr = [1,2,3,4,5]

// function reverseArr(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let first = arr[0]
//     let rest = arr.slice(1)

//     return reverseArr(rest).concat(first)
// }

// console.log(reverseArr(arr))

//generate binary numbers

// let n = 5

// for(let i=1;i<=n;i++){
//     console.log(i.toString(2))
// }
// console.log(`----------------------------------------`)
// let queue = []

// queue.push("1")

// for(let i=1;i<=n;i++){
//     let take = queue.shift()
//     console.log(take)

//     queue.push(take + "0")

//     queue.push(take + "1")
// }

//implement queue using stack

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     getSize(){
//         return this.items.length
//     }

//     push(value){
//         this.items.push(value)
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
//         this.S1 = new Stack()
//         this.S2 = new Stack()
//     }

//     isEmpty(){
//         return this.S1.isEmpty() && this.S2.isEmpty()
//     }

//     getSize(){
//         return this.S1.getSize() + this.S2.getSize()
//     }

//     enqueue(value){
//         this.S1.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.S2.isEmpty()){
//             while(!this.S1.isEmpty()){
//                 this.S2.push(this.S1.pop())
//             }
//         }

//         return this.S2.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         if(this.S2.isEmpty()){
//             while(!this.S1.isEmpty()){
//                 this.S2.push(this.S1.pop())
//             }
//         }
//         return this.S2.peek()
//     }
    
//     print(){
//         let s2Element = [...this.S2.items].reverse()
//         let s1Element = [...this.S1.items]

//         return [...s2Element,...s1Element]
//     }
// }
// const q = new Queue()

// console.log("Initial isEmpty:", q.isEmpty())        // true
// console.log("Initial size:", q.getSize())           // 0
// console.log("Dequeue on empty:", q.dequeue())       // null
// console.log("Peek on empty:", q.peek())             // null
// console.log("Print on empty:", q.print())           // []

// // Enqueue operations
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log("\nAfter enqueue 10,20,30")
// console.log("isEmpty:", q.isEmpty())                // false
// console.log("Size:", q.getSize())                   // 3
// console.log("Print:", q.print())                    // [10, 20, 30]
// console.log("Peek:", q.peek())                      // 10
// console.log("Print after peek:", q.print())         // [10, 20, 30]

// // Dequeue operations
// console.log("\nDequeue:", q.dequeue())              // 10
// console.log("Print:", q.print())                    // [20, 30]
// console.log("Size:", q.getSize())                   // 2

// console.log("Dequeue:", q.dequeue())                // 20
// console.log("Print:", q.print())                    // [30]
// console.log("Size:", q.getSize())                   // 1

// // Mix enqueue & dequeue
// q.enqueue(40)
// q.enqueue(50)

// console.log("\nAfter enqueue 40,50")
// console.log("Print:", q.print())                    // [30, 40, 50]
// console.log("Size:", q.getSize())                   // 3
// console.log("Peek:", q.peek())                      // 30

// console.log("Dequeue:", q.dequeue())                // 30
// console.log("Dequeue:", q.dequeue())                // 40
// console.log("Print:", q.print())                    // [50]
// console.log("Size:", q.getSize())                   // 1

// // Empty again
// console.log("\nFinal Dequeue:", q.dequeue())        // 50
// console.log("Final Dequeue:", q.dequeue())          // null
// console.log("Final isEmpty:", q.isEmpty())          // true
// console.log("Final Print:", q.print())              // []


// class HashTable{
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
//         if(index != -1){
//             return this.table[index]
//         }else{
//             return 'no key'
//         }
//     }

//     remove(key){
//         let index = this.hashKey(key)
//         if(index != -1){
//             this.table[index] = undefined
//             return true
//         }else{
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

// const ht = new HashTable(10)

// // Insert values
// ht.set("name", "Alice")
// ht.set("age", 25)
// ht.set("city", "Delhi")

// console.log("Get name:", ht.get("name"))   // Alice
// console.log("Get age:", ht.get("age"))     // 25
// console.log("Get city:", ht.get("city"))   // Delhi
// console.log("Get unknown:", ht.get("job")) // undefined

// // Remove a key
// console.log("Remove age:", ht.remove("age")) // true
// console.log("Get age after remove:", ht.get("age")) // undefined

// // Reinsert
// ht.set("age", 30)
// console.log("Get age after reinsert:", ht.get("age")) // 30

// // Print table
// console.log("\nHash Table Contents:")
// ht.print()

//hashtable with separate chaining

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
//         }else{
//             let chainIndex = bucket.find((val)=>val[0]==key)

//             if(chainIndex){
//                 chainIndex[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.hashKey(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let checkElement = bucket.find((val)=>val[0]==key)
//             return checkElement ? checkElement[1] : null
//         }else{
//             return null
//         }
//     }

//     remove(key){
//         let index = this.hashKey(key)
//         let bucket = this.table[index]

//         if(bucket){
//             let keyIndex = bucket.findIndex((val)=>val[0]==key)

//             if(keyIndex != -1){
//                 bucket.splice(keyIndex,1)
//                 return true
//             }
//         }else{
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

//     findDuplicatesFromInput(input){
//         let given = Array.isArray(input) ? input : input.split("")

//         let temp = new Hashtable(50)
//         for(let val of given){
//             let key = val.toString()
//             let getCount = temp.get(key) || 0
//             temp.set(key,getCount+1)
//         }
//         let duplicates = []
//         let unique = []
//         for(let i=0;i<temp.table.length;i++){
//             let bucket = temp.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     if(value > 1){
//                         duplicates.push(key)
//                     }

//                     if(value == 1){
//                         unique.push(key)
//                     }
//                 }
//             }
//         }

//         return Array.isArray(input) ? {duplicates,unique} : {duplicates:duplicates.join(""),unique:unique.join("")}
//     }

//     removeDuplicatesFromInput(given){
//         let input = Array.isArray(given) ? given : given.split("")
//         let temp = new Hashtable(50)
//         for(let val of input){
//             let key = val.toString()
//             let count = temp.get(key) || 0
//             temp.set(key,count+1)
//         }

//         let seen = new Set()
//         let result = []
//         for(let i=0;i<temp.table.length;i++){
//             let bucket = temp.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     if(!seen.has(key)){
//                         seen.add(key)
//                         result.push(key)
//                     }
//                 }
//             }
//         }
//         return Array.isArray(given) ? result : result.join("")
//     }

//     removeDuplicatesFromTable(){
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 let newBucket = []
//                 let seen = new Set()
//                 for(let [key,value] of bucket){
//                     if(!seen.has(key)){
//                         seen.add(key)
//                         newBucket.push([key,value])
//                     }
//                 }
//                 this.table[i] = newBucket.length > 0 ? newBucket : undefined
//             }
//         }
//     }

//     findDupicatesFromTable(){
//         let duplicates = []
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     if(value > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }
//         return duplicates
//     }

//     nthMostFrequency(arr,n){
//         let temp = new Hashtable(50)

//         for(let val of arr){
//             let key = val.toString()
//             let count = temp.get(key) || 0
//             temp.set(key,count+1)
//         }

//         let result = []

//         for(let i=0;i<temp.table.length;i++){
//             let bucket = temp.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     result.push([key,value])
//                 }
//             }
//         }

//         result.sort((a,b)=>b[1]-a[1])

//         if(n<1 || n > result.length){
//             return null
//         }

//         return result[n-1][0]
//     }
// }

// const ht = new Hashtable(10)

// ht.set("a", 1)
// ht.set("a", 2)
// console.log(ht.get("a")) // 2

// console.log(ht.get("x")) // null
// console.log(ht.remove("x")) // false

// console.log(ht.findDuplicatesFromInput("banana"))
// // { duplicates: "an", unique: "b" }

// console.log(ht.removeDuplicatesFromInput("banana"))
// // Order issue in current version

// console.log(ht.nthMostFrequency(["a","b","a","c","b","a"], 1)) // "a"
// console.log(ht.nthMostFrequency(["a","b"], 3)) // null (after fix)


