import React, { useState } from 'react'

const List = () => {
  const [fruits,setFruits] = useState(['Apple','Banana','Cherry'])

  const removeFirst = ()=>{
    setFruits((fruits)=>fruits.slice(1))
  }

  return (
    <div>
      <h1>Fruit list</h1>
      <ul>
      {
        fruits.map((val,index)=>{
          return <div>
            <li key={index}>{val}</li>
            <input defaultValue={val} />
          </div>
        })
      }
      </ul>
      <button onClick={removeFirst}>Remove</button>
    </div>
  )
}

export default List
