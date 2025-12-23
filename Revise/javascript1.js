// const obj = {a:1, b:2, c:{d:4}, e:{f:{g:5}},h:10}

// let sum = 0
// for(let key in obj){
//     if(typeof obj[key] == 'object'){
//         sum += sumObj(obj[key])
//     }else{
//         sum += obj[key]
//     }
// }

// function sumObj(obj,sum=0){
//     for(let key in obj){
//         if(typeof obj[key] == 'object'){
//          return sumObj(obj[key],sum)
//         }else{
//           sum += obj[key]
//         }
//     }
    
//     return sum
// }

// console.log(sum)



// const students = [
// 	{ id: 1, name: 'Alice', score: 85, class: 'A' },
// 	{ id: 2, name: 'Bob', score: 92, class: 'B' },
// 	{ id: 3, name: 'Charlie', score: 78, class: 'A' },
// 	{ id: 4, name: 'David', score: 95, class: 'C' },
// 	{ id: 5, name: 'Eva', score: 89, class: 'A' },
// 	{ id: 6, name: 'Freddy', score: 90, class: 'C' },
// ];


// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i].score < pivot.score){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// console.log(quickSort(students))

//it should be

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

//     insertInAscendingOrder(value){
//         const node = new Node(value)

//         if(this.isEmpty() || node.value < this.head.value){
//             node.next = this.head
//             this.head = node
//         }
//         else{
//             let temp = this.head

//             while(temp.next && temp.next.value < node.value){
//                 temp = temp.next
//             }
//             let nextNode = temp.next
//             temp.next = node
//             node.next = nextNode
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }else{
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

// const ll =  new LinkedList()

// ll.insertInAscendingOrder(10)
// ll.insertInAscendingOrder(30)
// ll.insertInAscendingOrder(40)
// ll.insertInAscendingOrder(50)
// ll.insertInAscendingOrder(60)

// console.log(ll.print())

// ll.insertInAscendingOrder(5)

// console.log(ll.print())

// ll.insertInAscendingOrder(20)

// console.log(ll.print())

// ll.insertInAscendingOrder(15)

// console.log(ll.print())

// ll.insertInAscendingOrder(0)

// console.log(ll.print())


// const obj = {}

// index(key){
//     let total = 0

//     for(let i=0;i<key.length;i++){
//         total += key.charCodeAt(i)
//     }

//     return total % this.size
// }


// set(key,value){
//     let getIndex = this.index(key)
//     let bucket = this.table[getIndex]
//     if(!bucket){
//         this.table[getIndex] = [[key,value]]
//     }else{
//         const sameKey = bucket.find((item)=>item[0] == key)

//         if(sameKey){
//             sameKey[1] = value
//         }else{
//             bucket.push([key,value])
//         }
//     }
// }