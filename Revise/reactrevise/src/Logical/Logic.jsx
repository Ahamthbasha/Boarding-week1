// 1.what type in input box it will be shown in h1 tag

//USING USE STATE

// import React, { useState } from 'react'

// const Logic = () => {
//   const [text,setText] = useState('')
//   return (
//     <div>
//       <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
//       <h1>{text}</h1>      
//     </div>
//   )
// }

// export default Logic

//USING USEREF : IT IS IMPOSSIBLE ONLY USING USEREF TO ACHIEVE SAME BEHAVIOUR BUT WE CAN MAKE IT BY USING THE JS.IT IS CALLED ANTI PATTERN.

// import React, { useEffect, useRef } from 'react'

// const Logic = () => {
//   const inputRef = useRef(null)
//   const headingRef = useRef(null)

//   useEffect(()=>{
//     const inputEl = inputRef.current
//     if(!inputEl){
//       return
//     }
//     const handler = ()=>{
//       headingRef.current.innerText = inputEl.value
//     }

//     inputEl.addEventListener('input',handler)

//     return()=>{
//       inputEl.removeEventListener('input',handler)
//     }
//   },[])
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <h1 ref={headingRef}></h1>
//     </div>
//   )
// }

// export default Logic


// 2.when clicking the button it should show the typed text

// import React, { useState } from 'react'

// const Logic = () => {
//   const [text,setText] = useState('')
//   const [toggle,setToggle] = useState(false)

//   const valueSet = (e)=>{
//     setText(e.target.value)
//   }

//   const changeToggle = ()=>{
//     setToggle((toggle)=>!toggle)
//   }

//   return (
//     <div>
//       {toggle && <h1>{text}</h1>} 
//       <input type="text" value={text} onChange={valueSet} />
//       <button onClick={changeToggle}>See Content In H1 Tag</button>   
//     </div>
//   )
// }

// export default Logic



//3.create two component in child component create a input box and in parent component create a h1 tag.When you type on input box it should reflect on h1

// import React, { useState } from 'react'

// const ChildComponent = ({setText})=>{
//   return(
//     <div>
//       <input type="text" onChange={(e)=>setText(e.target.value)} />
//     </div>
//   )
// }

// const Logic = () => {
//   const [text,setText] = useState('')
//   return (
//     <div>
//       <ChildComponent setText={setText}/>
//       <h1>{text}</h1>
//     </div>
//   )
// }

// export default Logic


//4.prevent right click of the button

// import React from 'react'

// const Logic = () => {

//   const preventRightClick = (e)=>{
//     e.preventDefault()
//     alert("right click disabled")
//   }
//   return (
//     <div>
//       <button onContextMenu={preventRightClick}>Click Right button</button>
//     </div>
//   )
// }

// export default Logic



//5.prevent left click

// import React from 'react'

// const Logic = () => {
//   const preventLeftClick = (e)=>{
//     e.preventDefault()
//     alert("disabled left click")
//   }

//   return (
//     <div>
//       <button onClick={preventLeftClick}>click left button</button>      
//     </div>
//   )
// }

// export default Logic



//6.prevent entire page accessing right click

// import React, { useEffect } from 'react'

// const Logic = () => {

//   useEffect(()=>{
//     const handler =  (e)=>{
//       e.preventDefault()
//       alert("right click disabled")
//     }

//     document.addEventListener('contextmenu',handler)

//     return()=>{
//       document.removeEventListener('contextmenu',handler)
//     }
//   },[])
//   return (
//     <div>
//       <h1>Right click it wont work</h1>
//     </div>
//   )
// }

// export default Logic


// 7.create a copy to clipboard button

import React, { useState } from 'react'

const Logic = () => {
  const [value,setValue] = useState('')

  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(value)
  }
  return (
    <div>
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={copyToClipboard}>copy to clipboard</button>
    </div>
  )
}

export default Logic
