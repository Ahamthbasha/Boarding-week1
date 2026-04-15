import React, { useRef, useState } from 'react'

const Timer = () => {
    const [time,setTime] = useState(0)

    const timeRef = useRef(null)

    const start = ()=>{
        if(timeRef.current ==  null){
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
     <h1>Time is : {time}</h1>
     <button onClick={start}>Start</button>
     <button onClick={stop}>Stop</button>
     <button onClick={reset}>Reset</button> 
    </div>
  )
}

export default Timer
