class Node{
    constructor(val){
        this.value = val
        this.left = null
        this.right = null
    }
}

class Bst{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null
    }

    insert(value){
        const node = new Node(value)

        if(this.isEmpty()){
            this.root = node
        }
        else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }
            else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        else if(value == root.value){
            return true
        }
        else if(value < root.value){
            return this.search(root.left,value)
        }
        else{
            return this.search(root.right,value)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(root){
        if(!root){
            return null
        }

        let queue = []
        queue.push(root)

        while(queue.length){
            let cur = queue.shift()

            console.log(cur.value)

            if(cur.left){
                queue.push(cur.left)
            }

            if(cur.right){
                queue.push(cur.right)
            }
        }
    }

    min(root){
        if(!root){
            return null
        }

        while(root.left){
            root = root.left
        }

        return root.value
    }

    max(root){
        if(!root){
            return null
        }

        while(root.right){
            root = root.right
        }

        return root.value
    }

    minNode(root){
        if(!root.left){
            return root.value
        }

        return this.minNode(root.left)
    }

    maxNode(root){
        if(!root.right){
            return root.value
        }

        return this.maxNode(root.right)
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root){
            return null
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }

            if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    isPrime(value){
        if(value <= 1){
            return false
        }

        for(let i=2;i<=Math.sqrt(value);i++){
            if(value % i == 0){
                return false
            }
        }

        return true
    }

    findPrimes(root,result=[]){
        if(root){
            this.findPrimes(root.left,result)
            if(this.isPrime(root.value)){
                result.push(root.value)
            }
            this.findPrimes(root.right,result)
        }
        return result
    }

    isBst(root,min=-Infinity,max=Infinity){
        if(!root){
            return true
        }

        if(root.value < min || root.value > max){
            return false
        }

        return this.isBst(root.left,min,root.value-1) && this.isBst(root.right,root.value,max)
    }

    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }

        if(!tree1 || !tree2){
            return false
        }

        return tree1.value == tree2.value && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
    }

    findKthSmallest(root,target){
        if(!root){
            return null
        }

        let result = null
        let k = 0
        function inOrder(root,target){
            if(root){
                inOrder(root.left,target)
                k++
                if(k == target){
                    result = root.value
                    return
                }
                inOrder(root.right,target)
            }
        }

        inOrder(root,target)
        return result
    }

    findKthLargest(root,target){
        if(!root){
            return null
        }

        let result = null
        let k = 0 

        function reverseOrder(root,target){
            if(root){
                reverseOrder(root.right,target)
                k++
                if(k == target){
                    result = root.value
                    return
                }
                reverseOrder(root.left,target)
            }
        }
        reverseOrder(root,target)
        return result
    }

    findClosest(root,target,closest = null){
        if(!root){
            return closest
        }

        if(closest == null || Math.abs(root.value - target) < Math.abs(closest-target)){
            closest  = root.value
        }

        if(target < root.value){
            return this.findClosest(root.left,target,closest)
        }
        else{
            return this.findClosest(root.right,target,closest)
        }
    }

    findSuccessor(root,target,successor=null){
        if(target < root.value){
            successor = root.value
            return this.findSuccessor(root.left,target,successor)
        }
        else if(target > root.value){
            return this.findSuccessor(root.right,target,successor)
        }
        else{
            if(root.right){
                return this.min(root.right)
            }
        }

        return successor
    }
    
    findPredecessor(root,target,predecessor=null){
        if(target > root.value){
            predecessor = root.value
            return this.findPredecessor(root.right,target,predecessor)
        }
        else if(target < root.value){
            return this.findPredecessor(root.left,target,predecessor)
        }
        else{
            if(root.left){
                return this.max(root.left)
            }
        }

        return predecessor
    }

    removeDuplicates(root){
        if(!root){
            return null
        }

        function inOrder(root,visitedNode = new Set()){
            if(root){
                inOrder(root.left,visitedNode)
                visitedNode.add(root.value)
                inOrder(root.right,visitedNode)
            }
            return visitedNode
        }

        let result = [...inOrder(root)]
        
        this.root = null

        for(let val of result){
            this.insert(val)
        }
    }

    findHeight(root){
        if(!root){
            return null
        }

        let queue = []
        queue.push(root)

        let height = 0
        
        while(queue.length){
            let nodeCount = queue.length
            height++

            while(nodeCount){
                let cur = queue.shift()

                if(cur.left){
                    queue.push(cur.left)
                }

                if(cur.right){
                    queue.push(cur.right)
                }

                nodeCount--
            }
        }
        return height
    }

    findParent(root,target,parent=null){
        if(!root){
            return null
        }

        if(root.value == target){
            return parent
        }

        if(target < root.value){
            return this.findParent(root.left,target,root.value)

        }
        else{
            return this.findParent(root.right,target,root.value)
        }
    }

    findChildren(root,target){
        if(!root){
            return null
        }
        else if(root.value == target){
            const children = {
                leftChild : root.left ? root.left.value : null,
                rightChild : root.right ? root.right.value : null
            }
            return children
        }
        else if(target < root.value){
            return this.findChildren(root.left,target)
        }
        else{
            return this.findChildren(root.right,target)
        }
    }

    findSiblings(root,target,sibling = null){
        if(!root){
            return null
        }

        if(root.left && root.left.value == target){
            sibling = root.right ? root.right.value : null
            return sibling
        }

        if(root.right && root.right.value == target){
            sibling = root.left ? root.left.value : null
            return sibling
        }

        if(target < root.value){
            return this.findSiblings(root.left,target,sibling)
        }
        else{
            return this.findSiblings(root.right,target,sibling)
        }
    }

    findLeafNode(root,result=[]){
        if(root){
            if(!root.left && !root.right){
                result.push(root.value)
            }
            this.findLeafNode(root.left,result)
            this.findLeafNode(root.right,result)
        }
        return result
    }

    findAncestor(root,target,ancestor = []){
        if(!root){
            return null
        }

        if(root.value == target){
            return ancestor
        }

        ancestor.push(root.value)
        
        if(target < root.value){
            return this.findAncestor(root.left,target,ancestor)
        }
        else{
            return this.findAncestor(root.right,target,ancestor)
        }
    }

    findDescendants(root,target,descendants=[]){
        if(!root){
            return []
        }

        if(root.value == target){
            this.collectDescendants(root.left,descendants)
            this.collectDescendants(root.right,descendants)
            return descendants
        }
        else if(target < root.value){
            return this.findDescendants(root.left,target,descendants)
        }
        else{
            return this.findDescendants(root.right,target,descendants)
        }
    }

    collectDescendants(root,result=[]){
        if(root){
            result.push(root.value)
            this.collectDescendants(root.left,result)
            this.collectDescendants(root.right,result)
        }
        return result
    }

    findDegree(root,target){
        if(!root){
            return null
        }

        if(root.value == target){
            let degree = 0

            if(root.left){
                degree++
            }

            if(root.right){
                degree++
            }

            return degree
        }
        else if(target < root.value){
            return this.findDegree(root.left,target)
        }
        else{
            return this.findDegree(root.right,target)
        }
    }

    findDepth(root,target){
        if(!root){
            return null
        }

        let depth = 0

        while(root){
            if(target < root.value){
                root = root.left
                depth++
            }
            else if(target > root.value){
                root = root.right
                depth++
            }
            else{
                break
            }
        }

        return depth
    }

    findDistance(root,target){
        if(!root){
            return null
        }

        let distance = 0

        while(root){
            if(target < root.value){
                root = root.left
                distance++
            }
            else if(target > root.value){
                root = root.right
                distance++
            }
            else{
                break
            }
        }
        return distance
    }

    findLCA(root,n1,n2){
        if(!root){
            return null
        }

        while(root){
            if(n1 < root.value && n2 < root.value){
                root = root.left
            }
            else if(n1 > root.value && n2 > root.value){
                root = root.right
            }
            else{
                return root
            }
        }
    }

    findPath(root,target){
        if(!root){
            return []
        }

        let result = []

        while(root){
            result.push(root.value)
            if(target < root.value){
                root = root.left
            }
            else if(target > root.value){
                root = root.right
            }
            else{
                break
            }
        }
        return result
    }

    findDistanceBetweenTwoNodes(n1,n2){
        let lca = this.findLCA(this.root,n1,n2)

        if(!lca){
            return 0
        }

        let distance1 = this.findDistance(lca,n1)
        let distance2 = this.findDistance(lca,n2)

        return distance1 + distance2
    }

    findPathBetweenTwoNodes(n1,n2){
        let lca = this.findLCA(this.root,n1,n2)

        if(!lca){
            return []
        }

        let path1 = this.findPath(lca,n1)
        let path2 = this.findPath(lca,n2)

        path1.pop()
        path2.reverse()
        return [...path1,...path2]
    }

    countNode(root){
        if(!root){
            return 0
        }

        return 1+this.countNode(root.left)+this.countNode(root.right)
    }

    countLeftsubtreeNode(root){
        if(!root){
            return 0
        }
        return this.countNode(root.left)
    }

    countRightsubtreeNode(root){
        if(!root){
            return 0
        }
        return this.countNode(root.right)
    }

    countTwoChildNode(root){
        if(!root){
            return 0
        }

        let count = 0

        function preOrder(root){
            if(root){
                if(root.left && root.right){
                    count++
                }
                preOrder(root.left)
                preOrder(root.right)
            }
        }

        preOrder(root)

        return count
    }

    countOneChildNode(root){
        if(!root){
            return 0
        }

        let count = 0 
        
        function preOrder(root){
            if(root){
                if((!root.left && root.right) || (root.left && !root.right)){
                    count++
                }
                preOrder(root.left)
                preOrder(root.right)
            }
        }

        preOrder(root)
        return count
    }

    printLeftSubtree(root){
        if(!root){
            return []
        }

        function leftSubtree(root,result=[]){
            if(root){
                leftSubtree(root.left,result)
                result.push(root.value)
                leftSubtree(root.right,result)
            }
            return result
        }

        let result = leftSubtree(root.left)
        return result
    }

    printRightSubtree(root){
        if(!root){
            return []
        }

        function rightSubtree(root,result=[]){
            if(root){
                rightSubtree(root.left,result)
                result.push(root.value)
                rightSubtree(root.right,result)
            }
            return result
        }

        let final = rightSubtree(root.right)
        return final
    }
}

