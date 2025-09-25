import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const Cartbar = ({openCartbar,setOpenCartBar}) => {
      const toggleCartBar=()=>{
    setOpenCartBar(!true)
      }
  return (
    <div className={`fixed right-0 top-0 w-2/3 md:w-2/4 lg:w-1/3 2xl:w-1/4 bg-white  shadow-2xl h-full  transition-all duration-300  ${openCartbar?'translate-x-0 ':'translate-x-full'}`} >
      <div>
        <h3 className='text-left py-13 md:py-16 px-3 font-bold text-[20px] select-none'>Your Cart </h3>
        <IoMdClose onClick={toggleCartBar} className='size-8 mr-3 mt-3 absolute top-0 right-0 cursor-pointer'/>
      </div>
    </div>
  )
}

export default Cartbar
