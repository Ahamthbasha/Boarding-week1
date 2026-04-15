import React, { useState } from 'react'

const ChildComponent = ({count,increment,decrement,reset})=>{
    return(
        <div>
            <h1>Count :{count}</h1>
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

    const decrement = ()=>{
        setCount((count)=>count-1)
    }

    const reset = ()=>{
        setCount(0)
    }
  return (
    <div>
      <h1>ParentComponent</h1>
      <ChildComponent count={count} increment={increment} decrement={decrement} reset={reset}/>
    </div>
  )
}

export default ParentToChild
