class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class bst{
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
        }else{
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
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        else if(root.value == value){
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
        if(!root){
            return null
        }

        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(!root){
            return null
        }

        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(!root){
            return null
        }

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

    isPrime(val){
        if(val <= 1){
            return false
        }

        for(let i=2;i<=Math.sqrt(val);i++){
            if(val % i == 0){
                return false
            }
        }

        return true
    }

    findPrimes(root,result=[]){
        if(!root){
            return result
        }

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

        if(root.value <= min || root.value >= max){
            return false
        }

        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
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

    findKthSmallest(root,k){
        let count = 0 
        let result = null
        function inOrder(root){
            if(root){
                inOrder(root.left)
                count++
                if(count == k){
                    result = root.value
                    return
                }
                inOrder(root.right)
            }
        }
        inOrder(root)
        return result
    }

    findKthLargest(root,k){
        let count = 0
        let result = null

        function inOrder(root){
            if(root){
                inOrder(root.right)
                count++
                if(count == k){
                    result = root.value
                    return
                }
                inOrder(root.left)
            }
        }

        inOrder(root)
        return result
    }

    successor(root,key,succ = null){
        if(key < root.value){
            succ = root.value
            return this.successor(root.left,key,succ)
        }
        else if(key > root.value){
            return this.successor(root.right,key,succ)
        }
        else{
            if(root.right){
                return this.min(root.right)
            }
        }
        return succ
    }

    predecessor(root,key,pre = null){
        if(!root){
            return null
        }

        if(key > root.value){
            pre = root.value
            return this.predecessor(root.right,key,pre)
        }
        else if(key < root.value){
            return this.predecessor(root.left,key,pre)
        }
        else{
            if(root.left){
                return this.max(root.left)
            }
        }
        return pre
    }

    closest(root,key,closest = null){
        if(!root){
            return closest
        }

        if(closest == null || Math.abs(root.value - key) < Math.abs(closest - key)){
            closest = root.value
        }

        if(key < root.value){
            return this.closest(root.left,key,closest)
        }
        else if(key > root.value){
            return this.closest(root.right,key,closest)
        }
        else{
            return root.value
        }
    }

    removeDuplicates(){
        function inOrder(root,visitedNode=new Set()){
            if(root){
                inOrder(root.left,visitedNode)
                visitedNode.add(root.value)
                inOrder(root.right,visitedNode)
            }
            return visitedNode
        }

        let result = inOrder(this.root)

        this.root = null

        result.forEach((val)=>{
            this.insert(val)
        })
    }

    findHeight(){
        let queue = []
        queue.push(this.root)
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

    findParent(root,target,parent = null){

        if(!root){
            return null
        }

        if(root.left && root.left.value == target){
            parent = root.value
            return parent
        }

        if(root.right && root.right.value == target){
            parent = root.value
            return parent
        }

        if(target < root.value){
            return this.findParent(root.left,target,parent)
        }
        else{
            return this.findParent(root.right,target,parent)
        }
    }

    findChildren(root,target){
        if(!root){
            return null
        }
        else if(target == root.value){
            const children = {
                leftChildren : root.left ? root.left.value : null,
                rightChildren : root.right ? root.right.value : null
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
            return sibling = root.right ? root.right.value : null
        }

        if(root.right && root.right.value == target){
            return sibling = root.left ? root.left.value : null
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

    ancestor(root,target,result=[]){
        if(!root){
            return null
        }

        while(root && root.value != target){
            result.push(root.value)
            if(target < root.value){
                root = root.left
            }
            else{
                root = root.right
            }
        }

        return root ? result : null
    }

    descendants(root,target){
        if(!root){
            return null
        }

        if(root.value == target){
            let result = []
            this.collectDescendants(root.left,result)
            this.collectDescendants(root.right,result)
            return result
        }
        else if(target < root.value){
            return this.descendants(root.left,target)
        }
        else{
            return this.descendants(root.right,target)
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
            return -1
        }
        let depth = 0
        while(root){
            if(target < root.value){
                root = root.left
            }
            else if(target > root.value){
                root = root.right
            }
            else{
                return depth
            }
            depth++
        }
        return depth
    }

    findDistance(root,target){
        if(!root){
            return -1
        }
        let distance = 0
        while(root){
            if(target < root.value){
                root = root.left
            }
            else if(target > root.value){
                root = root.right
            }
            else{
                return distance
            }
            distance++
        }

        return -1
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
        return null
    }

    path(root,target){
        if(!root){
            return null
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
                return result
            }
        }
        return null

    }

    findDistanceBetweenTwoNodes(n1,n2){
        let lca = this.findLCA(this.root,n1,n2)

        if(!lca){
            return -1
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

        let path1 = this.path(lca,n1)
        let path2 = this.path(lca,n2)
        path1.pop()
        path2.reverse()
        return [...path1,...path2]
    }

    countNode(root){
        if(!root){
            return 0
        }

        return 1 + this.countNode(root.left) + this.countNode(root.right)
    }

    countLeftChildOnlyNode(root){
        if(!root){
            return 0
        }

        let count = 0
        
        if(root.left && !root.right){
            count = 1
        }

        return count + this.countLeftChildOnlyNode(root.left) + this.countLeftChildOnlyNode(root.right)
    }


    countRightChildOnlyNode(root){
        if(!root){
            return 0
        }

        let count = 0

        if(!root.left && root.right){
            count = 1
        }

        return count + this.countRightChildOnlyNode(root.left) + this.countRightChildOnlyNode(root.right)
    }

    countTWoChildrenNode(root){
        if(!root){
            return 0
        }
        let count = 0
        if(root.left && root.right){
           count =  1
        }

        return count + this.countTWoChildrenNode(root.left) + this.countTWoChildrenNode(root.right)
    }

    countOneChildNode(root){
        if(!root){
            return 0
        }

        let count = 0

        if((root.left && !root.right) || (!root.left && root.right)){
            count = 1
        }

        return count + this.countOneChildNode(root.left) + this.countOneChildNode(root.right)
    }

    countLeftSubtreeNode(root){
        if(!root){
            return 0
        }

        return this.countNode(root.left)
    }

    countrightSubtreeNode(root){
        if(!root){
            return 0
        }
        return this.countNode(root.right)
    }

    leftSubtreeNode(root,result=[]){
        if(!root || !root.left){
            return result
        }

        function traverse(node){
            if(node){
                result.push(node.value)
                traverse(node.left)
                traverse(node.right)
            }
        }
        traverse(root.left)
        return result
    }

    rightSubtreeNode(root,result=[]){
        if(!root || !root.right){
            return result
        }

        function traverse(node){
            if(node){
                result.push(node.value)
                traverse(node.left)
                traverse(node.right)
            }
        }
        traverse(root.right)
        return result
    }
}

const tree = new bst()

// Insert values (with duplicates)
;[10, 5, 15, 3, 7, 12, 18, 7, 5].forEach(v => tree.insert(v))

console.log("InOrder (Sorted):")
tree.inOrder(tree.root)
// 3 5 5 7 7 10 12 15 18

console.log("\nPreOrder:")
tree.preOrder(tree.root)

console.log("\nPostOrder:")
tree.postOrder(tree.root)

console.log("\nLevelOrder:")
tree.levelOrder(tree.root)

console.log("\nSearch 7:", tree.search(tree.root, 7))       // true
console.log("Search 100:", tree.search(tree.root, 100))   // false

console.log("\nMin:", tree.min(tree.root)) // 3
console.log("Max:", tree.max(tree.root))   // 18

console.log("\nKth Smallest (3):", tree.findKthSmallest(tree.root, 3)) // 5
console.log("Kth Largest (2):", tree.findKthLargest(tree.root, 2))     // 15

console.log("\nSuccessor of 7:", tree.successor(tree.root, 7)) // 10
console.log("Predecessor of 7:", tree.predecessor(tree.root, 7)) // 5

console.log("\nClosest to 13:", tree.closest(tree.root, 13)) // 12 or 15

console.log("\nLeaf Nodes:", tree.findLeafNode(tree.root)) 
// [3, 7, 12, 18]

console.log("\nHeight:", tree.findHeight()) // 4

console.log("\nParent of 7:", tree.findParent(tree.root, 7)) // 5
console.log("Children of 10:", tree.findChildren(tree.root, 10))
// { leftChildren: 5, rightChildren: 15 }

console.log("\nSibling of 5:", tree.findSiblings(tree.root, 5)) // 15

console.log("\nAncestor of 7:", tree.ancestor(tree.root, 7))
// [10, 5]

console.log("Descendants of 5:", tree.descendants(tree.root, 5))
// [3, 7, 7]

console.log("\nDegree of 10:", tree.findDegree(tree.root, 10)) // 2
console.log("Depth of 12:", tree.findDepth(tree.root, 12)) // 2

console.log("\nLCA of 3 & 7:", tree.findLCA(tree.root, 3, 7).value) // 5
console.log("Distance between 3 & 7:", tree.findDistanceBetweenTwoNodes(3, 7)) // 2

console.log("Path between 3 & 12:", tree.findPathBetweenTwoNodes(3, 12))
// [3,5,10,15,12] OR equivalent valid path

console.log("\nIs BST:", tree.isBst(tree.root)) // true

console.log("\nPrimes in BST:", tree.findPrimes(tree.root))
// [3,5,5,7,7]

// Remove duplicates
tree.removeDuplicates()
console.log("\nAfter Removing Duplicates (InOrder):")
tree.inOrder(tree.root)
// 3 5 7 10 12 15 18

// Delete node
tree.delete(10)
console.log("\nAfter Deleting 10:")
tree.inOrder(tree.root)
// 3 5 7 12 15 18
