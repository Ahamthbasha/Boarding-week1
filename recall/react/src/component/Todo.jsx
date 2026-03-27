import React, { useEffect, useReducer, useState } from 'react'

const Todo = () => {
  const initialState = {
    todo:[]
  }

  const reducerFn =(state=initialState,action)=>{
    switch(action.type){
      case 'ADD':
        return {...state,todo:[...state.todo,{id:Date.now(),task:action.payload,completed:false,edit:false,editedText:action.payload}]}
      case 'DELETE':
        return {...state,todo:state.todo.filter((val)=>val.id != action.payload)}
      case 'CHANGESTATUS':
        return {...state,todo:state.todo.map((val)=>val.id==action.payload ? {...val,completed:!val.completed} : val)}
      case 'OPENCLOSEMODEL':
        return {...state,todo:state.todo.map((val)=>val.id==action.payload ? {...val,edit:!val.edit} : val)}
      case 'EDIT':
        return {...state,todo:state.todo.map((val)=>val.id == action.payload ? {...val,task:val.editedText} : val)}
      case 'UPDATE':
        return {...state,todo:state.todo.map((val)=>val.id == action.payload.id ? {...val,editedText:action.payload.editedText} : val)}
      default:
        return state
    }
  }

  const getInitialData = ()=>{
    const data = localStorage.getItem('todo')
    return data ? JSON.parse(data) : initialState
  }

  const [state,dispatch] = useReducer(reducerFn,undefined,getInitialData)
  const [input,setInput] = useState('')

  useEffect(()=>{
    localStorage.setItem('todo',JSON.stringify(state))
  },[state])

  const add =()=>{
    if(input.trim().length == 0){
      alert('input should not be empty')
      return
    }else{
      dispatch({type:"ADD",payload:input})
      setInput('')
    }
  }

  const deleteTodo = (taskId)=>{
    dispatch({type:'DELETE',payload:taskId})
  }

  const changeStatus = (taskId)=>{
    dispatch({type:'CHANGESTATUS',payload:taskId})
  }

  const openModelToEdit = (taskId)=>{
    dispatch({type:"OPENCLOSEMODEL",payload:taskId})
  }

  const edit = (taskId)=>{
    dispatch({type:'EDIT',payload:taskId})
    dispatch({type:"OPENCLOSEMODEL",payload:taskId})
  }

  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={add}>AddTodo</button>

      <h1>To do</h1>
      <ul>
        {
          state.todo.map((val)=>{
            return(
              <div key={val.id}>
                <li>{val.task}</li>
                <br />
                <button onClick={()=>deleteTodo(val.id)}>Delete Task</button>
                <br />
                <p>status:{val.completed ? "completed" : "notCompleted"}</p>
                <br />
                <button onClick={()=>changeStatus(val.id)}>Change Status</button>
                <br />
                <button onClick={()=>openModelToEdit(val.id)}>Edit Task</button>
                {
                  val.edit && 
                    <div>
                      <input type="text" value={val.editedText} onChange={(e)=>dispatch({type:'UPDATE',payload:{id:val.id,editedText:e.target.value}})}/>
                      <button onClick={()=>edit(val.id)}>Edit Task</button>
                    </div>
                }
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todo
