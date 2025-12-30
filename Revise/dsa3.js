// //tree

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
//             }else{
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

//     isPrime(val){
//         if(val <= 1){
//             return false
//         }

//         for(let i=2;i<=Math.sqrt(val);i++){
//             if(val % i ==0){
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
//         let count = 0
//         let result = null
//         function traverse(node){
//             if(node){
//                 traverse(node.left)
//                 count++
//                 if(count == k){
//                     result = node.value
//                     return
//                 }
//                 traverse(node.right)
//             }
//         }

//         traverse(root)
//         return result
//     }

//     findKthLargest(root,k){
//         if(!root){
//             return null
//         }
//         let count = 0
//         let result = null

//         function traverse(node){
//             if(node){
//                 traverse(node.right)
//                 count++
//                 if(count == k){
//                     result = node.value
//                 }
//                 traverse(node.left)
//             }
//         }

//         traverse(root)
//         return result
//     }

//     findClosest(root,key,closest=null){
//         if(!root){
//             return closest
//         }
        
//         if(closest == null || Math.abs(root.value - key) < Math.abs(closest - key)){
//             closest = root.value
//         }

//         if(key < root.value){
//             return this.findClosest(root.left,key,closest)
//         }
//         else{
//             return this.findClosest(root.right,key,closest)
//         }
//     }

//     findSuccessor(root,key,successor = null){
//         if(!root){
//             return null
//         }

//         if(key < root.value){
//             successor = root.value
//             return this.findSuccessor(root.left,key,successor)
//         }
//         else if(key > root.value){
//             return this.findSuccessor(root.right,key,successor)
//         }
//         else{
//             if(root.right){
//                 return this.min(root.right)
//             }
//         }

//         return successor
//     }

//     findPredecessor(root,key,predecessor = null){
//         if(!root){
//             return null
//         }

//         if(key > root.value){
//             predecessor = root.value
//             return this.findPredecessor(root.right,key,predecessor)
//         }
//         else if(key < root.value){
//             return this.findPredecessor(root.left,key,predecessor)
//         }
//         else{
//             if(root.left){
//                 return this.max(root.left)
//             }
//         }

//         return predecessor
//     }

//     removeDuplicates(){
//         function inOrder(node,visitedNode = new Set()){
//             if(node){
//                 inOrder(node.left,visitedNode)
//                 visitedNode.add(node.value)
//                 inOrder(node.right,visitedNode)
//             }

//             return visitedNode
//         }

//         let result = inOrder(this.root)
//         this.root = null

//         for(let val of [...result]){
//             this.insert(val)
//         }
//     }

//     findParent(root,key,parent = null){
//         if(!root){
//             return null
//         }

//         if(root.left && root.left.value == key){
//             parent = root.value 
//             return parent
//         }

//         if(root.right && root.right.value == key){
//             parent = root.value
//             return parent
//         }

//         if(key < root.value){
//             return this.findParent(root.left,key,parent)
//         }else{
//             return this.findParent(root.right,key,parent)
//         }
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
//             const children = {
//                 leftChild : root.left ? root.left.value : null,
//                 rightchild : root.right ? root.right.value : null
//             }
//             return children
//         }
//         else if(target  < root.value){
//             return this.findChildren(root.left,target)
//         }
//         else{
//             return this.findChildren(root.right,target)
//         }
//     }

//     findSiblings(root,key,sibling= null){
//         if(!root){
//             return null
//         }

//         if(root.left && root.left.value == key){
//             sibling = root.right ? root.right.value : null
//             return sibling
//         }

//         if(root.right && root.right.value == key){
//             sibling = root.left ? root.left.value : null
//             return sibling
//         }

//         if(key < root.value){
//             return this.findSiblings(root.left,key,sibling)
//         }
//         else{
//             return this.findSiblings(root.right,key,sibling)
//         }
//     }

//     findLeafNode(root,result = []){
//         if(!root){
//             return result
//         }

//         if(root){
//             if(!root.left && !root.right){
//                 result.push(root.value)
//             }
//             this.findLeafNode(root.left,result)
//             this.findLeafNode(root.right,result)
//         }

//         return result
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

//     findAncestor(root,target,result=[]){
//         if(!root){
//             return result
//         }

//         if(root.value == target){
//             return result
//         }

//         result.push(root.value)

//         if(target < root.value){
//             return this.findAncestor(root.left,target,result)
//         }else{
//             return this.findAncestor(root.right,target,result)
//         }

