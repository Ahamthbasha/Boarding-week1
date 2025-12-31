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
        }else{
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
            return -1
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
            return -1
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

    print(){
        if(this.isEmpty()){
            return -1
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

    removeByValue(value){
        if(this.isEmpty()){
            return -1
        }
        else if(this.head.value == value){
            this.head = this.head.next
            this.size--
            return true
        }
        else if(this.size == 1){
            if(this.head.value == value){
                this.head = null
                this.size--
                return true
            }else{
                return false
            }
        }
        else{
            let temp = this.head

            while(temp.next && temp.next.value != value){
                temp = temp.next
            }

            if(temp.next == null){
                return false
            }
            else{
                temp.next = temp.next.next
                this.size--
                return true
            }
        }
    }

    removeByIndex(index){
        if(index < 0 || index >= this.size){
            return -1
        }
        else if(index == 0){
            this.head = this.head.next
            this.size--
            return true
        }
        else{
            let temp = this.head
            for(let i=0;i<index-1;i++){
                temp = temp.next
            }
            
            if(temp.next == null){
                return false
            }
            else{
                temp.next = temp.next.next
                this.size--
                return true
            }
        }
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return -1
        }

        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node
            this.size++
        }
        else if(index == 0){
            this.prepend(value)
        }
        else if(index == this.size){
            this.append(value)
        }
        else{
            let temp = this.head

            for(let i=0;i<index-1;i++){
                temp = temp.next
            }

            node.next = temp.next
            temp.next = node

            this.size++
        }
    }

    search(value){
        let temp = this.head
        let index = 0

        while(temp){
            if(value == temp.value){
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
        
        while(cur){
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }

        this.head = prev
    }

    makeCircular(){
        if(this.isEmpty()){
            return
        }

        let temp = this.head

        while(temp.next != null){
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

    findDuplicates(){
        let freqMap = {}

        let temp = this.head

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
                duplicates.push(Number(key))
            }
        }

        return duplicates
    }

    arrayToLinkedlist(arr){
        this.head = null
        this.size = 0

        for(let val of arr){
            this.append(val)
        }
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

        let value1 = ''

        while(temp){
            value1 += temp.value
            temp = temp.next
        }

        let value2 = value1
        value2 = value2.split('').reverse().join('')

        return value1 == value2
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


    findMiddleValue(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        return slow.value
    }

    findMidNodeAndDelete(){
        let index = Math.floor(this.size/2)
        this.removeByIndex(index)
    }

    sortLinkedListUsingBubbleSort(){
        let swapped

        do{
            swapped = false
            let cur = this.head

            while(cur && cur.next){
                if(cur.value > cur.next.value){
                    [cur.value,cur.next.value] = [cur.next.value,cur.value]
                    swapped = true
                }

                cur = cur.next
            }

        }while(swapped)
    }

    getMiddle(head){
        let prev = null
        let slow = head
        let fast = head

        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }

        if(prev){
            prev.next = null
        }

        return slow
    }

    sortList(){
        this.head = this.mergeSort(this.head)
    }

    mergeSort(head){
        if(!head || !head.next){
            return head
        }

        let middle = this.getMiddle(head)
        let left = this.mergeSort(head)
        let right = this.mergeSort(middle)

        return this.sortedMerge(left,right)
    }

    sortedMerge(a,b){
        if(!a){
            return b
        }

        if(!b){
            return a
        }

        if(a.value <= b.value){
            a.next = this.sortedMerge(a.next,b)
            return a
        }else{
            b.next = this.sortedMerge(a,b.next)
            return b
        }
    }

    insertNodeinAscendingOrder(val){
        const node = new Node(val)

        if(this.isEmpty() ||node.value < this.head.value){
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

    insertNodeinDescendingOrder(val){
        const node = new Node(val)

        if(this.isEmpty() || node.value > this.head.value){
            node.next = this.head
            this.head = node
        }
        else{
            let temp = this.head

            while(temp.next && temp.next.value > val){
                temp = temp.next
            }

            node.next = temp.next
            temp.next = node
        }

        this.size++
    }
}