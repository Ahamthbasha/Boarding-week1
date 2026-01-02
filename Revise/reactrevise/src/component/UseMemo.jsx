import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0) 
    
    const square = useMemo(()=>{
        console.log("calculating")
        return count * count
    },[count])


    const increment = ()=>{
        setCount((count)=>count+1)
    }

    
  return (
    <div>
      <h1>count : {count}</h1>
      <h1>Square:{square}</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />

      <button onClick={increment}>increment</button>
    </div>
  )
}

export default UseMemo
