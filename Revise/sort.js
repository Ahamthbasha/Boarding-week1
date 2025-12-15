// function bubbleSort(arr){
//     let swapped = true
//     while(swapped){
//         swapped = false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] < arr[i+1]){
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
//     for(let i=0;i<arr.length;i++){
//         let minElement = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minElement] > arr[j]){
//                 minElement = j
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

// function DutchAlgo(arr){
//     let low = 0
//     let mid = 0
//     let high = arr.length - 1

//     while(mid <= high){
//         if(arr[mid] == 0){
//             [arr[low],arr[mid]] = [arr[mid],arr[low]]
//             low++
//             mid++
//         }
//         else if(arr[mid] == 1){
//             mid++
//         }
//         else{
//             [arr[mid],arr[high]] = [arr[high],arr[mid]]
//             high--
//         }
//     }
//     return arr
// }








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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
//         let j =i-1

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

//     let pivot = arr[arr.length - 1]
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
//         }
//         else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
    
//     return sortedArr.concat(leftArr,rightArr)
// }


// let arr = [4,4,1,2,1,1,3]

// let freqMap = {}

// for(let val of arr){
//     if(freqMap[val]){
//         freqMap[val]++
//     }else{
//         freqMap[val] = 1
//     }
// }

// let freqMapResult = Object.entries(freqMap)

// freqMapResult.sort((a,b)=>{
//     if(a[1] == b[1]){
//         return a[0] - b[0]
//     }
//     return b[1] - a[1]
// })

// let final = []

// for(let [key,count] of freqMapResult){
//     for(let i=0;i<count;i++){
//         final.push(Number(key))
//     }
// }

// console.log(final)

// let arrSort = [2, -7, 3, -2, 5]

// let swapped = true

// while(swapped){
//     swapped = false
//     for(let i=0;i<arrSort.length-1;i++){
//         if(Math.abs(arrSort[i]) > Math.abs(arrSort[i+1])){
//             [arrSort[i],arrSort[i+1]] = [arrSort[i+1],arrSort[i]]
//             swapped = true
//         }
//     }
// }

// console.log(arrSort)


//  let sortStr = ["apple", "bat", "car", "a", "dog"]

//  sortStr.sort((a,b)=>{
//     if(a.length == b.length){
//         return a.localeCompare(b)
//     }
//     return a.length - b.length
//  })

//  console.log(sortStr)

//  let canFormTriangle = [5, 10, 7]

//  canFormTriangle.sort((a,b)=>a-b)

//  console.log((canFormTriangle[0]+canFormTriangle[1]) > canFormTriangle[2])

//  let s1 = "listen"
// let s2 = "silent"

// console.log(s1.split('').sort().join("") == s2.split('').sort().join(""))


// let quickSelectArr = [7, 10, 4, 3, 20, 15]
// let k = 3

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
//         }
//         else{
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

// console.log(quickSelect(quickSelectArr,k))

// let A = [10,2,1,2,5,7,10,1,9]
// let B = [2,1,8,9,10]
// let index = 0
// let start = 0
// while(start != B.length){
//     for(let i=0;i<A.length;i++){
//         if(B[start] == A[i]){
//             [A[i],A[index]] = [A[index],A[i]]
//             index++
//         }
//     }
//     start++
// }

// let rest = A.slice(index).sort((a,b)=>a-b)
// A = A.slice(0,index).concat(rest)

// console.log(A)

// let group = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let map = new Map()

// for(let val of group){
//     let key = val.split('').sort().join('')
//     if(map.has(key)){
//         map.get(key).push(val)
//     }else{
//         map.set(key,[val])
//     }
// }


// console.log(Array.from(map.values()))

// let sortArr = [0,1,1,0,1]

// let low = 0
// let mid = 0
// let high = sortArr.length - 1

// while(mid <= high){
//     if(sortArr[mid] == 0){
//         [sortArr[low],sortArr[mid]] = [sortArr[mid],sortArr[low]]
//         low++
//         mid++
//     }
//     else if(sortArr[mid] == 1){
//         mid++
//     }
//     else{
//         [sortArr[mid],sortArr[high]] = [sortArr[high],sortArr[mid]]
//         high--
//     }
// }

// console.log(sortArr)