import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const UseMemo = () => {
    const [count,setCount] = useState(0)
    const [input,setInput] = useState('')

    const square = useMemo(()=>{
        console.log("recalculating")
        return count * count
    },[count])

    const increase = ()=>{

        setCount((count)=>count+1)
    }

  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <h1>Count:{count} Square:{square}</h1>
      <button onClick={increase}>increment</button>
    </div>
  )
}

export default UseMemo
