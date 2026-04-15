import React, { useReducer } from 'react'

const UseReducer = () => {
    const initialState = {
        count : 0
    }

    const reducerFn = (state = initialState,action)=>{
        switch(action.type){
            case 'INCREASE':
                return {...state,count:state.count+1}
            case 'DECREASE':
                return {...state,count:state.count-1}
            case 'RESET':
                return {...state,count:0}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducerFn,initialState)

    const increase = ()=>{
        dispatch({type:'INCREASE'})
    }

    const decrease = ()=>{
        dispatch({type:'DECREASE'})
    }

    const reset = ()=>{
        dispatch({type:'RESET'})
    }

  return (
    <div>
        <h1>Count :{state.count}</h1>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
        <button onClick={reset}>Reset</button>  
    </div>
  )
}

export default UseReducer
