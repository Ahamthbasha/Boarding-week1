import React, { forwardRef, useRef } from 'react'

const ChildComponent = forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

const ForwardRef = () => {
    const inputRef = useRef(null)

    const focus = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
      <ChildComponent ref={inputRef}/>
      <button onClick={focus}>focus</button>
    </div>
  )
}

export default ForwardRef
