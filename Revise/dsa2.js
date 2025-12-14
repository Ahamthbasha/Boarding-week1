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
//     for(let i=1;i<arr.length;i++){
//         let cur = arr[i]
//         let j = i-1

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
//                 j = minElement
//             }
//         }
//         let temp = arr[i]
//         arr[i] = arr[minElement]
//         arr[minElement] = temp
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
//         }
//         else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }


// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid = Math.floor(arr.length / 2)
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


// // Input: [4,4,1,2,1,1,3]
// // Output: [1,1,1,4,4,2,3]

// let arr = [4,4,1,2,1,1,3]

// let freqMap = {}

// for(let val of arr){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val] = 1
//     }
// }

// let result = []

// let takeCountedResult = Object.entries(freqMap)

// takeCountedResult.sort((a,b)=>{
//     if(a[1] == b[1]){
//         return a - b
//     }
//     return b[1] - a[1]
// })

// for(let [no,value] of takeCountedResult){
//     for(let i=0;i<value;i++){
//         result.push(Number(no))
//     }
// }

// console.log(result)


// // Sort array based on absolute values, but keep negative/positive signs.

// // Example:
// // Input: [2, -7, 3, -2, 5]
// // Output: [2, -2, 3, 5, -7]

// let absArr = [2,-7,3,-2,5]

// let swapped = true

// while(swapped){
//     swapped = false
//     for(let i=0;i<absArr.length-1;i++){
//         if(Math.abs(absArr[i]) > Math.abs(absArr[i+1])){
//             [absArr[i],absArr[i+1]] = [absArr[i+1],absArr[i]]
//             swapped = true
//         }
//     }
// }

// console.log(absArr)


// let givenArr = ["apple", "bat", "car", "a", "dog"]

// givenArr.sort((a,b)=>{
//     if(a.length == b.length){
//         return a.localeCompare(b)
//     }
//     return a.length - b.length
// })

// console.log(givenArr)

// let triArr = [5,10,7]

// triArr.sort((a,b)=>a-b)

// console.log((triArr[0]+triArr[1]) > triArr[2])

// let anagramStr1 = "listen"
// let anagramStr2 = "silent"

// console.log(anagramStr1.split("").sort().join("") == anagramStr2.split("").sort().join(""))


// let findKElement = [7, 10, 4, 3, 20, 15]
// let k = 4

// function quickSelect(arr,k){
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

//     if(leftArr.length == k - 1){
//         return pivot
//     }
//     else if(leftArr.length >= k){
//         return quickSelect(leftArr,k)
//     }
//     else{
//         return quickSelect(rightArr,k-leftArr.length-1)
//     }
// }

// console.log(quickSelect(findKElement,k))

// A = [2, 1, 2, 5, 7, 1, 9]
// B = [2, 1, 8]

// let A = [2,1,2,5,7,1,9]
// let B = [2,1,8]

// let index = 0
// let startCycle = 0

// while(startCycle != B.length){
//     for(let i=0;i<A.length-1;i++){
//         if(B[startCycle] == A[i]){
//             [A[i],A[index]] = [A[index],A[i]]
//             index++
//         }
//     }
//     startCycle++
// }

// let rest = A.slice(index).sort((a,b)=>a-b)
// A = A.slice(0,index).concat(rest)
// console.log(A)

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let groupAnagram = {}

// for(let val of arr){
//     let key = val.split('').sort().join('')
//     if(groupAnagram[key]){
//         groupAnagram[key].push(val)
//     }else{
//         groupAnagram[key] = [val]
//     }
// }

// let final = []

// for(let key in groupAnagram){
//     if(groupAnagram[key]){
//         final.push(groupAnagram[key])
//     }
// }

// console.log(final)

// Input: [2,0,2,1,1,0]

let arr = [2,0,2,1,1,0]


let low = 0
let mid = 0
let high = arr.length - 1

while(mid <= high){
    if(arr[mid] == 0){
        [arr[low],arr[mid]] = [arr[mid],arr[low]]
        low++
        mid++
    }
    else if(arr[mid] == 1){
        mid++
    }
    else{
        [arr[mid],arr[high]] = [arr[high],arr[mid]]
        high--
    }
}

console.log(arr)