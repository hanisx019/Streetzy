import React from 'react'
import Topbar from './HeaderComponents/Topbar'
import Navbar from './HeaderComponents/Navbar'

const Header = () => {
  return (
    <header>
        {/* Topbar */}
        <Topbar/>

        {/* Navbar */}
        <Navbar/>
        
    </header>
  )
}

export default Header