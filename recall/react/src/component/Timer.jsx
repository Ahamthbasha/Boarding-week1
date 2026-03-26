import React, { useRef, useState } from 'react'

const Timer = () => {
    const [count,setCount] = useState(0)
    const timeRef = useRef()

    const start =()=>{
        if(!timeRef.current){
            timeRef.current = setInterval(()=>{
                setCount((count)=>count+1)
            },1000)
        }
    }


    const stop = ()=>{
        clearInterval(timeRef.current)
        timeRef.current = null
    }

    const reset = ()=>{
        stop()
        setCount(0)
    }


  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Timer
