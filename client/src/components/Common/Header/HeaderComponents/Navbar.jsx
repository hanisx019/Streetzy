import React, { useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { HiBars3BottomRight, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Cartbar from './Cartbar';
import MobileMenuBar from './MobileMenuBar';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [openCartbar,setOpenCartBar] = useState(false);
  const [openMenuBar,setOpenMenuBar] = useState(false);
  const [openDropdown,setOpenDropdown] = useState(false);

  return (
    <>
      <div className='flex justify-between px-[20px] md:px-[50px] lg:px-[100px] items-center p-2 select-none '>

        <h2 className='text-2xl font-extrabold  tracking-widest hover:text-shadow-black'><Link to="/" >Streetzy</Link></h2>

        <div className='hidden md:flex items-center  gap-5 text-[10px] md:text-sm font-semibold tracking-wide'>
          <Link to="#">
          <div>
            <p onMouseEnter={()=>setOpenDropdown(true)} onMouseLeave={()=>setOpenDropdown(false)} className='hover:text-gray-500 transition-all peer pt-2 group '>MEN</p>
            <Dropdown openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
          </div>
          </Link>
          <Link to="#">
          <div>
            <p onMouseEnter={()=>setOpenDropdown(true)} onMouseLeave={()=>setOpenDropdown(false)} className='hover:text-gray-500 transition-all peer pt-2 group '>WOMEN</p>
            <Dropdown openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
          </div>
          </Link>
          <Link to="#">
          <div>
            <p onMouseEnter={()=>setOpenDropdown(true)} onMouseLeave={()=>setOpenDropdown(false)} className='hover:text-gray-500 transition-all peer pt-2 group '>TOP WEAR</p>
            <Dropdown openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
          </div>
          </Link>
          <Link to="#">
          <div>
            <p onMouseEnter={()=>setOpenDropdown(true)} onMouseLeave={()=>setOpenDropdown(false)} className='hover:text-gray-500 transition-all peer pt-2 group '>BOTTOM WEAR</p>
            <Dropdown openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}/>
          </div>
          </Link>
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

      <hr className='mt-1 text-gray-200 '/>
    </>
  )
}

export default Navbar