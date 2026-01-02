import React, { useState } from 'react'

const ChildComponent = ({utilities})=>{
    const {increment,decrement,reset} = utilities
    return(
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

const ParentToChild = () => {
    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount((count)=>count+1)
    }

    const decrement = () => {
        setCount((count)=>count-1)
    }
    
    const reset = ()=>{
        setCount(0)
    }

  return (
    <div>
    <h1>count is : {count}</h1>
    <ChildComponent utilities={{increment,decrement,reset}}/>  
    </div>
  )
}

export default ParentToChild
