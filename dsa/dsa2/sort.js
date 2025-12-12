// function bubbleSort(arr){
//     let swapped = true

//     while(swapped){
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 swapped = true
//             }
//         }
//     }
//     return arr
// }

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let cur = arr[i]
//         let j = i - 1

//         while(j>=0 && arr[j] > cur){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = cur
//     }
//     return arr
// }

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let minElement = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minElement] > arr[j]){
//                 minElement = j
//             }
//         }
//         [arr[minElement],arr[i]] = [arr[i],arr[minElement]]
//     }
//     return arr
// }

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArr = arr.slice(0,mid)
//     let rightArr = arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Sort by Frequency

// Given an array, sort elements by frequency (most frequent first).
// If two elements have the same frequency → smaller value first.

// Example:
// Input: [4,4,1,2,1,1,3]
// Output: [1,1,1,4,4,2,3]

// let arr = [4,4,1,2,1,1,3]

// let freqMap = {}

// for(let val of arr){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val]=1
//     }
// }

// let values = Object.entries(freqMap)

// values.sort((a,b)=>{
//     if(a[1] == b[1]){
//        return a[0]-b[0]
//     }else{
//        return b[1]-a[1]
//     }
// })

// let newArr = []

// for(let val of values){
//     let n = val[1]
//     for(let i=1;i<=n;i++){
//         newArr.push(Number(val[0]))
//     }
// }

// console.log(newArr)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Sort by Absolute Value

// Sort array based on absolute values, but keep negative/positive signs.

// Example:
// Input: [2, -7, 3, -2, 5]
// Output: [2, -2, 3, 5, -7]

// let arr = [2, -7, 3, -2, 5]

// let swapped = true

// while(swapped){
//     swapped = false
//     for(let i=0;i<arr.length-1;i++){
//         if(Math.abs(arr[i]) > Math.abs(arr[i+1])){
//             [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//             swapped = true
//         }
//     }
// }

// console.log(arr)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Sort Strings by Length

// Given an array of strings, sort them by length.
// If equal length → sort lexicographically.

//Input : ["apple", "bat", "car", "a", "dog"]

//output : ["a", "bat", "car", "dog", "apple"]

// let str = ["apple", "bat", "car","set", "a", "dog"]

// str.sort((a,b)=>{
//     if(a.length == b.length){
//         return a.localeCompare(b)
//     }else{
//        return a.length-b.length
//     }
// })

// console.log(str)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Can Arrange to Form a Triangle?

// Given 3 sticks lengths, check if sorting + triangle property works.

// Input: [5, 10, 7] → after sorting [5,7,10] → check if 5+7 > 10.

// let arr = [5,10,7]

// arr.sort((a,b)=>a-b)

// console.log((arr[0]+arr[1]) > arr[2])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  5. Check If Two Words Are Anagrams Sort characters of both strings and compare.

// Input:
// s1 = "listen"
// s2 = "silent"


// let s1 = "listen"
// let s2 = "silent"

// console.log(s1.split('').sort().join("") == s2.split('').sort().join(""))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 6. K-th Smallest Element Without Sorting Fully

// Find the k-th smallest element using modified quicksort (Quickselect concept)

// Input:
// arr = [7, 10, 4, 3, 20, 15]
// k = 3

// Expected Output:
// 7

// Reason: Sorted form is [3,4,7,10,15,20], the 3rd smallest is 7.


// let arr = [7, 10, 4, 3, 20, 15]
// let k = 5

// function quickSelect(arr,k){
//     if(arr.length == 1){
//         return arr[0]
//     }

//     let pivot = arr[arr.length-1]
//     let leftArr = []
//     let rightArr = []

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     if(leftArr.length == k-1){
//         return pivot
//     }
//     else if(leftArr.length >= k){
//         return quickSelect(leftArr,k)
//     }
//     else{
//         return quickSelect(rightArr,k-leftArr.length-1)
//     }
// }

// console.log(quickSelect(arr,k))

//fully sorted answer

// arr.sort((a,b)=>a-b)

// console.log(arr[k-1])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Relative Sorting

// Sort array A based on order given by array B.

// Example:
// A = [2, 1, 2, 5, 7, 1, 9]
// B = [2, 1, 8]

// Output: [2,2,1,1,5,7,9]
// (2s first → 1s → rest sorted normally)

// let A = [2,1,2,5,7,1,9]
// let B = [2,1,8]

// let start = 0
// let index = 0

// while(start != B.length){
//     let take = B[start]
//     for(let i=0;i<A.length;i++){
//         if(A[i] == take){
//             [A[i],A[index]] = [A[index],A[i]]
//             index++
//         }
//     }
//     start++
// }

// let rest = A.slice(index).sort((a,b)=>a-b)

// A = A.slice(0,index).concat(rest)

// console.log(A)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8. Group Anagrams

// Given a list of strings, group them by sorting chars.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]

// let strings = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let result = []

// let seen = new Set()

// for(let i=0;i<strings.length;i++){
//     let take = strings[i].split('').sort().join("")
//     if(seen.has(take)){
//         continue
//     }
//     let group = []
//     for(let j=i;j<strings.length;j++){
//         let take2 = strings[j].split('').sort().join("")
//         if(take == take2){
//             group.push(strings[j])
//         }
//     }
//     result.push(group)
//     seen.add(take)
// }

// console.log(result)

//Alternate efficient way

// let strings = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let map = new Map()

// for(let s of strings){
//     let k = s.split('').sort().join('')
//     if(map.has(k)){
//         map.get(k).push(s)
//     }else{
//         map.set(k,[s])
//     }
// }

// console.log(Array.from(map.values()))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 9. Sort 0s, 1s, 2s Without Full Sort (Dutch Flag Problem)

// Classic logic question.

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// But must sort in one pass.

// split into three region left will contain 0 middle will contain 1 and right will contatin 2

// let arr = [2,0,2,1,1,0]

// let low = 0
// let mid = 0
// let high = arr.length - 1

// while(mid <= high){
//     if(arr[mid] == 0){
//         [arr[low],arr[mid]] = [arr[mid],arr[low]]
//         low++
//         mid++
//     }
//     else if(arr[mid]==1){
//         mid++
//     }
//     else{
//         [arr[mid],arr[high]] = [arr[high],arr[mid]]
//         high--
//     }
// }

// console.log(arr)

//full sort

// arr.sort((a,b)=>a-b)
// console.log(arr)