// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Bst{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             return this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left = node
//             }
//             else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value === value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }
//         else if(value > root.value){
//             return this.search(root.right,value)
//         }
//     }

//     min(root){
//         while(root.left){
//             root = root.left
//         }

//         return root.value
//     }

//     max(root){
//         while(root.right){
//             root = root.right
//         }
//         return root.value
//     }

//     minNode(root){
//         if(!root.left){
//             return root.value
//         }
//         return this.minNode(root.left)
//     }

//     maxNode(root){
//         if(!root.right){
//             return root.value
//         }
//         return this.maxNode(root.right)
//     }

//     preorder(root){
//         if(root){
//             console.log(root.value)
//             this.preorder(root.left)
//             this.preorder(root.right)
//         }
//     }

//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
//         }
//     }

//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value)
//         }
//     }

//     levelOrder(root){
//         if(!root){
//             return []
//         }

//         let queue = []

//         queue.push(root)

//         while(queue.length){
//             let cur = queue.shift()

//             console.log(cur.value)

//             if(cur.left){
//                 queue.push(cur.left)
//             }

//             if(cur.right){
//                 queue.push(cur.right)
//             }
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return null
//         }

//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }
//         else{
//             if(!root.left && !root.right){
//                 return null
//             }

//             if(!root.left){
//                 return root.right
//             }

//             if(!root.right){
//                 return root.left
//             }

//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }

//     isPrime(value){
//         if(value <= 1){
//             return false
//         }

//         for(let i=2;i<=Math.sqrt(value);i++){
//             if(value % i == 0){
//                 return false
//             }
//         }

//         return true
//     }

//     findPrime(root,result=[]){
//         if(root){
//             this.findPrime(root.left,result)
//             if(this.isPrime(root.value)){
//                 result.push(root.value)
//             }
//             this.findPrime(root.right,result)
//         }
//         return result
//     }

//     isBst(root,min=-Infinity,max=Infinity){
//         if(!root){
//             return true
//         }

//         if(root.value <= min || root.value >= max){
//             return false
//         }

//         return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max) 
//     }

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }

//         if(!tree1 || !tree2){
//             return false
//         }

//         return tree1.value == tree2.value && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
//     }

//     findKthSmallest(root,k){
//         if(!root){
//             return null
//         }
//         let count = 0
//         let smallest = null
//         function traverse(root){
//             if(root){
//                 traverse(root.left)
//                 count++
//                 if(count == k){
//                     smallest = root.value
//                     return
//                 }
//                 traverse(root.right)
//             }
//         }

//         traverse(root)
//         return smallest
//     }

//     findKthLargest(root,k){
//         if(!root){
//             return null
//         }

//         let count = 0
//         let largest = null
//         function traverse(node){
//             if(node){
//                 traverse(node.right)
//                 count++
//                 if(count == k){
//                     largest = node.value
//                     return
//                 }
//                 traverse(node.left)
//             }
//         }

//         traverse(root)
//         return largest
//     }

//     findSuccessor(root,target,successor = null){
//         if(target < root.value){
//             successor = root.value
//             return this.findSuccessor(root.left,target,successor)
//         }
//         else if(target > root.value){
//             return this.findSuccessor(root.right,target,successor)
//         }
//         else{
//             if(root.right){
//                 return this.min(root.right)
//             }
//         }

//         return successor
//     }

//     findPredecessor(root,target,predecessor =  null){
//         if(target > root.value){
//             predecessor = root.value
//             return this.findPredecessor(root.right,target,predecessor)
//         }
//         else if(target < root.value){
//             return this.findPredecessor(root.left,target,predecessor)
//         }
//         else{
//             if(root.left){
//                 return this.max(root.left)
//             }
//         }
//         return predecessor
//     }

//     findClosest(root,target,closest=null){
//         if(!root){
//             return closest
//         }

//         if(closest == null || Math.abs(root.value - target) < Math.abs(closest - target)){
//             closest = root.value
//         }

