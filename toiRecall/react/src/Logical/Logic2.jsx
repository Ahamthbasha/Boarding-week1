// import React from 'react'

// const Logic2 = () => {
//   return (
//     <div>
//       <button onContextMenu={(e)=>e.preventDefault()}>Right Click it wont work</button>
//     </div>
//   )
// }

// export default Logic2



import React, { useEffect } from 'react'


const Logic2 = () => {
    const preventRightClick = (e)=>{
        e.preventDefault()
    }
    
    useEffect(()=>{
        document.addEventListener('contextmenu',preventRightClick)
    
    
        return()=>{
            document.removeEventListener('contextmenu',preventRightClick)
        }
    },[])
  return (
    <div>
      Right Click wont work check
    </div>
  )
}

export default Logic2
