// class Node{
//     constructor(val){
//         this.value = val
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
//         }
//         else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right = node
//             }
//             else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(value == root.value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }
//         else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     levelOrder(root){
//         if(!root){
//             return null
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

//     min(root){
//         if(!root){
//             return null
//         }

//         while(root.left){
//             root = root.left
//         }

//         return root.value
//     }

//     max(root){
//         if(!root){
//             return null
//         }

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

//     findPrimes(root,result=[]){
//         if(root){
//             this.findPrimes(root.left,result)
//             if(this.isPrime(root.value)){
//                 result.push(root.value)
//             }
//             this.findPrimes(root.right,result)
//         }
//         return result
//     }

//     isBst(root,min=-Infinity,max=Infinity){
//         if(!root){
//             return true
//         }

//         if(root.value < min || root.value > max){
//             return false
//         }

//         return this.isBst(root.left,min,root.value-1) && this.isBst(root.right,root.value,max)
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

//     findKthSmallest(root,target){
//         if(!root){
//             return null
//         }

//         let result = null
//         let k = 0
//         function inOrder(root,target){
//             if(root){
//                 inOrder(root.left,target)
//                 k++
//                 if(k == target){
//                     result = root.value
//                     return
//                 }
//                 inOrder(root.right,target)
//             }
//         }

//         inOrder(root,target)
//         return result
//     }

//     findKthLargest(root,target){
//         if(!root){
//             return null
//         }

//         let result = null
//         let k = 0 

//         function reverseOrder(root,target){
//             if(root){
//                 reverseOrder(root.right,target)
//                 k++
//                 if(k == target){
//                     result = root.value
//                     return
//                 }
//                 reverseOrder(root.left,target)
//             }
//         }
//         reverseOrder(root,target)
//         return result
//     }

//     findClosest(root,target,closest = null){
//         if(!root){
//             return closest
//         }

//         if(closest == null || Math.abs(root.value - target) < Math.abs(closest-target)){
//             closest  = root.value
//         }

//         if(target < root.value){
//             return this.findClosest(root.left,target,closest)
//         }
//         else{
//             return this.findClosest(root.right,target,closest)
//         }
//     }

//     findSuccessor(root,target,successor=null){
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
    
//     findPredecessor(root,target,predecessor=null){
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

//     removeDuplicates(root){
//         if(!root){
//             return null
//         }

//         function inOrder(root,visitedNode = new Set()){
//             if(root){
//                 inOrder(root.left,visitedNode)
//                 visitedNode.add(root.value)
//                 inOrder(root.right,visitedNode)
//             }
//             return visitedNode
//         }

//         let result = [...inOrder(root)]
        
//         this.root = null

//         for(let val of result){
//             this.insert(val)
//         }
//     }

//     findHeight(root){
//         if(!root){
//             return null
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

//         if(root.value == target){
//             return parent
//         }

//         if(target < root.value){
//             return this.findParent(root.left,target,root.value)

//         }
//         else{
//             return this.findParent(root.right,target,root.value)
//         }
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
//             const children = {
//                 leftChild : root.left ? root.left.value : null,
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

//     findSiblings(root,target,sibling = null){
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
//             return this.findSiblings(root.left,target,sibling)
//         }
//         else{
//             return this.findSiblings(root.right,target,sibling)
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

//     findAncestor(root,target,ancestor = []){
//         if(!root){
//             return null
//         }

//         if(root.value == target){
//             return ancestor
//         }

//         ancestor.push(root.value)
        
//         if(target < root.value){
//             return this.findAncestor(root.left,target,ancestor)
//         }
//         else{
//             return this.findAncestor(root.right,target,ancestor)
//         }
//     }

//     findDescendants(root,target,descendants=[]){
//         if(!root){
//             return []
//         }

//         if(root.value == target){
//             this.collectDescendants(root.left,descendants)
//             this.collectDescendants(root.right,descendants)
//             return descendants
//         }
//         else if(target < root.value){
//             return this.findDescendants(root.left,target,descendants)
//         }
//         else{
//             return this.findDescendants(root.right,target,descendants)
//         }
//     }