//     }

//     findDescendants(root,target,result=[]){
//         if(!root){
//             return result
//         }
//         else if(target == root.value){
//             this.collectDescendants(root.left,result)
//             this.collectDescendants(root.right,result)
//             return result
//         }
//         else if(target < root.value){
//             return this.findDescendants(root.left,target,result)
//         }
//         else{
//             return this.findDescendants(root.right,target,result)
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
//             return 0
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
//             return 0
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
//                 return depth
//             }
//         }
//     }

//     findDistance(root,target){
//         if(!root){
//             return 0
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
//                 return distance
//             }
//         }
//     }

//     findLCA(root,n1,n2){
//         if(!root){
//             return false
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

//     path(root,target){
//         if(!root){
//             return null
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

//     findDistanceBtwTwoNodes(n1,n2){
//         let lca = this.findLCA(this.root,n1,n2)

//         if(!lca){
//             return -1
//         }

//         let distance1 = this.findDistance(lca,n1)
//         let distance2 = this.findDistance(lca,n2)

//         return distance1 + distance2
//     }

//     findPathBetweenTwoNodes(n1,n2){
//         let lca = this.findLCA(this.root,n1,n2)

//         if(!lca){
//             return -1
//         }

//         let path1 = this.path(lca,n1)
//         let path2 = this.path(lca,n2)
//         path1.pop()
//         path2.reverse()
//         return [...path1,...path2]
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

//     countOnlyTwoChildNode(root){
//         if(!root){
//             return 0
//         }

//         let count = 0

//         function traverse(node){
//             if(node){
//                 if(node.left && node.right){
//                     count++
//                 }
//                 traverse(node.left)
//                 traverse(node.right)
//             }
//         }
//         traverse(root)
//         return count
//     }

//     countOnlyOneChildNode(root){
//         if(!root){
//             return 0
//         }

//         let count = 0

//         function traverse(node){
//             if(node){
//                 if((node.left && !node.right) ||(node.right && !node.left)){
//                     count++
//                 }
//                 traverse(node.left)
//                 traverse(node.right)
//             }
//         }
//         traverse(root)
//         return count
//     }

//     printingLeftSubtreeNode(root){
//         if(!root){
//             return null
//         }

//         function traverse(node,result = []){
//             if(node){
//                 traverse(node.left)
//                 result.push(node.value)
//                 traverse(node.right)
//             }
//             return result
//         }

//         let leftSubtree = traverse(root.left)
//         return leftSubtree
//     }

//     printingRightSubtreeNode(root){
//         if(!root){
//             return null
//         }

//         function inOrder(node,result = []){
//             if(node){
//                 inOrder(node.left,result)
//                 result.push(node.value)
//                 inOrder(node.right,result)
//             }
//             return result
//         }

//         let rightSubtree = inOrder(root.right)
//         return rightSubtree
//     }
// }


// const bst = new Bst()

// // ---------- INSERT ----------
// ;[10, 5, 15, 3, 7, 12, 18, 6].forEach(v => bst.insert(v))

// console.log("BST created")

// // ---------- TRAVERSALS ----------
// console.log("\nInOrder (sorted):")
// bst.inOrder(bst.root)

// console.log("\nPreOrder:")
// bst.preOrder(bst.root)

// console.log("\nPostOrder:")
// bst.postOrder(bst.root)

// console.log("\nLevelOrder:")
// bst.levelOrder(bst.root)

// // ---------- SEARCH ----------
// console.log("\nSearch 7:", bst.search(bst.root, 7))
// console.log("Search 20:", bst.search(bst.root, 20))

// // ---------- MIN / MAX ----------
// console.log("\nMin:", bst.min(bst.root))
// console.log("Max:", bst.max(bst.root))
// console.log("MinNode:", bst.minNode(bst.root))
// console.log("MaxNode:", bst.maxNode(bst.root))

// // ---------- DELETE ----------
// bst.delete(15)
// console.log("\nAfter deleting 15 (InOrder):")
// bst.inOrder(bst.root)

// // ---------- PRIME VALUES ----------
// console.log("\nPrime values:", bst.findPrimes(bst.root))

// // ---------- BST VALIDATION ----------
// console.log("\nIs valid BST:", bst.isBst(bst.root))

// // ---------- IDENTICAL ----------
// const bst2 = new Bst()
// ;[10,5,3,7,6,12,18].forEach(v => bst2.insert(v))
// console.log("Is identical tree:", bst.isIdentical(bst.root, bst2.root))

