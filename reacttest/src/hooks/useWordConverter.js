import React from 'react'

const useWordConverter = (input) => {
    const wordMap = {
        "0" : "zero",
        "1" : "one",
        "2" : "two",
        "3" : "three",
        "4" : "four",
        "5" : "five",
        "6" : "six",
        "7" : "seven",
        "8" : "eight",
        "9" : "nine"
    }

    function getResult(no,displayResult=''){
        for(let val of no){
            if(wordMap[val]){
                displayResult += wordMap[val] + ' '
            }
        }
        return displayResult
    }

    let result = getResult(input)
     
  return ({result})
}

export default useWordConverter
