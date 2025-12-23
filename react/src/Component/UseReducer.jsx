// import React, { useReducer } from 'react'

// const UseReducer = () => {
//     const initialState = {
//         count : 0
//     }
//     const reducerFn = (state,action)=>{
//         switch(action.type){
//             case "increment":
//                 return {...state,count:state.count+1}
//             case "decrement":
//                 return {...state,count:state.count-1}
//             case "reset":
//                 return {...state,count:0}
//             default:
//                 return state
//         }
//     }

//     const [state,dispatch] = useReducer(reducerFn,initialState)
//   return (
//     <div>
//     <h1>{state.count}</h1>
//     <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
//     <br />
//     <br />
//     <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
//     <br />
//     <br />
//     <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
//     </div>
//   )
// }

// export default UseReducer


import React, { useReducer, useState } from 'react'

const UseReducer = () => {
    const initialState = []

    const reducerFn = (state,action)=>{
        switch(action.type){
            case "add":
                return [...state,{id:Date.now(),text:action.payload,completed:false}]
            case "completed":
                return state.map((val)=>(val.id == action.payload ? {...val,completed:!val.completed} : {...val} ))
            case "remove":
                return state.filter((val)=>val.id != action.payload)
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducerFn,initialState)
    const [input,setInput] = useState('')
    
    const addToDo = ()=>{
        if(input.trim().length != 0){
            dispatch({type:"add",payload:input})
            setInput('')
        }
    }
  return (
    <div>
      <h1>ToDO</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  />
      <button onClick={addToDo}>Click to Add</button>

      <ul>
        {
            state.map((val)=>(
                <li key={val.id} onClick={()=>dispatch({type:"completed",payload:val.id})}>{val.text} 
                <p>{val.completed ?  "completed" : "not Completed"}</p>
                <button onClick={()=>dispatch({type:"remove",payload:val.id})}>Remove</button>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default UseReducer