//         if(target < root.value){
//             return this.findClosest(root.left,target,closest)
//         }else{
//             return this.findClosest(root.right,target,closest)
//         }
//     }

//     removeDuplicates(){
//         let seen = new Set()

//         function traverse(root){
//             if(root){
//                 traverse(root.left)
//                 seen.add(root.value)
//                 traverse(root.right)
//             }
//         }

//         traverse(this.root)

//         this.root = null

//         seen.forEach((val)=>{
//             this.insert(val)
//         })
//     }

//     height(root){
//         if(!root){
//             return -1
//         }

//         let queue = []
//         queue.push(root)
//         let height = 0
//         while(queue.length){
//             let nodeCount = queue.length
//             height++
//             while(nodeCount){
//                 let cur = queue.shift()

//                 if(cur.left){
//                     queue.push(cur.left)
//                 }

//                 if(cur.right){
//                     queue.push(cur.right)
//                 }
//                 nodeCount--
//             }
//         }
//         return height
//     }

//     findParent(root,target,parent=null){
//         if(!root){
//             return null
//         }

//         if(root.left && root.left.value == target){
//             parent = root.value
//             return parent
//         }
        
//         if(root.right && root.right.value == target){
//             parent = root.value
//             return parent
//         }

//         if(target < root.value){
//             return this.findParent(root.left,target,parent)
//         }
//         else{
//             return this.findParent(root.right,target,parent)
//         }
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
//             const children = {
//                 leftChild:root.left ? root.left.value : null,
//                 rightChild : root.right ? root.right.value : null
//             }
//             return children
//         }
//         else if(target < root.value){
//             return this.findChildren(root.left,target)
//         }
//         else{
//             return this.findChildren(root.right,target)
//         }
//     }

//     findSibling(root,target,sibling=null){
//         if(!root){
//             return null
//         }

//         if(root.left && root.left.value == target){
//             sibling = root.right ? root.right.value : null
//             return sibling
//         }

//         if(root.right && root.right.value == target){
//             sibling = root.left ? root.left.value : null
//             return sibling
//         }

//         if(target < root.value){
//             return this.findSibling(root.left,target,sibling)
//         }
//         else{
//             return this.findSibling(root.right,target,sibling)
//         }
//     }

//     findLeafNode(root,result=[]){
//         if(root){
//             if(!root.left && !root.right){
//                 result.push(root.value)
//             }
//             this.findLeafNode(root.left,result)
//             this.findLeafNode(root.right,result)
//         }
//         return result
//     }

//     findAncestor(root,target,result=[]){
//         if(!root){
//             return null
//         }

//         result.push(root.value)

//         if(root.value == target){
//             result.pop()
//             return result
//         }
//         else if(target < root.value){
//             return this.findAncestor(root.left,target,result)
//         }
//         else{
//             return this.findAncestor(root.right,target,result)
//         }
//     }

//     findDescendant(root,target){
//         if(!root){
//             return null
//         }

//         if(root.value == target){
//             let result = []
//             this.collectDescendants(root.left,result)
//             this.collectDescendants(root.right,result)
//             return result
//         }
//         else if(target < root.value){
//             return this.findDescendant(root.left,target)
//         }
//         else{
//             return this.findDescendant(root.right,target)
//         }
//     }

//     collectDescendants(root,result = []){
//         if(root){
//             result.push(root.value)
//             this.collectDescendants(root.left,result)
//             this.collectDescendants(root.right,result)
//         }
//         return result
//     }


//     findDegree(root,target){
//         if(!root){
//             return -1
//         }

//         if(root.value == target){
//             let degree = 0
//             if(root.left){
//                 degree++
//             }

//             if(root.right){
//                 degree++
//             }
//             return degree
//         }
//         else if(target < root.value){
//             return this.findDegree(root.left,target)
//         }
//         else{
//             return this.findDegree(root.right,target)
//         }
//     }

//     findDistance(root,target){
//         if(!root){
//             return -1
//         }

