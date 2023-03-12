import React from 'react'
import ButtonsPage from './pages/ButtonsPage'
import './index.css'
import InputsPage from './pages/InputsPage'
import DropdownsPage from './pages/DropdownsPage'
import IntersectionObserverPage from './pages/IntersectionObserverPage'
import InfiniteScrollPage from './pages/InfiniteScrollPage'
import ModalsPage from './pages/ModalsPage'

function App() {
  return (
    <div className="m-4">
      <ModalsPage />
      {/* <ButtonsPage />
      <InputsPage />
      <DropdownsPage />
      <IntersectionObserverPage />
      <InfiniteScrollPage /> */}
    </div>
  )
}

export default App