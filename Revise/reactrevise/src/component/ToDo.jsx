import React, { useReducer, useState } from 'react'

const ToDo = () => {
    const initialState= {
        todoList : []
    }

    const reducerFn = (state = initialState,action)=>{
        switch(action.type){
            case "ADDTODO":
                return {
                    ...state,
                    todoList:[
                        ...state.todoList,
                        {id:Date.now(),task:action.payload,completed:false}
                    ]
                }
            case "REMOVETODO":
                return{
                    ...state,
                    todoList:state.todoList.filter((val)=>val.id != action.payload)
                }
            case "COMPLETETODO":
                return{
                    ...state,
                    todoList:state.todoList.map((val)=>val.id==action.payload?{...val,completed:true}:val)
                }
        }
    }

    const [state,dispatch] = useReducer(reducerFn,initialState)
    const [task,setTask] = useState('')

    const addToList = ()=>{
        if(!task.length){
            return
        }
        dispatch({type:"ADDTODO",payload:task})
        setTask('')
    }

    const removeToDoList = (val)=>{
        dispatch({type:"REMOVETODO",payload:val})
    }

    const completeToDoList = (val)=>{
        dispatch({type:"COMPLETETODO",payload:val})
    }

    const inputTask = (e)=>{
        setTask(e.target.value)
    }

  return (
    <div>
      <h1>To DO LIST</h1>
      <ul>
        {
            state.todoList.map((val)=>{
                return(
                    <div key={val.id}>
                        <li>{val.task}</li>
                        <button onClick={()=>removeToDoList(val.id)}>Remove</button>

                        {!val.completed ? <button onClick={()=>completeToDoList(val.id)}>mark Completed</button> : "Completed"}
                    </div>
                )
            })
        }
      </ul>

      <input type="text" value={task} onChange={inputTask} />
      <button onClick={addToList}>AddToDO</button>
    </div>
  )
}

export default ToDo
