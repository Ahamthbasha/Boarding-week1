// import React from 'react'
// import { useEffect } from 'react'

// const PreventLeftClick = () => {
//     const preventLeftClick=(e)=>{
//         e.preventDefault()
//     }

//     useEffect(()=>{
//         document.addEventListener('click',preventLeftClick)

//         return()=>{
//             document.removeEventListener('click',preventLeftClick)
//         }
//     },[])
//   return (
//     <div>
//       <button>Click</button>
//     </div>
//   )
// }

// export default PreventLeftClick



import React from 'react'

const PreventLeftClick = () => {
    const preventLeftClick = (e)=>{
        e.preventDefault()
    }
  return (
    <div>
      <button onClick={preventLeftClick}>Left click</button>
    </div>
  )
}

export default PreventLeftClick
