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

//         while(j >= 0 && arr[j] > cur){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = cur
//     }
//     return arr
// }

// function selectionSort(arr){
//     let minElement

//     for(let i=0;i<arr.length-1;i++){
//         minElement = i
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[j] < arr[minElement]){
//                 minElement = j
//             }
//         }
//         [arr[i],arr[minElement]] = [arr[minElement],arr[i]]
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
//     let leftArr = mergeSort(arr.slice(0,mid))
//     let rightArr = mergeSort(arr.slice(mid))
//     return merge(leftArr,rightArr)
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

// let result = Object.entries(freqMap)

// result.sort((a,b)=>{
//     if(a[1] == b[1]){
//         return a-b
//     }
//     else{
//         return b[1] - a[1]
//     }
// })

// let finalArr = []

// for(let [no,freq] of result){
//     for(let i=0;i<freq;i++){
//         finalArr.push(Number(no))
//     }
// }

// console.log(finalArr)

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

//Input : ["apple", "bat", "car", "a", "dog"]

//output : ["a", "bat", "car", "dog", "apple"]

// let s = ["apple", "bat", "car", "a", "dog"]

// s.sort((a,b)=>{
//     if(a.length == b.length){
//         return a.localeCompare(b)
//     }
//     else{
//         return a.length - b.length
//     }
// })

// console.log(s)

// let arr = [5, 10, 7]

// arr.sort((a,b)=>a-b)

// console.log(arr[0]+arr[1] > arr[2])

// s1 = "listen"
// s2 = "silent"

// let s1 = "listen"
// let s2 = "silent"

// s1 = s1.split("").sort().join("")
// s2 = s2.split("").sort().join("")
// console.log(s1 == s2)

// A = [2, 1, 2, 5, 7, 1, 9]
// B = [2, 1, 8]

// let A = [2,1,2,5,7,1,9]
// let B = [2,1,8]

// let index = 0
// let count = 0
// while(count != B.length){
//     let take = B[count]
//     for(let i=0;i<A.length;i++){
//         if(A[i] == take){
//             let temp = A[index]
//             A[index] = A[i]
//             A[i] = temp
//             index++
//         }
//     }
//     count++
// }

// A = A.slice(0,index).concat(A.slice(index).sort((a,b)=>a-b))

// console.log(A)


// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output:
// [["eat","tea","ate"],["tan","nat"],["bat"]]

// let str = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let freqMap = {}

// for(let val of str){
//     let take = val.split("").sort().join("")
//     if(freqMap[take]){
//         freqMap[take].push(val)
//     }else{
//         freqMap[take]=[val]
//     }
// }

// let final = []

// for(let key in freqMap){
//     final.push(freqMap[key])
// }

// console.log(final)

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// let arr = [2,0,2,1,1,0]

// // arr.sort((a,b)=>a-b)

// let low = 0
// let high = arr.length - 1
// let mid = 0

// while(mid <= high){
//     if(arr[mid] == 0){
//         [arr[low],arr[mid]] = [arr[mid],arr[low]]
//         low++
//         mid++
//     }
//     else if(arr[mid] == 1){
//         mid++
//     }
//     else{
//         [arr[high],arr[mid]] = [arr[mid],arr[high]]
//         high--
//     }
// }

// console.log(arr)

let arr = [7, 10, 4, 3, 20, 15]
let k = 4

function quickSelect(arr,k){
    if(arr.length == 1){
        return arr[0]
    }

    let pivot = arr[arr.length-1]
    let leftArr = []
    let rightArr = []

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }

    if(leftArr.length == k-1){
        return pivot
    }
    else if(leftArr.length >= k){
        return quickSelect(leftArr,k)
    }
    else{
        return quickSelect(rightArr,k-leftArr.length-1)
    }
}

console.log(quickSelect(arr,k))