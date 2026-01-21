import React, { forwardRef, useRef } from 'react'

const ChildComponent = forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

const Forward = () => {
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

export default Forward
