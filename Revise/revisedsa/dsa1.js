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

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }
//         else{
//             let temp = this.head
//             while(temp.next){
//                 temp = temp.next
//             }
//             temp.next = node
//         }
//         this.size++
//     }

//     search(value){
//         let temp = this.head
//         let index = 0

//         while(temp){
//             if(temp.value == value){
//                 return index
//             }
//             temp = temp.next
//             index++
//         }
//         return -1
//     }

//     removeFromStart(){
//         if(this.isEmpty()){
//             return null
//         }
//         else if(this.getSize() == 1){
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

//     removeFromEnd(){
//         if(this.isEmpty()){
//             return null
//         }
//         else if(this.getSize() == 1){
//             let val = this.head.value
//             this.head = null
//             this.size--
//             return val
//         }
//         else{
//             let temp = this.head

//             while(temp.next.next){
//                 temp = temp.next
//             }

//             let val = temp.next.value
//             temp.next = null
//             this.size--
//             return val
//         }
//     }

//     removeByValue(value){
//         if(this.isEmpty()){
//             return false
//         }
//         if(this.head.value == value){
//             this.head = this.head.next
//             this.size--
//             return true
//         }
//         else{
//             let temp = this.head

//             while(temp.next && temp.next.value != value){
//                 temp = temp.next
//             }

//             if(temp.next == null){
//                 return false
//             }
//             else{
//                 temp.next = temp.next.next
//                 this.size--
//                 return true
//             }
//         }
//     }

//     removeByIndex(index){
//         if(index < 0 || index >= this.getSize()){
//             return null
//         }
//         else if(index == 0){
//             return this.removeFromStart()
//         }
//         else{
//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }

//             if(temp.next == null){
//                 return false
//             }
//             else{
//                 let val = temp.next.value
//                 temp.next = temp.next.next
//                 this.size--
//                 return val
//             }
//         }
//     }

//     insert(index,value){
//         if(index < 0 || index > this.size){
//             return 'invalid index'
//         }
//         else if(index == 0){
//             this.prepend(value)
//         }
//         else if(index == this.getSize()){
//             this.append(value)
//         }
//         else{
//             const node = new Node(value)
//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }

//             node.next = temp.next
//             temp.next = node
//             this.size++
//         }
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

//     makeCircular(){
//         let temp = this.head

//         while(temp.next){
//             temp = temp.next
//         }

//         temp.next = this.head
//     }

//     checkCircular(){
//         let slow = this.head
//         let fast = this.head

//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next

//             if(slow == fast){
//                 return  true
//             }
//         }

//         return false
//     }

//     removeDuplicates(){
//         let temp = this.head
//         let seen = new Set()
//         let prev 
//         while(temp){
//             if(seen.has(temp.value)){
//                 prev.next = temp.next
//                 this.size--
//             }else{
//                 seen.add(temp.value)
//                 prev = temp
//             }
//             temp = temp.next
//         }
//     }

//     findDuplicates(){
//         let temp = this.head

//         let seen = new Set()
//         let duplicates = []
//         while(temp){
//             if(seen.has(temp.value)){
//                 duplicates.push(temp.value)
//             }else{
//                 seen.add(temp.value)
//             }
//             temp = temp.next
//         }

//         return duplicates
//     }

//     reverse(){
//         let prev
//         let cur = this.head

//         while(cur){
//             let next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }

//         this.head = prev
//     }

//     linkedlistToArray(){
//         let temp = this.head
//         let val = []

//         while(temp){
//             val.push(temp.value)
//             temp = temp.next
//         }

//         return val
//     }

//     arrayToLinkedlist(arr){
//         let ll = new LinkedList()

//         for(let val of arr){
//             ll.append(val)
//         }
//     }

//     palindrome(){
//         let temp = this.head
//         let val = ''
//         while(temp){
//             val += temp.value
//             temp = temp.next
//         }

//         let copy = val
//         copy = copy.split('').reverse().join("")

//         return copy == val
//     }

//     findMiddleIndexAndDelete(){
//         let midIndex = Math.floor((this.getSize()/2))
//         return this.removeByIndex(midIndex)
//     }

//     findMiddleNode(){
//         let slow = this.head
//         let fast = this.head

//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }

//         return slow
//     }

//     insertValinAscOrder(value){
//         const node = new Node(value)
//         if(this.isEmpty() || node.value < this.head.value){
//             node.next = this.head
//             this.head = node
//         }else{
//             let temp = this.head

//             while(temp.next && temp.next.value < node.value){
//                 temp = temp.next
//             }

//             if(temp.next == null){
//                 temp.next = node
//             }
//             else{
//                 node.next = temp.next
//                 temp.next = node
//             }
//         }
//         this.size++
//     }

//     insertValInDescOrder(value){
//         const node = new Node(value)
//         if(this.isEmpty() || node.value > this.head.value){
//             node.next = this.head
//             this.head = node
//         }else{
//             let temp = this.head

//             while(temp.next && temp.next.value > node.value){
//                 temp = temp.next
//             }
            
//             if(temp.next == null){
//                 temp.next = node
//             }else{
//                 node.next = temp.next
//                 temp.next = node
//             }
//         }
//         this.size++
//     }

