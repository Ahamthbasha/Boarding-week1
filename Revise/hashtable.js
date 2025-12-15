// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     index(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let getIndex = this.index(key)
//         this.table[getIndex] = value
//     }

//     get(key){
//         let getIndex = this.index(key)
//         return this.table[getIndex] || null
//     }

//     remove(key){
//         let getIndex = this.index(key)
//         if(this.table[getIndex] != undefined){
//             this.table[getIndex] = undefined
//             return 'key removed'
//         }
//         else{
//             return null
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// let ht = new Hashtable(10)

// ht.set("name", "Alice")
// ht.set("age", 25)
// ht.set("city", "Delhi")

// console.log(ht.get("name"))   // Alice
// console.log(ht.get("age"))    // 25
// console.log(ht.get("city"))   // Delhi
// console.log(ht.get("email"))  // null

// ht.print()

// console.log(ht.remove("age")) // key removed
// console.log(ht.get("age"))    // null

// ht.print()


// Hashtable 

class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    index(key){
        let total = 0

        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key,value){
        let getIndex = this.index(key)
        let bucket = this.table[getIndex]

        if(!bucket){
            this.table[getIndex] = [[key,value]]
        }else{
            let sameKey = bucket.find((item)=>item[0] == key)

            if(sameKey){
                sameKey[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let getIndex = this.index(key)

        let bucket = this.table[getIndex]

        if(bucket){
            let value = bucket.find((item)=>item[0] == key)
            return value ? value[1] : null
        }else{
            return null
        }
    }

    remove(key){
        let getIndex = this.index(key)
        let bucket = this.table[getIndex]
        if(bucket){
            let sameIndex = bucket.findIndex((item)=>item[0] == key)

            if(sameIndex != -1){
                return bucket.splice(sameIndex,1)
            }
            else{
                return null
            }
        }else{
            return null
        }
    }

    findDuplicates(){
        let duplicates = []

        for(let i=0;i<this.table.length;i++){
            let bucket = this.table[i]
            if(bucket){
                for(let [key,value] of bucket){
                    if(value > 1){
                        duplicates.push(key)
                    }
                }
            }
        }

        return duplicates
    }

    removeDuplicatesByKey(){
        let seen = new Set()
        for(let i=0;i<this.table.length;i++){
            let bucket = this.table[i]
            let newBucket = []
            if(bucket){
                for(let [key,value] of bucket){
                    if(!seen.has(key)){
                        seen.add(key)
                        newBucket.push([key,value])
                    }
                }
                this.table[i] = newBucket.length > 0 ? newBucket : undefined
            }
        }
    }

    findDuplicatesFromInput(input){
        const arr = Array.isArray(input) ? input : input.split('')

        const tempTable = new Hashtable(50)

        for(let val of arr){
            let key = val.toString()
            let takeCount = tempTable.get(key) || 0
            tempTable.set(key,takeCount+1)
        }

        let duplicates = []

        for(let i=0;i<tempTable.table.length;i++){
            let bucket = tempTable.table[i]
            if(bucket){
                for(let [key,value] of bucket){
                    if(value > 1){
                        if(!duplicates.includes(key)){
                            duplicates.push(key)
                        }
                    }
                }
            }
        }
        return duplicates
    }

    removeDuplicatesFromInput(input){
        const arr = Array.isArray(input) ? input : input.split('')

        const tempTable = new Hashtable(50)

        for(let val of arr){
            let key = val.toString()
            let takeCount = tempTable.get(key) || 0
            tempTable.set(key,takeCount+1)
        }

        const unique =[]
        const duplicatesRemovedVersion = []
        let seen = new Set()

        for(let i=0;i<tempTable.table.length;i++){
            let bucket = tempTable.table[i]
            if(bucket){
                for(let [key,value] of bucket){
                    if(value == 1){
                        unique.push(key)
                    }

                    if(!seen.has(key)){
                        seen.add(key)
                        duplicatesRemovedVersion.push(key)
                    }
                }
            }
        }

        return {unique,duplicatesRemovedVersion}
    }

    nthMostFrequency(input,n){
        const arr = Array.isArray(input) ? input : input.split('')
        const tempTable = new Hashtable(50)

        for(let val of arr){
            let key = val.toString()
            let takeCount = tempTable.get(key) || 0
            tempTable.set(key,takeCount+1)
        }

        let result = []

        for(let i=0;i<tempTable.table.length;i++){
            let bucket = tempTable.table[i]
            if(bucket){
                for(let [key,value] of bucket){
                    result.push([key,value])
                }
            }
        }

        result.sort((a,b)=>b[1]-a[1])


        return result[n-1] || null
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

}
console.log("========== BASIC SET / GET ==========")

const ht = new Hashtable(10)

ht.set("name", "Alice")
ht.set("age", 25)
ht.set("city", "Delhi")

console.log(ht.get("name"))    // Alice
console.log(ht.get("age"))     // 25
console.log(ht.get("city"))    // Delhi
console.log(ht.get("email"))   // null


console.log("\n========== UPDATE EXISTING KEY ==========")

ht.set("age", 30)
console.log(ht.get("age"))     // 30


console.log("\n========== COLLISION HANDLING ==========")

ht.set("eman", "test")         // likely collision with "name"
console.log(ht.get("eman"))    // test
console.log(ht.get("name"))    // Alice


console.log("\n========== REMOVE ==========")

console.log(ht.remove("age"))  // [ [ 'age', 30 ] ]
console.log(ht.get("age"))     // null
console.log(ht.remove("age"))  // null (already removed)
console.log(ht.remove("fake")) // null


console.log("\n========== INTERNAL TABLE STATE ==========")
ht.print()


console.log("\n========== FIND DUPLICATES (HASH TABLE DATA) ==========")

const freqHT = new Hashtable(10)
freqHT.set("a", 4)
freqHT.set("b", 1)
freqHT.set("c", 2)
freqHT.set("d", 1)

console.log(freqHT.findDuplicates()) // ['a','c']


console.log("\n========== REMOVE DUPLICATES BY KEY ==========")

const dupKeyHT = new Hashtable(10)
dupKeyHT.set("x", 10)
dupKeyHT.set("y", 20)
dupKeyHT.set("x", 30) // overwrite
dupKeyHT.set("z", 40)

dupKeyHT.removeDuplicatesByKey()
dupKeyHT.print()
// should still contain x, y, z (hash tables don't allow duplicate keys)


console.log("\n========== FIND DUPLICATES FROM INPUT ==========")

console.log(
  ht.findDuplicatesFromInput("abababababababbabababababab")
) // ['a','b']

console.log(
  ht.findDuplicatesFromInput("abcdef")
) // []


console.log("\n========== REMOVE DUPLICATES FROM INPUT ==========")

console.log(
  ht.removeDuplicatesFromInput("ababababababcccdddddada")
)
// {
//   unique: ['b','c','d' ... depending on frequency],
//   duplicatesRemovedVersion: ['a','b','c','d']
// }

console.log(
  ht.removeDuplicatesFromInput("abc")
)
// { unique: ['a','b','c'], duplicatesRemovedVersion: ['a','b','c'] }


console.log("\n========== Nth MOST FREQUENT ==========")

console.log(
  ht.nthMostFrequency("aaabbcddddd", 1)
) // ['d',5]

console.log(
  ht.nthMostFrequency("aaabbcddddd", 2)
) // ['a',3]

console.log(
  ht.nthMostFrequency("aaabbcddddd", 3)
) // ['b',2]

console.log(
  ht.nthMostFrequency("aaabbcddddd", 4)
) // ['c',1]

console.log(
  ht.nthMostFrequency("aaabbcddddd", 10)
) // null


console.log("\n========== EDGE CASES ==========")

console.log(ht.findDuplicatesFromInput(""))     // []
console.log(ht.removeDuplicatesFromInput(""))   // { unique: [], duplicatesRemovedVersion: [] }
console.log(ht.nthMostFrequency("", 1))         // null
