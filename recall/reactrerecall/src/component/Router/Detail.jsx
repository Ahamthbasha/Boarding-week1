import React from 'react'
import {Outlet} from 'react-router-dom'

const Detail = () => {
  return (
    <div>
      <h1>DEtail</h1>
      <Outlet/>
    </div>
  )
}

export default Detail
