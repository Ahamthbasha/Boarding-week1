import React, { useState } from 'react'

const Logic4 = () => {
    const [text,setText] = useState('')

    const copy = ()=>{
        navigator.clipboard.writeText(text)
        setText('')
    }
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={copy}>Copy To Clipboard</button>  
    </div>
  )
}

export default Logic4
