import React from 'react'
import {FaLinkedin,FaInstagram,FaXTwitter} from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import { useState } from 'react';

const TopFooter = () => {
  const [email,setEmail]=useState("");
  const inputData=(e)=>{
    e.preventDefault();
    console.log(email);
    setEmail("");
  }
  return (
  <div className='flex w-full justify-evenly bg-white items-center p-10 flex-wrap border-t-2 border-gray-200 gap-9 md:gap-0'>

      <div className='mb-14 md:mb-0'>
        <h4 className='mb-2 md:mb-4 text-[18px] text-center md:text-left'>Newsletter</h4>
        <p className='text-neutral-500 text-[15px] text-center md:text-left mb-2 md:mb-0'>Be the first to hear about new products,<br/> exclusive events, and online offers.</p><br className='hidden md:block'/>
        <p className='text-neutral-800 text-[14px] font-medium text-center md:text-left'>Sign up and get 10% off your first order.</p><br/>
        <form onSubmit={inputData} className='flex items-center'>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required className='focus:outline-none w-[180px] text-[14px] border-2 p-3 border-neutral-200 h-10 rounded-tl-md rounded-bl-md' type="email" placeholder='Enter your email'/>
          <button type="submit" className='text-white bg-black h-10 w-[75px] text-[12px] rounded-tr-md rounded-br-md '>Subscribe</button>
        </form>
      </div>



      <div className='-mt-9 ' >
        <h4 className='mb-2 md:mb-4 text-[18px]'>Shop</h4>
        <div className='text-neutral-500 text-[15px] leading-6 md:leading-8'>
        <p>Men's Top Wear</p>
        <p>Women's Top Wear</p>
        <p>Mens Bottom Wear</p>
        <p>Women's Bottom Wear</p>
        </div>
      </div>



      <div className='-mt-9' >
        <h4 className='mb-2 md:mb-4 text-[18px]'>Support</h4>
        <div className='text-neutral-500 text-[15px] leading-6 md:leading-8'>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Features</p>
        </div>
      </div>



      <div className='mt-4 md:-mt-16 text-center md:text-left' >
        <h4 className='-mt-5 mb-3 text-[18px]'>Follow Us</h4>
        <div className='flex gap-3 ml-6 md:ml-0 '>
        <FaInstagram />
        <FaXTwitter />
        <FaLinkedin />
        </div><br/>
        
        <p className='text-[14px] text-neutral-500'>Call Us</p>
        <div className='flex items-center gap-2'>
          <TbPhoneCall  className='size-4'/>
          <p className='font-bold'>124-584-890</p>
        </div>
      </div>



    </div>
  )
}

export default TopFooter