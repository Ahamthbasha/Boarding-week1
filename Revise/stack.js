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

//         let reverseArr = []

//         while(s.items.length){
//             reverseArr.push(s.pop())
//         }

//         return reverseArr
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


// // ================= STACK TEST CASES =================

// let s = new Stack()

// console.log("---- Basic Stack Operations ----")
// console.log(s.isEmpty())          // true
// console.log(s.pop())              // null
// console.log(s.peek())             // null

// s.push(10)
// s.push(20)
// s.push(30)

// console.log(s.display())          // [10, 20, 30]
// console.log(s.peek())             // 30
// console.log(s.getSize())          // 3

// console.log(s.pop())              // 30
// console.log(s.display())          // [10, 20]


// console.log("\n---- Reverse String Tests ----")
// let s1 = new Stack()

// console.log(s1.reverseStr("hello"))   // "olleh"
// console.log(s1.reverseStr("abcd"))    // "dcba"
// console.log(s1.reverseStr(""))        // ""
// console.log(s1.reverseStr("a"))       // "a"


// console.log("\n---- Reverse Array Tests ----")
// let s2 = new Stack()

// console.log(s2.reverseArr([1,2,3,4]))     // Expected: [4,3,2,1]
// console.log(s2.reverseArr([]))            // Expected: []
// console.log(s2.reverseArr([5]))           // Expected: [5]
// console.log(s2.reverseArr([1,1,2,2]))     // Expected: [2,2,1,1]


// console.log("\n---- Mixed Operations ----")
// let s3 = new Stack()

// s3.push(100)
// s3.push(200)
// console.log(s3.reverseStr("stack"))       // "kcats"
// console.log(s3.display())                 // [100, 200]


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
//         }
//         else{
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
//             return this.items[this.top-1]
//         }
//     }

//     display(){
//         return this.items
//     }

//     getSize(){
//         return this.top
//     }
// }

// // ================= ObjStack TEST CASES =================

// let s = new ObjStack()

// console.log("---- Initial State ----")
// console.log(s.isEmpty())        // true
// console.log(s.getSize())        // 0
// console.log(s.pop())            // null
// console.log(s.peek())           // null
// console.log(s.display())        // {}

// console.log("\n---- Push Operations ----")
// s.push(10)
// s.push(20)
// s.push(30)

// console.log(s.display())        // {0:10, 1:20, 2:30}
// console.log(s.getSize())        // 3
// console.log(s.peek())           // 30
// console.log(s.isEmpty())        // false

// console.log("\n---- Pop Operations ----")
// console.log(s.pop())            // 30
// console.log(s.display())        // {0:10, 1:20}
// console.log(s.getSize())        // 2
// console.log(s.peek())           // 20

// console.log(s.pop())            // 20
// console.log(s.pop())            // 10
// console.log(s.pop())            // null (underflow)

// console.log("\n---- After Emptying Stack ----")
// console.log(s.display())        // {}
// console.log(s.getSize())        // 0
// console.log(s.isEmpty())        // true
// console.log(s.peek())           // null

// console.log("\n---- Mixed Operations ----")
// s.push("A")
// s.push("B")
// s.push("C")

// console.log(s.peek())           // "C"
// console.log(s.pop())            // "C"
// console.log(s.peek())           // "B"
// console.log(s.display())        // {0:"A",1:"B"}
// console.log(s.getSize())        // 2

// linked list stack

// class Node{
//     constructor(val){
//         this.value = val
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

//     getSize(){
//         return this.size
//     }

