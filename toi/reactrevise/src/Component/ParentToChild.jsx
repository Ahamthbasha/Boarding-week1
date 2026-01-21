import React, { useState } from 'react'

const ChildComponent = ({increase,decrease,reset})=>{
    return(
        <div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
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
      <h1>count:{count}</h1>
      <ChildComponent increase={increment} decrease={decrement} reset={reset}/>
    </div>
  )
}

export default ParentToChild
