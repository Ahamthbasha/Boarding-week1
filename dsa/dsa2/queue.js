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

//     enqueue(val){
//         this.items.push(val)
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

//     display(){
//         return this.items
//     }
// }

// const q = new Queue()

// console.log(q.isEmpty())     // true
// console.log(q.dequeue())    // null
// console.log(q.peek())       // null

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.display())    // [10, 20, 30]
// console.log(q.getSize())    // 3
// console.log(q.peek())       // 10

// console.log(q.dequeue())    // 10
// console.log(q.display())    // [20, 30]

// q.enqueue(40)
// console.log(q.display())    // [20, 30, 40]

// console.log(q.getSize())    // 3

// q.dequeue()
// q.dequeue()
// q.dequeue()

// console.log(q.isEmpty())    // true
// console.log(q.display())    // []

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Queue{
//     constructor(){
//         this.items = {}
//         this.front = 0
//         this.rear = 0
//     }

//     isEmpty(){
//         return this.front == this.rear 
//     }

//     enqueue(val){
//         this.items[this.rear] = val
//         this.rear++ 
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             let val = this.items[this.front]
//             delete this.items[this.front]
//             this.front++
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         else{
//             return this.items[this.front]
//         }
//     }

//     getSize(){
//         return Math.abs(this.front - this.rear)
//     }

//     display(){
//         return Object.values(this.items)
//     }
// }

// const q = new Queue()

// console.log(q.isEmpty())    // true
// console.log(q.dequeue())   // null
// console.log(q.peek())      // null

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.display())   // [10, 20, 30]
// console.log(q.peek())      // 10
// console.log(q.getSize())   // 3

// console.log(q.dequeue())   // 10
// console.log(q.display())   // [20, 30]

// q.enqueue(40)
// console.log(q.display())   // [20, 30, 40]

// console.log(q.getSize())   // 3

// q.dequeue()
// q.dequeue()
// q.dequeue()

// console.log(q.isEmpty())   // true
// console.log(q.display())   // []

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Node{
//     constructor(val){
//         this.value = val;
//         this.next = null
//     }
// }

// class QueueLL{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }

//     isEmpty(){
//         return this.head == null
//     }

//     getSize(){
//         return this.size
//     }

//     enqueue(val){
//         const node = new Node(val)
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
//         else if(this.size == 1){
//             let val = this.head.value
//             this.head = null
//             this.size--
//             return val
//         }
//         else{
//             let value = this.head.value
//             this.head = this.head.next
//             this.size--
//             return value
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

//     display(){
//         if(this.isEmpty()){
//             return 'queue is empty'
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


// const q = new QueueLL()

// console.log(q.isEmpty())   // true
// console.log(q.dequeue())  // null
// console.log(q.peek())     // null
// console.log(q.getSize())  // 0

// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.display())  // 10 -> 20 -> 30 -> null
// console.log(q.peek())     // 10
// console.log(q.getSize())  // 3

// console.log(q.dequeue())  // 10
// console.log(q.display())  // 20 -> 30 -> null

// q.enqueue(40)
// console.log(q.display())  // 20 -> 30 -> 40 -> null

// q.dequeue()
// q.dequeue()
// q.dequeue()

// console.log(q.isEmpty())  // true
// console.log(q.display())  // queue is empty

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1️⃣ Implement Queue

// Implement a queue with:

// enqueue
// dequeue
// peek
// isEmpty


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
//             return null
//         }else{
//             return this.items.shift()
//         }
//     }

//     peek(){
//         if(thiss.isEmpty()){
//             return null
//         }
//         else{
//             return this.items[0]
//         }
//     }
// }


// 2️⃣ Reverse a Queue

// Problem:
// Reverse a queue using:

// (a) stack

// (b) recursion

// 🧠 Tests: queue + stack interaction

// let queue = [1,2,3,4,5]

// let stack = []

// while(queue.length){
//     stack.push(queue.shift())
// }

// while(stack.length){
//     queue.push(stack.pop())
// }

// console.log(queue)


// //recursion 

// function reverseQueue(arr,result=[]){
//     if(arr.length == 0){
//         return result
//     }

//     let start = arr.slice(0,arr.length-1)
//     let end = arr[arr.length-1]
//     result.push(end)
//     return reverseQueue(start,result)
// }

// console.log(reverseQueue([1,2,3,4,5]))

// function reverseArr(arr){
//     if(arr.length == 0){
//         return 
//     }

//     let front = arr.shift()
//     reverseArr(arr)
//     arr.push(front)

//     return arr
// }

// console.log(reverseArr([1,2,3,4,5]))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Generate Binary Numbers (1 to N)

// Input: n = 5
// Output: 1 10 11 100 101

// let n = 5

// let queue = []

// for(let i=1;i<n;i++){
//     queue.push(parseInt(i.toString(2)))
// }

// console.log(queue)

// alternative approach

// let n = 5

// let queue = []

// let result = []

// queue.push('1')

// for(let i=0;i<n;i++){
//     let front = queue.shift()
//     result.push(front)

//     queue.push(front+"0")
//     queue.push(front+"1")
// }
// console.log(queue)
// console.log(result)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6.Implement Queue Using Two Stacks
// Design a queue using two stacks.

class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length == 0
    }

    push(val){
        this.items.push(val)
    }

    pop(){
        if(this.isEmpty()){
            return null
        }
        else{
            return this.items.pop()
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.items[this.items.length-1]
        }
    }
}

