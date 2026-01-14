import React from 'react'
import { useMemo } from 'react'

const useConverter = (input) => {
    const digitMap = {
        "0":"zero",
        "1":"one",
        "2":"two",
        "3":"three",
        "4":"four",
        "5":"five",
        "6":"six",
        "7":"seven",
        "8":"eight",
        "9":"nine"
    }

    let result = useMemo(()=>{
        let display = ''
        for(let val of input){
            if(digitMap[val]){
                display += digitMap[val] + " "
            }
        }

        return display.trim()
    },[input])

    return {result}
}

export default useConverter
