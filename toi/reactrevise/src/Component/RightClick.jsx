import React, { useEffect } from 'react'

// const RightClick = () => {
//   return (
//     <div>
//       <button onContextMenu={(e)=>e.preventDefault()}>Click</button>
//     </div>
//   )
// }

// export default RightClick

const RightClick = () => {
    const preventClick = (e)=>{
        e.preventDefault()
    }
    useEffect(()=>{
        document.addEventListener('contextmenu',preventClick)

        return()=>{
            document.removeEventListener('contextmenu',preventClick)
        }
    },[])
  return (
    <div>
      <p>Right click anywhere it wont work</p>
    </div>
  )
}

export default RightClick
