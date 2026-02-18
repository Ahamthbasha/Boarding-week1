// import React from 'react'

// const Logic3 = () => {
//     const preventLeftClick = (e)=>{
//         e.preventDefault()
//     }

//   return (
//     <div>
//         <button onClick={preventLeftClick}>Left Click</button>  
//     </div>
//   )
// }

// export default Logic3



import React, { useEffect } from 'react'

const Logic3 = () => {
    const preventLeftClick = (e)=>{
        e.preventDefault()
    }

    useEffect(()=>{
        document.addEventListener('click',preventLeftClick)

        return()=>{
            document.removeEventListener('click',preventLeftClick)
        }
    },[])
  return (
    <div>
      Try left click it wont work
    </div>
  )
}

export default Logic3
