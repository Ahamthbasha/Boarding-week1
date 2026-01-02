// 1.what type in input box it will be shown in h1 tag

// import React, { useState } from 'react'

// const Logic = () => {
//     const [data,setData] = useState('')
//   return (
//     <div>
//       <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>

//       <h1>{data}</h1>
//     </div>
//   )
// }

// export default Logic

// 2.when clicking the button it should show the typed text

// import React, { useState } from 'react'

// const Logic = () => {
//     const [data,setData] = useState('')
//     const [visibleMedium,setVisibleMedium] = useState(false)

//     const changeVisibleMedium = ()=>{
//         setVisibleMedium((visibleMedium)=>!visibleMedium)
//     }
//   return (
//     <div>
//       {visibleMedium && <h1>{data}</h1>}

//       <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />

//       <button onClick={changeVisibleMedium}>show - unshow</button>
//     </div>
//   )
// }

// export default Logic


//3.create two component in child component create a input box and in parent component create a h1 tag.When you type on input box it should reflect on h1

// import React, { useState } from 'react'

// const ChildComponent = ({setData})=>{
//     return(
//         <input type="text" onChange={(e)=>setData(e.target.value)}/> 
//     )
// }

// const Logic = () => {
//     const [data,setData] = useState('')
//   return (
//     <div>
//       <h1>{data}</h1>
//       <ChildComponent setData={setData}/>
//     </div>
//   )
// }

// export default Logic

//4.prevent right click of the button

// import React from 'react'

// const Logic = () => {
//     const handlePreventRight = (e)=>{
//         e.preventDefault()
//         alert('Right Click Disabled')
//     }
//   return (
//     <div>
//       <button onContextMenu={handlePreventRight}>click right side button</button>
//     </div>
//   )
// }

// export default Logic


//5.prevent left click

// import React from 'react'

// const Logic = () => {
//     const preventLeftClick = (e)=>{
//         e.preventDefault()
//         alert("left click blocked")
//     }
//   return (
//     <div>
//         <button onClick={preventLeftClick}>click left</button>  
//     </div>
//   )
// }

// export default Logic


//6.prevent entire page accessing right click

// import React, { useEffect } from 'react'

// const Logic = () => {

//     useEffect(()=>{
//         const preventRightClick = (e)=>{
//             e.preventDefault()
//             alert("Right Click Disabled")
//         }
//         document.addEventListener('contextmenu',preventRightClick)

//         return()=>{
//             document.removeEventListener('contextmenu',preventRightClick)
//         }
//     },[])
//   return (
//     <div>
//       <h1>Right click disabled</h1>
//     </div>
//   )
// }

// export default Logic


// 7.create a copy to clipboard button

import React, { useRef } from 'react'

const Logic = () => {
    const inputRef = useRef()
    const copy = ()=>{
        navigator.clipboard.writeText(inputRef.current.value)
    }
  return (
    <div>
        <input type="text" ref={inputRef} />
      <button onClick={copy}>Copy to clipboard button</button>
    </div>
  )
}

export default Logic
