import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [count,setCount] = useState(0)
    const timeRef = useRef(null)

    const start = ()=>{
        if(!timeRef.current){
            timeRef.current = setInterval(()=>{
                setCount((count)=>count+1)
            },1000)
        }
    }


    const stop = ()=>{
        if(timeRef.current){
            clearInterval(timeRef.current)
            timeRef.current = null
        }
    }

    const reset = ()=>{
        stop()
        setCount(0)
    }

    useEffect(()=>{

        return ()=>{
            if(timeRef.current){
                clearInterval(timeRef.current)
            }
        }
    },[])

  return (
    <div>
      <h1>time is : {count}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer
