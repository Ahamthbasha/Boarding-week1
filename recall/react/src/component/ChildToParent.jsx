import React, { useState } from 'react'

const ChildComponent = ({onFn})=>{
    const send = ()=>{
        onFn("hello parent")
    }
    return(
        <div>
            <button onClick={send}>Send Message</button>
        </div>
    )
}

const ChildToParent = () => {
    const [message,setMessage] = useState('')

    const messageReceived = (data)=>{
        setMessage(data)
    }
  return (
    <div>
      <h1>Message from child:{message}</h1>
      <ChildComponent onFn={messageReceived}/>
    </div>
  )
}

export default ChildToParent
