import React, { useState } from 'react'

const Logic4 = () => {
    const [input,setInput] = useState('')

    const copy = ()=>{
        navigator.clipboard.writeText(input)
        setInput('')
    }
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={copy}>copy</button>
    </div>
  )
}

export default Logic4
