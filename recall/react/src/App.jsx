// import React from 'react'
// import Counter from './component/Counter'
// import UseEffect from './component/UseEffect'
// import UseRef from './component/UseRef'
// import ForwardRef from './component/ForwardRef'
// import ParentToChild from './component/ParentToChild'
// import ChildToParent from './component/ChildToParent'
// import HOC from './component/HOC'
// import RenderProps from './component/RenderProps'
// import ComponentBasedOnHook from './component/ComponentBasedOnHook'

// const App = () => {
//   return (
//     <div>
//       {/* <Counter /> */}
//       {/* <UseEffect/> */}
//       {/* <UseRef /> */}
//       {/* <ForwardRef/> */}
//       {/* <ParentToChild/> */}
//       {/* <ChildToParent/> */}
//       {/* <HOC/> */}
//       {/* <RenderProps/> */}
//       {/* <ComponentBasedOnHook/> */}
//     </div>
//   )
// }

// export default App

//Router

import React from 'react'
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Home from './router/Home'
import Contact from './router/Contact'
import Detail from './router/Detail'
import ProductDetail from './router/ProductDetail'
import AboutDetail from './router/AboutDetail'
import UserDetail from './router/UserDetail'

const App = () => {
  return (
    <Router>
      <nav>
      <Link to='/'>home</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/detail' element={<Detail/>}>
        <Route path='productDetail' element={<ProductDetail/>}/>
        <Route path='aboutDetail' element={<AboutDetail/>}/>
        </Route>

        <Route path='/user/:userId' element={<UserDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App
