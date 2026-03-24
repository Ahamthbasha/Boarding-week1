// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     const [width,setWidth] = useState(window.innerWidth)

//     const currentWidthSet = ()=>{
//         setWidth(window.innerWidth)
//     }

//     useEffect(()=>{
//         window.addEventListener('resize',currentWidthSet)

//         return()=>{
//             window.removeEventListener('resize',currentWidthSet)
//         }
//     },[])
//   return (
//     <div>
//     <h1>Width:{width}</h1>  
//     </div>
//   )
// }

// export default UseEffect


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState([])
    const [error,setError] = useState('')

    const fetchUser = async()=>{
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = await response.json()
            setUsers(result)
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    //list format
    // <div>
    //     <h1>User List</h1>
    //     <ul>
    //         {
    //             users.map((val)=>{
    //                 return(
    //                     <div key={val.id}>
    //                         <li>{val.name}</li>
    //                     </div>
    //                 )
    //             })
    //         }
    //     </ul>
    // </div>

    //table format

    <div>
        <h1>userList</h1>
        <table border='1'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((val)=>(
                        <tr>
                            <td>{val.name}</td>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UseEffect

