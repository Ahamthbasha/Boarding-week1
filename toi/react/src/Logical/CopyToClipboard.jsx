import React from 'react'
import { useState } from 'react'

const CopyToClipboard = () => {
    const [text,setText] = useState('')

    const copyToClipboard = ()=>{
        if(text.length == 0){
            return
        }
        navigator.clipboard.writeText(text)
        setText('')
    }
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

      <button onClick={copyToClipboard}>Copy</button>
    </div>
  )
}

export default CopyToClipboard
