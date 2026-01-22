import React, { useRef, useState } from 'react'

const Timer = () => {
    const [time,setTimer] = useState(0)
    const timeRef = useRef(null)

    const start = ()=>{
        if(!timeRef.current){
            timeRef.current = setInterval(()=>{
                setTimer((time)=>time+1)
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
        setTimer(0)
    }

  return (
    <div>
        <h1>Timer:{time}</h1>  
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer
