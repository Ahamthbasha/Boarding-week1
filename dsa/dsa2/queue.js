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

class Node{
    constructor(val){
        this.value = val;
        this.next = null
    }
}

class QueueLL{
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.head == null
    }

    getSize(){
        return this.size
    }

    enqueue(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
        }else{
            let temp = this.head
            while(temp.next){
                temp = temp.next
            }
            temp.next = node
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        else if(this.size == 1){
            let val = this.head.value
            this.head = null
            this.size--
            return val
        }
        else{
            let value = this.head.value
            this.head = this.head.next
            this.size--
            return value
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        else{
            return this.head.value
        }
    }

    display(){
        if(this.isEmpty()){
            return 'queue is empty'
        }
        else{
            let temp = this.head
            let list = ''
            while(temp){
                list += temp.value + '->'
                temp = temp.next
            }

            list += 'null'

            return list
        }
    }
}


const q = new QueueLL()

console.log(q.isEmpty())   // true
console.log(q.dequeue())  // null
console.log(q.peek())     // null
console.log(q.getSize())  // 0

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

console.log(q.display())  // 10 -> 20 -> 30 -> null
console.log(q.peek())     // 10
console.log(q.getSize())  // 3

console.log(q.dequeue())  // 10
console.log(q.display())  // 20 -> 30 -> null

q.enqueue(40)
console.log(q.display())  // 20 -> 30 -> 40 -> null

q.dequeue()
q.dequeue()
q.dequeue()

console.log(q.isEmpty())  // true
console.log(q.display())  // queue is empty