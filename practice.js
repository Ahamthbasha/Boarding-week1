let arr = [11, 21, 51, 101, 11, 51]
let queries = [[0, 4, 11], [2, 5, 51]]

let freqMap = {}

for(let val of arr){
    if(freqMap[val]){
        freqMap[val]++
    }else{
        freqMap[val]=1
    }
}

let newArr = []

for(let i=0;i<queries.length;i++){
    let [l,r,x] = queries[i]
    let part = new Set(arr.slice(l,r+1))
    if(part.has(x)){
        
    }

    console.log(set)
    newArr.push(count)
}

console.log(newArr)


// let s = "abc1111"

// let no = new Set()

// for(let val of s){
//     if(/[0-9]/g.test(val)){
//         no.add(Number(val))
//     }
// }

// no = [...no]
// no.sort((a,b)=>b-a)

// console.log(no[1])