// ====================== TEST CASES ======================

const bst = new Bst()

// Insert nodes
;[50, 30, 70, 20, 40, 60, 80, 30].forEach(v => bst.insert(v))

console.log("Is Empty:", bst.isEmpty()) // false

// Search
console.log("Search 40:", bst.search(bst.root, 40)) // true
console.log("Search 100:", bst.search(bst.root, 100)) // false

// Traversals
console.log("InOrder:")
bst.inOrder(bst.root) // 20 30 30 40 50 60 70 80

console.log("PreOrder:")
bst.preOrder(bst.root)

console.log("PostOrder:")
bst.postOrder(bst.root)

console.log("LevelOrder:")
bst.levelOrder(bst.root)

// Min / Max
console.log("Min:", bst.min(bst.root)) // 20
console.log("Max:", bst.max(bst.root)) // 80

// Delete
bst.delete(20)
console.log("After deleting 20:")
bst.inOrder(bst.root)

// Prime nodes
console.log("Prime Nodes:", bst.findPrimes(bst.root)) // [29-like primes]

// BST validation
console.log("Is BST:", bst.isBst(bst.root)) // true

// Kth smallest / largest
console.log("3rd Smallest:", bst.findKthSmallest(bst.root, 3))
console.log("2nd Largest:", bst.findKthLargest(bst.root, 2))

