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
//         else if(root.value == value){
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

//         let result = null
//         let count = 0
//         function traverse(root){
//             if(root){
//                 traverse(root.left)
//                 count++
//                 if(count == k){
//                     result = root.value
//                     return
//                 }
//                 traverse(root.right)
//             }
//         }
//         traverse(root)
//         return result
//     }

//     findKthLargest(root,k){
//         if(!root){
//             return null
//         }

//         let result = null
//         let count = 0

//         function reverseTraverse(node){
//             if(node){
//                 reverseTraverse(node.right)
//                 count++
//                 if(count == k){
//                     result = node.value
//                     return
//                 }
//                 reverseTraverse(node.left)
//             }
//         }

//         reverseTraverse(root)
//         return result
//     }

//     findSuccessor(root,value,successor= null){
//         if(value < root.value){
//             successor = root.value
//             return this.findSuccessor(root.left,value,successor)
//         }
//         else if(value > root.value){
//             return this.findSuccessor(root.right,value,successor)
//         }
//         else{
//             if(root.right){
//                 return this.min(root.right)
//             }
//         }

//         return successor
//     }

//     findPredecessor(root,value,predecessor = null){
//         if(value > root.value){
//             predecessor = root.value
//             return this.findPredecessor(root.right,value,predecessor)
//         }
//         else if(value < root.value){
//             return this.findPredecessor(root.left,value,predecessor)
//         }
//         else{
//             if(root.left){
//                 return this.max(root.left)
//             }
//         }
//         return predecessor
//     }

//     findClosest(root,value,closest = null){
//         if(!root){
//             return closest
//         }

//         if(closest == null || Math.abs(root.value - value) < Math.abs(closest-value)){
//             closest = root.value
//         }

//         if(value < root.value){
//             return this.findClosest(root.left,value,closest)
//         }
//         else{
//             return this.findClosest(root.right,value,closest)
//         }
//     }

//     removeDuplicates(){

//         let set = new Set()

//         function traverse(node){
//             if(node){
//                 traverse(node.left)
//                 set.add(node.value)
//                 traverse(node.right)
//             }
//         }

//         traverse(this.root)

//         this.root = null

//         set.forEach((val)=>{
//             this.insert(val)
//         })
//     }

//     heightOfATree(root){
//         if(!root){
//             return 0
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

//     findParent(root,value,parent=null){
//         if(!root){
//             return null
//         }
        
//         if(root.left && root.left.value ==value){
//             parent = root.value
//             return parent
//         }
//         else if(root.right && root.right.value == value){
//             parent = root.value
//             return parent
//         }
        
//         if(value < root.value){
//             return this.findParent(root.left,value,parent)
//         }
//         else{
//             return this.findParent(root.right,value,parent)
//         }
//     }

//     findChildren(root,value){
//         if(!root){
//             return {}
//         }
//         else if(root.value == value){
//             const children = {
//                 leftChildren : root.left ? root.left.value : null,
//                 rightChildren : root.right ? root.right.value : null
//             }
//             return children
//         }
//         else if(value < root.value){
//             return this.findChildren(root.left,value)
//         }
//         else{
//             return this.findChildren(root.right,value)
//         }
//     }

//     findSiblings(root,value,siblings=null){
//         if(!root){
//             return null
//         }
//         else if(root.left && root.left.value == value){
//             siblings = root.right ? root.right.value : null
//             return siblings
//         }
//         else if(root.right && root.right.value == value){
//             siblings = root.left ? root.left.value : null
//             return siblings
//         }
//         else if(value < root.value){
//             return this.findSiblings(root.left,value,siblings)
//         }
//         else{
//             return this.findSiblings(root.right,value,siblings)
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

//     findAncestor(root,value,result=[]){
//         if(!root){
//             return null
//         }
//         result.push(root.value)
//         if(root.value == value){
//             result.pop()
//             return result
//         }
//         let found
//         if(value < root.value){
//             found = this.findAncestor(root.left,value,result)
//         }
//         else{
//             found = this.findAncestor(root.right,value,result)
//         }

//         if(found == null){
//             result.pop()
//         }

//         return found
//     }

