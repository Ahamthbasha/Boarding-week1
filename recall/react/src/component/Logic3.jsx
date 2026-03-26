// import React from 'react'

// const Logic3 = () => {
//     const handleClick = (e)=>{
//         alert("left click prevented")
//         e.preventDefault()
//         return
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>Left Click</button>
//     </div>
//   )
// }

// export default Logic3


// whole page avoid the left click\

import React, { useEffect } from 'react'

const Logic3 = () => {
    
    useEffect(()=>{
        const handleClick = (e)=>{
            alert('left click prevented')
            e.preventDefault()
            return
        }
        document.addEventListener('click',handleClick)

        return()=>{
            document.removeEventListener('click',handleClick)
        }

    },[])
    return (
    <div>
      <button>Left</button>
    </div>
  )
}

export default Logic3
