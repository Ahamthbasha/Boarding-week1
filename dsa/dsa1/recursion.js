function fibRecursion(n){
    if(n < 2){
        return n
    }

    return fibRecursion(n-1) + fibRecursion(n-2)
}

console.log(fibRecursion(5))

function fact(n){
    if(n < 2){
        return n
    }

    return n * fact(n-1)
}

console.log(fact(5))

function sumOfN(n){
    if(n < 2){
        return n
    }

    return n + sumOfN(n-1)
}

console.log(sumOfN(10))

function checkArrayAsc(arr,n){
    if(n < 2){
        return true
    }

    return arr[n-1] >= arr[n-2] && (checkArrayAsc(arr,n-1))
}

let arr = [1,2,3,4,5,5]
console.log(checkArrayAsc(arr,arr.length)) 