//     findDescendants(root,value,result=[]){
//         if(!root){
//             return null
//         }
//         else if(root.value == value){
//             this.collectDescendants(root.left,result)
//             this.collectDescendants(root.right,result)
//             return result
//         }
//         else if(value < root.value){
//             return this.findDescendants(root.left,value,result)
//         }
//         else{
//             return this.findDescendants(root.right,value,result)
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

//     findDepth(root,value){
//         if(!root){
//             return -1
//         }

//         let depth = 0

//         while(root){
//             if(value < root.value){
//                 root = root.left
//                 depth++
//             }
//             else if(value > root.value){
//                 root = root.right
//                 depth++
//             }
//             else{
//                 return depth
//             }
//         }

//         return -1
//     }

//     findDegree(root,value){
//         if(!root){
//             return -1
//         }

//         if(root.value == value){
//             let degree = 0

//             if(root.left){
//                 degree++
//             }

//             if(root.right){
//                 degree++
//             }

//             return degree
//         }
//         else if(value < root.value){
//             return this.findDegree(root.left,value)
//         }
//         else{
//             return this.findDegree(root.right,value)
//         }
//     }

//     findDistance(root,value){
//         if(!root){
//             return -1
//         }
//         let distance = 0
//         while(root){
//             if(value < root.value){
//                 root = root.left
//                 distance++
//             }
//             else if(value > root.value){
//                 root = root.right
//                 distance++
//             }
//             else{
//                 return distance
//             }
//         }
//         return -1
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

//     path(root,value){
//         if(!root){
//             return []
//         }

//         let pathNodes = []

//         while(root){
//             pathNodes.push(root.value)
//             if(value < root.value){
//                 root = root.left
//             }
//             else if(value > root.value){
//                 root = root.right
//             }
//             else{
//                 return pathNodes
//             }
//         }
//         return []
//     }

//     findDistanceBetweenTwoNodes(n1,n2){
//         let lca = this.findLCA(this.root,n1,n2)

//         if(!lca){
//             return null
//         }

//         let distance1 = this.findDistance(lca,n1)
//         let distance2 = this.findDistance(lca,n2)

//         return distance1 + distance2
//     }

//     findPathBetweenTwoNodes(n1,n2){
//         let lca = this.findLCA(this.root,n1,n2)

//         if(!lca){
//             return null
//         }

//         let path1 = this.path(lca,n1)
//         let path2 = this.path(lca,n2)

//         path1.reverse()
//         path2.shift()

//         return [...path1,...path2]
//     }

//     countNodes(root){
//         if(!root){
//             return 0
//         }

//         return 1 + this.countNodes(root.left) + this.countNodes(root.right)
//     }

//     countLeftSubtreeNode(root){
//         return this.countNodes(root.left)
//     }

//     countRightSubtreeNode(root){
//         return this.countNodes(root.right)
//     }

//     countTwoChildNode(root){
//         let count = 0

//         function countTwoChild(node){
//             if(node){
//                 if(node.left && node.right){
//                     count++
//                 }
//                 countTwoChild(node.left)
//                 countTwoChild(node.right)
//             }
//         }

//         countTwoChild(root)
//         return count
//     }

//     countOneChildNode(root){
//         let count = 0

//         function oneChildCount(node){
//             if(node){
//                 if((node.left && !node.right) || (!node.left && node.right)){
//                     count++
//                 }
//                 oneChildCount(node.left)
//                 oneChildCount(node.right)
//             }
//         }
//         oneChildCount(root)
//         return count
//     }

//     printLeftSubtree(root){
//         function traverse(root,result=[]){
//             if(root){
//                 traverse(root.left,result)
//                 result.push(root.value)
//                 traverse(root.right,value)
//             }
//             return result
//         }

//         if(root.left){
//            let data = traverse(root.left)
//            return data
//         }
//         let data = traverse(root.left)
//     }

//     printRightSubtree(root){
//         function rightSubtree(node,result=[]){
//             if(node){
//                 rightSubtree(node.left,result)
//                 result.push(node.value)
//                 rightSubtree(node.right,result)
//             }
//             return result
//         }
//         let data = rightSubtree(root.right)
//         return data
//     }
// }

// // ===== CREATE TREE =====
// let bst = new Bst()
// ;[10, 5, 15, 2, 7, 12, 20].forEach(v => bst.insert(v))

