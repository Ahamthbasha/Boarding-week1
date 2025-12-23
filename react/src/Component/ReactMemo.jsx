import React, { useCallback, useState } from 'react'

const ChildComponent = React.memo(({increase})=>{
    console.log("rendered")
    return(
        <div>
            <button onClick={increase}>Increment</button>
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
    
    <h1>count is: {count}</h1>

    <ChildComponent increase={increment}/>
    </div>
  )
}

export default ReactMemo
