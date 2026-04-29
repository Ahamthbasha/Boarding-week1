// import React from 'react'
// import Search from './component/Search'
// import Debounce from './component/Debounce'
// import ToggleListSelection from './component/ToggleListSelection'
// import CounterWithUndo from './component/CounterWithUndo'
// import DerivedState from './component/DerivedState'
// import SearchFilterPagination from './component/SearchFilterPagination'
// import Cart from './component/Cart'
// import ShoppingCart from './component/ShoppingCart'
// import UndoRedo from './component/UndoRedo'
// import Form from './component/Form'

// const App = () => {
//   return (
//     <div>
//       {/* <Search/> */}
//       {/* <Debounce/> */}
//       {/* <ToggleListSelection /> */}
//       {/* <CounterWithUndo/> */}
//       {/* <DerivedState/> */}
//       {/* <SearchFilterPagination /> */}
//       {/* <Cart /> */}
//       {/* <ShoppingCart/> */}
//       {/* <UndoRedo/> */}
//       <Form />
//     </div>
//   )
// }

// export default App


import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from './component/Form'
import Otp from './component/otp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/otp' element={<Otp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
