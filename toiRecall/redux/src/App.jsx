import React from 'react'
import CakeIce from './component/CakeIce'
import UserList from './component/UserList'
import Rice from './component/Rice'
import Pongal from './component/Pongal'

const App = () => {
  return (
    <div>
      {/* <CakeIce/> */}
      {/* <UserList /> */}
      {/* <Rice /> */}
      <Pongal isRice/>
    </div>
  )
}

export default App