//     push(val){
//         const node = new Node(val)
//         node.next = this.head
//         this.head = node
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }else{
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
//             return 'stack is empty'
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



// // ================= StackLL TEST CASES =================

// let s = new StackLL()

// console.log("---- Initial State ----")
// console.log(s.isEmpty())          // true
// console.log(s.getSize())          // 0
// console.log(s.pop())              // null
// console.log(s.peek())             // null
// console.log(s.display())          // "stack is empty"

// console.log("\n---- Push Operations ----")
// s.push(10)
// s.push(20)
// s.push(30)

// console.log(s.display())          // 30->20->10->null
// console.log(s.peek())             // 30
// console.log(s.getSize())          // 3
// console.log(s.isEmpty())          // false

// console.log("\n---- Pop Operations ----")
// console.log(s.pop())              // 30
// console.log(s.display())          // 20->10->null
// console.log(s.peek())             // 20
// console.log(s.getSize())          // 2

// console.log(s.pop())              // 20
// console.log(s.pop())              // 10
// console.log(s.pop())              // null (underflow)

// console.log("\n---- After Empty ----")
// console.log(s.display())          // "stack is empty"
// console.log(s.isEmpty())          // true
// console.log(s.getSize())          // 0

// console.log("\n---- Mixed Operations ----")
// s.push("A")
// s.push("B")
// s.push("C")

// console.log(s.display())          // C->B->A->null
// console.log(s.pop())              // C
// console.log(s.peek())             // B
// console.log(s.display())          // B->A->null


// problems

//valid parenthesis

// let str = "{}}[]()]"

// let bracketMap = {
//     "{" : "}",
//     "[" : "]",
//     "(" : ")"
// }

// let stack = []

// for(let ch of str){
//     if(bracketMap[ch]){
//         stack.push(ch)
//     }
//     else{
//         if((stack.length == 0) || bracketMap[stack.pop()] != ch){
//             console.log(false)
//             return 
//         }
//     }
// }

// console.log(true)

//next greater element

// let arr = [4,5,2,10]
// let result = new Array(arr.length).fill(-1)
// let stack = []

// for(let i=0;i<arr.length;i++){
//     while(stack.length > 0 && arr[i] > arr[stack[stack.length-1]]){
//         let index = stack.pop()
//         result[index] = arr[i]
//     }
//     stack.push(i)
// }

// console.log(result)

//remove adjacent duplicate


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
// console.log(stack)

//post fix expression

// let val = "23*54*+9-"

// let stack = []

// for(let s of val){
//     if(/[0-9]/g.test(s)){
//         stack.push(Number(s))
//     }else{
//         let result 
//         let right = stack.pop()
//         let left = stack.pop()
//         switch(s){
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
//                 result = Math.floor(left / right)
//                 break
//         }
//         stack.push(result)
//     }
// }

// console.log(stack.pop())

// stack builded by queue

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

    enqueue(val){
        return this.items.push(val)
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            return this.items.shift()
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.items[0]
        }
    }
}


class Stack{
    constructor(){
        this.s = new Queue()
    }

    isEmpty(){
        return  this.s.isEmpty()
    }

    getSize(){
        return this.s.getSize()
    }

    push(val){
        this.s.enqueue(val)
        let size = this.s.getSize()

        for(let i=0;i<size-1;i++){
            this.s.enqueue(this.s.dequeue())
        }
    }

    pop(){
        if(this.isEmpty()){
            return null
        }else{
            return this.s.dequeue()
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.s.peek()
        }
    }
}

// ================= Stack using ONE Queue - TEST CASES =================

let s = new Stack()

console.log("---- Initial State ----")
console.log(s.isEmpty())       // true
console.log(s.getSize())       // 0
console.log(s.pop())           // null
console.log(s.peek())          // null

console.log("\n---- Push Operations ----")
s.push(10)
s.push(20)
s.push(30)

console.log(s.peek())          // 30
console.log(s.getSize())       // 3
console.log(s.isEmpty())       // false

console.log("\n---- Pop Operations ----")
console.log(s.pop())           // 30
console.log(s.peek())          // 20
console.log(s.pop())           // 20
console.log(s.pop())           // 10
console.log(s.pop())           // null

console.log("\n---- After Empty ----")
console.log(s.isEmpty())       // true
console.log(s.getSize())       // 0

console.log("\n---- Mixed Operations ----")
s.push("A")
s.push("B")
s.push("C")

console.log(s.peek())          // "C"
console.log(s.pop())           // "C"
console.log(s.peek())          // "B"
console.log(s.getSize())       // 2
