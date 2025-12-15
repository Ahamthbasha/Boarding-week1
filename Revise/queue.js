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
//         else{
//             return this.items.shift()
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             return this.items[0]
//         }
//     }

//     display(){
//         return this.items
//     }
// }

// // ================= Queue TEST CASES =================

// let q = new Queue()

// console.log("---- Initial State ----")
// console.log(q.isEmpty())      // true
// console.log(q.getSize())      // 0
// console.log(q.dequeue())      // null
// console.log(q.peek())         // null
// console.log(q.display())      // []

// console.log("\n---- Enqueue Operations ----")
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.display())      // [10, 20, 30]
// console.log(q.peek())         // 10
// console.log(q.getSize())      // 3
// console.log(q.isEmpty())      // false

// console.log("\n---- Dequeue Operations ----")
// console.log(q.dequeue())      // 10
// console.log(q.display())      // [20, 30]
// console.log(q.peek())         // 20
// console.log(q.getSize())      // 2

// console.log(q.dequeue())      // 20
// console.log(q.dequeue())      // 30
// console.log(q.dequeue())      // null

// console.log("\n---- After Empty ----")
// console.log(q.display())      // []
// console.log(q.isEmpty())      // true
// console.log(q.getSize())      // 0

// console.log("\n---- Mixed Operations ----")
// q.enqueue("A")
// q.enqueue("B")
// console.log(q.dequeue())      // "A"
// q.enqueue("C")

// console.log(q.display())      // ["B", "C"]
// console.log(q.peek())         // "B"


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// class ObjQueue{
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

//     enqueue(val){
//         this.items[this.tail] = val
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

//     display(){
//         return this.items
//     }
// }

// // ================= ObjQueue TEST CASES =================

// let q = new ObjQueue()

// console.log("---- Initial State ----")
// console.log(q.isEmpty())        // true
// console.log(q.getSize())        // 0
// console.log(q.dequeue())        // null
// console.log(q.peek())           // null
// console.log(q.display())        // {}

// console.log("\n---- Enqueue Operations ----")
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.display())        // {0:10, 1:20, 2:30}
// console.log(q.peek())           // 10
// console.log(q.getSize())        // 3
// console.log(q.isEmpty())        // false

// console.log("\n---- Dequeue Operations ----")
// console.log(q.dequeue())        // 10
// console.log(q.display())        // {1:20, 2:30}
// console.log(q.peek())           // 20
// console.log(q.getSize())        // 2

// console.log(q.dequeue())        // 20
// console.log(q.dequeue())        // 30
// console.log(q.dequeue())        // null

// console.log("\n---- After Empty ----")
// console.log(q.isEmpty())        // true
// console.log(q.getSize())        // 0
// console.log(q.display())        // {}

// console.log("\n---- Mixed Operations ----")
// q.enqueue("A")
// q.enqueue("B")
// console.log(q.dequeue())        // "A"
// q.enqueue("C")

// console.log(q.display())        // {3:"B",4:"C"}
// console.log(q.peek())           // "B"
// console.log(q.getSize())        // 2

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class QueueLL{
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
//         }else{
//             return this.head.value
//         }
//     }

//     display(){
//         if(this.isEmpty()){
//             return null
//         }else{
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


//reverse a queue

// let arr = [1,2,3,4,5]

// function reverseArr(arr,result = []){
//     if(arr.length == 0){
//         return result 
//     }

//     return reverseArr(arr.slice(0,arr.length-1),result.concat(arr[arr.length-1]))
// }

// console.log(reverseArr(arr))


// function reverStr(str,result = ''){
//     if(str.length == 0){
//         return result
//     }

//     return reverStr(str.slice(0,str.length-1),result.concat(str[str.length-1]))
// }

// console.log(reverStr("sitaarezameenpar"))


// let queue = [1,2,3,4,5]

// let stack = []

// while(queue.length){
//     stack.push(queue.shift())
// }

// while(stack.length){
//     queue.push(stack.pop())
// }

// console.log(queue)


//generate binary numbers

let n = 5

// let result = []
// for(let i=1;i<=n;i++){
//     result.push(i.toString(2))
// }

// console.log(result)

// let queue = []

// let result = []

// queue.push("1")
// for(let i=1;i<=n;i++){
//     let front = queue.shift()
//     result.push(front)

//     queue.push(front+"0")
//     queue.push(front+"1")
// }

// console.log(result)
// console.log(queue)

//implement queue using stack


class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length == 0
    }

    getSize(){
        return this.items.length
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

    display(){
        return this.items
    }
}

class Queue{
    constructor(){
        this.inStack = new Stack()
        this.outStack = new Stack()
    }

    isEmpty(){
        return this.inStack.isEmpty() && this.outStack.isEmpty()
    }

    enqueue(val){
        this.inStack.push(val)
    }

    dequeue(){
        if(this.outStack.isEmpty()){
            while(!this.inStack.isEmpty()){
                this.outStack.push(this.inStack.pop())
            }
        }

        return this.outStack.pop()
    }

    peek(){
        if(this.outStack.isEmpty()){
            while(!this.inStack.isEmpty()){
                this.outStack.push(this.inStack.pop())
            }
        }
        return this.outStack.peek()
    }

    getSize(){
        return this.inStack.getSize() + this.outStack.getSize()
    }

    display(){
        let result = []

        for(let i=this.outStack.items.length-1;i>=0;i--){
            result.push(this.outStack.items[i])
        }

        for(let i=0;i<this.inStack.items.length;i++){
            result.push(this.inStack.items[i])
        }

        return result
    }
}

// ================= Queue using Two Stacks - TEST CASES =================

let q = new Queue()

console.log("---- Initial State ----")
console.log(q.isEmpty())     // true
console.log(q.getSize())     // 0
console.log(q.dequeue())     // null
console.log(q.peek())        // null
console.log(q.display())     // []

console.log("\n---- Enqueue Operations ----")
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

console.log(q.display())     // [10, 20, 30]
console.log(q.peek())        // 10
console.log(q.getSize())     // 3

console.log("\n---- Dequeue Operations ----")
console.log(q.dequeue())     // 10
console.log(q.display())     // [20, 30]
console.log(q.peek())        // 20
console.log(q.getSize())     // 2

console.log("\n---- Mixed Operations ----")
q.enqueue(40)
q.enqueue(50)

console.log(q.display())     // [20, 30, 40, 50]
console.log(q.dequeue())     // 20
console.log(q.display())     // [30, 40, 50]

console.log("\n---- Emptying Queue ----")
console.log(q.dequeue())     // 30
console.log(q.dequeue())     // 40
console.log(q.dequeue())     // 50
console.log(q.dequeue())     // null
console.log(q.isEmpty())     // true
console.log(q.display())     // []
