import React, { useState } from 'react'

const ChildComponent = ({data})=>{
    const {count,increment,decrement,reset} = data
    return(
        <>
        <h1>count is : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}


const ParentToChild = () => {
    const [count,setCount] = useState(0)
    const increment = () => {
        setCount((count)=>count+1)
    }

    const decrement = ()=>{
        setCount((count)=>count-1)
    }

    const reset = () => {
        setCount(0)
    }
  return (
    <div>
        <ChildComponent data = {{count,increment,decrement,reset}}/>
    </div>
  )
}

export default ParentToChild
