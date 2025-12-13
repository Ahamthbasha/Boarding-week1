// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     index(key){
//         let total = 0

//         for(let val of key){
//             total += val.charCodeAt()
//         }

//         return total % this.size
//     }

//     set(key,values){
//         let index = this.index(key)
//         this.table[index] = values
//     }

//     get(key){
//         let index = this.index(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index = this.index(key)
//         this.table[index] = undefined
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const ht = new Hashtable(10);

// ht.set("name", "Dragon");
// ht.set("age", 25);
// ht.set("city", "Delhi");

// console.log(ht.get("name")); // Dragon
// console.log(ht.get("age"));  // 25

// ht.remove("age");
// console.log(ht.get("age"));  // undefined

// ht.print();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//separate chaining

// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     getIndex(key){
//         let total = 0

//         for(let val of key){
//             total += val.charCodeAt()
//         }

//         return total % this.size
//     }

//     set(key,value){
//         let index = this.getIndex(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             let sameKey = bucket.find((item)=>item[0] == key)
//             if(sameKey){
//                 sameKey[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index = this.getIndex(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let value = bucket.find((item)=>item[0] == key)
//             return value ? value[1] :undefined
//         }
//         else{
//             return undefined
//         }
//     }

//     remove(key){
//         let index = this.getIndex(key)
//         let bucket = this.table[index]

//         if(bucket){
//             let finalIndex = bucket.findIndex((item)=>item[0] == key)
//             if(finalIndex != -1){
//                 bucket.splice(finalIndex,1)
//             }
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

//     findDuplicates(){
//         let valueMap = {}
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     if(valueMap[value]){
//                         valueMap[value]++
//                     }else{
//                         valueMap[value] = 1
//                     }
//                 }
//             }
//         }
//         let result = []
//         for(let value in valueMap){
//             if(valueMap[value] > 1){
//                 result.push(value)
//             }
//         }

//         return result
//     }

//     removeDuplicateByValue(){
//         let seen = new Set()
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 let newBucket = []
//                 for(let [key,value] of bucket){
//                     if(!seen.has(value)){
//                         seen.add(value)
//                         newBucket.push([key,value])
//                     }
//                 }
//                 this.table[i] = newBucket.length > 0 ? newBucket : undefined
//             }
//         }
//     }

//     removeDuplicateByKey(){
//         let seen = new Set()
//         for(let i=0;i<this.table.length;i++){
//             let bucket = this.table[i]
//             if(bucket){
//                 let newBucket = []
//                 for(let [key,value] of bucket){
//                     if(!seen.has(key)){
//                         seen.add(key)
//                         newBucket.push([key,value])
//                     }
//                 }
//                 this.table[i] = newBucket.length > 0 ? newBucket : undefined
//             }
//         }
//     }

//     findDuplicatesFromInput(input){
//         let variable = Array.isArray(input) ? input : input.split('')

//         let tempTable = new Hashtable(50)

//         for(let val of variable){
//             let key = val.toString()
//             let getCount = tempTable.get(key) || 0
//             tempTable.set(key,getCount+1)
//         }

//         let duplicates = []

//         for(let i=0;i<tempTable.table.length;i++){
//             let bucket = tempTable.table[i]
//             if(bucket){
//                 for(let [key,count] of bucket){
//                     if(count > 1){
//                         duplicates.push(key)
//                     }
//                 }
//             }
//         }

//         return duplicates
//     }

//     getUniqueValuesOrRemoveDuplicates(input){
//         const variable = Array.isArray(input) ? input  : input.split('')
//         let tempTable = new Hashtable(50)

//         for(let val of variable){
//             let key = val.toString()
//             let getCount = tempTable.get(key) || 0
//             tempTable.set(key,getCount+1)
//         }

//         let uniqueValues = []
//         let removedDuplicates = []
//         let seen = new Set()
//         for(let i=0;i<tempTable.table.length;i++){
//             let bucket = tempTable.table[i]
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     if(value == 1){
//                         uniqueValues.push(key)
//                     }

//                     if(!seen.has(key)){
//                         seen.add(key)
//                         removedDuplicates.push(key)
//                     }
//                 }
//             }
//         }
//         return {uniqueValues,removedDuplicates}
//     }

//     nthMostFreq(input,n){
//         let variable = Array.isArray(input) ? input : input.split('')

//         let temp = new Hashtable(50)

//         for(let val of variable){
//             let key = val.toString()
//             let getCount = temp.get(key) || 0
//             temp.set(key,getCount+1)
//         }

//         let result = []

//         for(let i=0;i<temp.table.length;i++){
//             let bucket = temp.table[i]
//             if(bucket){
//                 for(let val of bucket){
//                     result.push(val)
//                 }
//             }
//         }

//         result.sort((a,b)=>b[1]-a[1])

//         return result[n-1] || null
//     }
// }

// // ===== CREATE TABLE =====
// const ht = new Hashtable(10)

// // ===== SET / GET =====
// ht.set("name", "Dragon")
// ht.set("age", 25)
// ht.set("name", "Updated")

// console.log(ht.get("name")) // Updated
// console.log(ht.get("age"))  // 25

// // ===== COLLISION =====
// ht.set("ab", 1)
// ht.set("ba", 2)

// console.log(ht.get("ab")) // 1
// console.log(ht.get("ba")) // 2

// // ===== REMOVE =====
// ht.remove("age")
// console.log(ht.get("age")) // undefined

// // ===== PRINT =====
// console.log("PRINT TABLE")
// ht.print()

// // ===== FIND DUPLICATE VALUES =====
// const ht2 = new Hashtable(10)
// ht2.set("a", 1)
// ht2.set("b", 2)
// ht2.set("c", 1)
// ht2.set("d", 3)
// ht2.set("e", 2)

// console.log("Duplicate values:", ht2.findDuplicates()) 
// // ['1','2']

// // ===== REMOVE DUPLICATE VALUES =====
// ht2.removeDuplicateByValue()
// console.log("After removeDuplicateByValue:")
// ht2.print()

// // ===== DEFENSIVE REMOVE DUPLICATE KEYS =====
// const ht3 = new Hashtable(10)
// ht3.table[1] = [["x",1], ["x",2], ["y",3]]

// ht3.removeDuplicateByKey()
// console.log("After removeDuplicateByKey:")
// ht3.print()

// // ===== FIND DUPLICATES FROM INPUT =====
// console.log(
//   ht.findDuplicatesFromInput("aabbccddee")
// ) // ['a','b','c','d','e']

// // ===== UNIQUE + REMOVE DUPLICATES =====
// console.log(
//   ht.getUniqueValuesOrRemoveDuplicates("aabbcd")
// )
// /*
// {
//   uniqueValues: ['c','d'],
//   removedDuplicates: ['a','b','c','d']
// }
// */

// // ===== NTH MOST FREQUENT =====
// console.log(
//   ht.nthMostFreq("aabbcccdddde", 1)
// ) // ['d',4]

// console.log(
//   ht.nthMostFreq("aabbcccdddde", 2)
// ) // ['c',3]

// console.log(
//   ht.nthMostFreq("aabbcccdddde", 5)
// ) // null
