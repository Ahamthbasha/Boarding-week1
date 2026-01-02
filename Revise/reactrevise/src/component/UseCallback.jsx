import React, { useCallback, useState } from 'react'

const ChildComponent = ({onIncrement})=>{
    return(
        <div>
            <button onClick={onIncrement}>Increment</button>
        </div>
    )
}


const UseCallback = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const increment = useCallback(()=>{
        console.log("function created")
        setCount((count)=>count+1)
    },[])

  return (
    <div>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    <h1>count is : {count}</h1>
    <ChildComponent onIncrement={increment}/>
    </div>
  )
}

export default UseCallback
