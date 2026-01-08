import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserToolkit } from '../redux/slices/userSlice'

const UserSComp = () => {
    const {loading,users,error} = useSelector((state)=>state.user)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUserToolkit())
    },[dispatch])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    <div>
      <h1>User Component</h1>
      <ul>
        {
            users.map((val)=>{
                return(
                    <li key={val.id}>{val.name}</li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default UserSComp
