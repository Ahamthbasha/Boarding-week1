import React, { useState } from 'react'

const Copy = () => {
    const [input,setInput] = useState('')
    const copy = ()=>{
        if(input.trim().length == 0){
            alert('no text')
            return
        }else{
            navigator.clipboard.writeText(input)
            setInput('')
        }
    }
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={copy}>Copy</button>
    </div>
  )
}

export default Copy
