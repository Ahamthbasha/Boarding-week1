import React, { useState } from 'react'

const ChildComponent = React.memo(({count})=>{
  console.log('child component triggered')
  return(
    <div>
      <h1>count is :{count}</h1>
    </div>
  )
})


const ReactMemo = () => {
  const [input,setInput] = useState('')
  const [count,setCount] = useState(0)

  const increment = ()=>{
    setCount((count)=>count+1)
  }

  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <ChildComponent count={count}/>
      <button onClick={increment}>increase</button>    
    </div>
  )
}

export default ReactMemo
