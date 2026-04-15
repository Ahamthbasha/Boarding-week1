import React, { useCallback, useState} from 'react'

const ChildComponent = React.memo(({count,increment})=>{
    console.log('rendered')
    return(
        <div>
            <h1>count is : {count}</h1>
            <button  onClick={increment}>Increment</button>
        </div>
    )
})

const ReactM = () => {
    const [input,setInput] = useState('')
    const [count,setCount] = useState(0)

    const increment = useCallback(()=>{
        setCount((count)=>count+1)
    },[])
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <ChildComponent count={count} increment={increment}/>
    </div>
  )
}

export default ReactM
