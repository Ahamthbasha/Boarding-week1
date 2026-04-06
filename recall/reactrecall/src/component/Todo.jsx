import React, { useEffect, useReducer, useState } from 'react'

const Todo = () => {


    const initialState = {
        todo : []
    }

    const reducerFn = (state=initialState,action)=>{
        switch(action.type){
            case 'ADD':
                return {...state,todo:[...state.todo,{id:Date.now(),task:action.payload,completed:false,edit:false,editedText:action.payload}]}
            case 'DELETE':
                return {...state,todo:state.todo.filter((val)=>val.id!=action.payload)}
            case 'CHANGE_STATUS':
                return {...state,todo:state.todo.map((val)=>val.id==action.payload?{...val,completed:!val.completed}:val)}
            case 'EDIT_TASK':
                return {...state,todo:state.todo.map((val)=>val.id == action.payload ? {...val,edit:!val.edit}:val)}
            case 'EDIT_TASK_TEXT':
                return {...state,todo:state.todo.map((val)=>val.id == action.payload.taskId ? {...val,editedText:action.payload.text}:val)}
            case 'UPDATE_TASK_TEXT':
                return {...state,todo:state.todo.map((val)=>val.id == action.payload ? {...val,task:val.editedText} : val)}
            default:
                return state
        }
    }

    const getInitialState = ()=>{
        let state = localStorage.getItem('tasks')
        return JSON.parse(state) || {todo:[]}
    }

    const [state,dispatch] = useReducer(reducerFn,undefined,getInitialState)

    const [input,setInput] = useState('')

    const add = ()=>{
        if(input.trim().length == 0){
            alert('text is empty')
            return
        }else{
            console.log(input)
            dispatch({type:'ADD',payload:input})
            setInput('')
        }
    }
    
    const deleteTask = (taskId)=>{
        dispatch({type:'DELETE',payload:taskId})
    }

    const changeStatus = (taskId)=>{
        dispatch({type:'CHANGE_STATUS',payload:taskId})
    }
    
    const editTask = (taskId)=>{
        dispatch({type:'EDIT_TASK',payload:taskId})
    }

    const updateTask = (taskId)=>{
        dispatch({type:'UPDATE_TASK_TEXT',payload:taskId})
        dispatch({type:'EDIT_TASK',payload:taskId})
    }

    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(state))
    },[state])

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={add}>Add</button>
        <h1>To do list</h1>
    <ul>
        {
           state.todo.map((val)=>{
            return(
                <div key={val.id}>
                    <li>{val.task}</li>
                    {val.completed ? <p>completed</p> : <p>Not completed</p>}
                    <button onClick={()=>changeStatus(val.id)}>Change Status</button>
                    <br />
                    <button onClick={()=>deleteTask(val.id)}>Delete</button>


                    <br />

                    <button onClick={()=>editTask(val.id)}>Edit Task Text</button>
                    
                    <br />

                    {val.edit && 
                    <div>
                        <input type='text' value={val.editedText} onChange={(e)=>dispatch({type:'EDIT_TASK_TEXT',payload:{taskId:val.id,text:e.target.value}})}/>
                        <br />
                        <button onClick={()=>updateTask(val.id)}>Update Task Text</button>
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
