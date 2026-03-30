import React from 'react'
import Cake from './component/Cake'
import Icecream from './component/Icecream'
import User from './component/User'
import  MapStateToProps  from './component/MapStateToProps'
import MapStateDispatchProp from './component/MapStateDispatchProp'

const App = () => {
  return (
    <div>
      {/* <Cake/>
      <Icecream/> */}
      {/* <User/> */}
      {/* <MapStateToProps/> */}
      <MapStateDispatchProp Cake/>
    </div>
  )
}

export default App
