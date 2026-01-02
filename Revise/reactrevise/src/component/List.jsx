import React, { useState } from 'react'

const List = () => {
    const [fruits,setFruits] = useState(['apple','banana','cherry','dragonFruit'])

    const remove = ()=>{
      setFruits(fruits.slice(1))
    }

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
      {
        fruits.map((val,index)=>{
          return(
            <div>
              <li key={index}>{val}</li>
              <input defaultValue={val} />
            </div>
          )
        })
      }  

      <button onClick={remove}>Remove</button>
      </ul>  
    </div>
  )
}

export default List
