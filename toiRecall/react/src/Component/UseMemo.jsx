import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const square = useMemo(()=>{
        console.log("calcualated")
        return count * count
    },[count])

    const increment = ()=>{
        setCount((count)=>count+1)
    }

  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <p>Count Value:{count}</p>
      <p>Square valaue:{square}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseMemo
