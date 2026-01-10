import React from 'react'

const useConverter = () => {
    // const [input,setInput] = useState('')

    const wordMap = {
        "0" : "zero",
        "1" : "one",
        "2" : "two",
        "3" : "three",
        "4" : "four"
    }

    function no(input,displayResult=''){
        for(let val of input){
            if(wordMap[val]){
                displayResult += wordMap[val] + " "
            }
        }
        return displayResult
    }
  
    return (no())
}

export default useConverter
