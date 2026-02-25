import React, { useEffect, useState } from 'react'

const Table = () => {
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState([])
    const [error,setError] = useState('')

    
    useEffect(()=>{
        const fetchUser = async function(url){
            try {
                setLoading(true)
                const response = await fetch(url)
                const result = await response.json()
                setUsers(result)
                setLoading(false)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchUser('https://jsonplaceholder.typicode.com/users')
    },[])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }
  return (
    <div>
      <h1>User List</h1>
      {/* <ul>
        {
            users.map((val)=>{
                return(
                    <div key={val.id}>
                        <li>{val.name}</li>
                    </div>
                )
            })
        }
      </ul> */}


      <table border='1'>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((val)=>{
                    return(
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.username}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