//     collectDescendants(root,result=[]){
//         if(root){
//             result.push(root.value)
//             this.collectDescendants(root.left,result)
//             this.collectDescendants(root.right,result)
//         }
//         return result
//     }

//     findDegree(root,target){
//         if(!root){
//             return null
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

//     findDepth(root,target){
//         if(!root){
//             return null
//         }

//         let depth = 0

//         while(root){
//             if(target < root.value){
//                 root = root.left
//                 depth++
//             }
//             else if(target > root.value){
//                 root = root.right
//                 depth++
//             }
//             else{
//                 break
//             }
//         }

//         return depth
//     }

//     findDistance(root,target){
//         if(!root){
//             return null
//         }

//         let distance = 0

//         while(root){
//             if(target < root.value){
//                 root = root.left
//                 distance++
//             }
//             else if(target > root.value){
//                 root = root.right
//                 distance++
//             }
//             else{
//                 break
//             }
//         }
//         return distance
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
//                 break
//             }
//         }
//         return result
//     }

//     findDistanceBetweenTwoNodes(n1,n2){
//         let lca = this.findLCA(this.root,n1,n2)

//         if(!lca){
//             return 0
//         }

//         let distance1 = this.findDistance(lca,n1)
//         let distance2 = this.findDistance(lca,n2)

//         return distance1 + distance2
//     }

//     findPathBetweenTwoNodes(n1,n2){
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

//     countNode(root){
//         if(!root){
//             return 0
//         }

//         return 1+this.countNode(root.left)+this.countNode(root.right)
//     }

//     countLeftsubtreeNode(root){
//         if(!root){
//             return 0
//         }
//         return this.countNode(root.left)
//     }

//     countRightsubtreeNode(root){
//         if(!root){
//             return 0
//         }
//         return this.countNode(root.right)
//     }

//     countTwoChildNode(root){
//         if(!root){
//             return 0
//         }

//         let count = 0

//         function preOrder(root){
//             if(root){
//                 if(root.left && root.right){
//                     count++
//                 }
//                 preOrder(root.left)
//                 preOrder(root.right)
//             }
//         }

//         preOrder(root)

//         return count
//     }

//     countOneChildNode(root){
//         if(!root){
//             return 0
//         }

//         let count = 0 
        
//         function preOrder(root){
//             if(root){
//                 if((!root.left && root.right) || (root.left && !root.right)){
//                     count++
//                 }
//                 preOrder(root.left)
//                 preOrder(root.right)
//             }
//         }

//         preOrder(root)
//         return count
//     }

//     printLeftSubtree(root){
//         if(!root){
//             return []
//         }

//         function leftSubtree(root,result=[]){
//             if(root){
//                 leftSubtree(root.left,result)
//                 result.push(root.value)
//                 leftSubtree(root.right,result)
//             }
//             return result
//         }

//         let result = leftSubtree(root.left)
//         return result
//     }

//     printRightSubtree(root){
//         if(!root){
//             return []
//         }

//         function rightSubtree(root,result=[]){
//             if(root){
//                 rightSubtree(root.left,result)
//                 result.push(root.value)
//                 rightSubtree(root.right,result)
//             }
//             return result
//         }

//         let final = rightSubtree(root.right)
//         return final
//     }
// }

// // ====================== TEST CASES ======================

// const bst = new Bst()

// // Insert nodes
// ;[50, 30, 70, 20, 40, 60, 80, 30].forEach(v => bst.insert(v))

// console.log("Is Empty:", bst.isEmpty()) // false

// // Search
// console.log("Search 40:", bst.search(bst.root, 40)) // true
// console.log("Search 100:", bst.search(bst.root, 100)) // false

// // Traversals
// console.log("InOrder:")
// bst.inOrder(bst.root) // 20 30 30 40 50 60 70 80

// console.log("PreOrder:")
// bst.preOrder(bst.root)

// console.log("PostOrder:")
// bst.postOrder(bst.root)

