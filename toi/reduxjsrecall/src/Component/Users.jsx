import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchUser from '../redux/asyncthunk/fetchUser'

const Users = () => {
    const {loading,users,error} = useSelector((state)=>state.userReducer)

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
            users.map((val)=>{
                return (
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

export default Users
