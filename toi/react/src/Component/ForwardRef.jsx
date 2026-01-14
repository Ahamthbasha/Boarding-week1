import React from 'react'
import { useRef } from 'react'
import { forwardRef } from 'react'

const ChildComponent= forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref} />
        </div>
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
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default ForwardRef
