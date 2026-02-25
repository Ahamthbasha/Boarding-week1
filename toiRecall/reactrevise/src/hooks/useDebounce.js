import React, { useEffect, useState } from 'react'

const useDebounce = (text,seconds) => {
    const [debounceText,setDebounceText] = useState('')

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceText(text)
        },seconds)

        return()=>{
            clearTimeout(timer)
        }
    },[text,seconds])

    return {debounceText}
  
}
export default useDebounce
