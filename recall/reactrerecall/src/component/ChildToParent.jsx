import React, { useState } from 'react'

const ChildComponent = ({onSend})=>{

    const clickToSend = ()=>{
        onSend("hi hello how are you")
    }
    return(
        <div>
            <h1>Child</h1>
            <button onClick={clickToSend}>Click send to Parent</button>
        </div>
    )
}

const ChildToParent = () => {
    const [msg,setMessage] = useState('')

    const onSend = (data)=>{
        setMessage(data)
    }
  return (
    <div>
        <h1>Parent:{msg}</h1>
        <ChildComponent onSend={onSend}/>      
    </div>
  )
}

export default ChildToParent
