import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import HomePage from './components/Main/pages/HomePage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
        <Route index element={<HomePage/>} />
        </Route>
        <Route>{/*Admin Layout*/}</Route>
      </Routes>
    </div>
  )
}

export default App