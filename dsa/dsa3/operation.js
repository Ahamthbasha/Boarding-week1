function topKFreqElement(arr,k){
    let freqMap = {}

    for(let val of arr){
        if(freqMap[val]){
            freqMap[val]++
        }else{
            freqMap[val] = 1
        }
    }

    let result = []
    for(let key in freqMap){
        if(freqMap[key] == k){
            result.push(Number(key))
        }
    }

    return result
}