// import React from 'react'

// const Logic3 = () => {
//     const stopRight = (e)=>{
//         e.preventDefault()
//         alert('right click')
//         return
//     }
//   return (
//     <div>
//       <button onContextMenu={stopRight}>Right</button>
//     </div>
//   )
// }

// export default Logic3


import React, { useEffect } from 'react'

const Logic3 = () => {

    useEffect(()=>{
        const right = (e)=>{
            e.preventDefault()
            alert('right click')
            return
        }

        document.addEventListener('contextmenu',right)

        return()=>{
            document.removeEventListener('contextmenu',right)
        }
    },[])
  return (
    <div>
      <p>try to click right it wont work</p>
    </div>
  )
}

export default Logic3
