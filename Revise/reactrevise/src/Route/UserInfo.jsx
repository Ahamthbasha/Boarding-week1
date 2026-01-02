import React from 'react'
import { useParams } from 'react-router'

const UserInfo = () => {
    const {userId} = useParams()
  return (
    <div>
      <h1>userId is {userId}.Your information is retrieved</h1>
    </div>
  )
}

export default UserInfo
