import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {
    const [width,setWidth] = useState(window.innerWidth)
    const widthResizer = ()=>{
        setWidth(()=>{
            return window.innerWidth
        })
    }
    useEffect(()=>{
        window.addEventListener('resize',widthResizer)

        return()=>{
            window.removeEventListener('resize',widthResizer)
        }
    },[])
  return (
    <div>
      <h1>Width is : {width}</h1>
      
    </div>
  )
}

export default UseEffect