// // ---------- KTH ----------
// console.log("\n3rd Smallest:", bst.findKthSmallest(bst.root,3))
// console.log("2nd Largest:", bst.findKthLargest(bst.root,2))

// // ---------- CLOSEST ----------
// console.log("\nClosest to 13:", bst.findClosest(bst.root,13))

// // ---------- SUCCESSOR / PREDECESSOR ----------
// console.log("\nSuccessor of 12:", bst.findSuccessor(bst.root,12))
// console.log("Predecessor of 12:", bst.findPredecessor(bst.root,12))

// // ---------- PARENT / CHILD / SIBLING ----------
// console.log("\nParent of 6:", bst.findParent(bst.root,6))
// console.log("Children of 5:", bst.findChildren(bst.root,5))
// console.log("Sibling of 7:", bst.findSiblings(bst.root,7))

// // ---------- LEAF NODES ----------
// console.log("\nLeaf Nodes:", bst.findLeafNode(bst.root))

// // ---------- HEIGHT ----------
// console.log("\nHeight:", bst.findHeight(bst.root))

// // ---------- ANCESTORS / DESCENDANTS ----------
// console.log("\nAncestors of 6:", bst.findAncestor(bst.root,6))
// console.log("Descendants of 5:", bst.findDescendants(bst.root,5))

// // ---------- DEGREE / DEPTH / DISTANCE ----------
// console.log("\nDegree of 5:", bst.findDegree(bst.root,5))
// console.log("Depth of 6:", bst.findDepth(bst.root,6))
// console.log("Distance from root to 6:", bst.findDistance(bst.root,6))

// // ---------- LCA ----------
// console.log("\nLCA of 6 & 12:", bst.findLCA(bst.root,6,12).value)

// // ---------- PATH ----------
// console.log("\nPath to 6:", bst.path(bst.root,6))

// // ---------- DISTANCE BETWEEN TWO NODES ----------
// console.log("\nDistance between 6 & 12:", bst.findDistanceBtwTwoNodes(6,12))

// // ---------- PATH BETWEEN TWO NODES ----------
// console.log("\nPath between 6 & 12:", bst.findPathBetweenTwoNodes(6,12))

// // ---------- COUNTS ----------
// console.log("\nTotal Nodes:", bst.countNode(bst.root))
// console.log("Left Subtree Node Count:", bst.countLeftNode(bst.root))
// console.log("Right Subtree Node Count:", bst.countRightNode(bst.root))
// console.log("Only One Child Nodes:", bst.countOnlyOneChildNode(bst.root))
// console.log("Only Two Child Nodes:", bst.countOnlyTwoChildNode(bst.root))

// // ---------- SUBTREES ----------
// console.log("\nLeft Subtree Nodes:", bst.printingLeftSubtreeNode(bst.root))
// console.log("Right Subtree Nodes:", bst.printingRightSubtreeNode(bst.root))

// // ---------- REMOVE DUPLICATES ----------
// bst.insert(7)
// bst.insert(7)
// bst.removeDuplicates()
// console.log("\nAfter removing duplicates (InOrder):")
// bst.inOrder(bst.root)



// minHeap

// class MinHeap{
//     constructor(){
//         this.heap = []
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

//     parent(index){
//         return this.heap[this.getParentIndex(index)]
//     }

//     leftChild(index){
//         return this.heap[this.getLeftChildIndex(index)]
//     }

//     rightChild(index){
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

//     isEmpty(){
//         return this.heap.length == 0
//     }

//     peek(){
//         if(this.isEmpty()){
//             return -1
//         }

//         return this.heap[0]
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length-1
//         while(this.hasParent(index) && this.parent(index) > this.heap[index]){
//             this.swap(index,this.getParentIndex(index))
//             index = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return -1
//         }

//         let val = this.heap[0]
//         this.heap[0] = this.heap[this.heap.length-1]
//         this.heap.pop()
//         this.heapifyDown()
//         return val
//     }

//     heapifyDown(){
//         let index = 0

//         while(this.hasLeftChild(index)){
//             let smaller = this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
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
//         let m = new MinHeap()

//         for(let val of arr){
//             m.add(val)
//         }

//         let sortedArr = []

//         while(m.heap.length){
//             sortedArr.push(m.remove())
//         }

//         return sortedArr
//     }

//     findKthLargest(arr,k){
//         let m = new MinHeap()

