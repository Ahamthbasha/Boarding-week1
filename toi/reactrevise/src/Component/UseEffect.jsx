import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

    const fetchUser = async()=>{
        try {
            setLoading(true)
            const result = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const response = await result.json()
            setUser(response)
            setLoading(false)
        } catch (error) {
            setError(error.message)
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
      <h1>User List</h1>
      <ul>
        {
            user.map((val)=>{
                return(
                    <div key={val.id}>
                        <li>{val.name}</li>
                    </div>
                )
            })
        }
      </ul>
    </div>
  )
}

export default UseEffect
