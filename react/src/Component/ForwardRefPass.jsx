// se forwardRef ONLY when:
// ⚡ You want parent to attach a ref directly to a DOM element inside child,

import React, { forwardRef, useRef } from 'react'

const ChildComponent = forwardRef((props,ref) => {
    const focus = ()=>{
        ref.current.focus()
    }
    return(
        <>
        <input type="text" ref={ref} />
        <button onClick={focus}>Focus</button>
        </>
    )
})

const ForwardRefPass = () => {
    const inputRef = useRef()
  return (
    <div>
        <ChildComponent ref={inputRef}/>
    </div>
  )
}

export default ForwardRefPass
