import React, { useState } from 'react'

const Clipboard = () => {
    const [text,setText] = useState('')
    const copy = ()=>{
        if(text.length > 0){
            navigator.clipboard.writeText(text)
            setText('')
        }
    }
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

      <button onClick={copy}>CopyToClipboard</button>
    </div>
  )
}

export default Clipboard
