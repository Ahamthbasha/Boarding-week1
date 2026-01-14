import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUsers } from '../redux/actions/userActions'

const Users = () => {
    const {loading,users,error} = useSelector((state)=>state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }
  return (
    <div>
      <h1>user list</h1>
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

export default Users
