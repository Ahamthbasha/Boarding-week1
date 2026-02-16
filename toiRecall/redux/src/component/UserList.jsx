import React, { useEffect,} from 'react'
import { fetchUserList } from '../redux/actions/userActions'
import {useDispatch, useSelector} from 'react-redux'

const UserList = () => {
    const {loading,users,error} = useSelector((store)=>store.user)
    const dispatch =useDispatch()
    
    useEffect(()=>{
        dispatch(fetchUserList())
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

export default UserList