//         for(let val of arr){
//             m.add(val)
//             if(m.heap.length > k){
//                 m.remove()
//             }
//         }

//         return m.peek()
//     }
// }

// const heap = new MinHeap()

// console.log("Is Empty:", heap.isEmpty())

// // ---------- ADD ----------
// heap.add(10)
// heap.add(5)
// heap.add(20)
// heap.add(3)
// heap.add(8)

// console.log("Heap Array:", heap.heap)

// // ---------- PEEK ----------
// console.log("Peek (min):", heap.peek()) // 3

// // ---------- REMOVE ----------
// console.log("Remove:", heap.remove()) // 3
// console.log("After Remove:", heap.heap)

// // ---------- REMOVE ALL ----------
// while(!heap.isEmpty()){
//     console.log("Removing:", heap.remove())
// }

// // ---------- HEAP SORT ----------
// const arr = [9, 4, 7, 1, 3, 6, 2]
// console.log("Heap Sort:", heap.heapSort(arr)) // sorted ascending

// // ---------- Kth LARGEST ----------
// const nums = [3,2,1,5,6,4]
// console.log("2nd Largest:", heap.findKthLargest(nums,2)) // 5
// console.log("4th Largest:", heap.findKthLargest(nums,4)) // 3


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
//             return -1
//         }
//         return this.heap[0]
//     }

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1
//         while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
//             this.swap(index,this.getParentIndex(index))
//             index = this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.isEmpty()){
//             return -1
//         }

//         if(this.heap.length == 1){
//             return this.heap.pop()
//         }

//         let val = this.heap[0]
//         this.heap[0] = this.heap[this.heap.length-1]
//         this.heap.pop()
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
//             this.swap(index,largest)
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

//         sortedArr.reverse()

//         return sortedArr
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

// const heap = new MaxHeap()

// // ---------- ADD ----------
// heap.add(10)
// heap.add(4)
// heap.add(15)
// heap.add(20)
// heap.add(0)

// console.log("Heap:", heap.heap)

// // ---------- PEEK ----------
// console.log("Peek (max):", heap.peek()) // 20

// // ---------- REMOVE ----------
// console.log("Remove:", heap.remove()) // 20
// console.log("After remove:", heap.heap)

// // ---------- REMOVE ALL ----------
// while(!heap.isEmpty()){
//     console.log("Removing:", heap.remove())
// }

// // ---------- HEAP SORT ----------
// const arr = [5, 3, 8, 1, 9, 2]
// console.log("Heap Sort:", heap.heapSort(arr)) // [1,2,3,5,8,9]

// // ---------- Kth SMALLEST ----------
// console.log("3rd Smallest:", heap.findKthSmallest(arr,3)) // 3


//Trie

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

//     startsWith(prefix){
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

//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             path.push([node,char])
//             node = node.children[char]
//         }

//         if(node.isEndOfWord){
//             node.isEndOfWord = false
//         }

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

// const trie = new Trie()

// // ---------- INSERT ----------
// trie.insert("cat")
// trie.insert("car")
// trie.insert("cart")
// trie.insert("dog")
// trie.insert("door")

// // ---------- SEARCH ----------
// console.log(trie.search("cat"))    // true
// console.log(trie.search("car"))    // true
// console.log(trie.search("cow"))    // false

// // ---------- PREFIX ----------
// console.log(trie.startsWith("ca")) // true
// console.log(trie.startsWith("do")) // true
// console.log(trie.startsWith("da")) // false

// // ---------- AUTOCOMPLETE ----------
// console.log(trie.autoComplete("ca")) // [ 'cat', 'car', 'cart' ]
// console.log(trie.autoComplete("do")) // [ 'dog', 'door' ]

// // ---------- PRINT ----------
// console.log(trie.print()) 
// // [ 'cat', 'car', 'cart', 'dog', 'door' ]

// // ---------- DELETE ----------
// trie.delete("cart")
// console.log(trie.search("cart")) // false
// console.log(trie.search("car"))  // true

// trie.delete("car")
// console.log(trie.search("car"))  // false
// console.log(trie.search("cat"))  // true

// // ---------- FINAL PRINT ----------
// console.log(trie.print()) 
// // [ 'cat', 'dog', 'door' ]


//suffix trie

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
//         for(let ch of word){
//             if(!node.children[ch]){
//                 return false
//             }
//             node = node.children[ch]
//         }

//         return true
//     }
// }

// const st = new SuffixTrie()

