import React from 'react'
import { useState } from 'react'

const ChildComponent = ({onSend})=>{
    const sendMessage = ()=>{
        onSend("hello parent how are you")
    }
    return(
        <div>
            <button onClick={sendMessage}>Click To send message to parent</button>
        </div>
    )
}

const ChildToParent = () => {
    const [message,setMessage] = useState('')

    const sendMessage = (data)=>{
        setMessage(data)
    }
  return (
    <div>
      <h1>ParentComponent:{message}</h1>
      <ChildComponent onSend={sendMessage}/>
    </div>
  )
}

export default ChildToParent