//     bubbleSort(){
//         let swapped = true
//         do{
//             swapped = false
//             let cur = this.head

//             while(cur.next){
//                 if(cur.value > cur.next.value){
//                     [cur.value,cur.next.value] = [cur.next.value,cur.value]
//                     swapped = true
//                 }
//                 cur = cur.next
//             }
//         }while(swapped)
//     }

//     sortLinkedList(){
//         this.head = this.mergeSort(this.head)
//     }

//     getMiddle(head){
//         let slow = head
//         let fast = head.next

//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }

//         return slow
//     }

//     mergeSort(head){
//         if(!head || !head.next){
//             return head
//         }

//         let middle = this.getMiddle(head)
//         let nextToMiddle = middle.next
//         middle.next = null
//         let left = this.mergeSort(head)
//         let right = this.mergeSort(nextToMiddle)

//         return this.sortMerge(left,right)
//     }

//     sortMerge(a,b){
//         if(!a){
//             return b
//         }

//         if(!b){
//             return a
//         }

//         if(a.value <= b.value){
//             a.next = this.sortMerge(a.next,b)
//             return a
//         }else{
//             b.next = this.sortMerge(a,b.next)
//             return b
//         }
//     }
// }

// const ll = new LinkedList()

// // append
// ll.append(3)
// ll.append(1)
// ll.append(5)
// ll.append(2)
// ll.append(4)

// console.log("Initial:", ll.print()) // 3->1->5->2->4->null

// // prepend
// ll.prepend(10)
// console.log("After prepend:", ll.print())

// // search
// console.log("Search 5:", ll.search(5)) // index
// console.log("Search 99:", ll.search(99)) // -1

// // remove
// console.log("Remove start:", ll.removeFromStart())
// console.log("Remove end:", ll.removeFromEnd())
// console.log("Remove by value 5:", ll.removeByValue(5))
// console.log("After removals:", ll.print())

// // insert
// ll.insert(1, 99)
// console.log("After insert at index 1:", ll.print())

// // reverse
// ll.reverse()
// console.log("Reversed:", ll.print())

// // duplicates
// ll.append(99)
// ll.append(99)
// console.log("Duplicates:", ll.findDuplicates())
// ll.removeDuplicates()
// console.log("After remove duplicates:", ll.print())

// // palindrome
// const p = new LinkedList()
// p.append(1)
// p.append(2)
// p.append(2)
// p.append(1)
// console.log("Palindrome:", p.palindrome()) // true

// // ascending insert
// const asc = new LinkedList()
// asc.insertValinAscOrder(5)
// asc.insertValinAscOrder(1)
// asc.insertValinAscOrder(3)
// asc.insertValinAscOrder(2)
// asc.insertValinAscOrder(4)
// console.log("Ascending:", asc.print())

// // descending insert
// const desc = new LinkedList()
// desc.insertValInDescOrder(5)
// desc.insertValInDescOrder(1)
// desc.insertValInDescOrder(3)
// desc.insertValInDescOrder(2)
// desc.insertValInDescOrder(4)
// console.log("Descending:", desc.print())

// // bubble sort
// const b = new LinkedList()
// b.append(4)
// b.append(2)
// b.append(5)
// b.append(1)
// b.append(3)
// b.bubbleSort()
// console.log("Bubble sorted:", b.print())

// // merge sort
// const m = new LinkedList()
// m.append(4)
// m.append(2)
// m.append(5)
// m.append(1)
// m.append(3)
// m.sortLinkedList()
// console.log("Merge sorted:", m.print())

// // cycle check
// const c = new LinkedList()
// c.append(1)
// c.append(2)
// c.append(3)
// console.log("Is circular:", c.checkCircular()) // false
// c.makeCircular()
// console.log("Is circular after makeCircular:", c.checkCircular()) // true


// function linearSearch(arr,k){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == k){
//             return i
//         }
//     }
//     return -1
// }

// function binarySearch(arr,k){
//     let low = 0
//     let high = arr.length - 1

//     while(low <= high){
//         let mid = Math.floor((low+high)/2)

//         if(arr[mid] == k){
//             return mid
//         }
//         else if(k < arr[mid]){
//             high = mid - 1
//         }
//         else{
//             low = mid + 1
//         }
//     }

//     return -1
// }


// console.log(linearSearch([1,2,3,4,5],5))
// console.log(binarySearch([1,2,3,4,5],5))

// function binarySearch(arr,k){
//     return bSearch(arr,k,0,arr.length-1)
// }

// function bSearch(arr,target,left,right){
//     if(left > right){
//         return -1
//     }

//     let mid = Math.floor((left+right)/2)

//     if(arr[mid] == target){
//         return mid
//     }
//     else if(target < arr[mid]){
//         return bSearch(arr,target,left,mid-1)
//     }
//     else{
//         return bSearch(arr,target,mid+1,right)
//     }
// }

// console.log(binarySearch([1,2,3,4,5], 1)) // 0
// console.log(binarySearch([1,2,3,4,5], 3)) // 2
// console.log(binarySearch([1,2,3,4,5], 5)) // 4
// console.log(binarySearch([1,2,3,4,5], 6)) // -1