// st.buildSuffixTrie("banana")

// // ---------- SUBSTRING SEARCH ----------
// console.log(st.search("ban"))    // true
// console.log(st.search("ana"))    // true
// console.log(st.search("nana"))   // true
// console.log(st.search("a"))      // true

// // ---------- NOT PRESENT ----------
// console.log(st.search("apple"))  // false
// console.log(st.search("band"))   // false

// // ---------- EDGE CASES ----------
// console.log(st.search("banana")) // true
// console.log(st.search(""))       // true (empty string)


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

//     countWords(){
//         let queue = []
//         queue.push(this.root)
//         let count = 0
//         while(queue.length){
//             let cur = queue.shift()
//             if(cur.isEndOfWord){
//                 count++
//             }
//             for(let ch in cur.children){
//                 queue.push(cur.children[ch])
//             }
//         }
//         return count
//     }

//     countPrefixWord(prefix){
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
//             let cur = queue.shift()

//             if(cur.isEndOfWord){
//                 prefixCount++
//             }

//             for(let ch in cur.children){
//                 queue.push(cur.children[ch])
//             }
//         }

//         return prefixCount
//     }

//     longestPrefix(word){
//         let node = this.root
//         let longestStr = ''

//         for(let ch of word){
//             if(!node.children[ch]){
//                 return longestStr
//             }
//             longestStr += ch
//             node = node.children[ch]
//         }

//         return longestStr
//     }
// }

// const t = new Trie()
// t.insert("car")
// t.insert("cart")
// t.insert("cat")
// t.insert("dog")

// console.log(t.countWords())            // 4
// console.log(t.countPrefixWord("ca"))   // 3
// console.log(t.countPrefixWord("car"))  // 2
// console.log(t.longestPrefix("cartoon"))// "cart"

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

//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return 'vertex not found'
//         }

//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     print(){
//         for(let vertex in this.adjacencyList){
//             console.log(`${vertex} => ${[...this.adjacencyList[vertex]]}`)
//         }
//     }

//     hasEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return 'vertex not found'
//         }

//         return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
//             return 'vertex not found'
//         }

//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return null
//         }

//         for(let adjancyVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adjancyVertex)
//         }

//         delete this.adjacencyList[vertex]
//     }

//     bfs(start){
//         if(!this.adjacencyList[start]){
//             return
//         }

//         let visitedNode = new Set()
//         visitedNode.add(start)

//         let queue = []
//         queue.push(start)

//         while(queue.length){
//             let vertex = queue.shift()
//             console.log(vertex)
//             for(let neighbor of this.adjacencyList[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             }
//         }
//     }

//     dfs(start,visitedNode = new Set()){
//          if(!this.adjacencyList[start]){
//             return
//         }

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
//                 else if(parent != neighbor){
//                     return 'cycle detected'
//                 }
//             }
//         }

//         return 'cycle not detected'
//     }

//     dfsCycleDetection(start,visitedNode = new Set(),parent = null){
//         visitedNode.add(start)

//         for(let neighbor of this.adjacencyList[start]){
//             if(!visitedNode.has(neighbor)){
//                 if(this.dfsCycleDetection(neighbor,visitedNode,start)){
//                     return true
//                 }
//             }
//             else if(parent != neighbor){
//                 return true
//             }
//         }

//         return false
//     }
// }


// const g = new Graph()

// // Add vertices
// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")

// // Add edges
// g.addEdge("A","B")
// g.addEdge("B","C")
// g.addEdge("C","D")
// g.addEdge("D","A") // creates a cycle

// console.log("Graph:")
// g.print()

// console.log("\nBFS from A:")
// g.bfs("A")

// console.log("\nDFS from A:")
// g.dfs("A")

// console.log("\nHas Edge A-B:", g.hasEdge("A","B"))
// console.log("Has Edge A-C:", g.hasEdge("A","C"))

// console.log("\nBFS Cycle Detection:", g.bfsCycleDetection("A"))
// console.log("DFS Cycle Detection:", g.dfsCycleDetection("A"))

// // Remove cycle
// g.removeEdge("D","A")

// console.log("\nAfter removing edge D-A:")
// g.print()

// console.log("BFS Cycle Detection:", g.bfsCycleDetection("A"))
// console.log("DFS Cycle Detection:", g.dfsCycleDetection("A"))

// // Remove vertex
// g.removeVertex("C")
// console.log("\nAfter removing vertex C:")
// g.print()
