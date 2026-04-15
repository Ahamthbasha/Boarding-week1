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
        <ChildComponent onSet={setInput}/>
      <h1>{input}</h1>
    </div>
  )
}

export default Logic1
