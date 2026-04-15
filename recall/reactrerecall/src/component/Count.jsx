import React, { useState } from 'react'

const Count = () => {
    const [counter,setCounter] = useState(0)

    const increment = ()=>{
        setCounter((counter)=>counter+1)
    }

    const decrement = ()=>{
        setCounter((counter)=>{
            return counter-1
        })
    }

    const reset = ()=>{
        setCounter(0)
    }

  return (
    <div>
        <h1>count is:{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>  
    </div>
  )
}

export default Count
