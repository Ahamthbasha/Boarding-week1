import React from 'react'
import { useState } from 'react'

const CommonFn = ({onRender})=>{
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

    return(onRender(count,increment,decrement,reset))
}

const RenderProps = () => {
  return (
    <div>
      <CommonFn onRender={(count,increment,decrement,reset)=>{
        return(
            <div>
                <h1>Count:{count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        )
      }}/>
    </div>
  )
}

export default RenderProps
