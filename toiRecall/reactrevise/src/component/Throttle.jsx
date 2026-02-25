import React, { useEffect, useState } from 'react'

const Throttle = () => {
    const [width,setWidth] = useState(window.innerWidth)

    const throttleFn = (fn,delay)=>{
        let lastCall = 0
        return function(...args){
            let now = Date.now()
            if(now - lastCall >= delay){
                lastCall = now
                fn(...args)
            }
        }
    }

    const handleResize = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        const throttledResize = throttleFn(handleResize,500)
        window.addEventListener('resize',throttledResize)

        return()=>{
            window.removeEventListener('resize',throttledResize)
        }
    },[])
  return (
    <div>
      <h1>{width}</h1>
    </div>
  )
}

export default Throttle
