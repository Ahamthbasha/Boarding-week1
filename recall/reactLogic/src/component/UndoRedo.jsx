import React, { useState } from 'react'

const UndoRedo = () => {
    const [count,setCount] = useState(0)
    const [history,setHistory] = useState([])
    const [future,setFuture] = useState([])

    const increment = ()=>{
        setHistory((history)=>[...history,count])
        setCount((count)=>count+1)
        setFuture([])
    }

    const decrement = ()=>{
        setHistory((history)=>[...history,count])
        setCount((count)=>count-1)
        setFuture([])
    }

    const undo = ()=>{
        if(history.length == 0){
            return
        }

        let previous = history[history.length-1]
        let current = count
        setHistory((history)=>{
            return history.slice(0,-1)
        })

        setCount(previous)

        setFuture((future)=>{
            return [current,...future]
        })
    }

    const redo = ()=>{
        if(future.length == 0){
            return
        }

        let next = future[0]
        let current = count
        setFuture((future)=>{
            return future.slice(1)
        })

        setCount(next)

        setHistory((history)=>{
            return [...history,current]
        })
    }

  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={undo}>undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  )
}

export default UndoRedo
