class Node{
    constructor(val){
        this.value = val
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size 
    }

    prepend(val){
        const node = new Node(val)
        node.next = this.head
        this.head = node
        this.size++
    }

    append(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let temp = this.head

            while(temp.next){
                temp = temp.next
            }

            temp.next = node
        }
        this.size++
    }

    removeFromStart(){
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
            let val = this.head.value
            this.head = this.head.next
            this.size--
            return val
        }
    }

    removeFromEnd(){
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
            temp.next = null
            this.size--
            return val
        }
    }

    insert(index,value){
        if(index < 0 || index > this.size){
            return null
        }

        if(index == 0){
            this.prepend(value)
        }
        else if(index == this.size){
            this.append(value)
        }else{
            const node = new Node(value)
            let temp = this.head
    
            for(let i=0;i<index-1;i++){
                temp = temp.next
            }
    
            node.next = temp.next
            temp.next = node
            this.size++
        }
    }


    removeByIndex(index){
        if(index < 0 || index >= this.size){
            return null
        }

        if(index == 0){
            let val = this.head.value
            this.head = this.head.next
            this.size--
            return val
        }else{
            let temp = this.head

            for(let i=0;i<index-1;i++){
                temp = temp.next
            }
            let val = temp.next.value
            temp.next = temp.next.next
            this.size--
            return val
        }
    }

    removeByValue(value){
        if(this.isEmpty()){
            return null
        }
        else if(this.head.value == value){
            let val = this.head.value
            this.head = this.head.next
            this.size--
            return val
        }
        else{
            let temp = this.head

            while(temp.next && temp.next.value != value){
                temp = temp.next
            }

            if(temp.next == null){
                return null
            }else{
                let val = temp.next.value
                temp.next = temp.next.next
                this.size--
                return val
            }
        }
    }

    search(value){
        let temp = this.head
        let index = 0
        while(temp){
            if(temp.value == value){
                return index
            }
            temp = temp.next
            index++
        }
        return -1
    }

    reverse(){
        let prev = null
        let cur = this.head
        let next

        while(cur){
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            return 'list is empty'
        }else{
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

    makeCircle(){
        if(this.isEmpty()){
            return null
        }
        let temp = this.head

        while(temp.next){
            temp = temp.next
        }

        temp.next = this.head
    }

    checkCircularOrNot(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next

            if(slow == fast){
                return true
            }
        }
        return false
    }

    findDuplicates(){
        if(this.isEmpty()){
            return []
        }else{
            let temp = this.head

            let freqMap = {}

            while(temp){
                if(freqMap[temp.value]){
                    freqMap[temp.value]++
                }else{
                    freqMap[temp.value]=1
                }

                temp = temp.next
            }

            let duplicates = []

            for(let key in freqMap){
                if(freqMap[key] > 1){
                    duplicates.push(key)
                }
            }

            return duplicates
        }
    }

    removeDuplicates(){
        if(this.isEmpty()){
            return null
        }else{
            let temp = this.head
            let prev = null
            let seen = new Set()
            while(temp){
                if(seen.has(temp.value)){
                    prev.next = temp.next
                    this.size--
                }else{
                    seen.add(temp.value)
                    prev = temp
                }
                temp = temp.next
            }
        }
    }

    arrayToLinkedList(arr){
        let list = new LinkedList()

        for(let val of arr){
            list.append(val)
        }

        return list
    }

    linkedListToArray(){
        let temp = this.head

        let arrValues = []

        while(temp){
            arrValues.push(temp.value)
            temp = temp.next
        }

        return arrValues
    }

    palindrome(){
        let temp = this.head

        let takeValues = []

        while(temp){
            takeValues.push(temp.value)
            temp = temp.next
        }

        let start = 0
        let end = takeValues.length - 1

        while(start <= end){
            if(takeValues[start] != takeValues[end]){
                return false
            }
            start++
            end--
        }

        return true
    }

    findMiddleNode(){
        if(this.isEmpty()){
            return null
        }

        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        return slow.value
    }

    findMiddleNodeAndDelete(){
        let midIndex = Math.floor(this.size/2)
        return this.removeByIndex(midIndex)
    }

    sortLinkedList(){
        this.head = this.mergeSort(this.head)
    }

    mergeSort(head){
        if(!head || !head.next){
            return head
        }

        let middle = this.getMiddle(head)
        let nextToMiddle = middle.next
        middle.next = null

        let left = this.mergeSort(head)
        let right = this.mergeSort(nextToMiddle)

        return this.sortedMerge(left,right)
    }

    getMiddle(head){
        let slow = head
        let fast = head.next

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }

    sortedMerge(a,b){
        if(!a){
            return b
        }

        if(!b){
            return a
        }

        let result = null

        if(a.value <= b.value){
            result = a
            result.next = this.sortedMerge(a.next,b)
        }else{
            result = b
            result.next = this.sortedMerge(a,b.next)
        }
        return result
    }
}