// console.log("LevelOrder:")
// bst.levelOrder(bst.root)

// // Min / Max
// console.log("Min:", bst.min(bst.root)) // 20
// console.log("Max:", bst.max(bst.root)) // 80

// // Delete
// bst.delete(20)
// console.log("After deleting 20:")
// bst.inOrder(bst.root)

// // Prime nodes
// console.log("Prime Nodes:", bst.findPrimes(bst.root)) // [29-like primes]

// // BST validation
// console.log("Is BST:", bst.isBst(bst.root)) // true

// // Kth smallest / largest
// console.log("3rd Smallest:", bst.findKthSmallest(bst.root, 3))
// console.log("2nd Largest:", bst.findKthLargest(bst.root, 2))

// // Closest
// console.log("Closest to 65:", bst.findClosest(bst.root, 65)) // 60 or 70

// // Successor / Predecessor
// console.log("Successor of 40:", bst.findSuccessor(bst.root, 40))
// console.log("Predecessor of 40:", bst.findPredecessor(bst.root, 40))

// // Remove duplicates
// bst.removeDuplicates(bst.root)
// console.log("After removing duplicates:")
// bst.inOrder(bst.root)

// // Height
// console.log("Height:", bst.findHeight(bst.root))

// // Parent
// console.log("Parent of 60:", bst.findParent(bst.root, 60))

// // Children
// console.log("Children of 70:", bst.findChildren(bst.root, 70))

// // Sibling
// console.log("Sibling of 60:", bst.findSiblings(bst.root, 60))

// // Leaf nodes
// console.log("Leaf Nodes:", bst.findLeafNode(bst.root))

// // Ancestors
// console.log("Ancestors of 80:", bst.findAncestor(bst.root, 80))

// // Descendants
// console.log("Descendants of 30:", bst.findDescendants(bst.root, 30))

// // Degree
// console.log("Degree of 50:", bst.findDegree(bst.root, 50))

// // Depth & Distance
// console.log("Depth of 80:", bst.findDepth(bst.root, 80))
// console.log("Distance to 80:", bst.findDistance(bst.root, 80))

// // LCA
// console.log("LCA of 40 & 60:", bst.findLCA(bst.root, 40, 60).value)

// // Distance between nodes
// console.log(
//   "Distance between 40 & 80:",
//   bst.findDistanceBetweenTwoNodes(40, 80)
// )

// // Path between nodes
// console.log(
//   "Path between 40 & 80:",
//   bst.findPathBetweenTwoNodes(40, 80)
// )

// // Counts
// console.log("Total Nodes:", bst.countNode(bst.root))
// console.log("Left Subtree Count:", bst.countLeftsubtreeNode(bst.root))
// console.log("Right Subtree Count:", bst.countRightsubtreeNode(bst.root))
// console.log("Two Child Nodes:", bst.countTwoChildNode(bst.root))
// console.log("One Child Nodes:", bst.countOneChildNode(bst.root))

// // Subtrees
// console.log("Left Subtree:", bst.printLeftSubtree(bst.root))
// console.log("Right Subtree:", bst.printRightSubtree(bst.root))

// // ====================== END ======================


//heap


// class Minheap{
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

//     swap(item1,item2){
//         [this.heap[item1],this.heap[item2]] = [this.heap[item2],this.heap[item1]]
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
//             this.swap(index,this.getParentIndex(index))
//             index = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return 
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

//         while(this.hasLeftChild(index)){
//             let smaller = this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
//                 smaller = this.getRightChildIndex(index)
//             }

//             if(this.heap[index] <= this.heap[smaller]){
//                 break
//             }else{
//                 this.swap(index,smaller)
//             }

//             index = smaller
//         }
//     }

//     heapSort(arr){
//         let h = new Minheap()
        
//         for(let val of arr){
//             h.add(val)
//         }

//         let sortedArr = []
        
//         while(h.heap.length){
//             sortedArr.push(h.remove())
//         }

//         return sortedArr
//     }

