import React from 'react'
import { useState } from 'react'

const ChildComponent = ({incre,decre,reset})=>{
    return(
        <div>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

const ParentToChild = () => {
    const [count,setCount] = useState(0)
    const increment = ()=>{
        setCount((count)=>count+1)
    }

    const decrement = ()=>{
        setCount((count)=>count-1)
    }

    const reset = ()=>{
        setCount(0)
    }

  return (
    <div>
    <h1>Count:{count}</h1>
    <ChildComponent incre={increment} decre={decrement} reset = {reset}/>  
    </div>
  )
}

export default ParentToChild
