import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/action/userAction'

const Userlist = () => {
    const {loading,users,error} = useSelector((state)=>state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])

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
            users.map((val)=>(
                <>
                <li key={val.id}>{val.name}</li>
                </>
            ))
        }
      </ul>
    </div>
  )
}

export default Userlist
