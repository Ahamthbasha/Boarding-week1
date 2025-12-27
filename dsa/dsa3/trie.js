class Node{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let node = this.root

        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }

        node.isEndOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startsWith(word){
        let node = this.root

        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }

        return true
    }

    autoComplete(word){
        let node = this.root

        for(let char of word){
            if(!node.children[char]){
                return []
            }
            node = node.children[char]
        }

        return this.collectWord(node,word)
    }

    collectWord(node,word,result=[]){
        if(node.isEndOfWord){
            result.push(word)
        }

        for(let char in node.children){
            this.collectWord(node.children[char],word+char,result)
        }

        return result
    }

    delete(word){
        let node = this.root
        let path = []
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            path.push([node,char])
            node = node.children[char]
        }

        if(!node.isEndOfWord){
            return false
        }
        node.isEndOfWord = false

        for(let i=path.length-1;i>=0;i--){
            let [parent,char] = path[i]
            let childNode = parent.children[char]
            if(Object.keys(childNode.children).length > 0 || childNode.isEndOfWord){
                break
            }

            delete parent.children[char]
        }

        return true
    }
}

const trie = new Trie()

// ================= INSERT =================
trie.insert("apple")
trie.insert("app")
trie.insert("apex")
trie.insert("bat")
trie.insert("ball")
trie.insert("bats")

// ================= SEARCH =================
console.log(trie.search("apple")) // true
console.log(trie.search("app"))   // true
console.log(trie.search("ap"))    // false
console.log(trie.search("bat"))   // true
console.log(trie.search("bad"))   // false

// ================= PREFIX =================
console.log(trie.startsWith("ap"))  // true
console.log(trie.startsWith("ba"))  // true
console.log(trie.startsWith("cat")) // false

// ================= AUTOCOMPLETE =================
console.log(trie.autoComplete("ap"))
// ["app", "apple", "apex"]

console.log(trie.autoComplete("ba"))
// ["bat", "ball", "bats"]

console.log(trie.autoComplete("cat"))
// []

// ================= DELETE =================
console.log(trie.delete("app"))   // true
console.log(trie.search("app"))   // false
console.log(trie.search("apple")) // true (should still exist)

console.log(trie.delete("apple")) // true
console.log(trie.search("apple")) // false

console.log(trie.delete("ap"))    // false (prefix only)

console.log(trie.delete("bat"))   // true
console.log(trie.search("bat"))   // false
console.log(trie.search("bats"))  // true (shared prefix intact)

// ================= FINAL AUTOCOMPLETE =================
console.log(trie.autoComplete("ba"))
// ["ball", "bats"]
