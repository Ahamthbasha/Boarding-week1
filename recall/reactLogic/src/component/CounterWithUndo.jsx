import React, { useState } from 'react'

const CounterWithUndo = () => {

    const [count,setCount] = useState(0)
    const [history,setHistory] = useState([])

    console.log(history)

    const updatedHistory = (prevCount)=>{
        setHistory((history)=>{
            let updated = [...history,prevCount]
            if(updated.length > 5){
                updated = updated.slice(1)
            }
            return updated
        })
    }

    const increment = ()=>{
        setCount((count)=>{
            updatedHistory(count)
            return count + 1
        })
    }

    const decrement = ()=>{
        setCount((count)=>{
            updatedHistory(count)
            return count - 1
        })
    }

    const undo = ()=>{
        setHistory((history)=>{
            if(history.length == 0){
                return history
            }

            const last = history[history.length-1]
            
            setCount(last)

            return history.slice(0,-1)
        })
    }

    
  return (
    <div>
        <h1>Count is :{count}</h1>
        <button onClick={increment}>Increment</button>
        <br />
        <br />
        <button onClick={decrement}>Decrement</button>  
        <br />
        <br />
        <button onClick={undo}>undo</button>
    </div>
  )
}

export default CounterWithUndo