//         let distance = 0
//         while(root){
//             if(target < root.value){
//                 distance++
//                 root = root.left
//             }
//             else if(target > root.value){
//                 distance++
//                 root = root.right
//             }
//             else{
//                 return distance
//             }
//         }
//     }

//     findDepth(root,target){
//         if(!root){
//             return -1
//         }
//         let depth = 0
//         while(root){
//             if(target < root.value){
//                 depth++
//                 root = root.left
//             }
//             else if(target > root.value){
//                 depth++
//                 root = root.right
//             }
//             else{
//                 return depth
//             }
//         }
//     }

//     findLCA(root,n1,n2){
//         if(!root){
//             return null
//         }

//         while(root){
//             if(n1 < root.value && n2 < root.value){
//                 root = root.left
//             }
//             else if(n1 > root.value && n2 > root.value){
//                 root = root.right
//             }
//             else{
//                 return root
//             }
//         }
//     }

//     findPath(root,target){
//         if(!root){
//             return []
//         }
//         let result = []
//         while(root){
//             result.push(root.value)
//             if(target < root.value){
//                 root = root.left
//             }
//             else if(target > root.value){
//                 root = root.right
//             }
//             else{
//                 return result
//             }
//         }
//     }

//     findPathBetWeenTwoNode(n1,n2){
//         let lca = this.findLCA(this.root,n1,n2)
//         if(!lca){
//             return []
//         }

//         let path1 = this.findPath(lca,n1)
//         let path2 = this.findPath(lca,n2)

//         path1.pop()
//         path2.reverse()

//         return [...path1,...path2]
//     }

//     findDistanceBetweenTwoNode(n1,n2){
//         let lca = this.findLCA(this.root,n1,n2)

//         if(!lca){
//             return -1
//         }

//         let distance1 = this.findDistance(lca,n1)
//         let distance2 = this.findDistance(lca,n2)
//         return distance1 + distance2
//     }

//     countNode(root){
//         if(!root){
//             return 0
//         }

//         return 1 + this.countNode(root.left) + this.countNode(root.right)
//     }

//     countLeftNode(root){
//         if(!root){
//             return 0
//         }

//         return this.countNode(root.left)
//     }

//     countRightNode(root){
//         if(!root){
//             return 0
//         }
//         return this.countNode(root.right)
//     }

//     countTwoChild(root){
//         let count = 0
        
//         function twoChildCount(node,result=[]){
//             if(node){
//                 if(node.left && node.right){
//                     count++
//                     result.push(node.value)
//                 }
//                 twoChildCount(node.left,result)
//                 twoChildCount(node.right,result)
//             }
//             return result
//         }

//        let result = twoChildCount(root)

//        return {count:count,TwoChildNode:result}
//     }

//     countOneChildNode(root){
//         let count = 0
//         function oneChildCount(node,result=[]){
//             if(node){
//                 if((!node.left && node.right) || (node.left && !node.right)){
//                     count++
//                     result.push(node.value)
//                 }
//                 oneChildCount(node.left,result)
//                 oneChildCount(node.right,result)
//             }
//             return result
//         }

//         let values = oneChildCount(root)

//         return {count:count,oneChildValues:values}
//     }

//     printLeftSubtree(root){
//         if(!root){
//             return null
//         }

//         function traverse(node,result=[]){
//             if(node){
//                 result.push(node.value)
//                 traverse(node.left,result)
//                 traverse(node.right,result)
//             }
//             return result
//         }

//         return traverse(root.left)
//     }

//     printRightSubtree(root){
//         if(!root){
//             return null
//         }

//         function traverse(node,result=[]){
//             if(node){
//                 result.push(node.value)
//                 traverse(node.left,result)
//                 traverse(node.right,result)
//             }
//             return result
//         }

//         return traverse(root.right)
//     }
// }

// const bst = new Bst()
// ;[50, 30, 70, 20, 40, 60, 80].forEach(v => bst.insert(v))

