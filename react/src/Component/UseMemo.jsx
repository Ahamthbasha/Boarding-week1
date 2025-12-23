import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count,setCount] = useState(0)
    const [input,setInput] = useState('')

    const increment = () =>{
        setCount((count)=>count+1)
    }



    const square = useMemo(()=>{
        console.log("calculated")
        return count * count
    },[count])

  return (
    <div>
      <h1>{count}</h1>
      <h2>square is:{square}</h2>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <hr />
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default UseMemo
