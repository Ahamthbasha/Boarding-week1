import React from 'react'
import Usestate from './Component/Usestate'
import UseEffect from './Component/UseEffect'
import UseRef from './Component/UseRef'
import ParentToChild from './Component/ParentToChild'
import ChildToParent from './Component/ChildToParent'
import ForwardRef from './Component/ForwardRef'
import RenderProps from './Component/RenderProps'
import List from './Component/List'
import Customhook from './Component/Customhook'
import ConditionRender from './Component/ConditionRender'
import HOC from './Component/HOC'
import Timer from './Component/Timer'
import UseMemo from './Component/UseMemo'
import UseCallback from './Component/UseCallback'
import ReactMemo from './Component/ReactMemo'
import ContextCreation from './context/ContextCreation'
import Input from './context/Input'
import Button from './context/Button'
import UseReducer from './Component/UseReducer'
import { lazy } from 'react'
import { Suspense } from 'react'
import InputReflect from './Logical/InputReflect'
import PreventLeftClick from './Logical/PreventLeftClick'
import PreventRightClick from './Logical/PreventRightClick'
import CopyToClipboard from './Logical/CopyToClipboard'
import DigitToWordConverter from './Logical/DigitToWordConverter'
import Todo from './Logical/Todo'
import Table from './Component/Table'

const Lazy = lazy(()=>import('./Component/LazyComponent'))

const App = () => {

  return (
    <div>
      {/* <Usestate/> */}
      {/* <UseEffect/> */}
      {/* <UseRef /> */}
      {/* <ParentToChild /> */}
      {/* <ChildToParent /> */}
      {/* <ForwardRef /> */}
      {/* <RenderProps/> */}
      {/* <List /> */}
      {/* <Customhook /> */}
      {/* <ConditionRender /> */}
      {/* <HOC /> */}
      {/* <Timer/> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <ReactMemo/> */}
      {/* <ContextCreation>
        <Input/>
        <Button/>
      </ContextCreation> */}
      {/* <UseReducer/> */}
      {/* <Suspense fallback={<p>Loading...</p>}>
      <Lazy />
      </Suspense> */}
      {/* <InputReflect/> */}
      {/* <PreventLeftClick /> */}
      {/* <PreventRightClick/> */}
      {/* <CopyToClipboard /> */}
      {/* <DigitToWordConverter/> */}
      {/* <Todo/> */}
      <Table />
    </div>
  )
}

export default App

//router related thing

// import React from 'react'
// import { BrowserRouter,Routes,Route, Link} from 'react-router-dom'
// import Home from './router/Home'
// import Details from './router/details'
// import ContactDetail from './router/ContactDetail'
// import ProductDetail from './router/productDetail'
// import UserInfo from './router/UserInfo'
// const App = () => {
//   return (
//     <BrowserRouter>
//     <nav>
//       <Link to='/home'>Home</Link>
//     </nav>
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/detail' element={<Details/>}>
//         <Route path='contactDetail' element={<ContactDetail/>}/>
//         <Route path='productDetail' element={<ProductDetail/>}/>
//         </Route>
//         <Route path='/userInfo/:userId' element={<UserInfo/>}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
