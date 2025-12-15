// class Stack{
//     constructor(){
//         this.item = []
//         this.top = 0
//     }

//     isEmpty(){
//         return this.top == 0
//     }

//     push(val){
//         this.item[this.top] = val
//         this.top++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             let val = this.item[this.top-1]
//             delete this.item[this.top-1]
//             this.top--
//             return val
//         }
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             return this.item[this.top-1]
//         }
//     }

//     getSize(){
//         return this.top
//     }

//     display(){
//         return this.item
//     }
// }

// const stack1=new Stack()
// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// stack1.push(4)
// console.log(stack1.display())
// console.log(stack1.pop())
// console.log(stack1.peek())
// console.log(stack1.isEmpty())
// console.log(stack1.getSize())

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

//         return this.items.pop()
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }

//         return this.items[this.items.length-1]
//     }

//     reverseStr(str){
//         let s = new Stack()

//         for(let val of str){
//             s.push(val)
//         }

//         let newStr = ''

//         while(s.items.length){
//             newStr += s.pop()
//         }

//         return newStr
//     }

//     reverseArr(arr){
//         let s = new Stack()

//         for(let val of arr){
//             s.push(val)
//         }

//         let newArr = []

//         while(s.items.length){
//             newArr.push(s.pop())
//         }

//         return newArr
//     }

//     display(){
//         return this.items
//     }

//     getSize(){
//         return this.items.length
//     }
// }


// const stack1=new Stack()
// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// stack1.push(4)
// console.log(stack1.display())
// console.log(stack1.pop())
// console.log(stack1.peek())
// console.log(stack1.isEmpty())
// console.log(stack1.getSize())

// console.log(stack1.reverseArr([1,2,3,4,5]))
// console.log(stack1.reverseStr("srk"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//             this.head = this.head.value
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


// const stack1=new StackLinkedList()
// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// stack1.push(4)
// console.log(stack1.display())
// console.log(stack1.pop())
// console.log(stack1.peek())
// console.log(stack1.isEmpty())
// console.log(stack1.getSize())
// console.log(stack1.display())



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Stack{
//     constructor(){
//         this.items = []
//     }

//     isEmpty(){
//         return this.items.length == null
//     }

//     push(val){
//         this.items.push(val)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return null
//         }else{
//             return this.items.pop()
//         }
//     }

//     balancedParentheses(str){
//         let s = new Stack()
//         let bracketMap = {
//             "{" : "}",
//             "[" : "]",
//             "(" : ")"
//         }
        
//         for(let ch of str){
//             if(bracketMap[ch]){
//                 s.push(ch)
//             }else{
//                 if(s.items.length == 0 || bracketMap[s.pop()] != ch){
//                     return false
//                 }
//             }
//         }

//         return true
//     }
// }


// const s = new Stack()

// console.log(s.balancedParentheses("[{([])}]"))

// console.log(s.balancedParentheses("[{([{[(])}])}]"))


// 1.valid parenthesis or balanced paranthesis

// let str = "{}[]()"

// let bracketMap = {
//     "{" : "}",
//     "[" : "]",
//     "(" : ")"
// }

// let stack = []

// for(let ch of str){
//     if(bracketMap[ch]){
//         stack.push(ch)
//     }else{
//         if(stack.length == 0 || bracketMap[stack.pop()] != ch){
//             return false
//         }
//     }
// }

// console.log(stack.length == 0)

// 2. Next Greater Element

// Problem:
// For each element, find the next greater element to its right.

// Input: [4,5,2,10]
// Output: [5,10,10,-1]

//monotonic stack

// let arr = [4,5,2,10]
// let result = new Array(arr.length).fill(-1)
// let stack = []

// for(let i=0;i<arr.length;i++){
//     while(stack.length && arr[i] > arr[stack[stack.length-1]]){
//         let index = stack.pop()
//         result[index] = arr[i]
//     }
//     stack.push(i)
// }

// console.log(result)


//my logic not efficient

// let arr = [4,5,2,10]

// let stack = []

// for(let i=0;i<arr.length;i++){
//     let take = arr[i]
//     if(i == arr.length-1){
//         stack.push(-1)
//     }else{
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] > take){
//                 stack.push(arr[j])
//                 break
//             }
//         }
//     }
// }

// console.log(stack)

// 3. Remove Adjacent Duplicates
// Problem:
// Remove adjacent duplicate characters.

// Input: "abbaca"
// Output: "ca"

// let str = "abbaca"

// let stack = []

// for(let char of str){
//     if(stack.length && stack[stack.length-1] == char){
//         stack.pop()
//     }else{
//         stack.push(char)
//     }
// }

// console.log(stack.join(""))

// 4. Evaluate Postfix Expression
// Problem:
// Evaluate postfix expression.

// Input: "23*54*+9-"
// Output: 17


// let val = "23*54*+9-"

// let stack = []

// let sum = 0

// for(let char of val){
//     if(/\d+/g.exec(char)){
//         stack.push(Number(char))
//     }else{
//         let result

//         let right = stack.pop()
//         let left = stack.pop()

//         switch(char){
//             case '+':
//                 result = left + right
//                 break;
//             case '-':
//                 result = left - right
//                 break;
//             case "*":
//                 result = left * right
//                 break;
//             case "/":
//                 result = Math.trunc(left/right)
//                 break
//         }

//         stack.push(result)
//     }
// }

// console.log(stack)

// console.log(stack.pop())

//multi digit post fix


let input = "333 3 * 222 2 * + 90 -"

let arr = input.split(" ")

let stack = []
for(let val of arr){
    if(/[0-9]/g.test(val)){
        stack.push(val)
    }else{
        let result

        let right = stack.pop()
        let left = stack.pop()

        switch(val){
            case "+":
                result = left + right
                break
            case "-":
                result = left - right
                break
            case "*":
                result = left * right
                break
            case "/":
                result = Math.trunc(left / right)
                break
        }
        stack.push(result)
    }
}

console.log(stack.pop())


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length == 0
    }

    enqueue(val){
        this.items.push(val)
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

    size(){
       return this.items.length
    }
}

class StackBasedQueue{
    constructor(){
        this.queue = new Queue()
    }

    isEmpty(){
        return this.queue.isEmpty()
    }

    push(val){
        let size = this.queue.size()
        this.queue.enqueue(val)
        for(let i=0;i<size;i++){
            this.queue.enqueue(this.queue.dequeue())
        }
    }

    pop(){
        if(this.isEmpty()){
            return null
        }else{
            this.queue.dequeue()
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.queue.peek()
        }
    }
}

