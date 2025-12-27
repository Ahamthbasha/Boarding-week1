class MaxHeap{
    constructor(){
        this.heap = []
    }

    isEmpty(){
        return this.heap.length == 0
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2 * index + 1
    }

    getRightChildIndex(index){
        return 2 * index + 2
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }

    getLeftchild(index){
        return this.heap[this.getLeftChildIndex(index)]
    }

    getRightChild(index){
        return this.heap[this.getRightChildIndex(index)]
    }

    hasParent(index){
        return index > 0
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
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

        while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
            this.swap(index,this.getParentIndex(index))
            index = this.getParentIndex(index)
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
            let larger = this.getLeftChildIndex(index)

            if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftchild(index)){
                larger = this.getRightChildIndex(index)
            }

            if(this.heap[index] >= this.heap[larger]){
                break
            }else{
                this.swap(index,larger)
            }

            index = larger
        }
    }

    heapSort(arr){
        let m = new MaxHeap()

        for(let val of arr){
            m.add(val)
        }

        let sortedArr = []

        while(m.heap.length){
            sortedArr.push(m.remove())
        }

        return sortedArr
    }

    findKthSmallest(arr,k){
        if(k > arr.length){
            return null
        }

        let m = new MaxHeap()

        for(let val of arr){
            if(m.heap.length < k){
                m.add(val)
            }else if(val < m.peek()){
                m.remove()
                m.add(val)
            }
        }

        return m.peek()
    }
}

// ================= MAX HEAP TEST CASES =================

const heap = new MaxHeap()

console.log("Is Empty:", heap.isEmpty()) // true

// Insert elements
;[10, 5, 20, 3, 8, 15].forEach(v => heap.add(v))

console.log("Peek (max):", heap.peek()) // 20

// Remove elements (descending order)
console.log("Remove:", heap.remove()) // 20
console.log("Remove:", heap.remove()) // 15
console.log("Remove:", heap.remove()) // 10
console.log("Remove:", heap.remove()) // 8
console.log("Remove:", heap.remove()) // 5
console.log("Remove:", heap.remove()) // 3
console.log("Remove empty:", heap.remove()) // null

// Heap Sort Test
const arr = [12, 3, 17, 8, 34, 25, 1]
console.log("Heap Sort (Descending):", heap.heapSort(arr))
// [34, 25, 17, 12, 8, 3, 1]

// Kth Smallest Test
const nums = [7, 10, 4, 3, 20, 15]
console.log("1st Smallest:", heap.findKthSmallest(nums, 1)) // 3
console.log("2nd Smallest:", heap.findKthSmallest(nums, 2)) // 4
console.log("3rd Smallest:", heap.findKthSmallest(nums, 3)) // 7
console.log("4th Smallest:", heap.findKthSmallest(nums, 4)) // 10

// Edge cases
console.log("Heap Sort Empty:", heap.heapSort([])) // []
console.log("Kth Smallest (k > size):", heap.findKthSmallest([2,1], 5)) // 1
