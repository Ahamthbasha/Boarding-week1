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
//         for(let j=i;j<arr.length;j++){
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
//         }
//         else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }

// function testSort(sortFn, name) {
//     const tests = [
//         [],
//         [1],
//         [2, 1],
//         [5, 3, 8, 4, 2],
//         [10, 9, 8, 7, 6],
//         [1, 2, 3, 4, 5],
//         [4, 2, 2, 8, 3, 3, 1],
//         [-5, -1, -10, 0, 2]
//     ];

//     console.log(`\nTesting ${name}`);
//     tests.forEach(arr => {
//         const input = [...arr]; // copy to avoid mutation
//         console.log(input, '=>', sortFn(input));
//     });
// }

// testSort(bubbleSort, "Bubble Sort");
// testSort(insertionSort, "Insertion Sort");
// testSort(selectionSort, "Selection Sort");
// testSort(quickSort, "Quick Sort");
// testSort(mergeSort, "Merge Sort");

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
//     }else{
//         return b[1] - a[1]
//     }
// })


// let final = []


// for(let [no,freq] of result){
//     for(let i=0;i<freq;i++){
//         final.push(Number(no))
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
//     }else{
//         return a.length - b.length
//     }
// })

// console.log(words)

//relative sorting

// A = [2, 1, 2, 5, 7, 1, 9]
// B = [2, 1, 8]


// let A = [2, 1, 2, 5, 7, 1, 9]
// let B = [2, 1, 8]

// let index = 0

// let length = 0

// while(length != B.length){
//     let take = B[length]
//     for(let i=0;i<A.length;i++){
//         if(A[i] == take){
//             [A[index],A[i]] = [A[i],A[index]]
//             index++
//         }
//     }
//     length++
// }

// A = A.slice(0,index).concat(A.slice(index).sort())
// console.log(A)

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]


// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let freqMap = {}

// for(let val of arr){
//     let key = val.split('').sort().join('')

//     if(freqMap[key]){
//         freqMap[key].push(val)
//     }else{
//         freqMap[key] = [val]
//     }
// }

// let result = []

// for(let key in freqMap){
//     result.push(freqMap[key])
// }

// console.log(result)

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// let arr = [2,0,2,1,1,0]

// let low = 0
// let mid = 0
// let high = arr.length-1

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

// class Stack{
//     constructor(){
//         this.item = []
//     }

//     isEmpty(){
//         return this.item.length == 0
//     }

//     getSize(){
//         return this.item.length
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
//         let s = new Stack()

//         for(let val of arr){
//             s.push(val)
//         }

//         let sortedArr = []

//         while(s.item.length){
//             sortedArr.push(s.pop())
//         }

//         return sortedArr
//     }

//     reverseStr(str){
//         let s = new Stack()

//         for(let val of str){
//             s.push(val)
//         }

//         let sortedStr = ''

//         while(s.item.length){
//             sortedStr += s.pop()
//         }

//         return sortedStr
//     }
// }

// const stack = new Stack();

// // Stack basic operations
// console.log("Is Empty:", stack.isEmpty()); // true
// console.log("Pop empty:", stack.pop());    // null
// console.log("Peek empty:", stack.peek());  // null

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log("After pushes:", stack.print()); // [10, 20, 30]
// console.log("Peek:", stack.peek());          // 30
// console.log("Size:", stack.getSize());       // 3

// console.log("Pop:", stack.pop());            // 30
// console.log("After pop:", stack.print());    // [10, 20]

// // Reverse array tests
// console.log("Reverse [1,2,3,4,5]:", stack.reverseArr([1, 2, 3, 4, 5]));
// // [5,4,3,2,1]

// console.log("Reverse []:", stack.reverseArr([]));
// // []

// console.log("Reverse [10]:", stack.reverseArr([10]));
// // [10]

// console.log("Reverse [-1,0,5]:", stack.reverseArr([-1, 0, 5]));
// // [5,0,-1]

// // Reverse string tests
// console.log("Reverse 'hello':", stack.reverseStr("hello"));
// // "olleh"

// console.log("Reverse '':", stack.reverseStr(""));
// // ""

