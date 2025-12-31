// function fibnocci(n){
//     if(n <= 1){
//         return n
//     }

//     return fibnocci(n-1) + fibnocci(n-2)
// }

// console.log(fibnocci(10))

// function factorial(n){
//     if(n == 1){
//         return n
//     }

//     return n * factorial(n-1)
// }

// console.log(factorial(5))

// function reverseArr(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let first = arr[0]
//     let end = arr.slice(1)

//     return reverseArr(end).concat(first)
// }

// console.log(reverseArr([1,2,3,4,5]))


// function reverseStr(str){
//     if(str.length < 2){
//         return str
//     }

//     let first = str[0]
//     let rest = str.slice(1)

//     return reverseStr(rest).concat(first)
// }

// console.log(reverseStr("iambasha"))


//check palindrome using recursion

// function checkPalindrome(str){
//     if(str.length < 2){
//         return true
//     }

//     let first = str[0]
//     let end = str[str.length-1]

//     if(first != end){
//         return false
//     }

//     return checkPalindrome(str.slice(1,str.length-1))
// }

// console.log(checkPalindrome("malayalam"))

//checkArr ascending order

// function isAscendingOrder(arr){
//     if(arr.length < 1){
//         return true
//     }
//     return (arr[0] < arr[1]) && isAscendingOrder(arr.slice(2)) 
// }

// function isDescendingOrder(arr){
//     if(arr.length < 1){
//         return true
//     }
//     return (arr[0] > arr[1]) && isDescendingOrder(arr.slice(2))
// }

// console.log(isAscendingOrder([0,1,2,3,4,5]))
// console.log(isDescendingOrder([9,8,1,0]))