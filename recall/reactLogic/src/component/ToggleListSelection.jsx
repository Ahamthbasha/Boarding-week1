import React, { useState } from 'react'

const ToggleListSelection = () => {
    const items = ["React", "Node", "MongoDB", "Express"]

    const properItems = []

    let id = 0

    for(let val of items){
        let tempObj = {}
        tempObj.course = val
        tempObj.toggle = false
        tempObj.id = id
        properItems.push(tempObj)
        id++
    }

    const [count,setCount] = useState(0)
    const [allItems,setItems] = useState(properItems)


    const selectAll = ()=>{
        setItems((allItems)=>{
            const updatedItems = allItems.map((val)=>({...val,toggle:true}))
            setCount(updatedItems.length)
            return updatedItems
        })
    }

    const unSelectAll = ()=>{
        setItems((allItems)=>{
            const updatedItems = allItems.map((val)=>({...val,toggle:false}))
            setCount(0)
            return updatedItems
        })
    }

    const changeToggle = (id)=>{
        setItems((allItems)=>{
            const updatedItems = allItems.map((val)=> val.id == id ? {...val,toggle:!val.toggle} : val
            )

            setCount(updatedItems.filter((val)=>val.toggle == true).length)

            return updatedItems
        })
    }

  return (
      <div>
        {
            allItems.length > 0 && (
                <div>

                    <h1>Overall Selected count:{count}</h1>
                   
            
                    {
                    allItems.map((val)=>{
                            return(
                                <div key={val.id}>
                                    <input type='checkbox' checked={val.toggle} onClick={()=>changeToggle(val.id)}/>
                                    <li>{val.course}</li>
                                </div>
                            )
                        })
                    }  
                    <button onClick={selectAll}>Select All</button>
                    <br />
                    <br />
                    <button onClick={unSelectAll}>unSelect All</button>
                </div>
            )
        }
    </div>
  )
}

export default ToggleListSelection
