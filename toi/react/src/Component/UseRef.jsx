import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null)

    const focus = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default UseRef