// /*
// Tree Structure:
//         10
//        /  \
//       5    15
//      / \   / \
//     2   7 12 20
// */

// // ===== SEARCH =====
// console.log(bst.search(bst.root, 7))    // true
// console.log(bst.search(bst.root, 99))   // false

// // ===== TRAVERSALS =====
// console.log("InOrder:")
// bst.inOrder(bst.root)     
// // 2 5 7 10 12 15 20

// console.log("PreOrder:")
// bst.preOrder(bst.root)
// // 10 5 2 7 15 12 20

// console.log("PostOrder:")
// bst.postOrder(bst.root)
// // 2 7 5 12 20 15 10

// console.log("LevelOrder:")
// bst.levelOrder(bst.root)
// // 10 5 15 2 7 12 20

// // ===== MIN / MAX =====
// console.log(bst.min(bst.root)) // 2
// console.log(bst.max(bst.root)) // 20

// // ===== Kth ELEMENTS =====
// console.log(bst.findKthSmallest(bst.root, 3)) // 7
// console.log(bst.findKthLargest(bst.root, 2))  // 15

// // ===== SUCCESSOR / PREDECESSOR =====
// console.log(bst.findSuccessor(bst.root, 7))   // 10
// console.log(bst.findPredecessor(bst.root, 7)) // 5

// // ===== CLOSEST =====
// console.log(bst.findClosest(bst.root, 6))   // 5
// console.log(bst.findClosest(bst.root, 14))  // 15
// console.log(bst.findClosest(bst.root, 1))   // 2
// console.log(bst.findClosest(bst.root, 100)) // 20

// // ===== PRIME NODES =====
// console.log(bst.findPrimes(bst.root)) // [2,5,7]

// // ===== BST VALIDATION =====
// console.log(bst.isBst(bst.root)) // true

// // ===== ANCESTORS =====
// console.log(bst.findAncestor(bst.root, 7))   // [10,5]
// console.log(bst.findAncestor(bst.root, 10))  // []
// console.log(bst.findAncestor(bst.root, 99))  // null

// // ===== DESCENDANTS =====
// console.log(bst.findDescendants(bst.root, 5)) // [2,7]

// // ===== DEPTH / DEGREE =====
// console.log(bst.findDepth(bst.root, 7))   // 2
// console.log(bst.findDegree(bst.root, 10)) // 2
// console.log(bst.findDegree(bst.root, 2))  // 0

// // ===== DISTANCE =====
// console.log(bst.findDistance(bst.root, 7)) // 2
// console.log(bst.findDistanceBetweenTwoNodes(2, 7))  // 2
// console.log(bst.findDistanceBetweenTwoNodes(2, 20)) // 4

// // ===== PATH =====
// console.log(bst.path(bst.root, 7)) // [10,5,7]
// console.log(bst.findPathBetweenTwoNodes(2,20))
// // [2,5,10,15,20]

// // ===== COUNTS =====
// console.log(bst.countNodes(bst.root))           // 7
// console.log(bst.countLeftSubtreeNode(bst.root)) // 3
// console.log(bst.countRightSubtreeNode(bst.root))// 3
// console.log(bst.countOneChildNode(bst.root))    // 0
// console.log(bst.countTwoChildNode(bst.root))    // 3

// // ===== LEAF NODES =====
// console.log(bst.findLeafNode(bst.root)) // [2,7,12,20]

// // ===== HEIGHT =====
// console.log(bst.heightOfATree(bst.root)) // 3

// // ===== CHILD / PARENT / SIBLING =====
// console.log(bst.findChildren(bst.root, 5))
// // { leftChildren: 2, rightChildren: 7 }

// console.log(bst.findParent(bst.root, 7)) // 5
// console.log(bst.findSiblings(bst.root, 7)) // 2

// // ===== DELETE =====
// bst.delete(5)
// bst.inOrder(bst.root)
// // 2 7 10 12 15 20


// //min heap

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length == 0
//     }

//     getSize(){
//         return this.heap.length
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
//         else{
//             return this.heap[0]
//         }
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
//             return null
//         }

//         if(this.getSize() == 1){
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
//             let smallest = this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
//                 smallest = this.getRightChildIndex(index)
//             }

//             if(this.heap[index] <= this.heap[smallest]){
//                 break
//             }
//             else{
//                 this.swap(index,smallest)
//             }
//             index = smallest
//         }
//     }

//     findKthLargest(arr,k){
//         let h = new MinHeap()

//         for(let val of arr){
//             h.add(val)
//             if(h.heap.length > k){
//                 h.remove()
//             }
//         }

//         return h.peek()
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
// }
// // ===== BASIC HEAP TEST =====
// let h = new MinHeap()

// h.add(10)
// h.add(5)
// h.add(20)
// h.add(2)
// h.add(8)

// console.log(h.heap)
// // Expected (valid min heap):
// // [2,5,8,10,20]   (order may vary but min at index 0)

// // ===== PEEK =====
// console.log(h.peek())
// // Expected: 2

// // ===== REMOVE =====
// console.log(h.remove()) // 2
// console.log(h.remove()) // 5
// console.log(h.remove()) // 8
// console.log(h.remove()) // 10
// console.log(h.remove()) // 20
// console.log(h.remove()) // null

// // ===== REMOVE SINGLE ELEMENT =====
// let h2 = new MinHeap()
// h2.add(100)
// console.log(h2.remove()) // 100
// console.log(h2.remove()) // null

// // ===== Kth LARGEST =====
// let arr = [3,2,1,5,6,4]
// console.log(h.findKthLargest(arr, 1)) // 6
// console.log(h.findKthLargest(arr, 2)) // 5
// console.log(h.findKthLargest(arr, 3)) // 4
// console.log(h.findKthLargest(arr, 4)) // 3

// // ===== HEAP SORT =====
// let arr2 = [9,4,7,1,3,6,5]
// console.log(h.heapSort(arr2))
// // Expected: [1,3,4,5,6,7,9]

// // ===== EDGE CASES =====
// console.log(h.heapSort([]))        // []
// console.log(h.findKthLargest([1],1)) // 1
// console.log(h.findKthLargest([5,5,5],2)) // 5


// //maxHeap

// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }

//     isEmpty(){
//         return this.heap.length == 0
//     }

//     getSize(){
//         return this.heap.length
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

//         if(this.getSize() == 1){
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
//             }
//             else{
//                 this.swap(index,largest)
//             }
//             index = largest
//         }
//     }

//     findKthSmallest(arr,k){
//         let h = new MaxHeap()
//         for(let val of arr){
//             h.add(val)
//             if(h.getSize() > k){
//                 h.remove()
//             }
//         }

//         return h.peek()
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
// }

// let h = new MaxHeap()

// h.add(10)
// h.add(5)
// h.add(20)
// h.add(2)
// h.add(8)

// console.log(h.heap)
// // Expected (valid max heap):
// // [20,8,10,2,5]  (structure may vary, max at index 0)

// // ===== PEEK =====
// console.log(h.peek()) // 20

// // ===== REMOVE =====
// console.log(h.remove()) // 20
// console.log(h.remove()) // 10
// console.log(h.remove()) // 8
// console.log(h.remove()) // 5
// console.log(h.remove()) // 2
// console.log(h.remove()) // null

// // ===== Kth SMALLEST =====
// console.log(h.findKthSmallest([7,10,4,3,20,15], 3))
// // Expected: 7

// // ===== HEAP SORT =====
// console.log(h.heapSort([9,4,7,1,3,6,5]))
// // Expected: [1,3,4,5,6,7,9]


//trie

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

//         for(let ch of word){
//             if(!node.children[ch]){
//                 return false
//             }
//             node = node.children[ch]
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

//     autoComplete(word){
//         let node = this.root

//         for(let char of word){
//             if(!node.children[char]){
//                 return []
//             }
//             node = node.children[char]
//         }

//         let result = this.collectWord(node,word)
//         return result
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

//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             path.push([node,char])
//             node = node.children[char]
//         }

//         if(!node.isEndOfWord){
//             return false
//         }

//         node.isEndOfWord = false

//         for(let i=path.length-1;i>=0;i--){
//             let [parent,char] = path[i]
//             let childNode = parent.children[char]

//             if(Object.keys(childNode.children).length > 0 || childNode.isEndOfWord){
//                 break
//             }

//             delete parent.children[char]
//         }
//         return true
//     }
// }

