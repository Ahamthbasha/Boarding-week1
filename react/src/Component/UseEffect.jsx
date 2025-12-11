import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [width,setWidth] = useState(window.innerWidth)

    const windowResizer = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',windowResizer)

        return()=>{
            window.removeEventListener('resize',windowResizer)
        }
    },[])
  return (
    <div>
      <h1>{width}</h1>
    </div>
  )
}

export default UseEffect