//     findKthLargest(arr,k){
//         let h = new Minheap()
//         for(let val of arr){
//             h.add(val)
//             if(h.heap.length > k){
//                 h.remove()
//             }
//         }

//         return h.peek()
//     }
// }

// const h = new Minheap()

// console.log(h.isEmpty())        // true

// h.add(10)
// h.add(5)
// h.add(20)
// h.add(3)

// console.log(h.heap)             // [3,5,20,10] (heap order, not sorted)
// console.log(h.peek())           // 3

// console.log(h.remove())         // 3
// console.log(h.peek())           // 5
// console.log(h.heap)             // valid min-heap

// const h2 = new Minheap()
// ;[8, 4, 7, 1, 9, 2].forEach(v => h2.add(v))

// while (!h2.isEmpty()) {
//     console.log(h2.remove())
// }


// const h3 = new Minheap()
// h3.add(42)

// console.log(h3.peek())    // 42
// console.log(h3.remove())  // 42
// console.log(h3.remove())  // undefined


// const h4 = new Minheap()
// console.log(h4.peek())    // null
// console.log(h4.remove())  // undefined


// const h5 = new Minheap()

// const arr = [5, 1, 9, 3, 7, 2]
// const sorted = h5.heapSort(arr)

// console.log(sorted)


// const h6 = new Minheap()
// const nums = [3, 2, 1, 5, 6, 4]

// console.log(h6.findKthLargest(nums, 1)) // 6
// console.log(h6.findKthLargest(nums, 2)) // 5
// console.log(h6.findKthLargest(nums, 3)) // 4
// console.log(h6.findKthLargest(nums, 4)) // 3


// const h7 = new Minheap()
// ;[5, 3, 3, 2, 2, 1].forEach(v => h7.add(v))

// while (!h7.isEmpty()) {
//     console.log(h7.remove())
// }

// const h8 = new Minheap()

// for (let i = 100; i >= 1; i--) {
//     h8.add(i)
// }

// console.log(h8.peek()) // 1

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

//     swap(item1,item2){
//         [this.heap[item1],this.heap[item2]] = [this.heap[item2],this.heap[item1]]
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

//         while(this.hasLeftChild(index)){
//             let largest = this.getLeftChildIndex(index)

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
//         let m = new MaxHeap()

//         for(let val of arr){
//             m.add(val)
//         }

//         let sortedArr = []

//         while(m.heap.length){
//             sortedArr.push(m.remove())
//         }

//         return sortedArr.reverse()
//     }

//     findKthSmallest(arr,k){
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

// // ===== MAX HEAP TEST CASES =====

// const heap = new MaxHeap()

// console.log("---- BASIC OPERATIONS ----")
// heap.add(10)
// heap.add(4)
// heap.add(15)
// heap.add(20)
// heap.add(0)

// console.log("Heap array:", heap.heap)   // valid max-heap
// console.log("Peek (max):", heap.peek()) // 20

// console.log("Remove:", heap.remove())   // 20
// console.log("After remove:", heap.heap)
// console.log("Peek:", heap.peek())       // 15

// console.log("\n---- REMOVE ALL (ORDER CHECK) ----")
// const heap2 = new MaxHeap()
// ;[8, 3, 10, 1, 6, 14, 4].forEach(v => heap2.add(v))

// while (!heap2.isEmpty()) {
//     console.log(heap2.remove())
// }
// // Expected: 14, 10, 8, 6, 4, 3, 1

// console.log("\n---- EDGE CASES ----")
// const heap3 = new MaxHeap()
// console.log(heap3.remove()) // null
// console.log(heap3.peek())   // null

// heap3.add(99)
// console.log(heap3.peek())   // 99
// console.log(heap3.remove()) // 99
// console.log(heap3.remove()) // null

// console.log("\n---- HEAP SORT ----")
// const heap4 = new MaxHeap()
// const arr = [5, 1, 9, 3, 7, 2]

// console.log("Original:", arr)
// console.log("Sorted:", heap4.heapSort(arr))
// // Expected: [1, 2, 3, 5, 7, 9]

