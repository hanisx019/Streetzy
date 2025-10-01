import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const MobileMenuBar = ({openMenuBar,setOpenMenuBar}) => {

  return (
    <div className={`fixed z-100 top-0 left-0 bg-white w-3/4 h-full shadow-2xl pl-4 transition-all duration-300 ${openMenuBar?'translate-x-0 ':'-translate-x-full'} `}>
        <div className='flex items-center justify-between'>
            <h2 className='mt-[50px] font-bold text-[22px]'>Menu</h2>
            <IoMdClose onClick={()=>{setOpenMenuBar(false)}} className='absolute top-0 right-0 size-8 mr-3 mt-3'/>
        </div>
        <div className='mt-4 leading-10 font-sans ' >
            <ul>
                <Link to="#"><li className='hover:text-gray-500 transition-all  cursor-pointer'>Men</li></Link>
                <Link to="#"><li className='hover:text-gray-500 transition-all  cursor-pointer'>Women</li></Link>
                <Link to="#"><li className='hover:text-gray-500 transition-all  cursor-pointer'>Top Wear</li></Link>
                <Link to="#"><li className='hover:text-gray-500 transition-all  cursor-pointer'>Bottom Wear</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default MobileMenuBar