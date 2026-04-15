// import React from 'react'
// import Count from './component/Count'
// import UseEffe from './component/UseEffe'
// import UseRef from './component/UseRef'
// import ParentToChild from './component/ParentToChild'
// import ChildToParent from './component/ChildToParent'
// import ForwardRef from './component/ForwardRef'
// import RenderProps from './component/RenderProps'
// import CustomHook from './component/CustomHook'
// import Conditional from './component/Conditional'

// const App = () => {
//   return (
//     <div>
//       {/* <Count/> */}
//       {/* <UseEffe/> */}
//       {/* <UseRef/> */}
//       {/* <ParentToChild/> */}
//       {/* <ChildToParent/> */}
//       {/* <ForwardRef/> */}
//       {/* <RenderProps/> */}
//       {/* <CustomHook/> */}
//       {/* <Conditional/> */}


      
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import Home from './component/Router/Home'
// import Detail from './component/Router/Detail'
// import ContactDetail from './component/Router/ContactDetail'
// import ProductDetail from './component/Router/ProductDetail'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <nav>
//       <Link to="Home">Home</Link>
//     </nav>
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/detail' element={<Detail/>}>
//         <Route path='contactDetail' element={<ContactDetail/>}/>
//         <Route path='productDetail' element={<ProductDetail/>}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import React, { lazy, Suspense } from 'react'
// import Timer from './component/Timer'
// import UseMemo from './component/UseMemo'
// import UseCallback from './component/UseCallback'
// import ReactM from './component/ReactMemo'
import Context from './component/Context'
import Button from './component/Button'
import Input from './component/Input'
import UseReducer from './component/UseReducer'
import Logic1 from './component/Logic/Logic1'
import Logic2 from './component/Logic/Logic2'
import Logic3 from './component/Logic/Logic3'
import Logic4 from './component/Logic/Logic4'
import Logic5 from './component/Logic/Logic5'

const Lazy = lazy(()=>import  ('./component/LazyComponent'))


const App = () => {
  return (
    <div>
      {/* <Timer/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      {/* <ReactM/> */}
      {/* <Context>
        <Button/>
        <Input/>
      </Context> */}
      {/* <UseReducer/> */}
{/* 
      <Suspense fallback={<p>Loading...</p>}>
        <Lazy/>
      </Suspense> */}

      {/* <Logic1/> */}
      {/* <Logic2/> */}
      {/* <Logic3/> */}
      {/* <Logic4/> */}
      <Logic5/>

    </div>
  )
}

export default App
