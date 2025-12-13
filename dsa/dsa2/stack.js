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

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.head == null
    }

    push(val){
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

    pop(){
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
            let temp = this.head
            while(temp.next.next){
                temp = temp.next
            }
            let val = temp.next.value
            temp.next = temp.next.next
            this.size--
            return val
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        else{
            let temp = this.head

            while(temp.next){
                temp = temp.next
            }

            return temp.value
        }
    }


    display(){
        if(this.isEmpty()){
            return 'list is empty'
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
    getSize(){
        return this.size
    }
}


const stack1=new StackLinkedList()
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(4)
console.log(stack1.display())
console.log(stack1.pop())
console.log(stack1.peek())
console.log(stack1.isEmpty())
console.log(stack1.getSize())
console.log(stack1.display())