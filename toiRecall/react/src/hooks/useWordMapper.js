import React from 'react'

const useWordMapper = (number) => {

    const wordMapper = {
        '0' : 'zero',
        '1' : 'one',
        '2' : 'two',
        '3' : 'three',
        '4' : 'four',
        '5' : 'five',
        '6' : 'six',
        '7' : 'seven',
        '8' : 'eight',
        '9' : 'nine'
    }

    let result = ''

    for(let i=0;i<number.length;i++){
        result += wordMapper[number[i]] + ' '
    }

    return result
}

export default useWordMapper