class QueueBasedOnStack{
    constructor(){
        this.s1 = new Stack()
        this.s2 = new Stack()
    }

    isEmpty(){
        return this.s1.isEmpty() && this.s2.isEmpty()
    }

    enqueue(val){
        this.s1.push(val)
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }

        if(this.s2.isEmpty()){
            while(!this.s1.isEmpty()){
                this.s2.push(this.s1.pop())
            }
        }

        return this.s2.pop()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        if(this.s2.isEmpty()){
            while(!this.s1.isEmpty()){
                this.s2.push(this.s1.pop())
            }
        }

        return this.s2.peek()
    }
}

// Test Case 1: Basic Operations
console.log("=== Test Case 1: Basic Operations ===");
const q1 = new QueueBasedOnStack();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
console.log("Dequeue:", q1.dequeue()); // Expected: 1
console.log("Dequeue:", q1.dequeue()); // Expected: 2
console.log("Dequeue:", q1.dequeue()); // Expected: 3

// Test Case 2: Empty Queue
console.log("\n=== Test Case 2: Empty Queue ===");
const q2 = new QueueBasedOnStack();
console.log("isEmpty:", q2.isEmpty()); // Expected: true
console.log("Dequeue from empty:", q2.dequeue()); // Expected: null
console.log("Peek from empty:", q2.peek()); // Expected: null

// Test Case 3: Mixed Operations
console.log("\n=== Test Case 3: Mixed Operations ===");
const q3 = new QueueBasedOnStack();
q3.enqueue(10);
q3.enqueue(20);
console.log("Peek:", q3.peek()); // Expected: 10
console.log("Dequeue:", q3.dequeue()); // Expected: 10
q3.enqueue(30);
q3.enqueue(40);
console.log("Dequeue:", q3.dequeue()); // Expected: 20
console.log("Dequeue:", q3.dequeue()); // Expected: 30
console.log("Peek:", q3.peek()); // Expected: 40

// Test Case 4: Interleaved Enqueue/Dequeue
console.log("\n=== Test Case 4: Interleaved Operations ===");
const q4 = new QueueBasedOnStack();
q4.enqueue(1);
console.log("Dequeue:", q4.dequeue()); // Expected: 1
q4.enqueue(2);
q4.enqueue(3);
console.log("Dequeue:", q4.dequeue()); // Expected: 2
q4.enqueue(4);
console.log("Dequeue:", q4.dequeue()); // Expected: 3
console.log("Dequeue:", q4.dequeue()); // Expected: 4
console.log("isEmpty:", q4.isEmpty()); // Expected: true

// Test Case 5: Large Number of Operations
console.log("\n=== Test Case 5: Large Operations ===");
const q5 = new QueueBasedOnStack();
for(let i = 1; i <= 10; i++) {
    q5.enqueue(i);
}
console.log("First 5 dequeues:");
for(let i = 0; i < 5; i++) {
    console.log(q5.dequeue()); // Expected: 1, 2, 3, 4, 5
}
for(let i = 11; i <= 15; i++) {
    q5.enqueue(i);
}
console.log("Remaining dequeues:");
while(!q5.isEmpty()) {
    console.log(q5.dequeue()); // Expected: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
}

// Test Case 6: Peek Without Dequeue
console.log("\n=== Test Case 6: Multiple Peeks ===");
const q6 = new QueueBasedOnStack();
q6.enqueue(100);
q6.enqueue(200);
console.log("Peek 1:", q6.peek()); // Expected: 100
console.log("Peek 2:", q6.peek()); // Expected: 100 (same value)
console.log("Dequeue:", q6.dequeue()); // Expected: 100
console.log("Peek 3:", q6.peek()); // Expected: 200

// Test Case 7: Single Element
console.log("\n=== Test Case 7: Single Element ===");
const q7 = new QueueBasedOnStack();
q7.enqueue(42);
console.log("Peek:", q7.peek()); // Expected: 42
console.log("isEmpty:", q7.isEmpty()); // Expected: false
console.log("Dequeue:", q7.dequeue()); // Expected: 42
console.log("isEmpty:", q7.isEmpty()); // Expected: true

// Test Case 8: Different Data Types
console.log("\n=== Test Case 8: Different Data Types ===");
const q8 = new QueueBasedOnStack();
q8.enqueue("hello");
q8.enqueue(123);
q8.enqueue(true);
q8.enqueue({name: "test"});
console.log("Dequeue:", q8.dequeue()); // Expected: "hello"
console.log("Dequeue:", q8.dequeue()); // Expected: 123
console.log("Dequeue:", q8.dequeue()); // Expected: true
console.log("Dequeue:", q8.dequeue()); // Expected: {name: "test"}