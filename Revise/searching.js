// function linearSearch(arr,k){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == k){
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch([1,2,3,10,4,5,6],10))

// function binarySearch(arr,k){
//     let start = 0
//     let end = arr.length - 1

//     while(start <= end){
//         let mid = Math.floor((start+end)/2)
//         if(arr[mid] == k){
//             return mid
//         }
//         else if(k < arr[mid]){
//             end = mid - 1
//         }
//         else{
//             start = mid + 1
//         }
//     }

//     return -1
// }

// console.log(binarySearch([1,2,3,4,5,6],10))


function bfs(arr,k){
    return binarySearch(arr,k,0,arr.length-1)
}

function binarySearch(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let mid = Math.floor((leftIndex+rightIndex)/2)

    if(arr[mid] == target){
        return mid
    }
    else if(target < arr[mid]){
        return binarySearch(arr,target,leftIndex,mid-1)
    }
    else{
        return binarySearch(arr,target,mid+1,rightIndex)
    }
}