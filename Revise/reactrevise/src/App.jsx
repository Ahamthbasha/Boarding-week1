import React, { lazy, Suspense } from 'react'
import UseState from './component/UseState'
import UseEffect from './component/UseEffect'
import UseRef from './component/UseRef'
import ParentToChild from './component/ParentToChild'
import ChildToParent from './component/ChildToParent'
import ForwardRef from './component/ForwardRef'
import CustomHook from './component/CustomHook'
import ConditionRender from './component/ConditionRender'
import UseMemo from './component/UseMemo'
import UseCallback from './component/UseCallback'
import ReactMemo from './component/ReactMemo'
import UseReducer from './component/UseReducer'
import MainContext from './context/MainContext'
import Input from './context/Input'
import Button from './context/Button'
import LazyLoading from './component/LazyLoading'
import Timer from './component/Timer'
import HOC from './component/HOC'

const LazyComponent = lazy(()=>import("./component/LazyLoading"))

const App = () => {
  return (
    <div>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      {/* <ParentToChild /> */}
      {/* <ChildToParent/> */}
      {/* <ForwardRef /> */}
      {/* <CustomHook /> */}
      {/* <ConditionRender /> */}

      {/* <UseMemo /> */}
      {/* <UseCallback/> */}
      {/* <ReactMemo/> */}
      {/* <UseReducer/> */}

      {/* context creation */}
      {/* <MainContext>
        <Input/>
        <Button/>
      </MainContext> */}

      {/* <Suspense fallback={<p>Loading...</p>}>
      <LazyComponent/>
      </Suspense> */}

      {/* <Timer/> */}

      <HOC />
    </div>
  )
}

export default App



// import React from 'react'
// import {BrowserRouter,Route, Routes,Link } from "react-router-dom"
// import Home from './Route/Home'
// import Contact from './Route/Contact'
// import AboutPage from './Route/AboutPage'
// import DetailPage from './Route/DetailPage'
// import ContactDetail from './Route/ContactDetail'
// import ProductDetail from './Route/ProductDetail'
// import UserInfo from './Route/UserInfo'
// const App = () => {
//   return (
//     <BrowserRouter>

//     <nav>
//     <Link to="/home">home</Link>
//     </nav>

//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/about' element={<AboutPage/>}/>

//         <Route path='/detail' element={<DetailPage/>}>
//         <Route path='contactDetail' element={<ContactDetail/>}/>
//         <Route path='productDetail' element={<ProductDetail/>}/>
//         </Route>

//         <Route path='/user/:userId' element={<UserInfo/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
