import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchUserList } from '../redux/action/userAction'
import { useEffect } from 'react'

const Users = () => {
  const {loading,users,error} = useSelector((store)=>store.user)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUserList())
  },[dispatch])

  if(loading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>usersList</h1>
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
