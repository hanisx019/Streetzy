import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';

const MobileMenuBar = ({openMenuBar,setOpenMenuBar}) => {

  return (
    <div className={`fixed top-0 left-0 bg-white w-3/4 h-full shadow-2xl pl-4 transition-all duration-300 ${openMenuBar?'translate-x-0 ':'-translate-x-full'} `}>
        <div className='flex items-center justify-between'>
            <h2 className='mt-[50px] font-bold text-[22px]'>Menu</h2>
            <IoMdClose onClick={()=>{setOpenMenuBar(false)}} className='absolute top-0 right-0 size-8 mr-3 mt-3'/>
        </div>
        <div className='mt-4 leading-10 font-medium hover:text-gray-500 transition-all  cursor-pointer' >
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Top Wear</li>
                <li>Bottom Wear</li>
            </ul>
        </div>
    </div>
  )
}

export default MobileMenuBar