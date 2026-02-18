import React, { useEffect, useState } from 'react'

const TableData = () => {
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState([])
    const [error,setError] = useState('')


    useEffect(()=>{
       const fetchUser = async()=>{
        try {
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const result = await response.json()
            console.log(result)
            setUser(result)
            setLoading(false)
        } catch (error) {
            setError(error.message)
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
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((val)=>{
                        return(
                            <tr key={val.id}>
                                <td>{val.id}</td>
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

export default TableData
