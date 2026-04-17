import React, { useEffect, useState } from 'react'

const Debounce = () => {
    const [search,setSearch] = useState('')
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState({})
    const [error,setError] = useState('')

    useEffect(()=>{

        const abort = new AbortController()

        async function fetchUser(){
            try {
                setLoading(true)
                if(search.trim().length != 0){
                        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${search}`,{signal:abort.signal})
    
                        const result = await response.json()
    
                        setUsers(result)
                }
            } catch (error) {
                if(error.name != 'AbortError'){
                    setError(error.message)
                }
            }
            finally{
                setLoading(false)
            }
        }

       const timer =  setTimeout(()=>{
            fetchUser()
        },1000)

        return()=>{
            clearTimeout(timer)
            abort.abort()
        }
    },[search])

    const searchingVal = (e)=>{
            setSearch(e.target.value)
    }

    if(loading){
        return <p>Loading</p>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    <div>
      {
        users && users.id && 

        (<>
        <h1>User Details</h1>
        <p>id is :{users.id}</p>
        <p>name is :{users.name}</p>
        <p>username is :{users.username}</p>
        </>)
      }

      <input type="text" value={search} onChange={searchingVal}/>
    </div>
  )
}

export default Debounce
