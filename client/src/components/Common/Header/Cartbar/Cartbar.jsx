import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import CartProducts from '../../../Cart/CartProducts';


const Cartbar = ({openCartbar,setOpenCartBar}) => {
      const toggleCartBar=()=>{
    setOpenCartBar(!true)
      }
  return (
    <div className={`fixed z-100 right-0 top-0 w-2/3 md:w-2/4 lg:w-1/3 2xl:w-1/4 bg-white  shadow-2xl h-full  transition-all duration-300  ${openCartbar?'translate-x-0 ':'translate-x-full'}`} >
      <div>
        <h3 className='text-left py-13 md:py-16 px-3 font-medium text-[22px] select-none'>Cart Overview</h3>
        <IoMdClose onClick={toggleCartBar} className='size-8 mr-3 mt-3 absolute top-0 right-0 cursor-pointer'/>
      </div>

  <div className='mt-[-39px] md:mt-[-50px] h-[72vh] overflow-y-scroll cartbar-scroll-area border-t-2 border-gray-200 '>
  <CartProducts/>
  </div>

      <div className='flex flex-col items-center h-[14vh] border-t-2 border-gray-200 pt-2  absolute bottom-4 w-full bg-white'>
        <button className='w-[95%] bg-black text-white mt-4 ml-1 p-2 rounded-[7px] hover:bg-neutral-800 transition-all  cursor-pointer'>Checkout</button>
        <p className='text-center text-[13px] mt-2 font-light '>Shipping, Taxes, and Discount Codes Calculated at Checkout</p>
      </div>
    </div>
  )
}

export default Cartbar
