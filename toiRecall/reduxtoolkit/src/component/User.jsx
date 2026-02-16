import React, { useEffect } from 'react'
import { fetchUser } from '../asyncthunk/fetchUser'
import {useSelector,useDispatch} from 'react-redux'

const User = () => {
    const {loading,users,error} = useSelector((state)=>state.user)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUser())
    },[])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    <div>
      <h1>userList</h1>
      <ul>
        {
            users.map((val)=>{
                return(
                    <>
                    <li key={val.id}>{val.name}</li>
                    </>
                )
            })
        }
      </ul>
    </div>
  )
}

export default User
