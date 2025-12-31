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

//         while(j>=0 && arr[j] > cur){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = cur
//     }
//     return arr
// }

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let minElement = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minElement] > arr[j]){
//                 j = minElement
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[minElement]
//         arr[minElement] = temp
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
//         }
//         else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }


// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length / 2)
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


// // Input: [4,4,1,2,1,1,3]
// // Output: [1,1,1,4,4,2,3]

// let arr = [4,4,1,2,1,1,3]

// let freqMap = {}

// for(let val of arr){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val] = 1
//     }
// }

// let result = []

// let takeCountedResult = Object.entries(freqMap)

// takeCountedResult.sort((a,b)=>{
//     if(a[1] == b[1]){
//         return a - b
//     }
//     return b[1] - a[1]
// })

// for(let [no,value] of takeCountedResult){
//     for(let i=0;i<value;i++){
//         result.push(Number(no))
//     }
// }

// console.log(result)


// // Sort array based on absolute values, but keep negative/positive signs.

// // Example:
// // Input: [2, -7, 3, -2, 5]
// // Output: [2, -2, 3, 5, -7]

// let absArr = [2,-7,3,-2,5]

// let swapped = true

// while(swapped){
//     swapped = false
//     for(let i=0;i<absArr.length-1;i++){
//         if(Math.abs(absArr[i]) > Math.abs(absArr[i+1])){
//             [absArr[i],absArr[i+1]] = [absArr[i+1],absArr[i]]
//             swapped = true
//         }
//     }
// }

// console.log(absArr)


// let givenArr = ["apple", "bat", "car", "a", "dog"]

// givenArr.sort((a,b)=>{
//     if(a.length == b.length){
//         return a.localeCompare(b)
//     }
//     return a.length - b.length
// })

// console.log(givenArr)

// let triArr = [5,10,7]

// triArr.sort((a,b)=>a-b)

// console.log((triArr[0]+triArr[1]) > triArr[2])

// let anagramStr1 = "listen"
// let anagramStr2 = "silent"

// console.log(anagramStr1.split("").sort().join("") == anagramStr2.split("").sort().join(""))


// let findKElement = [7, 10, 4, 3, 20, 15]
// let k = 4

// function quickSelect(arr,k){
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

//     if(leftArr.length == k - 1){
//         return pivot
//     }
//     else if(leftArr.length >= k){
//         return quickSelect(leftArr,k)
//     }
//     else{
//         return quickSelect(rightArr,k-leftArr.length-1)
//     }
// }

// console.log(quickSelect(findKElement,k))

// A = [2, 1, 2, 5, 7, 1, 9]
// B = [2, 1, 8]

// let A = [2,1,2,5,7,1,9]
// let B = [2,1,8]

// let index = 0
// let startCycle = 0

// while(startCycle != B.length){
//     for(let i=0;i<A.length-1;i++){
//         if(B[startCycle] == A[i]){
//             [A[i],A[index]] = [A[index],A[i]]
//             index++
//         }
//     }
//     startCycle++
// }

// let rest = A.slice(index).sort((a,b)=>a-b)
// A = A.slice(0,index).concat(rest)
// console.log(A)

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let groupAnagram = {}

// for(let val of arr){
//     let key = val.split('').sort().join('')
//     if(groupAnagram[key]){
//         groupAnagram[key].push(val)
//     }else{
//         groupAnagram[key] = [val]
//     }
// }

// let final = []

// for(let key in groupAnagram){
//     if(groupAnagram[key]){
//         final.push(groupAnagram[key])
//     }
// }

// console.log(final)

// Input: [2,0,2,1,1,0]

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//         else{
//             return this.items.pop()
//         }
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             return this.items[this.items.length-1]
//         }
//     }

//     display(){
//         return this.items
//     }

//     getSize(){
//         return this.items.length
//     }

//     reverseArr(arr){
//         let s = new Stack()

//         for(let val of arr){
//             s.push(val)
//         }

//         let reversedArr = []

//         while(s.items.length){
//             reversedArr.push(s.pop())
//         }

//         return reversedArr
//     }


//     reverseStr(str){
//         let s = new Stack()

//         for(let val of str){
//             s.push(val)
//         }

//         let reversedStr = ''

//         while(s.items.length){
//             reversedStr += s.pop()
//         }

//         return reversedStr
//     }
// }


// class ObjStack{
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
//             return null
//         }else{
//             let val = this.items[this.top-1]
//             delete this.items[this.top-1]
//             this.top--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             let val = this.items[this.top-1]
//             return val
//         }
//     }

//     diplay(){
//         return Object.values(this.items)
//     }

//     getSize(){
//         return this.top
//     }
// }

// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }
// class StackLL{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     push(val){
//         const node = new Node(val)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             this.head.next = node
//             this.head = node
//         }
//         this.size++
//     }
// }

//sort

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

//         while(j >= 0 && arr[j] > cur){
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
//         let temp = arr[i]
//         arr[i] = arr[minElement]
//         arr[minElement] = temp
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

// function merge(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArr = merge(arr.slice(0,mid))
//     let rightArr = merge(arr.slice(mid))

//     return mergeSort(leftArr,rightArr)
// }

// function mergeSort(leftArr,rightArr){
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

//stack

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     push(value){
//         this.items.push(value)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return -1
//         }
//         return this.items.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
//         }

//         return this.items[this.items.length-1]
//     }

//     print(){
//         return this.items
//     }

//     reverseStr(val){
//         let s = new Stack()

//         for(let ch of val){
//             s.push(ch)
//         }

//         let sortedArr = []

//         while(s.items.length){
//             sortedArr.push(s.pop())
//         }

//         return sortedArr.join('')
//     }

//     reverseArr(arr){
//         let s = new Stack()

//         for(let val of arr){
//             s.push(val)
//         }

//         let sortedArr = []

//         while(s.items.length){
//             sortedArr.push(s.pop())
//         }

//         return sortedArr
//     }
// }

// const s = new Stack()
// s.push(10)
// s.push(20)
// s.push(30)

// console.log(s.peek())       // 30
// console.log(s.pop())        // 30
// console.log(s.reverseStr("abc")) // "cba"
// console.log(s.reverseArr([1,2,3])) // [3,2,1]


// class Stack2{
//     constructor(){
//         this.items = {}
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     push(value){
//         this.items[this.size] = value
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return -1
//         }

//         let val = this.items[this.size-1]
//         delete this.items[this.size-1]
//         this.size--
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
//         }

//         return this.items[this.size-1]
//     }

//     print(){
//         return this.items
//     }
// }

// // Test Stack2

// const stack = new Stack2()

// console.log(stack.isEmpty())   // true

// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.print())     // { '0': 10, '1': 20, '2': 30 }

// console.log(stack.peek())      // 30

// console.log(stack.pop())       // 30
// console.log(stack.pop())       // 20

// console.log(stack.peek())      // 10

// stack.push(40)

// console.log(stack.print())     // { '0': 10, '1': 40 }

// console.log(stack.pop())       // 40
// console.log(stack.pop())       // 10

// console.log(stack.pop())       // -1 (stack underflow)
// console.log(stack.isEmpty())   // true


// let arr = [4,4,1,2,1,1,3]

// let freqMap = {}

// for(let val of arr){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val] = 1
//     }
// }

// let result = Object.entries(freqMap)

// result.sort((a,b)=>{
//     if(a[1] == b[1]){
//         return a[0] - b[0]
//     }else{
//        return b[1] - a[1]
//     }
// })

// let final = []

// for(let [key,val] of result){
//     for(let i=1;i<=val;i++){
//         final.push(Number(key))
//     }
// }

// console.log(final)

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


// let words = ["apple", "bat", "car", "a", "dog"]

// words.sort((a,b)=>{
//     if(a.length == b.length){
//         return a.localeCompare(b)
//     }else{
//        return a.length - b.length
//     }
// })

// console.log(words)

// let a = [5, 10, 7]

// a.sort((a,b)=>a-b)

// console.log(a[0] + a[1] > a[2])

// let s1 = "listen"
// let s2 = "silent"

// s1 = s1.split('').sort().join("")
// s2 = s2.split('').sort().join("")

// console.log(s1 == s2)

// let  arr = [7, 10, 4, 3, 20, 15]
// let k = 3

// // arr.sort((a,b)=>a-b)
// // console.log(arr[k-1])

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

// let A = [2, 1, 2, 5, 7, 1, 9]
// let B = [2, 1, 8]

// let index = 0
// let refIndex = 0
// while(index < B.length){
//     let take = B[index]
//     for(let i=0;i<A.length;i++){
//         if(A[i] == take){
//             [A[i],A[refIndex]] = [A[refIndex],A[i]]
//             refIndex++
//         }
//     }
//     index++
// }

// A = A.slice(0,index) .concat(A.slice(index).sort((a,b)=>a-b))

// console.log(A)

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]

// let words = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let freqMap = {}

// for(let val of words){
//     let take = val.split('').sort().join("")
//     if(freqMap[take]){
//         freqMap[take].push(val)
//     }else{
//         freqMap[take] = [val]
//     }
// }

// let result = []

// for(let key in freqMap){
//     result.push(freqMap[key])
// }

// console.log(result)

// let arr = [2,0,2,1,1,0]

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
//         [arr[mid],arr[high]] = [arr[high],arr[mid]]
//         high--
//     }
// }

// console.log(arr)

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     push(value){
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return -1
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
//             return -1
//         }else{
//             return this.head.value
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             return -1
//         }
//         else{
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
// }

// const s = new Stack()

// console.log(s.pop())      // -1
// console.log(s.peek())     // -1

// s.push(10)
// s.push(20)
// s.push(30)

// console.log(s.print())    // 30->20->10->null

// console.log(s.peek())     // 30
// console.log(s.pop())      // 30
// console.log(s.pop())      // 20

// console.log(s.print())    // 10->null

// console.log(s.pop())      // 10
// console.log(s.pop())      // -1


//queue

// class Queue{
//     constructor(){
//         this.item = []
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     enqueue(val){
//         this.item.push(val)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return -1
//         }

//         let val = this.item.shift()
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
//         }

//         return this.item[0]
//     }

//     print(){
//         return this.item
//     }

//     reverseArr(arr){
//         let q = new Queue()
//         for(let val of arr){
//             q.enqueue(val)
//         }

//         let stack = []

//         while(q.item.length){
//             stack.push(q.dequeue())
//         }

//         let reversedArr = []

//         while(stack.length){
//             reversedArr.push(stack.pop())
//         }

//         return reversedArr
//     }

//     reversedStr(str){
//         let q = new Queue()

//         for(let ch of str){
//             q.enqueue(ch)
//         }

//         let stack = []

//         while(q.item.length){
//             stack.push(q.dequeue())
//         }

//         let result = []

//         while(stack.length){
//             result.push(stack.pop())
//         }

//         return result.join('')
//     }
// }

// const q = new Queue()

// // Basic queue operations
// console.log(q.isEmpty())        // true
// console.log(q.dequeue())        // -1

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.print())          // [10, 20, 30]
// console.log(q.peek())           // 10
// console.log(q.dequeue())        // 10
// console.log(q.print())          // [20, 30]

// // Reverse array
// console.log(q.reverseArr([1,2,3,4])) // [4,3,2,1]
// console.log(q.reverseArr([]))        // []
// console.log(q.reverseArr([5]))       // [5]

// // Reverse string
// console.log(q.reversedStr("abc"))    // "cba"
// console.log(q.reversedStr("hello"))  // "olleh"
// console.log(q.reversedStr(""))       // ""
// console.log(q.reversedStr("a"))      // "a"

//object


// class Queue{
//     constructor(){
//         this.items = {}
//         this.head = 0
//         this.tail = 0
//     }

//     isEmpty(){
//         return this.tail - this.head == 0
//     }

//     enqueue(value){
//         this.items[this.tail] = value
//         this.tail++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return -1
//         }

//         let val = this.items[this.head]
//         delete this.items[this.head]
//         this.head++
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
//         }

//         return this.items[this.head]
//     }

//     print(){
//         return this.items
//     }
// }
// // ================= TEST CASES =================

// const q = new Queue()

// console.log("Is Empty (true):", q.isEmpty())        // true
// console.log("Peek on empty (-1):", q.peek())        // -1
// console.log("Dequeue on empty (-1):", q.dequeue())  // -1

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log("Is Empty (false):", q.isEmpty())       // false
// console.log("Peek (10):", q.peek())                 // 10

// console.log("Dequeue (10):", q.dequeue())           // 10
// console.log("Dequeue (20):", q.dequeue())           // 20

// q.enqueue(40)
// q.enqueue(50)

// console.log("Peek (30):", q.peek())                 // 30
// console.log("Print Queue:", q.print())              // { '2': 30, '3': 40, '4': 50 }

// console.log("Dequeue (30):", q.dequeue())           // 30
// console.log("Dequeue (40):", q.dequeue())           // 40
// console.log("Dequeue (50):", q.dequeue())           // 50

// console.log("Is Empty (true):", q.isEmpty())        // true
// console.log("Final Print ({}):", q.print())         // {}


// queue linkedlist

// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

// class QueueLl{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size == 0
//     }

//     enqueue(val){
//         const node = new Node(val)

//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let temp = this.head

//             while(temp.next != null){
//                 temp = temp.next
//             }

//             temp.next = node
//         }

//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return -1
//         }

//         let val = this.head.val
//         this.head = this.head.next
//         this.size--
//         return val
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
//         }

//         return this.head.val
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'empty'
//         }
//         else{
//             let temp = this.head
//             let list = ''

//             while(temp){
//                 list += temp.val + '->'
//                 temp = temp.next
//             }

//             list += 'null'

//             return list
//         }
//     }
// }


//reverseArr using recursion

// function reverseArr(arr){
//     if(arr.length == 0){
//         return arr
//     }

//     let first = arr[0]
//     let rest = arr.slice(1)

//     return reverseArr(rest).concat(first)
// }

// console.log(reverseArr([1,2,3,4,5,6,7]))

// let n = 5

// for(let i=1;i<=n;i++){
//     console.log(parseInt(i.toString(2)))
// }

// let n = 5

// let queue = []

// let result = []

// queue.push('1')

// for(let i=0;i<n;i++){
//     let front = queue.shift()

//     result.push(front)

//     queue.push(front+'0')
//     queue.push(front+'1')
// }

// console.log(result)

//implement queue using stack


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
//             return -1
//         }

//         return this.items.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
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
//         if(this.isEmpty()){
//             return -1
//         }

//         if(this.s2.isEmpty()){
//             while(!this.s1.isEmpty()){
//                 this.s2.push(this.s1.pop())
//             }
//         }

//         return this.s2.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
//         }

//         if(this.s2.isEmpty()){
//             while(!this.s1.isEmpty()){
//                 this.s2.push(this.s1.pop())
//             }
//         }

//         return this.s2.peek()
//     }

//     print(){
//         return [...this.s2.items].reverse().concat(this.s1.items)
//     }
// }

// const q = new Queue()

// // Empty queue checks
// console.log(q.dequeue())   // -1
// console.log(q.peek())      // -1
// console.log(q.isEmpty())   // true
// console.log(q.print())     // []

// // Enqueue elements
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.peek())      // 10
// console.log(q.print())     // [10, 20, 30]

// // Dequeue elements
// console.log(q.dequeue())  // 10
// console.log(q.print())    // [20, 30]

// q.enqueue(40)
// console.log(q.print())    // [20, 30, 40]

// console.log(q.dequeue())  // 20
// console.log(q.dequeue())  // 30
// console.log(q.dequeue())  // 40

// // Queue should be empty again
// console.log(q.dequeue())  // -1
// console.log(q.peek())     // -1
// console.log(q.isEmpty())  // true
// console.log(q.print())    // []


// valid parenthesis

// let str = "{}[]()"

// let bracketMap = {
//     "(" : ")",
//     "{" : "}",
//     "[" : "]"
// }

// let stack = []

// for(let sym of str){
//     if(bracketMap[sym]){
//         stack.push(sym)
//     }else{
//         if(stack.length == 0 || bracketMap[stack.pop()] != sym){
//             console.log(false)
//             return
//         }
//     }
// }

// console.log(stack)

// console.log(stack.length == 0)


// Input: [4,5,2,10]
// Output: [5,10,10,-1]

// let arr = [4,5,2,10,20]

// let newArr = []

// for(let i=0;i<arr.length;i++){
//     if(i == arr.length-1){
//         newArr.push(-1)
//     }else{
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] > arr[i]){
//                 newArr.push(arr[j])
//                 break
//             }
//         }
//     }
// }

// console.log(newArr)

// let stack = []
// let result = new Array(arr.length).fill(-1)

// for(let i=0;i<arr.length;i++){
//     while(stack.length && arr[i] > arr[stack[stack.length-1]]){
//         let index = stack.pop()
//         result[index] = arr[i]
//     }
//     stack.push(i)
// }

// console.log(result)


// Input: "abbaca"
// Output: "ca"

// let str = "abbaca"

// let stack = []

// for(let i=0;i<str.length;i++){
//     let take = stack[stack.length-1] || ""

//     if(take == str[i]){
//         stack.pop()
//     }else{
//         stack.push(str[i])
//     }
// }

// console.log(stack.join(""))

// let input = "23*54*+9-"
// // Output: 17

// let stack = []
// for(let val of input){
//     if(/[0-9]/g.test(val)){
//         stack.push(Number(val))
//     }
//     else{
//         let result
//         let left = stack.pop()
//         let right = stack.pop()

//         switch(val){
//             case "+":
//                 result = right + left 
//                 break
//             case "-":
//                 result = right - left
//                 break
//             case "*":
//                 result = right * left
//                 break
//             case "/":
//                 result = Math.floor(right/left)
//                 break
//         }
//         stack.push(result)
//     }
// }

// console.log(stack)

// console.log(result)

//build stack by using queue

// class Queue{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     enqueue(val){
//         this.items.push(val)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return -1
//         }
//         return this.items.shift()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
//         }
//         return this.items[0]
//     }

//     print(){
//         return this.items
//     }
// }

// class Stack{
//     constructor(){
//         this.q = new Queue()
//     }

//     isEmpty(){
//         return this.q.isEmpty()
//     }

//     push(val){
//         this.q.enqueue(val)

//         let size = this.q.items.length

//         for(let i=0;i<size-1;i++){
//             this.q.enqueue(this.q.dequeue())
//         }
//     }

//     pop(){
//         if(this.isEmpty()){
//             return -1
//         }
//         return this.q.dequeue()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
//         }
//         return this.q.peek()
//     }

//     print(){
//         return this.q.print()
//     }
// }

// hash table

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
//         if(this.table[index]){
//             return this.table[index]
//         }else{
//             return 'no key found'
//         }
//     }

//     remove(key){
//         let index = this.hashKey(key)

//         if(this.table[index]){
//             this.table[index] = undefined
//             return 'removed'
//         }else{
//             return 'no key found'
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(`${i} => ${this.table[i]}`)
//             }
//         }
//     }
// }

// const ht = new Hashtable(10)

// // Insert values
// ht.set("name", "Alice")
// ht.set("age", 25)
// ht.set("city", "Delhi")

// // Get values
// console.log(ht.get("name"))   // Alice
// console.log(ht.get("age"))    // 25
// console.log(ht.get("city"))   // Delhi
// console.log(ht.get("email"))  // no key found

// // Update existing key
// ht.set("name", "Bob")
// console.log(ht.get("name"))   // Bob

// // Remove key
// console.log(ht.remove("age")) // removed
// console.log(ht.get("age"))    // no key found

// // Remove non-existing key
// console.log(ht.remove("salary")) // no key found

// // Print table
// ht.print()


//separate chaining

class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hashKey(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hashKey(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKey = bucket.find((val)=>val[0] == key)

            if(sameKey){
                sameKey[1] = value
            }
            else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hashKey(key)
        let bucket = this.table[index]
        if(!bucket){
            return -1
        }
        if(bucket){
            let sameKey = bucket.find((val)=>val[0]==key)
            return sameKey ? sameKey[1] :-1
        }
    }

    remove(key){
        let index = this.hashKey(key)

        let bucket = this.table[index]

        if(bucket != undefined){
            let bucketIndex = bucket.findIndex((item)=>item[0] == key)

            if(bucketIndex != -1){
                return bucket.splice(bucketIndex,1)
            }

        }else{
            return -1
        }
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(`${i} => ${this.table[i]}`)
            }
        }
    }

    findDuplicatesFromInputAndUnique(input){
        const givenInput = Array.isArray(input) ? input : input.split('')

        let table = new Hashtable(50)

        for(let i=0;i<givenInput.length;i++){
            let val = givenInput[i].toString()
            let takeCount = table.get(val)
            if(takeCount == -1){
                table.set(val,1)
            }else{
                table.set(val,takeCount+1)
            }
        }

        let duplicates = []
        let unique = []
        for(let i=0;i<table.table.length;i++){
            if(table.table[i]){
                let bucket = table.table[i]
                for(let [key,value] of bucket){
                    if(value > 1){
                        duplicates.push(Number(key))
                    }

                    if(value == 1){
                        unique.push(Number(key))
                    }
                }
            }
        }
        return {duplicates,unique}
    }

    removeDuplicatesFromInput(input){
        const givenInput = Array.isArray(input) ? input : input.split('')
        const t = new Hashtable(50)
        for(let val of givenInput){
            let key = val.toString()
            let value = t.get(val) 
            if(value == -1){
                t.set(key,1)
            }else{
                t.set(key,value+1)
            }
        }

        let final = []
        const seen = new Set()
        for(let i=0;i<t.table.length;i++){
            if(t.table[i]){
                for(let [key,value] of t.table[i]){
                    if(!seen.has(key)){
                        seen.add(key)
                        final.push(key)
                    }
                }
            }
        }
        return final
    }

    findDuplicatesFromTable(){
        let duplicates = []
        let seen = new Set()
        for(let i=0;i<this.table.length;i++){
            let bucket = this.table[i]
            if(bucket){
             for(let [key,val] of bucket){
                if(seen.has(key)){
                    duplicates.push(key)
                }else{
                    seen.add(key)
                }
             }
            }
        }

        return duplicates
    }

    removeDuplicatesFromTable(){
        let seen = new Set()
        for(let i=0;i<this.table.length;i++){
            let bucket = this.table[i]
            let newBucket = []
            if(bucket){
                for(let [key,value] of bucket){
                    if(!seen.has(key)){
                        seen.add(key)
                        newBucket.push([key,value])
                    }
                }
            }
            this.table[i] =  newBucket.length > 0 ? newBucket : undefined
        }
    }

    nthMostFrequencey(arr,n){
        let t = new Hashtable(50)
        
        for(let val of arr){
            let key = val.toString()
            let value = t.get(key) || 0
            t.set(key,value+1)
        }

        let final = []

        for(let i=0;i<t.table.length;i++){
            let bucket = t.table[i]
            if(bucket){
                for(let [key,value] of bucket){
                    final.push([key,value])
                }
            }
        }

        final.sort((a,b)=>b[1] - a[1])

        return final[n-1] || null
    }
}


const ht = new Hashtable(10)

// Basic set & get
ht.set("a", 1)
ht.set("b", 2)
ht.set("c", 3)

console.log(ht.get("a")) // 1
console.log(ht.get("b")) // 2
console.log(ht.get("x")) // -1

// Update existing key
ht.set("a", 100)
console.log(ht.get("a")) // 100

// Collision handling test
ht.set("ab", 10)
ht.set("ba", 20) // same hash index

console.log(ht.get("ab")) // 10
console.log(ht.get("ba")) // 20

// Remove key
console.log(ht.remove("b")) // [[ 'b', 2 ]]
console.log(ht.get("b"))    // -1

// Print table
ht.print()

// Duplicate & unique from input
console.log(
  ht.findDuplicatesFromInputAndUnique(
    [1,1,1,2,3,3,4,5,5,6]
  )
)
// { duplicates: [1,3,5], unique: [2,4,6] }

// Remove duplicates from input
console.log(
  ht.removeDuplicatesFromInput([1,1,2,2,3,4,4,5])
)
// ['1','2','3','4','5']

// Frequency test
console.log(
  ht.nthMostFrequencey([1,1,2,3,3,3,4,4,5], 2)
)
// ['1', 2] OR ['4', 2] depending on order
