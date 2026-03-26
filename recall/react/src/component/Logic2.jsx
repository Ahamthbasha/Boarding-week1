// import React, { useEffect } from 'react'

// const Logic2 = () => {
//     const right = (e)=>{
//         e.preventDefault()
//     }

//     useEffect(()=>{
//         document.addEventListener('contextmenu',right)
//         return()=>{
//             document.removeEventListener('contextmenu',right)
//         }
//     },[])
//   return (
//     <div>
//       <button>click</button>
//     </div>
//   )
// }

// export default Logic2


// for prevent button right click

import React from 'react'

const Logic2 = () => {
  return (
    <div>
      <button onContextMenu={(e)=>e.preventDefault()}>RightClick</button>
    </div>
  )
}

export default Logic2
