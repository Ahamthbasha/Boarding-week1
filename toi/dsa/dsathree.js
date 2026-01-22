// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LL{
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
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
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

//     insert(index,value){
//         const node = new Node(value)
//         if(index < 0 || index > this.getSize()){
//             return 'invalid index'
//         }
//         else if(index == 0){
//             this.prepend(value)
//         }
//         else if(index == this.getSize()){
//             this.append(value)
//         }
//         else{
//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }

//             node.next = temp.next
//             temp.next = node
//             this.size++
//         }
//     }

//     removeFromStart(){
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
//             temp.next = temp.next.next
//             this.size--
//             return val
//         }
//     }

//     removeByIndex(index){
//         if(index < 0 || index >= this.getSize()){
//             return 'invalid index'
//         }
//         else if(index == 0){
//             return this.removeFromStart()
//         }
//         else if(index == this.getSize()-1){
//             return this.removeFromEnd()
//         }
//         else{
//             let temp = this.head

//             for(let i=0;i<index-1;i++){
//                 temp = temp.next
//             }
            
//             let val = temp.next.value
//             temp.next = temp.next.next
//             this.size--
//             return val
//         }
//     }

//     removeByValue(value){
//         if(this.isEmpty()){
//             return null
//         }
//         else if(this.head.value == value){
//             let val = this.head.value
//             this.head = this.head.next
//             this.size--
//             return val
//         }
//         else{
//             let temp = this.head

//             while(temp && temp.next.value != value){
//                 temp = temp.next
//             }

//             if(temp.next == null){
//                 return 'value not found'
//             }
//             else{
//                 let val = temp.next.value
//                 temp.next = temp.next.next
//                 this.size--
//                 return val
//             }
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

//     reverse(){
//         let prev = null
//         let cur = this.head

//         while(cur){
//             let next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }

//         this.head = prev
//     }

//     makeCircular(){
//         if(this.isEmpty()){
//             return null
//         }

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
//                 return true
//             }
//         }
//         return false
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

//     removeDuplicates(){
//         let temp = this.head
//         let seen = new Set()
//         let prev = null
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

//         let freqMap = {}

//         let duplicates = []

//         while(temp){
//             if(freqMap[temp.value]){
//                 freqMap[temp.value]++
//             }else{
//                 freqMap[temp.value]=1
//             }
//             temp = temp.next
//         }

//         for(let key in freqMap){
//             if(freqMap[key] > 1){
//                 duplicates.push(Number(key))
//             }
//         }

//         return duplicates
//     }

//     LLToArray(){
//         let result = []
//         let temp = this.head

//         while(temp){
//             result.push(temp.value)
//             temp = temp.next
//         }

//         return result
//     }

//     arrayToLL(arr){
//         let l = new LL()

//         for(let val of arr){
//             l.append(val)
//         }

//         return l
//     }

//     palindrome(){
//         let final = []

//         let temp = this.head

//         while(temp){
//             final.push(temp.value)
//             temp = temp.next
//         }

//         let start = 0
//         let end = final.length-1

//         while(start <= end){
//             if(final[start] != final[end]){
//                 return false
//             }
//             start++
//             end--
//         }

//         return true
//     }

//     findMidleNode(){
//         let slow = this.head
//         let fast = this.head

//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }

//         return slow
//     }

//     findMiddleIndexAndDelete(){
//         let midIndex = Math.floor(this.size/2)
//         this.removeByIndex(midIndex)
//     }

//     bubbleSort(){
//         let swapped = true

//         while(swapped){
//             swapped = false
//             let cur = this.head

//             while(cur && cur.next){
//                 if(cur.value > cur.next.value){
//                     [cur.value,cur.next.value] = [cur.next.value,cur.value]
//                     swapped = true
//                 }
//                 cur = cur.next
//             }
//         }
//     }

//     middleNodeForMergeSort(head){
//         let slow = head
//         let fast = head.next

//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }

//         return slow
//     }

//     mergeSort(){
//         this.head = this.sortLL(this.head)
//     }

//     sortLL(head){
//         if(!head || !head.next){
//             return head
//         }

//         let middle = this.middleNodeForMergeSort(head)
//         let nextTomiddle = middle.next
//         middle.next = null
//         let left = this.sortLL(head)
//         let right = this.sortLL(nextTomiddle)

//         return this.merge(left,right)
//     }
    
//     merge(a,b){
//         if(!a){
//             return b
//         }

//         if(!b){
//             return a
//         }

//         if(a.value <= b.value){
//             a.next = this.merge(a.next,b)
//             return a
//         }
//         else{
//             b.next = this.merge(a,b.next)
//             return b
//         }
//     }

//     insertAsAscendingOrder(value){
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

//             node.next = temp.next
//             temp.next = node
//         }
//         this.size++
//     }


//     insertAsDescendingOrder(value){
//         const node = new Node(value)
//         if(this.isEmpty() || node.value > this.head.value){
//             node.next = this.head
//             this.head = node
//         }else{
//             let temp = this.head

//             while(temp.next && temp.next.value > node.value){
//                 temp = temp.next
//             }
            
//             node.next = temp.next
//             temp.next = node
//         }
//         this.size++
//     }
// }

// const ll = new LL()

// // Append
// ll.append(10)
// ll.append(20)
// ll.append(30)
// console.log("After append:", ll.print()) // 10->20->30->null

