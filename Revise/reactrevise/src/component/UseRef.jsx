import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef(null)

    const focus = ()=>{
        inputRef.current.focus()
    }

  return (
    <div>
    <input type="text" ref={inputRef}/>
    <button onClick={focus}>focus</button>  
    </div>
  )
}

export default UseRef
