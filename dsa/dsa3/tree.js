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
        else if(value == root.value){
            return true
        }
        else if(value < root.value){
            return this.search(root.left,value)
        }else{
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

    minNode(root){
        if(!root){
            return null
        }

        while(root.left){
            root = root.left
        }

        return root.value
    }

    maxNode(root){
        if(!root){
            return null
        }

        while(root.right){
            root = root.right
        }

        return root.value
    }

    // minNode(root){
    //     if(!root.left){
    //         return root
    //     }

    //     return this.minNode(root.left).value
    // }

    // maxNode(root){
    //     if(!root.right){
    //         return root
    //     }
    //     return this.maxNode(root.right).value
    // }

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

            root.value = this.minNode(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    checkPrime(val){
        if(val <= 1){
            return false
        }

        for(let i=2;i<=Math.floor(val/2);i++){
            if(val % i == 0){
                return false
            }
        }

        return true
    }

    findPrime(root,result=[]){
        if(root){
            this.findPrime(root.left,result)
            if(this.checkPrime(root.value)){
                result.push(root.value)
            }
            this.findPrime(root.right,result)
        }
        return result
    }

    isBst(root,min=null,max=null){
        if(!root){
            return true
        }

        if((min != null && root.value <= min) || (max != null && root.value >= max)){
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

        return (tree1.value == tree2.value)&& this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
    }

    findKthSmallest(root,k){
        if(!root){
            return null
        }

        let count = 0
        let result = null
        function inOrder(node){
            if(node){
                inOrder(node.left)
                count++
                if(count == k){
                    result = node.value
                    return
                }
                inOrder(node.right)
            }
        }

        inOrder(root)
        return result
    }

    findKthLargest(root,k){
        if(!root){
            return null
        }

        let count = 0
        let result = null
        function inOrder(node){
            if(node){
                inOrder(node.right)
                count++
                if(count == k){
                    result = node.value
                    return
                }
                inOrder(node.left)
            }
        }
        inOrder(root)
        return result
    }

    successor(root,key,succ = null){
        if(!root){
            return succ
        }

        if(key < root.value){
            succ = root.value
            return this.successor(root.left,key,succ)
        }
        else if(key > root.value){
            return this.successor(root.right,key,succ)
        }
        else{
            if(root.right){
                return this.minNode(root.right)
            }
        }
        return succ
    }

    predecessor(root,key,pre = null){
        if(!root){
            return pre
        }

        if(key > root.value){
            pre = root.value
            return this.predecessor(root.right,key,pre)
        }
        else if(key < root.value){
            return this.predecessor(root.left,key,pre)
        }else{
            if(root.left){
                return this.maxNode(root.left)
            }
        }
        return pre
    }

    closest(root,target,closest = null){
        if(!root){
            return closest
        }

        if(closest == null || Math.abs(root.value - target) < Math.abs(closest - target)){
            closest = root.value
        }

        if(target < root.value){
            return this.closest(root.left,target,closest)
        }
        else if(target > root.value){
            return this.closest(root.right,target,closest)
        }
        else{
            return root.value
        }
    }

    removeDuplicates(){

        function inOrder(root,valueSet = new Set()){
            if(root){
                inOrder(root.left,valueSet)
                valueSet.add(root.value)
                inOrder(root.right,valueSet)
            }

            return valueSet
        }

        let result = inOrder(this.root)
        this.root = null
        
        for(let val of result){
            this.insert(val)
        }
    }

    findParents(root,target){
        let parent = null
        while(root && root.value != target){
            parent = root
            if(target < root.value){
                root = root.left
            }else{
                root = root.right
            }
        }
        return parent
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

    findSiblings(root,target){
        if(!root){
            return
        }

        while(root){
            if(root.left && root.left.value == target){
                return root.right ? root.right.value : null
            }

            if(root.right && root.right.value == target){
                return root.left ? root.left.value : null
            }

            if(target < root.value){
                root = root.left
            }else{
                root = root.right
            }
        }
    }

    findLeafNodes(root,result=[]){
        if(root){
            if(!root.left && !root.right){
                result.push(root.value)
            }
            this.findLeafNodes(root.left,result)
            this.findLeafNodes(root.right,result)
        }
        return result
    }

    findAncestors(root){
        let ancestors = []

        while(root && root.value != target){
            ancestors.push(root.value)
            if(target < root.value){
                root = root.left
            }else{
                root = root.right
            }
        }

        return ancestors
    }

    
}

// ===== CREATE BST =====
const b = new bst()

b.insert(10)
b.insert(5)
b.insert(20)
b.insert(1)
b.insert(7)
b.insert(15)
b.insert(30)

/*
Tree structure:
          10
        /    \
       5      20
      / \    /  \
     1   7  15  30
*/

// ===== BASIC CHECKS =====
console.log("Is Empty:", b.isEmpty()) // false

// ===== SEARCH =====
console.log("Search 7:", b.search(b.root, 7))     // true
console.log("Search 100:", b.search(b.root, 100)) // null

// ===== TRAVERSALS =====
console.log("\nInorder Traversal (Sorted):")
b.inOrder(b.root) // 1 5 7 10 15 20 30

console.log("\nPreorder Traversal:")
b.preOrder(b.root) // 10 5 1 7 20 15 30

console.log("\nPostorder Traversal:")
b.postOrder(b.root) // 1 7 5 15 30 20 10

console.log("\nLevel Order Traversal:")
b.levelOrder(b.root) // 10 5 20 1 7 15 30

// ===== MIN & MAX =====
console.log("\nMin value:", b.minNode(b.root)) // 1
console.log("Max value:", b.maxNode(b.root))   // 30

// ===== DELETE TESTS =====
b.delete(1) // leaf
console.log("\nAfter deleting 1:")
b.inOrder(b.root) // 5 7 10 15 20 30

b.delete(5) // one child
console.log("\nAfter deleting 5:")
b.inOrder(b.root) // 7 10 15 20 30

b.delete(20) // two children
console.log("\nAfter deleting 20:")
b.inOrder(b.root) // 7 10 15 30

// ===== PRIME NUMBERS =====
console.log("\nPrime numbers in BST:")
console.log(b.findPrime(b.root)) // [7]

// ===== CHECK BST =====
console.log("\nIs valid BST:", b.isBst(b.root)) // true

// ===== IDENTICAL TREE =====
const b2 = new bst()
b2.insert(10)
b2.insert(7)
b2.insert(30)
b2.insert(15)

console.log("\nIs Identical:", b.isIdentical(b.root, b2.root)) // true

// ===== KTH SMALLEST & LARGEST =====
console.log("\nKth Smallest:")
console.log("1st:", b.findKthSmallest(b.root, 1)) // 7
console.log("3rd:", b.findKthSmallest(b.root, 3)) // 15

console.log("\nKth Largest:")
console.log("1st:", b.findKthLargest(b.root, 1)) // 30
console.log("2nd:", b.findKthLargest(b.root, 2)) // 15

// ===== SUCCESSOR & PREDECESSOR =====
console.log("\nSuccessor of 10:", b.successor(b.root, 10))     // 15
console.log("Predecessor of 10:", b.predecessor(b.root, 10)) // 7

console.log("Successor of 30:", b.successor(b.root, 30))     // null
console.log("Predecessor of 7:", b.predecessor(b.root, 7))  // null

// ===== CLOSEST VALUE =====
console.log("\nClosest to 6:", b.closest(b.root, 6))   // 7
console.log("Closest to 14:", b.closest(b.root, 14)) // 15
console.log("Closest to 28:", b.closest(b.root, 28)) // 30
console.log("Closest to 10:", b.closest(b.root, 10)) // 10

// ===== EDGE CASE: EMPTY TREE =====
const emptyTree = new bst()
console.log("\nEmpty tree search:", emptyTree.search(emptyTree.root, 5)) // null
console.log("Empty tree kth:", emptyTree.findKthSmallest(emptyTree.root, 1)) // null
console.log("Empty tree closest:", emptyTree.closest(emptyTree.root, 10)) // null

const c = new bst()
c.insert(10)
c.insert(10)
c.insert(5)
c.insert(5)
c.insert(20)

c.removeDuplicates()

c.inOrder(c.root)
// Output:
// 5
// 10
// 20
