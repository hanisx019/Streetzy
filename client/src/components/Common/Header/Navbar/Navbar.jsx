import React, { useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { HiBars3BottomRight, HiOutlineShoppingBag } from "react-icons/hi2";

import { Link } from 'react-router-dom';
import SearchBar from '../Searchbar/SearchBar';
import Cartbar from '../Cartbar/Cartbar';
import MobileMenuBar from '../MobileMenubar/MobileMenuBar';

const Navbar = () => {
  const [openCartbar,setOpenCartBar] = useState(false);
  const [openMenuBar,setOpenMenuBar] = useState(false);
  return (
    <>
      <div className='flex justify-between px-[20px] md:px-[50px] lg:px-[100px] items-center p-2 select-none cursor-pointer'>
        <h2 className='text-2xl font-extrabold  tracking-widest hover:text-shadow-black'><Link to="/" >Streetzy</Link></h2>
        <div className='hidden md:flex gap-5 text-[10px] md:text-sm font-semibold tracking-wide '>
          <Link to="#"><p className='hover:text-gray-500 transition-all'>MEN</p></Link>
          <Link to="#"><p className='hover:text-gray-500 transition-all'>WOMEN</p></Link>
          <Link to="#"><p className='hover:text-gray-500 transition-all'>TOP WEAR</p></Link>
          <Link to="#"><p className='hover:text-gray-500 transition-all'>BOTTOM WEAR</p></Link>
        </div>
        <div className='flex gap-4 justify-center items-center'>
          <p className='hover:text-gray-500 transition-all'><Link to="#"><BsPerson className='size-5'/></Link></p>
          <button onClick={()=>setOpenCartBar(true)} className='hover:text-gray-500 transition-all relative'>
            <Link to="#"><HiOutlineShoppingBag   className='size-5'/></Link>
            <span className='bg-red-600 rounded-full absolute size-4 text-white text-[10px] -mt-6'>4</span>
          </button>
          <SearchBar/>
          <button  onClick={()=>setOpenMenuBar(true)} className='md:hidden -ml-[5px]'>
            <HiBars3BottomRight className='size-5'/>
          </button>
          <MobileMenuBar openMenuBar={openMenuBar} setOpenMenuBar={setOpenMenuBar}/>
        </div>
      </div>
      <Cartbar openCartbar={openCartbar} setOpenCartBar={setOpenCartBar} />
    </>
  )
}

export default Navbar