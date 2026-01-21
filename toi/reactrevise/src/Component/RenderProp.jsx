import React, { useState } from 'react'

const CommonFunction = ({render})=>{
    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount((count)=>count+1)
    }
    return render(count,increment)
}

const RenderProp = () => {
    return <CommonFunction render={((count,increment)=>{
        return(
            <div>
                <h1>Count:{count}</h1>
                <button onClick={increment}>Increment</button>
            </div>
        )
    })}/>
}

export default RenderProp