// console.log("Search 40:", bst.search(bst.root, 40))
// console.log("Min:", bst.min(bst.root))
// console.log("Max:", bst.max(bst.root))
// console.log("Is BST:", bst.isBst(bst.root))
// console.log("Primes:", bst.findPrime(bst.root))
// console.log("3rd Smallest:", bst.findKthSmallest(bst.root, 3))
// console.log("2nd Largest:", bst.findKthLargest(bst.root, 2))
// console.log("Successor of 60:", bst.findSuccessor(bst.root, 60))
// console.log("Predecessor of 60:", bst.findPredecessor(bst.root, 60))
// console.log("Closest to 65:", bst.findClosest(bst.root, 65))
// console.log("Height:", bst.height(bst.root))
// console.log("Path to 40:", bst.findPath(bst.root, 40))
// console.log("LCA(20,40):", bst.findLCA(bst.root, 20, 40).value)
// console.log("Distance 20 ↔ 80:", bst.findDistanceBetweenTwoNode(20, 80))
// console.log("Total Nodes:", bst.countNode(bst.root))
// console.log("Two Child Nodes:", bst.countTwoChild(bst.root))
// console.log("One Child Nodes:", bst.countOneChildNode(bst.root))


//minHeap

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length == 0
//     }

//     parentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     leftChildIndex(index){
//         return 2 * index + 1
//     }

//     rightChildIndex(index){
//         return 2 * index + 2
//     }

//     getParent(index){
//         return this.heap[this.parentIndex(index)]
//     }

//     getLeftChild(index){
//         return this.heap[this.leftChildIndex(index)]
//     }

//     getRightChild(index){
//         return this.heap[this.rightChildIndex(index)]
//     }

//     hasParent(index){
//         return this.parentIndex(index) >= 0
//     }

//     hasLeftChild(index){
//         return this.leftChildIndex(index) < this.heap.length
//     }

//     hasRightChild(index){
//         return this.rightChildIndex(index) < this.heap.length
//     }

//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.heap[0]
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1

//         while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
//             this.swap(index,this.parentIndex(index))
//             index = this.parentIndex(index)
//         }
//     }


//     remove(){
//         if(this.isEmpty()){
//             return null
//         }

//         if(this.heap.length == 1){
//             return this.heap.pop()
//         }

//         let val = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown()
//         return val
//     }

//     heapifyDown(){
//         let smallest
//         let index = 0
//         while(this.hasLeftChild(index)){
//             smallest = this.leftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
//                 smallest = this.rightChildIndex(index)
//             }

//             if(this.heap[index] <= this.heap[smallest]){
//                 break
//             }else{
//                 this.swap(index,smallest)
//             }

//             index = smallest
//         }
//     }

//     heapSort(arr){
//         let h = new MinHeap()
//         for(let val of arr){
//             h.add(val)
//         }

//         let sortedArr = []

//         while(h.heap.length){
//             sortedArr.push(h.remove())
//         }

//         return sortedArr
//     }

//     findLargest(arr,k){
//         let h = new MinHeap()

//         for(let val of arr){
//             h.add(val)
//             if(h.heap.length > k){
//                 h.remove()
//             }
//         }

//         return h.peek()
//     }
// }

// const heap = new MinHeap()

// console.log("Is Empty:", heap.isEmpty())

// heap.add(10)
// heap.add(5)
// heap.add(20)
// heap.add(2)
// heap.add(8)

// console.log("Heap Array:", heap.heap)
// console.log("Peek (Min):", heap.peek())

// console.log("Remove:", heap.remove())
// console.log("After Remove:", heap.heap)

// console.log("Remove:", heap.remove())
// console.log("After Remove:", heap.heap)

// console.log("Is Empty:", heap.isEmpty())

// // Heap Sort
// const arr = [12, 3, 17, 8, 34, 25, 1]
// console.log("Heap Sort:", heap.heapSort(arr))

// // Kth Largest
// console.log("1st Largest:", heap.findLargest(arr, 1))
// console.log("2nd Largest:", heap.findLargest(arr, 2))
// console.log("3rd Largest:", heap.findLargest(arr, 3))


