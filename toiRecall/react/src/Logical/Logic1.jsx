import React, { useState } from 'react'

const Child = ({textFn})=>{
    return(
        <>
        <input type="text" onChange={(e)=>textFn(e.target.value)}/>
        </>
    )
}

const Logic1 = () => {
    const [text,setText] = useState('')
  return (
    <div>
      <Child textFn = {setText}/>
      <h1>{text}</h1>
    </div>
  )
}

export default Logic1
