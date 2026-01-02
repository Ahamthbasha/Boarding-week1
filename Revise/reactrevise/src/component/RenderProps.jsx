import React, { useState } from 'react'

const CommonFunction = ({render})=>{
    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount((count)=>count+1)
    }

    return render(count,increment)
}

const RenderProps = () => {
  return (
    <CommonFunction render={(count,increment)=>{
        return(
            <div>
                <h1>count is : {count}</h1>
                <button onClick={increment}>Increment</button>
            </div>
        )
    }}/>
  )
}

export default RenderProps
