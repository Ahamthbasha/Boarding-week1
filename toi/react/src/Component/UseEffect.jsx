import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {
    const [width,setWith] = useState(window.innerWidth)

    const resizer = ()=>{
        setWith(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',resizer)

        return()=>{
            window.removeEventListener('resize',resizer)
        }
    },[])

  return (
    <div>
      <h1>{width}</h1>
    </div>
  )
}

export default UseEffect
