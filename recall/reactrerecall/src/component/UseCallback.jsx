import React, { useCallback, useState } from 'react'

const ChildComponent = React.memo(({increment})=>{
    console.log("function ref is getted")
    return(
        <div>
            <button onClick={increment}>Increase</button>
        </div>
    )
})

const UseCallback = () => {
    const [count,setCount] = useState(0)

    const increment = useCallback(()=>{
        
        setCount((count)=>count+1)
    },[])

  return (
    <div>
        <h1>Count is : {count}</h1>
        <ChildComponent increment={increment}/>  
    </div>
  )
}

export default UseCallback
