//correct way of implementing list

// import React, { useState } from 'react'

// const List = () => {

//   const [fruits,setFruit] = useState(
//     [{id:1,name:"apple"},{id:2,name:"banana"},{id:3,name:"cherry"},{id:4,name:"dragonFruit"}]
//   )

//   const remove = ()=>{
//     setFruit((fruits)=>fruits.slice(1))
//   }

//   const handleChange = (id,value)=>{
//     setFruit((fruits)=>{
//       return fruits.map((fruit)=>fruit.id == id ? {...fruits,name:value}: fruit)
//     })
//   }
//   return (
//     <div>
//       <h1>Fruit List</h1>
//       <ul>
//         {
//           fruits.map((val)=>{
//             return(
//               <div key={val.id}>
//                 <li>{val.name}</li>
//                 <input type="text" value={val.name} onChange={(e)=>handleChange(val.id,e.target.value)} />
//               </div>
//             )
//           })
//         }
//       </ul>
//       <button onClick={remove}>Remove</button>
//     </div>
//   )
// }

// export default List

//implementing list based on index

import React, { useState } from 'react'

const List = () => {
  const [fruit,setFruit] = useState(['apple','banana','cherry','dragonFruit'])

  const remove = ()=>{
    setFruit((fruit)=>fruit.slice(1))
  }

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
      {
        fruit.map((val,index)=>{
          return(
            <div key={index}>
              <li>{val}</li>
              <input defaultValue={val} />
            </div>
          )
        })
      }  
      </ul>   
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default List
