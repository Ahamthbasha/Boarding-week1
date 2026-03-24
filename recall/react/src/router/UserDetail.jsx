import React from 'react'
import { useParams } from 'react-router'

const UserDetail = () => {
    const {userId} = useParams()
  return (
    <div>
      <h1>userId:{userId} info is retrieved</h1>
    </div>
  )
}

export default UserDetail
