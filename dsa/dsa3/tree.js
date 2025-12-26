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
            this.postOrde(root.left)
            this.postOrde(root.right)
            console.log(root.value)
        }
    }

    levelOrder(root){
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


    search(root,value){
        if(!root){
            return null
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
        }else{

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
}