// let trie = new Trie()

// trie.insert("apple")
// trie.insert("app")
// trie.insert("apply")
// trie.insert("bat")
// trie.insert("ball")

// // ===== SEARCH =====
// console.log(trie.search("apple")) // true
// console.log(trie.search("app"))   // true
// console.log(trie.search("appl"))  // false
// console.log(trie.search("bat"))   // true

// // ===== PREFIX =====
// console.log(trie.startsWith("app")) // true
// console.log(trie.startsWith("ba"))  // true
// console.log(trie.startsWith("cat")) // false

// // ===== AUTOCOMPLETE =====
// console.log(trie.autoComplete("app"))
// // ["app","apple","apply"]

// console.log(trie.autoComplete("ba"))
// // ["bat","ball"]

// console.log(trie.autoComplete("cat"))
// // []

// // ===== PRINT ALL WORDS =====
// console.log(trie.print())
// // ["app","apple","apply","bat","ball"]

// // ===== DELETE =====
// console.log(trie.delete("apple")) // true
// console.log(trie.search("apple")) // false
// console.log(trie.search("app"))   // true

// console.log(trie.delete("app"))   // true
// console.log(trie.search("app"))   // false
// console.log(trie.autoComplete("app"))
// // ["apply"]

// console.log(trie.delete("unknown")) // false

//suffix Trie

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

//         return true
//     }
// }

// let st = new SuffixTrie()
// st.buildSuffixTrie("banana")

// /*
// Suffixes inserted:
// banana
// anana
// nana
// ana
// na
// a
// */

// // ===== SUBSTRING SEARCH =====
// console.log(st.search("banana")) // true
// console.log(st.search("ban"))    // true
// console.log(st.search("ana"))    // true
// console.log(st.search("nana"))   // true
// console.log(st.search("a"))      // true
// console.log(st.search("na"))     // true

// // ===== NOT PRESENT =====
// console.log(st.search("apple"))  // false
// console.log(st.search("band"))   // false
// console.log(st.search("ananab")) // false

// // ===== EDGE CASES =====
// console.log(st.search(""))       // true (empty string always exists)
// console.log(st.search("bana"))   // true
// console.log(st.search("nan"))    // true
// console.log(st.search("anan"))   // true


//trie

// class Node{
//     constructor(){
//         this.children = {}
//         this.isEndOfWords = false
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
//         node.isEndOfWords = true
//     }

//     countWords(){
//         let queue = []
//         queue.push(this.root)
//         let count = 0
//         while(queue.length){
//             let node = queue.shift()

//             if(node.isEndOfWords){
//                 count++
//             }

//             for(let ch in node.children){
//                 queue.push(node.children[ch])
//             }
//         }
//         return count
//     }

//     countPrefixWord(prefix){
//         let node = this.root

//         for(let char of prefix){
//             if(!node.children[char]){
//                 return 0
//             }
//             node = node.children[char]
//         }

//         let count = 0

//         let queue = []
//         queue.push(node)

//         while(queue.length){
//             let cur = queue.shift()

//             if(cur.isEndOfWords){
//                 count++
//             }

//             for(let ch in cur.children){
//                 queue.push(cur.children[ch])
//             }
//         }
//         return count
//     }

//     longestPrefix(str){
//         let node = this.root
//         let longestPrefix = ''

//         for(let char of str){
//             if(!node.children[char]){
//                 break
//             }
//             longestPrefix += char
//             node =node.children[char]
//         }

//         return longestPrefix
//     }
// }

// let trie = new Trie()

// trie.insert("apple")
// trie.insert("app")
// trie.insert("apricot")
// trie.insert("bat")
// trie.insert("ball")
// trie.insert("batsman")

// // ===== COUNT TOTAL WORDS =====
// console.log(trie.countWords()) 
// // Output: 6

// // ===== COUNT PREFIX WORDS =====
// console.log(trie.countPrefixWord("app")) 
// // Output: 2  ("app", "apple")

// console.log(trie.countPrefixWord("ap"))  
// // Output: 3  ("app", "apple", "apricot")

// console.log(trie.countPrefixWord("bat")) 
// // Output: 2  ("bat", "batsman")

// console.log(trie.countPrefixWord("ba"))  
// // Output: 3  ("bat", "ball", "batsman")

