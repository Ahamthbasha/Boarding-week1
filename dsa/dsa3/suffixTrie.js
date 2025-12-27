class Node{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class SuffixTrie{
    constructor(){
        this.root = new Node()
    }

    buildSuffixTrie(word){
        for(let i=0;i<word.length;i++){
            this.insert(word.slice(i))
        }
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

        return true
    }
}

const st = new SuffixTrie()
st.buildSuffixTrie("banana")

console.log(st.search("ban"))  // true
console.log(st.search("ana"))  // true
console.log(st.search("nan"))  // true
console.log(st.search("nana")) // true

console.log(st.search("apple")) // false
console.log(st.search("nab"))   // false
