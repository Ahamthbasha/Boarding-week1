import React, { useReducer, useState } from 'react'

const Todo = () => {
    const initialState = {
        todoList:[]
    }

    const reducerFn = (state=initialState,action)=>{
        switch(action.type){
            case "ADDTODO":
                return {...state,todoList:[...state.todoList,{id:Date.now(),task:action.payload,completed:false}]}
            case "REMOVETODO":
                return {...state,todoList:state.todoList.filter((val)=>val.id != action.payload)}

            case "COMPLETETODO":
                return {...state,todoList:state.todoList.map((val)=>val.id == action.payload ? {...val,completed:true} : val)}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducerFn,initialState)
    const [text,setText] = useState('')

    const add = ()=>{
        if(text.trim().length == 0){
            return
        }
        dispatch({type:"ADDTODO",payload:text})
        setText('')
    }

    const remove = (taskId)=>{
        dispatch({type:"REMOVETODO",payload:taskId})
    }

    const complete = (taskId)=>{
        dispatch({type:"COMPLETETODO",payload:taskId})
    }

  return (
    <div>
    <h1>To do list managament</h1>
    <input type="text" placeholder='enter task' value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={add}>Add To Do</button>  

    <ul>
        {
            state.todoList.map((val)=>{
                return(
                    <div key={val.id}>
                        <li>{val.task}</li>
                        <button onClick={()=>remove(val.id)}>Remove</button>
                        {!val.completed && <button onClick={()=>complete(val.id)}>click complete</button>}
                    </div>
                )
            })
        }
    </ul>
    </div>
  )
}

export default Todo
