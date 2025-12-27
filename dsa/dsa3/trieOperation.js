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

    countWords(){
        let count = 0
        function dfs(node){
            if(node.isEndOfWord){
                count++
            }
            for(let char in node.children){
                dfs(node.children[char])
            }
        }
        dfs(this.root)
        return count
    }

    countPrefixWord(word){
        let node = this.root

        for(let char of word){
            if(!node.children[char]){
                return 0
            }
            node = node.children[char]
        }

        let count = 0

        function dfs(node){
            if(node.isEndOfWord){
                count++
            }

            for(let char in node.children){
                dfs(node.children[char])
            }
        }
        dfs(node)
        return count
    }

    longestPrefix(word){
        let node = this.root
        let longestPrefix = ''

        for(let char of word){
            if(!node.children[char]){
                break
            }

            longestPrefix += char
            node = node.children[char]
        }
        return longestPrefix
    }
}

const trie = new Trie()

trie.insert("apple")
trie.insert("app")
trie.insert("apex")
trie.insert("bat")
trie.insert("ball")

// Total words
console.log(trie.countWords()) // 5

// Prefix count
console.log(trie.countPrefixWord("ap"))  // 3
console.log(trie.countPrefixWord("ba"))  // 2
console.log(trie.countPrefixWord("bat")) // 1
console.log(trie.countPrefixWord("z"))   // 0

// Longest prefix
console.log(trie.longestPrefix("application")) // "appl"
console.log(trie.longestPrefix("batman"))      // "bat"
console.log(trie.longestPrefix("cat"))         // ""
