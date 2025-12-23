import React, { lazy, Suspense } from 'react'
import List from './Component/List'
import RenderProps from './Component/RenderProps'
import UseState from './Component/UseState'
import UseEffect from './Component/UseEffect'
import UseRef from './Component/UseRef'
import ParentToChild from './Component/ParentToChild'
import ChildToParent from './Component/ChildToParent'
import ForwardRefPass from './Component/ForwardRefPass'
import CustomHook from './Component/CustomHook'
import { Component, EnhancedComponent, Hoc } from './Component/Hoc'
import UseMemo from './Component/UseMemo'
import UseCallback from './Component/UseCallback'
import ReactMemo from './Component/ReactMemo'
import ContextCreation from './Context/ContextCreation'
import Input from './Context/Input'
import Button from './Context/Button'
import UseReducer from './Component/UseReducer'

const LazyComponent = lazy(()=>import('./Component/LazyComponent'))

const App = () => {
  return (
    <div>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef/> */}
      {/* <ParentToChild/> */}
      {/* <ChildToParent /> */}
      {/* <ForwardRefPass /> */}
      {/* <RenderProps /> */}
      {/* <List /> */}
      {/* <CustomHook /> */}
      {/* <EnhancedComponent />  */} {/* HOC */}
{/* week  2 react */}
      {/* <UseMemo /> */}
      {/* <UseCallback/> */}
      {/* <ReactMemo /> */}
{/* context Hooks */}
      {/* <ContextCreation>
        <Input/>
        <Button/>
      </ContextCreation> */}
      {/* <UseReducer /> */}

      <Suspense fallback={<p>Loading...</p>}> 
      <LazyComponent />
      </Suspense>
    </div>
  )
}

export default App



// ROUTER
// import React from 'react'
// import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
// import Contact from './RouterPages/Contact'
// import Details from './RouterPages/Details'
// import AddressDetail from './RouterPages/AddressDetail'
// import ProductDetail from './RouterPages/ProductDetail'
// import Home from './RouterPages/Home'
// import UserDetail from './RouterPages/UserDetail'
// const App = () => {

//   return (
    
    
//     <BrowserRouter>
//     <nav>
//       <Link to="/contact">contact</Link>
//     </nav>

//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/details' element={<Details/>}>
//         <Route path='productDetail' element={<ProductDetail/>}/>
//         <Route path='addressDetail' element={<AddressDetail/>}/>
//         </Route>
//         <Route path='/user/:userId' element={<UserDetail/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
