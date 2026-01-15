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

class Queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length == 0
    }

    getSize(){
        return this.items.length
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        return this.items.shift()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[0]
    }

    print(){
        return this.items
    }
}

class Stack{
    constructor(){
        this.Q = new Queue()
    }

    isEmpty(){
        return this.Q.isEmpty()
    }

    getSize(){
        return this.Q.getSize()
    }

    push(value){
        this.Q.enqueue(value)

        let size = this.Q.getSize()

        for(let i=0;i<size-1;i++){
            this.Q.enqueue(this.Q.dequeue())
        }
    }

    pop(){
        if(this.Q.isEmpty()){
            return null
        }
        return this.Q.dequeue()
    }

    peek(){
        if(this.Q.isEmpty()){
            return null
        }
        return this.Q.peek()
    }

    print(){
        return this.Q.print()
    }
}

let stack = new Stack()

// ===== EMPTY STACK =====
console.log(stack.isEmpty())
// true

console.log(stack.pop())
// null

console.log(stack.peek())
// null


// ===== PUSH OPERATIONS =====
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.print())
// [30, 20, 10]

console.log(stack.peek())
// 30

console.log(stack.getSize())
// 3


// ===== POP OPERATIONS =====
console.log(stack.pop())
// 30

console.log(stack.print())
// [20, 10]

console.log(stack.pop())
// 20

console.log(stack.pop())
// 10

console.log(stack.pop())
// null

console.log(stack.isEmpty())
// true


// ===== MIXED OPERATIONS =====
stack.push("A")
stack.push("B")
stack.push("C")

console.log(stack.print())
// ["C", "B", "A"]

console.log(stack.peek())
// "C"

console.log(stack.getSize())
// 3
