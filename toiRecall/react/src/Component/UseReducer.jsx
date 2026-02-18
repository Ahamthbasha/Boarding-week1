import React, { useReducer } from 'react'

const UseReducer = () => {
    const initialState = {
        count:0
    }

    const reducerFn = (state=initialState,action)=>{
        switch(action.type){
            case 'INCREMENT':
                return {...state,count:state.count+1}
            case "DECREMENT":
                return {...state,count:state.count-1}
            case "RESET":
                return {...state,count:0}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducerFn,initialState)

    const increment = ()=>{
        dispatch({type:'INCREMENT'})
    }

    const decrement = ()=>{
        dispatch({type:'DECREMENT'})
    }

    const reset = ()=>{
        dispatch({type:"RESET"})
    }
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseReducer
