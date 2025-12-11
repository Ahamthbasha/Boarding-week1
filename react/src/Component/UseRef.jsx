import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [input,setInput] = useState("")
    const inputRef = useRef()
    const focus = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
      <input type="text" ref={inputRef} value={input} onChange={(e)=>setInput(e.target.value)} />

      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRef
