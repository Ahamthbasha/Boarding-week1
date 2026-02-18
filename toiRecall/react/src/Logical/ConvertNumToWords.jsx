import React, { useState } from 'react'
import useWordMapper from '../hooks/useWordMapper'

const ConvertNumToWords = () => {
    const [text,setText] = useState('')
    const wordMapper = useWordMapper(text)
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <h1>{wordMapper}</h1>
    </div>
  )
}

export default ConvertNumToWords
