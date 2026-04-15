import React, { useEffect, useReducer, useState } from 'react'

const Logic5 = () => {
    const initialState = {
        todoList : []
    }

    const reducerFn = (state = initialState,action)=>{
        switch(action.type){
            case 'ADD':
                return {...state,todoList:[...state.todoList,{id:Date.now(),task:action.payload,completed:false,edit:false,editText:action.payload}]}
            case 'DELETE':
                return {...state,todoList:state.todoList.filter((val)=>val.id != action.payload)}
            case 'UPDATE_STATUS':
                return {...state,todoList:state.todoList.map((val)=>val.id == action.payload ? {...val,completed:true}:val)}
            case 'EDIT_MODE':
                return {...state,todoList:state.todoList.map((val)=>val.id == action.payload ? {...val,edit:!val.edit} : val)}
            case 'EDIT_TASK':
                return {...state,todoList:state.todoList.map((val)=>val.id == action.payload.taskId ? {...val,editText:action.payload.editTask} : val)}
            case 'UPDATE':
                return {...state,todoList:state.todoList.map((val)=>val.id == action.payload ? {...val,task:val.editText} : val)}
            default :
            return state
        }
    }
    
    const getInitialData = ()=>{
        const result = localStorage.getItem('todo')
        return JSON.parse(result) || initialState
    }

    const [input,setInput] = useState('')
    const [state,dispatch] = useReducer(reducerFn,undefined,getInitialData) 

    useEffect(()=>{
        localStorage.setItem('todo',JSON.stringify(state))
    },[state])


    const add = ()=>{
        if(input.trim().length == 0){
            alert('todo task is empty')
            return
        }

        dispatch({type:'ADD',payload:input})
        setInput('')
    }

    const update = (taskId)=>{
        dispatch({type:"UPDATE_STATUS",payload:taskId})
    }

    const deleteTask = (taskId)=>{
        dispatch({type:"DELETE",payload:taskId})
    }

    const editMode = (taskId)=>{
        dispatch({type:"EDIT_MODE",payload:taskId})
    }

    const updateTask = (taskId)=>{
        dispatch({type:'UPDATE',payload:taskId})
        dispatch({type:'EDIT_MODE',payload:taskId})
    }

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={add}>Add</button>

        <h1>To do list</h1>

        <ul>
        {
            state.todoList.map((val)=>{
                return(
                    <div key={val.id}>
                        <p>{val.task}</p>
                        <p>status: {val.completed ? "completed" : "not completed"}</p>
                        {!val.completed && <button onClick={()=>update(val.id)}>StatusUpdated</button>}
                        <br />
                        <button onClick={()=>deleteTask(val.id)}>Delete</button>
                        <br />
                        <button onClick={()=>editMode(val.id)}>Edit Mode</button>
                        {
                            val.edit &&
                            <div>
                                <input type="text" value={val.editText} onChange={(e)=>dispatch({type:'EDIT_TASK',payload:{taskId:val.id,editTask:e.target.value}})}/>
                                <button onClick={()=>updateTask(val.id)}>Update Task</button>
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

export default Logic5
