import React from 'react'
import { forwardRef } from 'react'
import { useRef } from 'react'

const ChildComponent =forwardRef((props,ref)=>{
    return(
        <>
        <input type="text" ref={ref} />
        </>
    )
})


const ForwardRef = () => {
    const inputRef = useRef()

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
