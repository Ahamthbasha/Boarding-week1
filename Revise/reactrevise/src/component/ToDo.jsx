import React, { useReducer, useState } from 'react'

const ToDo = () => {
    const initialState = {
        todoList : []
    }

    const reducerFn = (state = initialState,action)=>{
        switch(action.type){
            case "ADDTODO":
                return {
                    ...state,
                    todoList:[
                        ...state.todoList,
                        {id:Date.now(),task:action.payload}
                    ]
                }
            case "REMOVETODO":
                return {
                    ...state,
                    todoList:state.todoList.filter((val)=>val.id!=action.payload)
                }
            case "COMPLETETODO":
                return {
                    ...state,
                    todoList:state.todoList.map((val)=>val.id == action.payload ? {...val,completed:true}:val)
                }
        }
    }


    const [state,dispatch] = useReducer(reducerFn,initialState)
    const [text,setText] = useState('')

    const addToDo = ()=>{
        if(!text.length){
            return
        }
        dispatch({type:"ADDTODO",payload:text})

        setText('')
    }

    const removeToDo =(val)=>{
        dispatch({type:"REMOVETODO",payload:val})
    }

    const markComplete = (val)=>{
        dispatch({type:"COMPLETETODO",payload:val})
    }

  return (
    <div>
        <h1>TODO LIST</h1>
        <ul>
            {
                state.todoList.map((val)=>{
                    return(
                        <div>
                            <li key={val.id}>


                                {val.task}

                                <button onClick={()=>removeToDo(val.id)}>Remove</button>
                            </li>
                                {!val.completed ? <button onClick={()=>markComplete(val.id)}>Mark Complete Task</button>:"completed"}
                        </div>
                    )
                })
            }
        </ul>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={addToDo}>AddToDo</button>      
    </div>
  )
}

export default ToDo
