// import React from 'react'
// import Counter from './components/Counter'

// const App = () => {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }

// export default App








import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Home from './Router/Home'
import Detail from './Router/Detail'
import ContactDetail from './Router/ContactDetail'
import ProductDetail from './Router/ProductDetail'
import UserProfile from './Router/UserProfile'
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}>
        <Route path='contactDetail' element={<ContactDetail/>}/>
        <Route path='productDetail' element={<ProductDetail/>}/>
        </Route>
        <Route path='/user/:userId' element={<UserProfile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