// console.log("Reverse 'a':", stack.reverseStr("a"));
// // "a"

// console.log("Reverse '12345':", stack.reverseStr("12345"));
// // "54321"


//object

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

// const stack = new Stack();

// console.log("Is Empty:", stack.isEmpty()); // true
// console.log("Size:", stack.getSize());     // 0
// console.log("Pop empty:", stack.pop());    // null
// console.log("Peek empty:", stack.peek());  // null

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log("After pushes:", stack.print()); 
// // { '0': 10, '1': 20, '2': 30 }

// console.log("Peek:", stack.peek());        // 30
// console.log("Size:", stack.getSize());     // 3

// console.log("Pop:", stack.pop());           // 30
// console.log("After pop:", stack.print());  
// // { '0': 10, '1': 20 }

// console.log("Size:", stack.getSize());     // 2

// console.log("Pop:", stack.pop());           // 20
// console.log("Pop:", stack.pop());           // 10
// console.log("Pop empty again:", stack.pop()); // null

// console.log("Final stack:", stack.print()); // {}
// console.log("Is Empty:", stack.isEmpty());  // true


//ll stack

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LLStack{
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

// const stack = new LLStack();

// console.log("Is Empty:", stack.isEmpty()); // true
// console.log("Size:", stack.getSize());     // 0
// console.log("Pop empty:", stack.pop());    // null
// console.log("Peek empty:", stack.peek());  // null
// console.log("Print empty:", stack.print()); // null

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log("After pushes:", stack.print());
// // 30->20->10->null

// console.log("Peek:", stack.peek());        // 30
// console.log("Size:", stack.getSize());     // 3

// console.log("Pop:", stack.pop());           // 30
// console.log("After pop:", stack.print());
// // 20->10->null

// console.log("Pop:", stack.pop());           // 20
// console.log("Pop:", stack.pop());           // 10
// console.log("Pop empty again:", stack.pop()); // null

// console.log("Final stack:", stack.print()); // null
// console.log("Is Empty:", stack.isEmpty());  // true
// console.log("Size:", stack.getSize());      // 0

// let str = "{}[]())"


// let bracketMap = {
//     "(" : ")",
//     "[" : "]",
//     "{" : "}"
// }
// let stack = []
// for(let val of str){
//     if(bracketMap[val]){
//         stack.push(val)
//     }else{
//         if(stack.length == 0 || bracketMap[stack.pop()] != val){
//             console.log(false)
//             return
//         }
//     }
// }

// console.log(stack.length == 0)

// Input: [4,5,2,10]
// Output: [5,10,10,-1]

// let arr = [4,5,2,10]
// let result = new Array(arr.length).fill(-1)
// console.log(result)
// let stack = []
// for(let i=0;i<arr.length;i++){

//     while(stack.length > 0 && arr[i] > arr[stack[stack.length-1]]){
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

// for(let val of str){
//     if(stack[stack.length-1] != val){
//         stack.push(val)
//     }else{
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
//     }else{
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
//                 result = Math.trunc(left/right)
//                 break
//         }

//         stack.push(result)
//     }
// }

// console.log(stack)


// let input = "333 3 * 222 2 * + 90 -"

// input = input.split(" ")
// let stack = []
// for(let val of input){
//     if(/[0-9]/g.test(val)){
//         stack.push(val)
//     }
//     else{
//         let result
//         let rightArr = stack.pop()
//         let leftArr = stack.pop()

//         switch(val){
//             case "+":
//                 result = leftArr + rightArr
//                 break
//             case "-":
//                 result = leftArr - rightArr
//                 break
//             case "*":
//                 result = leftArr * rightArr
//                 break
//             case "/":
//                 result = Math.floor(leftArr/rightArr)
//                 break
//         }
//         stack.push(result)
//     }
// }

// console.log(stack)


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
//         this.s1 = new Queue()
//     }

//     isEmpty(){
//         return this.s1.isEmpty()
//     }

//     getSize(){
//         return this.s1.getSize()
//     }

//     push(value){
//         this.s1.enqueue(value)

//         let size = this.getSize() - 1

//         for(let i=0;i<size;i++){
//             this.s1.enqueue(this.s1.dequeue())
//         }
//     }

//     pop(){
//         if(this.s1.isEmpty()){
//             return null
//         }
//         else{
//             return this.s1.dequeue()
//         }
//     }

//     peek(){
//         if(this.s1.isEmpty()){
//             return null
//         }
//         return this.s1.peek()
//     }

//     print(){
//         return this.s1.print()
//     }
// }

// const stack = new Stack();

// console.log("Is Empty:", stack.isEmpty()); // true
// console.log("Size:", stack.getSize());     // 0
// console.log("Pop empty:", stack.pop());    // null
// console.log("Peek empty:", stack.peek());  // null

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log("After pushes:", stack.print());
// // Expected queue order: [30, 20, 10]

// console.log("Peek:", stack.peek());        // 30
// console.log("Size:", stack.getSize());     // 3

// console.log("Pop:", stack.pop());           // 30
// console.log("After pop:", stack.print());
// // [20, 10]

// console.log("Pop:", stack.pop());           // 20
// console.log("Pop:", stack.pop());           // 10
// console.log("Pop empty again:", stack.pop()); // null

// console.log("Final stack:", stack.print()); // []
// console.log("Is Empty:", stack.isEmpty());  // true
// console.log("Size:", stack.getSize());      // 0


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

//     print(){
//         return this.items
//     }

//     reverseArr(arr){
//         let q = new Queue()

//         for(let val of arr){
//             q.enqueue(val)
//         }

//         let reversedArr = []

//         while(q.items.length){
//             reversedArr.push(q.dequeue())
//         }

        

//         while(reversedArr.length){
//             q.enqueue(reversedArr.pop())
//         }

//         return q
//     }

//     reverseStr(str){
//         let q = new Queue()

//         for(let val of str){
//             q.enqueue(val)
//         }

//         let reversedVersion = []

//         reversedVersion.push(q.dequeue())


//         while(reversedVersion.length){
//             q.enqueue(reversedVersion.pop())
//         }

//         return q.items.join("")
//     }
// }

// const q = new Queue()

// console.log(q.reverseArr([1,2,3,4,5]))

// console.log(q.reverseStr("hello"))

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

//        let val = this.items[this.head]
//        delete this.items[this.head]
//        this.head++
//        return val 
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

//queue

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LLQueue{
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
//         }else{
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

// const q = new LLQueue();

// console.log("Is Empty:", q.isEmpty()); // true
// console.log("Size:", q.getSize());     // 0
// console.log("Dequeue empty:", q.dequeue()); // null
// console.log("Peek empty:", q.peek()); // null
// console.log("Print empty:", q.print()); // null

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);

// console.log("After enqueue:", q.print());
// // 10->20->30->null

// console.log("Peek:", q.peek());        // 10
// console.log("Size:", q.getSize());     // 3

// console.log("Dequeue:", q.dequeue());  // 10
// console.log("After dequeue:", q.print());
// // 20->30->null

// console.log("Dequeue:", q.dequeue());  // 20
// console.log("Dequeue:", q.dequeue());  // 30
// console.log("Dequeue empty again:", q.dequeue()); // null

// console.log("Final queue:", q.print()); // null
// console.log("Is Empty:", q.isEmpty());  // true
// console.log("Size:", q.getSize());      // 0


//reverseArr

// function reverseArr(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let first = arr[0]
//     let second = arr.slice(1)

//     return reverseArr(second).concat(first)
// }

// console.log(reverseArr([1,2,3,4,5]))

//generate binaryNo

// for(let i=0;i<5;i++){
//     console.log(i.toString(2))
// }

// let queue = []
// queue.push("1")

// for(let i=1;i<5;i++){
//     let cur = queue.shift()
//     console.log(cur)

//     queue.push(cur+"0")
//     queue.push(cur+"1")
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
//         this.s1 = new Stack()
//         this.s2 = new Stack()
//     }

//     isEmpty(){
//         return this.s1.isEmpty() && this.s2.isEmpty()
//     }

//     getSize(){
//         return this.s1.getSize() + this.s2.getSize()
//     }

//     enqueue(value){
//         this.s1.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
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
//             return null
//         }

//         if(this.s2.isEmpty()){
//             while(!this.s2.isEmpty()){
//                 this.s2.push(this.s1.pop())
//             }
//         }

//         return this.s2.peek()
//     }

//     print(){
//         let s2Element = [...this.s2.items].reverse()
//         let s1Element = [...this.s1.items]

//         return [...s2Element,...s1Element]
//     }
// }


// //hashtable

// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     getIndex(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }

//     set(key,value){
//         let index = this.getIndex(key)
//         this.table[index] = value
//     }

//     get(key){
//         let index = this.getIndex(key)
//         return this.table[index] || null
//     }

//     delete(key){
//         let index = this.getIndex(key)

//         if(this.table[index] != undefined){
//             this.table[index] = undefined
//             return true
//         }

//         return false
//     }
// }

//hashtable


// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }


//     getIndex(key){
//         let total = 0

//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }

//         return total % this.size
//     }


//     set(key,value){
//         let index = this.getIndex(key)
//         let bucket = this.table[index]

//         if(!bucket){
//             this.table[index] =[[key,value]]
//         }
//         else{
//             let sameElement = bucket.find((val)=>val[0]==key)

//             if(sameElement){
//                 sameElement[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.getIndex(key)

//         let bucket = this.table[index]

//         if(bucket){
//             let element = bucket.find((val)=>val[0]==key)
//             return element[1]
//         }
//         else{
//             return null
//         }
//     }

//     delete(key){
//         let index = this.getIndex(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let sameElement = bucket.findIndex((val)=>val[0]==key)

//             if(sameElement != -1){
//                 bucket.splice(sameElement,1)
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

//     findDuplicatesFromInput(arr){
//         let input = Array.isArray(arr) ? arr : arr.split('')

//         let t = new HashTable(50)

//         for(let val of input){
//             let key = val.toString()
//             let count = t.get(key) || 0
//             t.set(key,count+1)
//         }

//         let duplicates = []

//         for(let i=0;i<t.table.length;i++){
//             let bucket = t.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     if(value > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }

//         duplicates = Array.isArray(duplicates) ? duplicates : duplicates.join("")
        

//         return {duplicates}
//     }

//     removeDuplicatesFromInput(arr){
//         const input = Array.isArray(arr) ? arr : arr.split("")
//         let t = new HashTable(50)
//         for(let val of input){
//             let key = val.toString()
//             let count = t.get(key) || 0
//             t.set(key,count+1)
//         }

//         let final = []
//         let unique = []
//         let seen = new Set()
        
//         for(let i=0;i<t.table.length;i++){
//             let bucket = t.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     if(value == 1){
//                         unique.push(key)
//                     }

//                     if(!seen.has(key)){
//                         seen.add(key)
//                         final.push(key)
//                     }
//                 }
//             }
//         }

//         final = Array.isArray(final) ? final : final.split('')
//         unique = Array.isArray(unique) ? unique : unique.split('')

//         return {final,unique}
//     }

//     findDuplicatesFromTable(){
//         let duplicates = []
//         let seen = new Set()
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     if(seen.has(key)){
//                         duplicates.push(key)
//                     }else{
//                         seen.add(key)
//                     }
//                 }
//             }
//         }
//     }

//     removeDuplicatesFromTale(){
//         let seen = new Set()
        
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             let newBucket = []
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     if(!seen.has(key)){
//                         seen.add(key)
//                         newBucket.push([key,value])
//                     }
//                 }
//                 this.table[i] = newBucket.length> 0 ? newBucket : undefined
//             }
//         }
//     }

//     nthMostFrequency(arr,n){
//         if(arr.length < n){
//             return null
//         }

//         let t = new HashTable(50)

//         for(let val of arr){
//             let key = val.toString()
//             let get = t.get(key) || null
//             t.set(key,get+1)
//         }

//         let result = []

//         for(let i=0;i<t.table.length;i++){
//             let bucket = t.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     result.push([key,value])
//                 }
//             }
//         }

//         result.sort((a,b)=>b[1]-a[1])

//         return result[n-1] || null
//     }
// }