//maxHeap

// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length == 0
//     }

//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeftChildIndex(index){
//         return 2 * index + 1
//     }

//     getRightChildIndex(index){
//         return 2 * index + 2
//     }

//     getParent(index){
//         return this.heap[this.getParentIndex(index)]
//     }

//     getLeftChild(index){
//         return this.heap[this.getLeftChildIndex(index)]
//     }
    
//     getRightChild(index){
//         return this.heap[this.getRightChildIndex(index)]
//     }

//     hasParent(index){
//         return this.getParentIndex(index) >= 0
//     }

//     hasLeftChild(index){
//         return this.getLeftChildIndex(index) < this.heap.length
//     }
//     hasRightChild(index){
//         return this.getRightChildIndex(index) < this.heap.length
//     }

//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
//     }

//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.heap[0]
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1
//         while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
//             this.swap(index,this.getParentIndex(index))
//             index = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return null
//         }

//         if(this.heap.length == 1){
//             return this.heap.pop()
//         }

//         let val = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown()
//         return val
//     }

//     heapifyDown(){
//         let index = 0
//         let largest 

//         while(this.hasLeftChild(index)){
//             largest = this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)){
//                 largest = this.getRightChildIndex(index)
//             }

//             if(this.heap[index] >= this.heap[largest]){
//                 break
//             }else{
//                 this.swap(index,largest)
//             }

//             index = largest
//         }
//     }

//     heapSort(arr){
//         let h = new MaxHeap()

//         for(let val of arr){
//             h.add(val)
//         }

//         let sortedArr = []

//         while(h.heap.length){
//             sortedArr.push(h.remove())
//         }
//         return sortedArr.reverse()
//     }

//     findSmallest(arr,k){
//         let m = new MaxHeap()

//         for(let val of arr){
//             m.add(val)
//             if(m.heap.length > k){
//                 m.remove()
//             }
//         }

//         return m.peek()
//     }
// }

// const heap = new MaxHeap()

// console.log("Is Empty:", heap.isEmpty())

// heap.add(10)
// heap.add(5)
// heap.add(20)
// heap.add(2)
// heap.add(8)

// console.log("Heap Array:", heap.heap)
// console.log("Peek (Max):", heap.peek())

// console.log("Remove:", heap.remove())
// console.log("After Remove:", heap.heap)

// console.log("Remove:", heap.remove())
// console.log("After Remove:", heap.heap)

// console.log("Is Empty:", heap.isEmpty())

// // Heap Sort
// const arr = [12, 3, 17, 8, 34, 25, 1]
// console.log("Heap Sort:", heap.heapSort(arr))

// // Kth Smallest
// console.log("1st Smallest:", heap.findSmallest(arr, 1))
// console.log("2nd Smallest:", heap.findSmallest(arr, 2))
// console.log("3rd Smallest:", heap.findSmallest(arr, 3))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }
//             node = node.children[char]
//         }
//         node.isEndOfWord = true
//     }

//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEndOfWord
//     }

//     startsWith(prefix){
//         let node = this.root

//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }

//         return true
//     }

//     autoComplete(prefix){
//         let node = this.root

//         for(let val of prefix){
//             if(!node.children[val]){
//                 return []
//             }
//             node = node.children[val]
//         }

//         return this.collectWord(node,prefix)
//     }

//     collectWord(root,word,result=[]){
//         if(root.isEndOfWord){
//             result.push(word)
//         }

//         for(let char in root.children){
//             this.collectWord(root.children[char],word+char,result)
//         }

//         return result
//     }

//     print(){
//         return this.collectWord(this.root,'')
//     }

//     delete(word){
//         let node = this.root
//         let path = []

//         for(let val of word){
//             if(!node.children[val]){
//                 return false
//             }
//             path.push([node,val])
//             node = node.children[val]
//         }

//         if(!node.isEndOfWord){
//             return false
//         }

//         node.isEndOfWord = false

