import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout/>} />
        <Route>{/*Admin Layout*/}</Route>
      </Routes>
    </div>
  )
}

export default App