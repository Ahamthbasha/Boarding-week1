import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from '../redux/action/userAction'

const User = () => {
    const {loading,users,error} = useSelector((state)=>state.user)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUserData())
    },[])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }
  return ( 
    <div>
      <h1>UserList</h1>
      <ul>
        {
            users.map((val)=>{
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

export default User