//         for(let i=path.length-1;i>=0;i--){
//             let [parent,char] = path[i]
//             let child = parent.children[char]

//             if(Object.keys(child.children).length > 0 || child.isEndOfWord){
//                 break
//             }

//             delete parent.children[char]
//         }
//         return true
//     }
// }

// const trie = new Trie()

// trie.insert("app")
// trie.insert("apple")
// trie.insert("apply")
// trie.insert("bat")
// trie.insert("ball")

// console.log(trie.search("app"))        // true
// console.log(trie.search("apps"))       // false

// console.log(trie.startsWith("ap"))     // true
// console.log(trie.startsWith("ba"))     // true
// console.log(trie.startsWith("cat"))    // false

// console.log(trie.autoComplete("app"))  
// // ['app', 'apple', 'apply']

// console.log(trie.delete("app"))        // true
// console.log(trie.search("app"))        // false
// console.log(trie.search("apple"))      // true

// console.log(trie.autoComplete("app"))  
// // ['apple', 'apply']

// console.log(trie.delete("apps"))       // false

// console.log(trie.print())              
// // ['apple', 'apply', 'bat', 'ball']

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class SuffixTrie{
//     constructor(){
//         this.root = new Node()
//     }

//     buildSuffixTrie(word){
//         for(let i=0;i<word.length;i++){
//             this.insert(word.slice(i))
//         }
//     }

//     insert(word){
//         let node = this.root

//         for(let val of word){
//             if(!node.children[val]){
//                 node.children[val] = new Node()
//             }
//             node = node.children[val]
//         }

//         node.isEndOfWord = true
//     }

//     search(word){
//         let node = this.root
        
//         for(let val of word){
//             if(!node.children[val]){
//                 return false
//             }
//             node = node.children[val]
//         }

//         return true
//     }
// }

// const st = new SuffixTrie()

// // Build suffix trie
// st.buildSuffixTrie("banana")

// // Positive cases (substrings that exist)
// console.log(st.search("b"))      // true
// console.log(st.search("ban"))    // true
// console.log(st.search("ana"))    // true
// console.log(st.search("nana"))   // true
// console.log(st.search("a"))      // true

// // Negative cases (substrings that don't exist)
// console.log(st.search("apple"))  // false
// console.log(st.search("band"))   // false
// console.log(st.search("ananb"))  // false
// console.log(st.search("baa"))    // false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let node = this.root
//         for(let val of word){
//             if(!node.children[val]){
//                 node.children[val] = new Node()
//             }
//             node = node.children[val]
//         }
//         node.isEndOfWord = true
//     }

//     countWords(){
//         let queue = []
//         queue.push(this.root)
//         let count = 0

//         while(queue.length){
//             let cur = queue.shift()

//             if(cur.isEndOfWord){
//                 count++
//             }

//             for(let char in cur.children){
//                 queue.push(cur.children[char])
//             }
//         }
//         return count
//     }

//     longestPrefix(prefix){
//         let longestStr = ''

//         let node = this.root

//         for(let val of prefix){
//             if(!node.children[val]){
//                 break
//             }
//             longestStr += val
//             node = node.children[val]
//         }

//         return longestStr
//     }

//     countPrefixWord(prefix){
//         let node = this.root

//         for(let val of prefix){
//             if(!node.children[val]){
//                 return -1
//             }
//             node = node.children[val]
//         }

//         let queue = []
//         queue.push(node)

//         let count = 0

//         while(queue.length){
//             let cur = queue.shift()

//             if(cur.isEndOfWord){
//                 count++
//             }

//             for(let char in cur.children){
//                 queue.push(cur.children[char])
//             }
//         }

//         return count
//     }
// }

// const trie = new Trie()

// trie.insert("apple")
// trie.insert("app")
// trie.insert("apply")
// trie.insert("bat")
// trie.insert("ball")
// trie.insert("bats")

// // countWords
// console.log(trie.countWords())     
// // Expected: 6

// // longestPrefix
// console.log(trie.longestPrefix("application"))  
// // Expected: "appl"

// console.log(trie.longestPrefix("batman"))  
// // Expected: "bat"

// // countPrefixWord
// console.log(trie.countPrefixWord("app"))   
// // Expected: 3  (app, apple, apply)

// console.log(trie.countPrefixWord("bat"))   
// // Expected: 2  (bat, bats)

// console.log(trie.countPrefixWord("ball"))  
// // Expected: 1  (ball)

// console.log(trie.countPrefixWord("cat"))   
// // Expected: 0


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//graph

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdges(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }

//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             return `vertex1 is not exists`
//         }

//         if(!this.adjacencyList[vertex2]){
//             return `vertex2 is not exists`
//         }

//         return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             return `vertex1 is not exists`
//         }

//         if(!this.adjacencyList[vertex2]){
//             return `vertex2 is not exists`
//         }

        
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return 'vertex not exists'
//         }

//         for(let adjancyertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjancyertex)
//         }

//         delete this.adjacencyList[vertex]
//     }

//     print(){
//         for(let vertex in this.adjacencyList){
//             console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
//         }
//     }

//     bfs(start){
//         let queue = []
//         queue.push(start)

//         let visitedNode = new Set()
//         visitedNode.add(start)

//         while(queue.length){
//             let vertex = queue.shift()
//             console.log(vertex)

//             for(let neigbor of this.adjacencyList[vertex]){
//                 if(!visitedNode.has(neigbor)){
//                     visitedNode.add(neigbor)
//                     queue.push(neigbor)
//                 }
//             }
//         }
//     }

//     dfs(start,visitedNode=new Set()){
//         visitedNode.add(start)
//         console.log(start)

//         for(let neighbor of this.adjacencyList[start]){
//             if(!visitedNode.has(neighbor)){
//                 this.dfs(neighbor,visitedNode)
//             }
//         }
//     }

//     bfsCycleDetection(start){
//         let queue = []
//         queue.push({vertex:start,parent:null})

//         let visitedNode = new Set()
//         visitedNode.add(start)

//         while(queue.length){
//             let {vertex,parent} = queue.shift()

//             for(let neighbor of this.adjacencyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push({vertex:neighbor,parent:vertex})
//                 }
//                 else if(neighbor != parent){
//                     return true
//                 }
//             }
//         }

//         return false
//     }

//     dfsCycleDetection(start,visitedNode = new Set(),parent=null){
//         visitedNode.add(start)

//         for(let neighbor of this.adjacencyList[start]){
//             if(!visitedNode.has(neighbor)){
//                 if(this.dfsCycleDetection(neighbor,visitedNode,start)){
//                     return true
//                 }
//             }
//             else if(neighbor != parent){
//                 return true
//             }
//         }

//         return false
//     }
// }

// const g = new Graph()

// // Add edges (auto adds vertices)
// g.addEdges("A", "B")
// g.addEdges("A", "C")
// g.addEdges("B", "D")
// g.addEdges("C", "E")
// g.addEdges("D", "E") // creates a cycle

// console.log("Graph:")
// g.print()

// console.log("\nHas Edge A-B:", g.hasEdge("A", "B")) // true
// console.log("Has Edge A-D:", g.hasEdge("A", "D")) // false

// console.log("\nBFS from A:")
// g.bfs("A")
// // Expected: A B C D E (order may vary slightly)

// console.log("\nDFS from A:")
// g.dfs("A")
// // Expected: A B D E C (or valid DFS order)

// console.log("\nCycle Detection (BFS):")
// console.log(g.bfsCycleDetection("A")) // true

// console.log("\nCycle Detection (DFS):")
// console.log(g.dfsCycleDetection("A")) // true

// console.log("\nRemoving edge D-E")
// g.removeEdge("D", "E")

// console.log("Cycle after removing edge:")
// console.log(g.bfsCycleDetection("A")) // false

// console.log("\nRemoving vertex C")
// g.removeVertex("C")

// console.log("Graph after removing C:")
// g.print()
