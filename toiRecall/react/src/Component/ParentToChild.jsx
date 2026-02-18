import React from 'react'
import { useState } from 'react'

const Children =({increase,decrease,reset})=>{
    return(
        <>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        </>
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
      <h1>count:{count}</h1>
      <Children increase={increment} decrease={decrement} reset={reset}/>
    </div>
  )
}

export default ParentToChild
