import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/asyncThunk/fetchUser'

const User = () => {
    const {loading,users,error} = useSelector((state)=>state.user)

    const dispath = useDispatch()

    useEffect(()=>{
        dispath(fetchUser())
    },[dispath])

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
            users.map((val)=>{
                return <div key={val.id}>
                    <li>{val.name}</li>
                </div>
            })
        }
      </ul>
    </div>
  )
}

export default User
