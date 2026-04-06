import React, { useEffect, useState } from 'react'

const OptimizedSearch = () => {
    const [no,setNo] = useState('')
    const [loading,setLoading] = useState(false)
    const [user,setUser] =useState({})
    const [error,setError] = useState('')

    
    useEffect(()=>{

        if(!no){
            return
        }

        const controller = new AbortController()

        const fetchUser = async (no)=>{
            try {
                setLoading(true)
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${no}`,{signal:controller.signal})

                    console.log(response)

                    if(!response.ok){
                        alert(`User not found`)
                    }

                    const result = await response.json()
                    setUser(result)
                setLoading(false)
            } catch (error) {
                if(error.name == 'AbortError')
                setLoading(false)
                setError(error.message)    
            }
        }

       const timer = setTimeout(()=>{
            fetchUser(no)
        },500)

        return ()=>{
            clearTimeout(timer)
            controller.abort()
        }
    },[no])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    <div>
      <h1>User</h1>
      <input type="text" value={no} onChange={(e)=>setNo(e.target.value)} />
    {
      (Object.keys(user).length >0) &&
                <div>
                    <p>Name:{user.name}</p>
                    <p>UserName:{user.username}</p>
                    <p>email:{user.email}</p>
                </div>
    }
    </div>
  )
}

export default OptimizedSearch
