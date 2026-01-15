//linkedlist

class Node{
    constructor(value){
        this.value = value
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

    prepend(value){
        const node = new Node(value)
        node.next = this.head
        this.head = node
        this.size++
    }

    append(value){
        const node = new Node(value)
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
        else if(this.getSize() == 1){
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
        else if(this.getSize() == 1){
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

    insert(value,index){
        if(index < 0 || index > this.getSize()){
            return 'invalid index'
        }
        else if(index == 0){
            this.prepend(value)
        }
        else if(index == this.getSize()){
            this.append(value)
        }
        else{
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

    removeByValue(value){
        if(this.isEmpty()){
            return 'empty'
        }
        else if(value == this.head.value){
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
                return 'value not found'
            }else{
                let val = temp.next.value
                temp.next = temp.next.next
                this.size--
                return val
            }
        }
    }

    removeByIndex(index){
        if(index < 0 || index >= this.getSize()){
            return 'invalid index'
        }
        else if(index == 0){
            return this.removeFromStart()
        }
        else if(index == this.getSize()-1){
            return this.removeFromEnd()
        }
        else{
            let temp = this.head
            for(let i=0;i<index-1;i++){
                temp = temp.next
            }

            let val  = temp.next.value
            temp.next = temp.next.next
            this.size--
            return val
        }
    }

    reverse(){
        let prev = null
        let cur = this.head

        while(cur){
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            return 'empty'
        }
        else{
            let list = ''

            let temp = this.head

            while(temp){
                list += temp.value +'->'
                temp = temp.next
            }

            list += 'null'
            return list
        }
    }

    search(value){
        if(this.isEmpty()){
            return null
        }else{
            let temp = this.head
            let i = 0

            while(temp){
                if(value == temp.value){
                    return i
                }
                temp = temp.next
                i++
            }
            return -1
        }
    }

    makeCircular(){
        if(this.isEmpty()){
            return 
        }

        let temp = this.head

        while(temp.next){
            temp = temp.next
        }
        
        temp.next = this.head
    }

    checkCircular(){
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

    findMiddle(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }

    findMiddleIndex(){
        let middleIndex = Math.floor(this.getSize()/2)
        return middleIndex
    }

    deleteMiddleValueByIndex(){
        let index = this.findMiddleIndex()
        return this.removeByIndex(index)
    }

    findDuplicates(){
        let seen = new Set()

        let temp = this.head
        let duplicates = []
        while(temp){
            if(!seen.has(temp.value)){
                seen.add(temp.value)
            }else{
                duplicates.push(temp.value)
            }
            temp = temp.next
        }

        return duplicates
    }

    removeDuplicates(){
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

    linkedListToArray(){
        let values = []
        let temp = this.head

        while(temp){
            values.push(temp.value)
            temp = temp.next
        }

        return values
    }

    arrayToLinkedList(arr){
        let ll = new LinkedList()

        for(let val of arr){
            ll.append(val)
        }

        return ll
    }

    palindrome(){
        let values = []

        let temp = this.head

        while(temp){
            values.push(temp.value)
            temp = temp.next
        }

        let start = 0
        let end = values.length - 1

        while(start <= end){
            if(values[start] != values[end]){
                return false
            }
            start++
            end--
        }
        return true
    }

    sortLinkedList(){
        let swapped = true
        while(swapped){
            swapped = false
            let cur = this.head
            while(cur && cur.next){
                if(cur.value > cur.next.value){
                    [cur.value,cur.next.value] = [cur.next.value,cur.value]
                    swapped = true
                }
                cur = cur.next
            }
        }
    }

    getMiddleNode(head){
        let slow = head
        let fast = head.next

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    mergeSort(){
        this.head = this.mergeLL(this.head)
    }

    mergeLL(head){
        if(!head || !head.next){
            return head
        }

        let middle = this.getMiddleNode(head)
        let nextToMiddle = middle.next
        middle.next = null

        let leftLL = this.mergeLL(middle)
        let rightLL = this.mergeLL(nextToMiddle)

        return this.merge(leftLL,rightLL)
    }

    merge(a,b){
        if(!a){
            return b
        }

        if(!b){
            return a
        }

        if(a.value <= b.value){
            a.next = this.merge(a.next,b)
            return a
        }
        else{
            b.next = this.merge(a,b.next)
            return b
        }
    }

    insertInAscendingOrder(value){
        const node = new Node(value)
            if(this.isEmpty()|| node.value < this.head.value){
                node.next = this.head
                this.head = node
            }else{
                let temp = this.head
                while(temp.next && temp.next.value < node.value){
                    temp = temp.next
                }

                node.next = temp.next
                temp.next = node
            }
            this.size++
    }

    insertInDescendingOrder(value){
        const node = new Node(value)
        if(this.isEmpty() || node.value > this.head.value){
            node.next = this.head
            this.head = node
        }
        else{
            let temp = this.head
            while(temp.next && temp.next.value < node.value){
                temp = temp.next
            }
            node.next = temp.next
            temp.next = node
        }
        this.size++
    }
}

// ===== TEST CASES FOR LINKED LIST =====

const ll = new LinkedList()

console.log("1. isEmpty:", ll.isEmpty()) 
// true

ll.append(10)
ll.append(20)
ll.append(30)
console.log("2. append:", ll.print()) 
// 10->20->30->null

ll.prepend(5)
console.log("3. prepend:", ll.print()) 
// 5->10->20->30->null

console.log("4. size:", ll.getSize()) 
// 4

console.log("5. removeFromStart:", ll.removeFromStart()) 
// 5
console.log("6. after removeFromStart:", ll.print()) 
// 10->20->30->null

console.log("7. removeFromEnd:", ll.removeFromEnd()) 
// 30
console.log("8. after removeFromEnd:", ll.print()) 
// 10->20->null

ll.insert(15, 1)
console.log("9. insert at index 1:", ll.print()) 
// 10->15->20->null

console.log("10. removeByValue 15:", ll.removeByValue(15)) 
// 15
console.log("11. after removeByValue:", ll.print()) 
// 10->20->null

ll.append(30)
ll.append(40)
console.log("12. list:", ll.print()) 
// 10->20->30->40->null

console.log("13. removeByIndex 2:", ll.removeByIndex(2)) 
// 30
console.log("14. after removeByIndex:", ll.print()) 
// 10->20->40->null

console.log("15. search 20:", ll.search(20)) 
// 1

ll.reverse()
console.log("16. reverse:", ll.print()) 
// 40->20->10->null

console.log("17. middle node:", ll.findMiddle().value) 
// 20

console.log("18. middle index:", ll.findMiddleIndex()) 
// 1

console.log("19. delete middle:", ll.deleteMiddleValueByIndex()) 
// 20
console.log("20. after delete middle:", ll.print()) 
// 40->10->null

ll.append(10)
ll.append(40)
ll.append(50)
console.log("21. duplicates list:", ll.print()) 
// 40->10->10->40->50->null

console.log("22. findDuplicates:", ll.findDuplicates()) 
// [10, 40]

ll.removeDuplicates()
console.log("23. removeDuplicates:", ll.print()) 
// 40->10->50->null

console.log("24. linkedListToArray:", ll.linkedListToArray()) 
// [40, 10, 50]

console.log("25. palindrome:", ll.palindrome()) 
// false

const pll = new LinkedList()
pll.append(1)
pll.append(2)
pll.append(2)
pll.append(1)
console.log("26. palindrome list:", pll.print()) 
// 1->2->2->1->null
console.log("27. palindrome check:", pll.palindrome()) 
// true

const sortLL = new LinkedList()
sortLL.append(30)
sortLL.append(10)
sortLL.append(20)
sortLL.append(40)
sortLL.sortLinkedList()
console.log("28. bubble sort:", sortLL.print()) 
// 10->20->30->40->null

const mergeLL = new LinkedList()
mergeLL.append(4)
mergeLL.append(2)
mergeLL.append(1)
mergeLL.append(3)
mergeLL.mergeSort()
console.log("29. merge sort:", mergeLL.print()) 
// 1->2->3->4->null

const asc = new LinkedList()
asc.insertInAscendingOrder(20)
asc.insertInAscendingOrder(10)
asc.insertInAscendingOrder(30)
asc.insertInAscendingOrder(25)
console.log("30. insert ascending:", asc.print()) 
// 10->20->25->30->null

const desc = new LinkedList()
desc.insertInDescendingOrder(20)
desc.insertInDescendingOrder(10)
desc.insertInDescendingOrder(30)
desc.insertInDescendingOrder(25)
console.log("31. insert descending:", desc.print()) 
// 30->25->20->10->null

const circular = new LinkedList()
circular.append(1)
circular.append(2)
circular.append(3)
circular.makeCircular()
console.log("32. checkCircular:", circular.checkCircular()) 
// true
