class MinHeap{
    constructor(){
        this.heap = []
    }

    isEmpty(){
        return this.heap.length == 0
    }
    
    parentIndex(index){
        return Math.floor((index-1)/2)
    }

    leftChildIndex(index){
        return 2 * index + 1
    }

    rightChildIndex(index){
        return 2 * index + 2
    }

    getParent(index){
        return this.heap[this.parentIndex(index)]
    }

    getLeftChild(index){
        return this.heap[this.leftChildIndex(index)]
    }

    getRigtChild(index){
        return this.heap[this.rightChildIndex(index)]
    }

    hasParent(index){
        return index >  0
    }

    hasLeftChild(index){
        return this.leftChildIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.rightChildIndex(index) < this.heap.length
    }

    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.heap[0]
    }

    add(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1

        while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
            this.swap(index,this.parentIndex(index))
            index = this.parentIndex(index)
        }
    }

    remove(){
        if(this.isEmpty()){
            return null
        }

        let val = this.heap[0]
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
        return val
    }

    heapifyDown(){
        let index = 0
        
        while(this.hasLeftChild(index)){
            let smaller = this.leftChildIndex(index)

            if(this.hasRightChild(index) && this.getRigtChild(index) < this.getLeftChild(index)){
                smaller = this.rightChildIndex(index)
            }

            if(this.heap[index] <= this.heap[smaller]){
                break
            }else{
                this.swap(index,smaller)
            }

            index = smaller
        }
    }

    heapSort(arr){
        let m = new MinHeap()

        for(let val of arr){
            m.add(val)
        }

        let sortedArr = []

        while(m.heap.length){
            sortedArr.push(m.remove())
        }

        return sortedArr
    }

    findKthLargest(arr,k){
        let m = new MinHeap()

        for(let val of arr){
            m.add(val)
            if(m.heap.length > k){
                m.remove()
            }
        }
        return m.peek()
    }
}

// ================= TEST CASES =================

const heap = new MinHeap()

console.log("Is Empty:", heap.isEmpty()) // true

// Insert elements
;[10, 5, 3, 20, 8, 15].forEach(v => heap.add(v))

console.log("Peek (min):", heap.peek()) // 3

// Remove elements (should come in sorted order)
console.log("Remove:", heap.remove()) // 3
console.log("Remove:", heap.remove()) // 5
console.log("Remove:", heap.remove()) // 8
console.log("Remove:", heap.remove()) // 10
console.log("Remove:", heap.remove()) // 15
console.log("Remove:", heap.remove()) // 20
console.log("Remove from empty:", heap.remove()) // null

// Heap Sort Test
const arr = [12, 3, 17, 8, 34, 25, 1]
console.log("Heap Sort:", heap.heapSort(arr))
// [1, 3, 8, 12, 17, 25, 34]

// Kth Largest Element Test
const nums = [3, 2, 1, 5, 6, 4]
console.log("1st Largest:", heap.findKthLargest(nums, 1)) // 6
console.log("2nd Largest:", heap.findKthLargest(nums, 2)) // 5
console.log("3rd Largest:", heap.findKthLargest(nums, 3)) // 4

// Edge Cases
console.log("Kth Largest (k > length):", heap.findKthLargest([2, 1], 5)) // null or smallest
console.log("Heap Sort Empty:", heap.heapSort([])) // []
