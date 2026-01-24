import React, { useEffect, useState } from 'react'

const Table = () => {
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState([])
    const [error,setErrors] = useState('')

    const fetchUser = async ()=>{
        try {
            setLoading(true)
            const response = await fetch('https://fake-json-api.mock.beeceptor.com/users')
            const result = await response.json()
            setUsers(result)
        } catch (error) {
            setErrors(error.message)
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
    <div>
      <h1>User Table</h1>
     <table border='1' cellPadding='10'>
        {
            users.map((val)=>{
              return(
                <div>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                    <td>{val.name}</td>
                </tr>
                </tbody>
                </div>
              )  
            })
        }
     </table>
    </div>
  )
}

export default Table
