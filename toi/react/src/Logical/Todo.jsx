import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

const Todo = () => {
    const initialState={
        list:[]
    }

    const reducerFn = (state=initialState,action)=>{
        switch(action.type){
            case "ADD":
                return {...state,list:[...state.list,{id:Date.now(),task:action.payload,completed:false}]}
            case "REMOVE":
                return {...state,list:state.list.filter((val)=>val.id !== action.payload)}
            case "MARKCOMPLETED":
                return {...state,list:state.list.map((val)=>val.id==action.payload?{...val,completed:true}:val)}
            default:
                return state
        }
    }

    const [state,dispatch] = useReducer(reducerFn,initialState)
    const [input,setInput] = useState('')

    const addTodo = ()=>{
        if(input.length == 0){
            return
        }
        dispatch({type:'ADD',payload:input})
        setInput('')
    }

    const removeTodo = (id)=>{
        dispatch({type:"REMOVE",payload:id})
    }

    const markComplete = (id)=>{
        dispatch({type:"MARKCOMPLETED",payload:id})
    }
  return (
    <div>
        <h1>To do list</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addTodo}>AddToDo</button>

      <ul>
        {
            state.list.map((val)=>{
                return(
                    <div key={val.id}>
                        <li>{val.task}</li>
                        {val.completed ? "completed" : "Not Completed"}
                        <button onClick={()=>removeTodo(val.id)}>Remove</button>
                        <button onClick={()=>markComplete(val.id)}>MarkCompleted</button>
                    </div>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Todo
