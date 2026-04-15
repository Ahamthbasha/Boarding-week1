import React, { useState } from 'react'

const CommonFn = ({render})=>{
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
    return render(count,increment,decrement,reset)
}

const RenderProps = () => {
  return (
    <CommonFn 
    render={(count,increment,decrement,reset)=>{
        return(
            <div>
                <h1>Count is :{count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        )
    }}

    />
  )
}

export default RenderProps
