// import React, { useState } from 'react'

// const ChildComponent = ({onSend})=>{
//     const sendData = ()=>{
//         onSend("hello parent")
//     }

//     return(
//         <div>
//             <button onClick={sendData}>send</button>
//         </div>
//     )
// }

// const ChildToParent = () => {
//     const [message,setMessage] = useState('')

//     const setMsg = (data)=>{
//         setMessage(data)
//     } 
    
//   return (
//     <div>
//         <h1>Parent Component:{message}</h1>
//         <ChildComponent onSend={setMsg}/>
//     </div>
//   )
// }

// export default ChildToParent



import React, { useState } from 'react'

const ChildComponent = ({onSend})=>{
    return(
        <div>
            <input type="text"  onChange={(e)=>onSend(e.target .value)}/>
        </div>
    )
}

const ChildToParent = () => {
    const [message,setMessage] = useState('')
  return (
    <div>
      <h1>{message}</h1>
      <ChildComponent onSend={setMessage}/>
    </div>
  )
}

export default ChildToParent
