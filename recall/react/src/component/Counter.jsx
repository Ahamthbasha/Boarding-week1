import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    const increase = ()=>{
        setCount((count)=>count+1)
    }

    const decrease = ()=>{
        setCount((count)=>count-1)
    }

    const reset = ()=>{
        setCount(0)
    }

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
