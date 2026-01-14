import React from 'react'
import { useState } from 'react'

const ChildComponent = ({setText})=>{
    return(
        <div>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

const InputReflect = () => {
    const [text,setText] = useState('')
  return (
    <div>
        <h1>{text}</h1>
        <ChildComponent setText={setText}/>      
    </div>
  )
}

export default InputReflect
