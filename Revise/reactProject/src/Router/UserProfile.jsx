import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const {userId} = useParams()
  return (
    <div>
      <h1>userId information retrieved based on this id :{userId}</h1>
    </div>
  )
}

export default UserProfile
