// import React from 'react'

// const PreventRightClick = () => {
//     const rightClick = (e)=>{
//         e.preventDefault()
//     }
//   return (
//     <div>
//       <button onContextMenu={rightClick}>Right Click</button>
//     </div>
//   )
// }

// export default PreventRightClick


import React from 'react'
import { useEffect } from 'react'

const preventRight = (e)=>{
    e.preventDefault()
}

const PreventRightClick = () => {
    useEffect(()=>{
        document.addEventListener('contextmenu',preventRight)

        return()=>{
            document.removeEventListener('contextmenu',preventRight)
        }
    },[])
  return (
    <div>
      <button>Right Click</button>
    </div>
  )
}

export default PreventRightClick
