import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const ChildComponent = React.memo(({increment})=>{
    console.log("rendered")
    return(
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
})

const ReactMemo = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const increment = useCallback(()=>{
        setCount((count)=>count+1)
    },[])

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <h1>Count : {count}</h1>
        <ChildComponent increment={increment}/>
    </div>
  )
}

export default ReactMemo
