import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import fetchUser from '../redux/thunk/userthunk'
import { useEffect } from 'react'

const Users = () => {
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
      <h1>userList</h1>
      <ul>
        {
            users.map((val)=>{
                return(
                    <div key={val.id}>
                        <li >{val.name}</li>
                    </div>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Users
