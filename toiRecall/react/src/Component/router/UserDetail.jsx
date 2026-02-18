import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const {userId} = useParams()
  return (
    <div>
      <h1>{userId} detail is fetched</h1>
    </div>
  )
}

export default UserDetail