// // Prepend
// ll.prepend(5)
// console.log("After prepend:", ll.print()) // 5->10->20->30->null

// // Insert
// ll.insert(2, 15)
// console.log("After insert at index 2:", ll.print()) // 5->10->15->20->30->null

// // Remove from start
// console.log("Removed from start:", ll.removeFromStart()) // 5
// console.log(ll.print()) // 10->15->20->30->null

// // Remove from end
// console.log("Removed from end:", ll.removeFromEnd()) // 30
// console.log(ll.print()) // 10->15->20->null

// // Remove by index
// console.log("Removed index 1:", ll.removeByIndex(1)) // 15
// console.log(ll.print()) // 10->20->null

// // Remove by value
// ll.append(40)
// ll.append(50)
// console.log("Removed value 20:", ll.removeByValue(20)) // 20
// console.log(ll.print()) // 10->40->50->null

// // Search
// console.log("Index of 40:", ll.search(40)) // 1
// console.log("Index of 99:", ll.search(99)) // -1

// // Reverse
// ll.reverse()
// console.log("After reverse:", ll.print()) // 50->40->10->null

// // Palindrome
// const pll = new LL()
// pll.append(1)
// pll.append(2)
// pll.append(2)
// pll.append(1)
// console.log("Is palindrome:", pll.palindrome()) // true

// // Remove duplicates
// const dll = new LL()
// dll.append(1)
// dll.append(2)
// dll.append(2)
// dll.append(3)
// dll.append(1)
// dll.removeDuplicates()
// console.log("After removing duplicates:", dll.print()) // 1->2->3->null

// // Find duplicates
// const fdl = new LL()
// fdl.append(1)
// fdl.append(2)
// fdl.append(2)
// fdl.append(3)
// fdl.append(3)
// console.log("Duplicates:", fdl.findDuplicates()) // [2,3]

// // Middle node
// console.log("Middle node:", fdl.findMidleNode().value)

// // Bubble sort
// const bl = new LL()
// bl.append(4)
// bl.append(1)
// bl.append(3)
// bl.append(2)
// bl.bubbleSort()
// console.log("After bubble sort:", bl.print()) // 1->2->3->4->null

// // Merge sort
// const ml = new LL()
// ml.append(5)
// ml.append(1)
// ml.append(4)
// ml.append(2)
// ml.append(3)
// ml.mergeSort()
// console.log("After merge sort:", ml.print()) // 1->2->3->4->5->null

// // Circular check
// const cl = new LL()
// cl.append(1)
// cl.append(2)
// cl.append(3)
// console.log("Is circular before:", cl.checkCircular()) // false
// cl.makeCircular()
// console.log("Is circular after:", cl.checkCircular()) // true


// // Ascending Order Test
// const asc = new LL()
// asc.insertAsAscendingOrder(10)
// asc.insertAsAscendingOrder(5)
// asc.insertAsAscendingOrder(20)
// asc.insertAsAscendingOrder(15)
// asc.insertAsAscendingOrder(1)

// console.log("Ascending Order:", asc.print())
// // Expected: 1->5->10->15->20->null


// // Descending Order Test
// const desc = new LL()
// desc.insertAsDescendingOrder(10)
// desc.insertAsDescendingOrder(5)
// desc.insertAsDescendingOrder(20)
// desc.insertAsDescendingOrder(15)
// desc.insertAsDescendingOrder(25)

// console.log("Descending Order:", desc.print())
// // Expected: 25->20->15->10->5->null


// function linearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([9,10,11,7],100))

// function binarySearch(arr,target){
//     let start = 0
//     let end = arr.length-1

//     while(start <= end){
//         let mid = Math.floor((start+end)/2)
//         if(arr[mid] == target){
//             return mid
//         }
//         else if(target < arr[mid]){
//            end = mid-1
//         }
//         else{
//             start=mid+1
//         }
//     }

//     return -1
// }

// console.log(binarySearch([1,2,3,4,5],100))


// function binarySearch(arr,target){
//     return bsr(arr,target,0,arr.length-1)
// }

// function bsr(arr,target,left,right){
//     if(left > right){
//         return -1
//     }

//     let mid = Math.floor((left+right)/2)

//     if(arr[mid] == target){
//         return mid
//     }
//     else if(target < arr[mid]){
//         return bsr(arr,target,left,mid-1)
//     }
//     else{
//         return bsr(arr,target,mid+1,right)
//     }
// }

// console.log(binarySearch([1,2,3,4,5], 3))   // 2
// console.log(binarySearch([1,2,3,4,5], 1))   // 0
// console.log(binarySearch([1,2,3,4,5], 5))   // 4
// console.log(binarySearch([1,2,3,4,5], 10))  // -1
// console.log(binarySearch([], 1))            // -1
// console.log(binarySearch([5], 5))           // 0


// function fact(n){
//     if(n <= 1){
//         return n
//     }

//     return n * fact(n-1)
// }

// console.log(fact(5))

// function fib(n){
//     if(n <= 1){
//         return n
//     }

//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(5))


// function printFib(a=0,b=1,limit){
//     if(limit == 0){
//         return
//     }
//     console.log(a)
//     return printFib(b,a+b,limit-1)
// }

// printFib(0,1,5)

// function printNo(a,limit){
//     if(limit == 0){
//         return
//     }
//     console.log(a)
//     return printNo(a+1,limit-1)
// }

// printNo(1,10)

