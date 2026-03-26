import React, { useState } from 'react'

const Counter = ({onRender}) => {
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
    return onRender(count,increment,decrement,reset)
}

const RenderProps = () => {
  return (
    <div>
        <Counter onRender={(count,increment,decrement,reset)=>{
           return( <div>
                <h1>count is {count}</h1>
                <button onClick={increment}>increase</button>
                <button onClick={decrement}>decrease</button>
                <button onClick={reset}>Reset</button>
            </div>)
        }}/>
    </div>
  )
}

export default RenderProps
