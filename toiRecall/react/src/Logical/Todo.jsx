// import React, { useReducer, useState } from 'react'

// const Todo = () => {

//     const [text,setText] = useState('')
    
//     const initialState = {
//         todoList : []
//     }

//     const reducerFn = (state = initialState,action)=>{
//         switch(action.type){
//             case "ADD":
//                 return {...state,todoList:[...state.todoList,{id:Date.now(),task:action.payload,completed:false}]}
//             case "REMOVE":
//                 return {...state,todoList:state.todoList.filter((val)=>val.id != action.payload)}
//             case "MARKCOMPLETE":
//                 return {...state,todoList:state.todoList.map((val)=>val.id == action.payload ?{...val,completed:true} : val)}
//             default:
//                 return state
//         }
//     }

//     const [state,dispatch] = useReducer(reducerFn,initialState)

//     const addToDo = ()=>{
//         if(text.trim().length == 0){
//             return
//         }
//         dispatch({type:"ADD",payload:text})
//         setText('')
//     }

//     const removeToDo = (taskId)=>{
//         dispatch({type:"REMOVE",payload:taskId})
//     }

//     const mark = (taskId)=>{
//         dispatch({type:"MARKCOMPLETE",payload:taskId})
//     }

//   return (
//     <div>
//     <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
//     <button onClick={addToDo}>Add</button> 
//     <h1>Task List</h1> 
//     <ul>
//         {
//             state.todoList.map((val)=>{
//                 return(
//                     <div key={val.id}>
//                         <li>{val.task}</li>
//                         <button onClick={()=>{removeToDo(val.id)}}>Remove</button>
//                         {!val.completed && <button onClick={()=>mark(val.id)}>Mark</button>}
//                     </div>
//                 )
//             })
//         }
//     </ul>
//     </div>
//   )
// }

// export default Todo



import React from 'react'

const Todo = () => {
  return (
    <div>
      
    </div>
  )
}

export default Todo
