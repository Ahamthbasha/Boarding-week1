import React, { useReducer, useState } from 'react'

const Todo = () => {
    const initialState = {
        list:[]
    }

    const reducerFn = (state=initialState,action)=>{
        switch(action.type){
            case "ADDTODO":
                return {...state,list:[...state.list,{id:Date.now(),task:action.payload,completed:false}]}
            case "REMOVETODO":
                return {...state,list:state.list.filter((val)=>val.id != action.payload)}
            case "MARKTODO":
                return {...state,list:state.list.map((val)=>val.id?{...val,completed:true}:val)}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducerFn,initialState)

    const [text,setText] = useState('')

    const addTodo = ()=>{
        if(text.trim().length == 0){
            return
        }

        dispatch({type:"ADDTODO",payload:text})
        setText('')
    }

    const removeTodo = (id)=>{
        dispatch({type:"REMOVETODO",payload:id})
    }

    const markTodo = (id)=>{
        dispatch({type:"MARKTODO",payload:id})
    }

  return (
    <div>
      <h1>To Do List</h1>

      <ul>
        {
            state.list.map((val)=>{
                return (
                <div key={val.id}>
                    <li>{val.task}</li>
                    {!val.completed && <button onClick={()=>markTodo(val.id)}>Mark Completed</button>}
                    <button onClick={()=>removeTodo(val.id)}>Remove</button>
                </div>
                )
            })
        }
      </ul>

      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={addTodo}>Add Task</button>
    </div>
  )
}

export default Todo
