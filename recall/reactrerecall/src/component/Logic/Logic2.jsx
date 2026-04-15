// import React from 'react'

// const Logic2 = () => {

//     const stopLeft = (e)=>{
//         e.preventDefault()
//         alert('left click wont work')
//         return
//     }


//   return (
//     <div>
//         <button onClick={stopLeft}>LeftClick</button>  
//     </div>
//   )
// }

// export default Logic2


import React, { useEffect } from 'react'

const Logic2 = () => {

    useEffect(()=>{
        const stop = (e)=>{
            e.preventDefault()
            alert('left click wont work')
            return
        }

        document.addEventListener('click',stop)

        return()=>{
            document.removeEventListener('click',stop)
        }
    },[])

  return (
    <div>
        <p>left Click wont work</p>  
    </div>
  )
}

export default Logic2
