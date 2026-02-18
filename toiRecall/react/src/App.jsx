import React, { lazy, Suspense } from 'react'
import Usestate from './Component/Usestate'
import UseEffect from './Component/UseEffect'
import UseRef from './Component/UseRef'
import ParentToChild from './Component/ParentToChild'
import ChildToParent from './Component/ChildToParent'
import ForwardRef from './Component/ForwardRef'
import HOC from './Component/HOC'
import RenderProps from './Component/RenderProps'
import CustomCounter from './Component/CustomCounter'
import ConditionRender from './Component/ConditionRender'
import Timer from './Component/Timer'
import UseMemo from './Component/UseMemo'
import UseCallback from './Component/UseCallback'
import ReactMemo from './Component/ReactMemo'
import UseReducer from './Component/UseReducer'
import ContextCreator from './Component/context/ContextCreator'
import Input from './Component/context/Input'
import Button from './Component/context/Button'
import Logic1 from './Logical/Logic1'
import Logic2 from './Logical/Logic2'
import Logic3 from './Logical/Logic3'
import Logic4 from './Logical/Logic4'
import Todo from './Logical/Todo'

const Lazy = lazy(()=>import('./Component/LazyComponent'))

const App = () => {
  return (
    <div>
      {/* <Usestate /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <ParentToChild /> */}
      {/* <ChildToParent /> */}
      {/* <ForwardRef /> */}
      {/* <HOC /> */}
      {/* <RenderProps/> */}
      {/* <CustomCounter /> */}
      {/* <ConditionRender/> */}
      {/* <Timer/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback /> */}
      {/* <ReactMemo /> */}
      {/* <UseReducer /> */}
{/* 
      <ContextCreator>
        <Input/>
        <Button/>
      </ContextCreator> */}

      {/* <Suspense fallback={<p>Loading...</p>}>
      <Lazy/>
      </Suspense> */}

      {/* <Logic1 /> */}
      {/* <Logic2/> */}
      {/* <Logic3 /> */}
      {/* <Logic4/> */}
      {/* <Todo/> */}

      
    </div>
  )
}

export default App



// import React from 'react'
// import { Routes,Route ,Link} from 'react-router-dom'
// import Home from './Component/router/Home'
// import Details from './Component/router/Details'
// import ProductDetail from './Component/router/ProductDetail'
// import ContactDetail from './Component/router/ContactDetail'
// import UserDetail from './Component/router/UserDetail'


// const App = () => {
//   return (
//     <>
    
//       <nav>
//       <Link to="/">home</Link>
//       </nav>
//     <Routes>

//       <Route path='/' element={<Home/>}/>
//       <Route path='/details' element={<Details/>}>
//       <Route path='productDetail' element={<ProductDetail/>}/>
//       <Route path='contactDetail' element={<ContactDetail/>}/>
//       </Route>
//       <Route path='/user/:userId' element={<UserDetail/>}/>
//       <Route />
//     </Routes>
//     </>
//   )
// }

// export default App