// console.log("\n---- Kth SMALLEST ----")
// const heap5 = new MaxHeap()
// const nums = [7, 10, 4, 3, 20, 15]

// console.log("1st smallest:", heap5.findKthSmallest(nums, 1)) // 3
// console.log("2nd smallest:", heap5.findKthSmallest(nums, 2)) // 4
// console.log("3rd smallest:", heap5.findKthSmallest(nums, 3)) // 7
// console.log("4th smallest:", heap5.findKthSmallest(nums, 4)) // 10

// console.log("\n---- DUPLICATES ----")
// const heap6 = new MaxHeap()
// ;[5, 3, 5, 2, 2, 1].forEach(v => heap6.add(v))

// while (!heap6.isEmpty()) {
//     console.log(heap6.remove())
// }
// // Expected: 5, 5, 3, 2, 2, 1

// console.log("\n---- STRESS TEST ----")
// const heap7 = new MaxHeap()
// for (let i = 1; i <= 50; i++) {
//     heap7.add(i)
// }
// console.log("Max should be 50:", heap7.peek())


//trie

// class Node{
//     constructor(){
//         this.children ={}
//         this.isEndOfWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let node = this.root
//         for(let ch of word){
//             if(!node.children[ch]){
//                 node.children[ch] = new Node()
//             }
//             node = node.children[ch]
//         }
//         node.isEndOfWord = true
//     }

//     search(word){
//         let node = this.root
//         for(let ch of word){
//             if(!node.children[ch]){
//                 return false
//             }
//             node = node.children[ch]
//         }
//         return node.isEndOfWord
//     }

//     prefixStart(prefix){
//         let node = this.root
//         for(let ch of prefix){
//             if(!node.children[ch]){
//                 return false
//             }
//             node = node.children[ch]
//         }
//         return true
//     }

//     autoComplete(prefix){
//         let node = this.root

//         for(let ch of prefix){
//             if(!node.children[ch]){
//                 return []
//             }

//             node = node.children[ch]
//         }

//         return this.collectWord(node,prefix)
//     }

//     collectWord(root,word,result=[]){
//         if(root.isEndOfWord){
//             result.push(word)
//         }

//         for(let ch in root.children){
//             this.collectWord(root.children[ch],word+ch,result)
//         }

//         return result
//     }

//     print(){
//         return this.collectWord(this.root,'')
//     }

//     delete(word){
//         let node = this.root
//         let path = []

//         for(let ch of word){
//             if(!node.children[ch]){
//                 return false
//             }
//             path.push([node,ch])
//             node = node.children[ch]
//         }

//         if(!node.isEndOfWord){
//             return false
//         }

//         node.isEndOfWord = false

//         for(let i= path.length-1;i>=0;i--){
//             let [parentNode,char] = path[i]
//             let childNode = parentNode.children[char]

//             if(Object.keys(childNode.children).length >0 || childNode.isEndOfWord){
//                 break
//             }

//             delete parentNode.children[char]
//         }
//         return true
//     }
// }

// // ===== TRIE TEST CASES =====

// const trie = new Trie()

// console.log("---- INSERT ----")
// trie.insert("apple")
// trie.insert("app")
// trie.insert("apex")
// trie.insert("bat")
// trie.insert("ball")
// trie.insert("banner")

// console.log("\n---- SEARCH ----")
// console.log(trie.search("apple"))   // true
// console.log(trie.search("app"))     // true
// console.log(trie.search("apex"))    // true
// console.log(trie.search("ap"))      // false
// console.log(trie.search("bat"))     // true
// console.log(trie.search("bad"))     // false

// console.log("\n---- PREFIX CHECK ----")
// console.log(trie.prefixStart("ap"))   // true
// console.log(trie.prefixStart("ban"))  // true
// console.log(trie.prefixStart("ba"))   // true
// console.log(trie.prefixStart("cat"))  // false

// console.log("\n---- AUTOCOMPLETE ----")
// console.log(trie.autoComplete("ap"))  
// // Expected: [ 'app', 'apple', 'apex' ]

