import React, { useState } from 'react'

const Siblings = () => {
    const [input,setInput] = useState('')
    // const {displayResult} = useConverter()



    return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={()=>useConverter()}>see Result</button>
    </div>
  )
}

export default Siblings
