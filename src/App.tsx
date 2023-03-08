import React from 'react'
import ButtonsPage from './pages/ButtonsPage'
import './index.css'
import InputsPage from './pages/InputsPage'
import DropdownsPage from './pages/DropdownsPage'
import IntersectionObserverPage from './pages/IntersectionObserverPage'

function App() {
  return (
    <div className="m-4">
      <ButtonsPage />
      <InputsPage />
      <DropdownsPage />
      <IntersectionObserverPage />
    </div>
  )
}

export default App