// ================= TEST CASES FOR LINKED LIST =================

let list = new LinkedList()

// 1️⃣ Empty list
console.log(list.isEmpty())              // true
console.log(list.getSize())              // 0
console.log(list.print())                // list is empty
console.log(list.removeFromStart())      // null
console.log(list.removeFromEnd())        // null
console.log(list.search(10))             // -1

// 2️⃣ Prepend & Append
list.append(10)
list.append(20)
list.prepend(5)
console.log(list.print())                // 5->10->20->null
console.log(list.getSize())              // 3

// 3️⃣ Insert by index
list.insert(0, 1)
list.insert(2, 7)
list.insert(list.getSize(), 30)
console.log(list.print())                // 1->5->7->10->20->30->null

// 4️⃣ Remove operations
console.log(list.removeFromStart())      // 1
console.log(list.print())                // 5->7->10->20->30->null

console.log(list.removeFromEnd())        // 30
console.log(list.print())                // 5->7->10->20->null

console.log(list.removeByIndex(2))       // 10
console.log(list.print())                // 5->7->20->null

console.log(list.removeByValue(7))       // 7
console.log(list.print())                // 5->20->null

// 5️⃣ Search
console.log(list.search(5))              // 0
console.log(list.search(20))             // 1
console.log(list.search(99))             // -1

// 6️⃣ Reverse
list.reverse()
console.log(list.print())                // 20->5->null

// 7️⃣ Array → LinkedList → Array
let newList = list.arrayToLinkedList([1,2,3,4,5])
console.log(newList.print())             // 1->2->3->4->5->null
console.log(newList.linkedListToArray()) // [1,2,3,4,5]

// 8️⃣ Palindrome
let pList = new LinkedList()
pList.append(1)
pList.append(2)
pList.append(2)
pList.append(1)
console.log(pList.palindrome())          // true
pList.append(3)
console.log(pList.palindrome())          // false

// 9️⃣ Find middle node
let midList = new LinkedList()
midList.append(1)
midList.append(2)
midList.append(3)
midList.append(4)
midList.append(5)
console.log(midList.findMiddleNode())    // 3

// 🔟 Find middle & delete
console.log(midList.findMiddleNodeAndDelete()) // 3
console.log(midList.print())                   // 1->2->4->5->null

// 1️⃣1️⃣ Duplicates
let dupList = new LinkedList()
dupList.append(1)
dupList.append(2)
dupList.append(2)
dupList.append(3)
dupList.append(1)
console.log(dupList.findDuplicates())    // ['1','2']

dupList.removeDuplicates()
console.log(dupList.print())             // 1->2->3->null

// 1️⃣2️⃣ Cycle detection
let cycleList = new LinkedList()
cycleList.append(10)
cycleList.append(20)
cycleList.append(30)
console.log(cycleList.checkCircularOrNot()) // false
cycleList.makeCircle()
console.log(cycleList.checkCircularOrNot()) // true

// ⚠️ DO NOT call print() after making circle

// 1️⃣3️⃣ Sorting
let sortList = new LinkedList()
sortList.append(4)
sortList.append(2)
sortList.append(1)
sortList.append(3)
console.log(sortList.print())             // 4->2->1->3->null
sortList.sortLinkedList()
console.log(sortList.print())             // 1->2->3->4->null

// ================= END OF TEST CASES =================
