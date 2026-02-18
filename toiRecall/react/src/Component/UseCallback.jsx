import React, { useCallback, useEffect, useState } from 'react'

const UseCallback = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const increment = useCallback(()=>{
        setCount((count)=>count+1)
    },[])

    useEffect(()=>{
        console.log("increment new reference")
    },[increment])

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <h1>count:{count}</h1>
        <button onClick={increment}>Increment</button>  
    </div>
  )
}

export default UseCallback
