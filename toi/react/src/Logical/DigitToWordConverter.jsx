import React from 'react'
import useConverter from '../Hook/useConverter'
import { useState } from 'react'

const DigitToWordConverter = () => {
    const [no,setNo] = useState('')
    const {result} =useConverter(no)
  return (
    <div>
      <input type="text" value={no} onChange={(e)=>setNo(e.target.value)}/>
      <h1>{result}</h1>
    </div>
  )
}

export default DigitToWordConverter
