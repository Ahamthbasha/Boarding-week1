import React, { useState } from 'react'

const ChildComponent = ({onSet})=>{
    return(
        <div>
            <input type="text" onChange={(e)=>onSet(e.target.value)}/>
        </div>
    )
}

const Logic1 = () => {
    const [input,setInput] = useState('')
  return (
    <div>
      <h1>{input}</h1>
      <ChildComponent onSet={setInput}/>
    </div>
  )
}

export default Logic1
