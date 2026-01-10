import React, { useState } from 'react'
import useWordConverter from '../hooks/useWordConverter'

const Converter = () => {
    const [text,setText] = useState('')
    const {result} = useWordConverter(text)

  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <br />
      {result.length && result}
    </div>
  )
}

export default Converter
