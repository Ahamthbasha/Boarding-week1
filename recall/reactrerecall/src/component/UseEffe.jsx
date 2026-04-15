import React, { useEffect, useState } from 'react'

const UseEffe = () => {
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState([])
    const [error,setError] = useState('')

    useEffect(()=>{
        async function fetchUser(){
            try{
                setLoading(true)
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const result = await response.json()
                setUsers(result)
            }catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchUser()
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

      <table border={'2'}>
        <thead>
            <tr>
                <td>Id</td>
                <td>userName</td>
                <td>Name</td>
            </tr>
        </thead>
        <tbody>
            {
                users.map((val)=>{
                    return(
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.username}</td>
                            <td>{val.name}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default UseEffe