// Closest
console.log("Closest to 65:", bst.findClosest(bst.root, 65)) // 60 or 70

// Successor / Predecessor
console.log("Successor of 40:", bst.findSuccessor(bst.root, 40))
console.log("Predecessor of 40:", bst.findPredecessor(bst.root, 40))

// Remove duplicates
bst.removeDuplicates(bst.root)
console.log("After removing duplicates:")
bst.inOrder(bst.root)

// Height
console.log("Height:", bst.findHeight(bst.root))

// Parent
console.log("Parent of 60:", bst.findParent(bst.root, 60))

// Children
console.log("Children of 70:", bst.findChildren(bst.root, 70))

// Sibling
console.log("Sibling of 60:", bst.findSiblings(bst.root, 60))

// Leaf nodes
console.log("Leaf Nodes:", bst.findLeafNode(bst.root))

// Ancestors
console.log("Ancestors of 80:", bst.findAncestor(bst.root, 80))

// Descendants
console.log("Descendants of 30:", bst.findDescendants(bst.root, 30))

// Degree
console.log("Degree of 50:", bst.findDegree(bst.root, 50))

// Depth & Distance
console.log("Depth of 80:", bst.findDepth(bst.root, 80))
console.log("Distance to 80:", bst.findDistance(bst.root, 80))

// LCA
console.log("LCA of 40 & 60:", bst.findLCA(bst.root, 40, 60).value)

// Distance between nodes
console.log(
  "Distance between 40 & 80:",
  bst.findDistanceBetweenTwoNodes(40, 80)
)

// Path between nodes
console.log(
  "Path between 40 & 80:",
  bst.findPathBetweenTwoNodes(40, 80)
)

// Counts
console.log("Total Nodes:", bst.countNode(bst.root))
console.log("Left Subtree Count:", bst.countLeftsubtreeNode(bst.root))
console.log("Right Subtree Count:", bst.countRightsubtreeNode(bst.root))
console.log("Two Child Nodes:", bst.countTwoChildNode(bst.root))
console.log("One Child Nodes:", bst.countOneChildNode(bst.root))

// Subtrees
console.log("Left Subtree:", bst.printLeftSubtree(bst.root))
console.log("Right Subtree:", bst.printRightSubtree(bst.root))

// ====================== END ======================
