//linear search

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == target){
            return i
        }
    }
    return -1
}

function binarySearchLinear(arr,target){
    let start = 0
    let end = arr.length - 1

    while(start <= end){
        let mid = Math.floor((start+end)/2)

        if(arr[mid] == target){
            return mid
        }
        else if(target < arr[mid]){
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }

    return -1
}

function bfs(arr,target){
    return binarySearch(arr,target,0,arr.length-1)
}

function binarySearch(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let mid = Math.floor((leftIndex + rightIndex)/2)

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

let arr = [1, 3, 5, 7, 9, 11]

console.log(linearSearch(arr, 7))            // 3
console.log(binarySearchLinear(arr, 7))      // 3
console.log(bfs(arr, 7))                     // 3