// console.log(trie.autoComplete("ba"))  
// // Expected: [ 'bat', 'ball', 'banner' ]

// console.log(trie.autoComplete("x"))   
// // Expected: []

// console.log("\n---- PRINT ALL WORDS ----")
// console.log(trie.print())
// // Expected: all inserted words

// console.log("\n---- DELETE ----")
// console.log(trie.delete("apple"))   // true
// console.log(trie.search("apple"))   // false
// console.log(trie.search("app"))     // true (should remain)

// console.log(trie.delete("app"))     // true
// console.log(trie.search("app"))     // false
// console.log(trie.search("apex"))    // true

// console.log("\n---- DELETE NON-EXISTING ----")
// console.log(trie.delete("unknown")) // false

// console.log("\n---- FINAL WORDS ----")
// console.log(trie.print())
// // Expected: words except 'apple' and 'app'


// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWords = false
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

//         for(let ch of word){
//             if(!node.children[ch]){
//                 node.children[ch] = new Node()
//             }
//             node = node.children[ch]
//         }
//         node.isEndOfWords = true
//     }

//     search(word){
//         let node = this.root

//         for(let ch of word){
//             if(!node.children[ch]){
//                 return false
//             }
//             node = node.children[ch]
//         }

//         return true
//     }
// }


// // ===== SUFFIX TRIE TEST CASES =====

// const st = new SuffixTrie()

// console.log("---- BUILD SUFFIX TRIE ----")
// st.buildSuffixTrie("banana")

// console.log("\n---- VALID SUBSTRINGS ----")
// console.log(st.search("banana")) // true
// console.log(st.search("anana"))  // true
// console.log(st.search("nana"))   // true
// console.log(st.search("ana"))    // true
// console.log(st.search("na"))     // true
// console.log(st.search("a"))      // true

// console.log("\n---- INVALID SUBSTRINGS ----")
// console.log(st.search("bananas")) // false
// console.log(st.search("nab"))     // false
// console.log(st.search("baa"))     // false
// console.log(st.search("abc"))     // false

// console.log("\n---- EDGE CASES ----")
// console.log(st.search(""))        // true (empty string is substring)
// console.log(st.search("b"))       // true
// console.log(st.search("x"))       // false


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

//     countWords(){
//         let queue = []
//         queue.push(this.root)

//         let count = 0
//         while(queue.length){
//             let root = queue.shift()

//             if(root.isEndOfWord){
//                 count++
//             }

//             for(let ch in root.children){
//                 queue.push(root.children[ch])
//             }
//         }
//         return count
//     }

//     countPrefixWords(prefix){
//         let node = this.root

//         for(let ch of prefix){
//             if(!node.children[ch]){
//                 return 0
//             }
//             node = node.children[ch]
//         }

//         let prefixCount = 0

//         let queue = []
//         queue.push(node)

//         while(queue.length){
//             let root = queue.shift()

//             if(root.isEndOfWord){
//                 prefixCount++
//             }

//             for(let char in root.children){
//                 queue.push(root.children[char])
//             }
//         }

//         return prefixCount
//     }

//     longestPrefix(prefix){
//         let node = this.root
//         let longestPrefix = ''
//         for(let ch of prefix){
//             if(!node.children[ch]){
//                 break
//             }
//             longestPrefix += ch
//             node = node.children[ch]
//         }
//         return longestPrefix
//     }
// }

// // ===== TRIE TEST CASES =====

// const trie = new Trie()

// console.log("---- INSERT WORDS ----")
// trie.insert("apple")
// trie.insert("app")
// trie.insert("apex")
// trie.insert("bat")
// trie.insert("ball")
// trie.insert("banner")

// console.log("\n---- COUNT ALL WORDS ----")
// console.log(trie.countWords()) 
// // Expected: 6

// console.log("\n---- COUNT PREFIX WORDS ----")
// console.log(trie.countPrefixWords("ap"))  
// // Expected: 3  -> apple, app, apex

// console.log(trie.countPrefixWords("ba"))  
// // Expected: 3  -> bat, ball, banner

