function bubbleSort(arr){
    let swapped = true
    while(swapped){
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i] < arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    }
    return arr
}

function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let cur = arr[i]
        let j = i-1

        while(j >= 0 && arr[j] > cur){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = cur
    }
    return arr
}

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minElement = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[minElement] > arr[j]){
                minElement = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minElement]
        arr[minElement] = temp
    }
    return arr
}

function quickSort(arr){
    if(arr.length < 2){
        return arr
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

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return sortedArr.concat(leftArr,rightArr)
}

function DutchAlgo(arr){
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
    return arr
}