import React from 'react'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'

const Header = () => {
  return (
    <div>
        {/*Topbar*/}
        <Topbar/>
        {/*Navbar*/}
        <Navbar/>
        <hr className='mt-2 text-gray-200 '/>
    </div>
  )
}

export default Header