// console.log(trie.countPrefixWords("ban")) 
// // Expected: 1  -> banner

// console.log(trie.countPrefixWords("cat")) 
// // Expected: 0

// console.log("\n---- LONGEST MATCHING PREFIX ----")
// console.log(trie.longestPrefix("application")) 
// // Expected: "appl"

// console.log(trie.longestPrefix("batman"))       
// // Expected: "bat"

// console.log(trie.longestPrefix("cat"))           
// // Expected: ""

// console.log("\n---- EDGE CASES ----")
// console.log(trie.countWords())        // still 6
// console.log(trie.countPrefixWords("")) 
// // Expected: 6 (empty prefix matches all words)

// console.log(trie.longestPrefix(""))   
// // Expected: ""

// console.log("\n---- STRUCTURE CHECK (OPTIONAL) ----")
// console.log(JSON.stringify(trie.root, null, 2))


//graph

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            return 'vertex is not exist'
        }

        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    print(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
        }
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            return 'vertex is not exist'
        }

        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 'vertex not exist'
        }

        for(let adjancyVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjancyVertex)
        }

        delete this.adjacencyList[vertex]
    }

    bfs(start){
        let visitedNode = new Set()
        visitedNode.add(start)

        let queue = []
        queue.push(start)

        while(queue.length){
            let cur = queue.shift()
            console.log(cur)
            for(let neigbor of this.adjacencyList[cur]){
                if(!visitedNode.has(neigbor)){
                    visitedNode.add(neigbor)
                    queue.push(neigbor)
                }
            }
        }
    }

    dfs(start,visitedNode = new Set()){
        visitedNode.add(start)
        console.log(start)

        for(let neighbor of this.adjacencyList[start]){
            if(!visitedNode.has(neighbor)){
                this.dfs(neighbor,visitedNode)
            }
        }
    }

    bfsCycleDetection(start){
        let queue = []
        queue.push({vertex:start,parent:null})
        let visitedNode = new Set()
        visitedNode.add(start)

        while(queue.length){
            let {vertex,parent} = queue.shift()

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push({vertex:neighbor,parent:vertex})
                }
                else if(neighbor != parent){
                    return 'cycle detected'
                }
            }
        }

        return 'cycle not detected'
    }

    dfsCycleDetection(start,visitedNode=new Set(),parent = null){
        visitedNode.add(start)

        for(let neigbor of this.adjacencyList[start]){
            if(!visitedNode.has(neigbor)){
                if(this.dfsCycleDetection(neigbor,visitedNode,start)){
                    return true
                }
            }
            else if(neigbor != parent){
                return true
            }
        }

        return false
    }
}


// ===== GRAPH TEST CASES =====

const graph = new Graph()

console.log("---- ADD VERTICES & EDGES ----")
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "D")
graph.addEdge("D", "E")

graph.print()
// Expected:
// A -> B,C
// B -> A,D
// C -> A,D
// D -> B,C,E
// E -> D

console.log("\n---- HAS EDGE ----")
console.log(graph.hasEdge("A", "B")) // true
console.log(graph.hasEdge("A", "E")) // false

console.log("\n---- BFS TRAVERSAL ----")
graph.bfs("A")
// Expected order (one possible):
// A B C D E

console.log("\n---- DFS TRAVERSAL ----")
graph.dfs("A")
// Expected order (one possible):
// A B D C E

console.log("\n---- BFS CYCLE DETECTION ----")
console.log(graph.bfsCycleDetection("A"))
// Expected: 'cycle detected'

console.log("\n---- DFS CYCLE DETECTION ----")
console.log(graph.dfsCycleDetection("A"))
// Expected: true

console.log("\n---- REMOVE EDGE ----")
graph.removeEdge("C", "D")
graph.print()

console.log("\n---- REMOVE VERTEX ----")
graph.removeVertex("E")
graph.print()

console.log("\n---- CYCLE AFTER REMOVAL ----")
console.log(graph.bfsCycleDetection("A"))
console.log(graph.dfsCycleDetection("A"))
