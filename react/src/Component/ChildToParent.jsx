import React, { useState } from 'react'

const ChildComponent = ({fn}) => {
    const passDataToParent = ()=>{
        fn("Good morning parent")
    }
    return(
        <>
        <button onClick={passDataToParent}>Send Data</button>
        </>
    )
}

const ChildToParent = () => {
    const [data,setData] = useState('')

    const receivedData = (receivedData) => {
        setData(receivedData)
    }
    return (
    <div>
      <h1>Parent received data:{data}</h1>
      <ChildComponent fn={receivedData}/>
    </div>
  )
}

export default ChildToParent