// console.log(trie.countPrefixWord("cat")) 
// // Output: 0

// // ===== LONGEST PREFIX =====
// console.log(trie.longestPrefix("application")) 
// // Output: "appl"

// console.log(trie.longestPrefix("apricots"))  
// // Output: "apricot"

// console.log(trie.longestPrefix("batman"))    
// // Output: "bat"

// console.log(trie.longestPrefix("balloon"))   
// // Output: "ball"

// console.log(trie.longestPrefix("cat"))        
// // Output: ""


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

    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            return 'vertex1 is not exist'
        }

        if(!this.adjacencyList[vertex2]){
            return 'vertex2 is not exist'
        }

        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    removeEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            return 'vertex1 is not exist'
        }

        if(!this.adjacencyList[vertex2]){
            return 'vertex2 is not exist'
        }
        
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 'vertex not exist'
        }

        for(let adjancyVertex of this.adjacencyList[vertex]){
            this.removeEdges(vertex,adjancyVertex)
        }

        delete this.adjacencyList[vertex]
    }

    print(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex}->${[...this.adjacencyList[vertex]]}`)
        }
    }

    bfs(start){
        let visitedNode = new Set()
        visitedNode.add(start)
        
        let queue = []
        queue.push(start)

        while(queue.length){
            const vertex = queue.shift()
            console.log(vertex)

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }

    dfs(start,visitedNode=new Set()){
        visitedNode.add(start)
        console.log(start)
        for(let neighbor of this.adjacencyList[start]){
            if(!visitedNode.has(neighbor)){
                this.dfs(neighbor,visitedNode)
            }
        }
    }

    bfsCycleDetection(start){
        let visitedNode = new Set()
        visitedNode.add(start)
        let queue = []
        queue.push({vertex:start,parent:null})

        while(queue.length){
            let {vertex,parent} = queue.shift()

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push({vertex:neighbor,parent:vertex})
                }
                else if(neighbor != parent){
                    console.log("cycle detected")
                }
            }
        }
        console.log("cycle not detected")
    }

    dfsCycleDetection(start,visitedNode=new Set(),parent=null){
        visitedNode.add(start)

        for(let neighbor of this.adjacencyList[start]){
            if(!visitedNode.has(neighbor)){
                if(this.dfsCycleDetection(neighbor,visitedNode,start)){
                    return true
                }
            }
            else if(neighbor != parent){
                return true
            }
        }
        return false
    }
}

let graph = new Graph()

// ===== ADD VERTICES & EDGES =====
graph.addEdges("A", "B")
graph.addEdges("A", "C")
graph.addEdges("B", "D")
graph.addEdges("C", "E")
graph.addEdges("D", "E") // creates a cycle
graph.addEdges("E", "F")

// Graph structure:
// A - B - D
// |   |   |
// C - E - F

console.log("PRINT GRAPH")
graph.print()
// Expected (order may vary):
// A -> B,C
// B -> A,D
// C -> A,E
// D -> B,E
// E -> C,D,F
// F -> E

// ===== HAS EDGE =====
console.log("HAS EDGE A-B:", graph.hasEdges("A", "B")) // true
console.log("HAS EDGE A-D:", graph.hasEdges("A", "D")) // false

// ===== BFS =====
console.log("BFS FROM A")
graph.bfs("A")
// Expected order (one valid BFS):
// A
// B
// C
// D
// E
// F

// ===== DFS =====
console.log("DFS FROM A")
graph.dfs("A")
// Expected order (one valid DFS):
// A
// B
// D
// E
// C
// F

// ===== BFS CYCLE DETECTION =====
console.log("BFS CYCLE DETECTION FROM A")
graph.bfsCycleDetection("A")
// Expected:
// "cycle detected"

// ===== DFS CYCLE DETECTION =====
console.log("DFS CYCLE DETECTION FROM A")
console.log(graph.dfsCycleDetection("A"))
// Expected:
// true

// ===== REMOVE EDGE =====
graph.removeEdges("D", "E")
console.log("AFTER REMOVING EDGE D-E")
graph.print()

// ===== REMOVE VERTEX =====
graph.removeVertex("C")
console.log("AFTER REMOVING VERTEX C")
graph.print()
