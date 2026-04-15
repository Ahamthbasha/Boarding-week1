import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const square = useMemo(()=>{
        console.log('double suare calculating')
        return count * count
    },[count])

    const increment = ()=>{
        setCount((count)=>count+1)
    }

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

        <h1>Count is : {count}</h1>

        <button onClick={increment}>INcrement</button>

        <h2>square :{square}</h2>
    </div>
  )
}

export default UseMemo
