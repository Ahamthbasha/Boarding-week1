// import React from 'react'
// import { useState } from 'react'

// const List = () => {
//     const [fruits,setFruits] = useState(['apple','banana','cherry','dragonFruit'])

//     const removeFruit = ()=>{
//         setFruits((fruits)=>fruits.slice(1))
//     }
//   return (
//     <div>
//       <h1>Fruits list</h1>
//       <ul>
//         {
//             fruits.map((val)=>{
//                 return(
//                     <div>
//                         <li>{val}</li>
//                         <input type="text" defaultValue={val} />
//                     </div>
//                 )
//             })
//         }
//       </ul>
//       <button onClick={removeFruit}>Remove Fruits</button>
//     </div>
//   )
// }

// export default List


//correct way of implementing list

import React from 'react'
import { useState } from 'react'

const List = () => {
    const [fruits,setFruit] = useState([{id:1,name:"apple"},{id:2,name:"banana"},{id:3,name:"cherry"},{id:4,name:"dragonFruit"}])

    const remove =()=>{
        setFruit((fruits)=>fruits.slice(1))
    }

    const handleChange=(id,value)=>{
       setFruit((fruits)=>{
        return fruits.map((val)=>val.id==id?{...val,name:value}:val)
       })
    }

  return (
    <div>
    <h1>Fruit lists</h1>
    <ul>
    {
        fruits.map((val)=>{
            return(
                <div key={val.id}>
                    <li>{val.name}</li>
                    <input type="text" value={val.name} onChange={(e)=>handleChange(val.id,e.target.value)} />
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
