import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const ChildComponent = React.memo(({increment})=>{
    console.log("function recreated")
    return(
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
})

const UseCallback = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const increment = useCallback(()=>{
        setCount((count)=>count+1)
    },[])

  return (
    <div>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
    <h1>count:{count}</h1>
    <ChildComponent increment={increment}/>  
    </div>
  )
}

export default UseCallback
