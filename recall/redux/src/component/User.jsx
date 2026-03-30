import React,{ useEffect} from 'react'
import { fetchUser } from '../store/actions/userAction'
import {useSelector,useDispatch} from 'react-redux'

const User = () => {
    const {loading,users,error} = useSelector((state)=>state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* <ul>
        {
            users.map((val)=>{
                return(
                    <div key={val.id}>
                        <li>{val.name}</li>
                    </div>
                )
            })
        }
      </ul> */}

      {/* table format */}

      <table border='1'>
        <thead>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>userName</td>
                <td>email</td>
            </tr>
        </thead>
        <tbody>
            {
                users.map((val)=>
                <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default User
