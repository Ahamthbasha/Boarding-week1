import React, { useState } from 'react'

const ChildComponent = ({passDataToParent})=>{
    const sendData = ()=>{
        passDataToParent("hello parent how are you")
    }
    return(
        <div>
            <button onClick={sendData}>SendDataToParent</button>
        </div>
    )
}

const ChildToParent = () => {
    const [msg,setMsg] = useState('')

    const receivedData = (data)=>{
        setMsg(data)
    }

  return (
    <div>
        <h1>Parent:{msg}</h1>
        <ChildComponent passDataToParent={receivedData}/>  
    </div>
  )
}

export default ChildToParent
