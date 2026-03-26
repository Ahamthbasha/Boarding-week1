import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount] = useState(0)
    const [input,setInput] = useState('')

    const calculate = useMemo(()=>{
        console.log("square calculate")
        return count * count
    },[count])

    const increase = ()=>{
        setCount((count)=>count+1)
    }
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

        <h1>count is :{count}</h1>
        <h2>Square:{calculate}</h2>
        <button onClick={increase}>Increment</button>
    </div>
  )
}

export default UseMemo
