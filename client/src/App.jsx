import React from 'react'
import { Analytics } from "@vercel/analytics/react";
import { Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <>
      <Routes>

        {/* User Layout */}
        <Route path='/' element={<UserLayout/>}>
          <Route index element={<HomePage/>} />
          {/* Prdoucts */}
          {/* Cart */}
        </Route>

        <Route>{/*Admin Layout*/}</Route>

      </Routes>

      <Analytics />
    </>
  )
}

export default App