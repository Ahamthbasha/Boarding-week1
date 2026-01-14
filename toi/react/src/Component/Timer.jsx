import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Timer = () => {
    const [time,setTime] = useState(0)

    const timeRef = useRef(null)

    const start = ()=>{
        if(!timeRef.current){
            timeRef.current = setInterval(()=>{
                setTime((time)=>time+1)
            },1000)
        }
    }

    const stop = ()=>{
        clearInterval(timeRef.current)
        timeRef.current = null
    }

    const reset = ()=>{
        stop()
        setTime(0)
    }

  return (
    <div>
    <h1>{time}</h1>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>  
    </div>
  )
}

export default Timer
