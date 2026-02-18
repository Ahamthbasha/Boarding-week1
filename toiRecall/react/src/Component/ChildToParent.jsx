import React from 'react'
import { useState } from 'react'

const Children = ({MessageFn})=>{
    const send = ()=>{
        MessageFn("hello parent")
    }
    return(
        <>
        <button onClick={send}>Send Message To parent</button>
        </>
    )
}

const ChildToParent = () => {
    const [msg,setMessage] = useState('')

    const messageSet = (msg)=>{
        setMessage(msg)
    }
  return (
    <div>
      <h1>Parent Message:{msg}</h1>
      <Children MessageFn = {messageSet}/>
    </div>
  )
}

export default ChildToParent
