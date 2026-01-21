import React, { lazy, Suspense } from 'react'
import ParentToChild from './Component/ParentToChild'
import ChildToParent from './Component/ChildToParent'
import Forward from './Component/Forward'
import HOC from './Component/HOC'
import RenderProp from './Component/RenderProp'
import Todo from './Component/Todo'
import RightClick from './Component/RightClick'
import Clipboard from './Component/Clipboard'
import Main from './Context/Main'
import Input from './Context/Input'
import Button from './Context/Button'

const Lazy = lazy(()=>import('./Component/LazyComponent'))

const App = () => {
  return (
    <div>
      {/* <ParentToChild /> */}
      {/* <ChildToParent/> */}
      {/* <Forward/> */}
      {/* <HOC/> */}
      {/* <RenderProp/> */}
      {/* <Todo/> */}
      {/* <RightClick/> */}
      {/* <Clipboard /> */}
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Lazy/>
      </Suspense> */}

      <Main>
        <Input/>
        <Button/>
      </Main>
    </div>
  )
}

export default App
