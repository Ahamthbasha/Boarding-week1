import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchUser } from '../redux/action/userAction'
const User = () => {
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
                <div key={val.id}>
                  <li>{val.name}</li>  
                </div>
            ))
        }
      </ul>
    </div>
  )
}

export default User
