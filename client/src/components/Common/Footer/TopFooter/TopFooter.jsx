import React from 'react'
import {FaLinkedin,FaInstagram,FaXTwitter} from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";

const TopFooter = () => {
  return (
    <div className='flex absolute bottom-20 w-full justify-evenly  items-center p-10 flex-wrap  border-t-2 border-gray-200'>

      <div>
        <h4 className='mb-4 text-[18px]'>Newsletter</h4>
        <p className='text-neutral-500 text-[15px]'>Be the first to hear about new products,<br/> exclusive events, and online offers.</p><br/>
        <p className='text-neutral-800 text-[14px] font-medium'>Sign up and get 10% off your first order.</p><br/>
        <form className='flex items-center'>
          <input className='focus:outline-none w-[180px] text-[14px] border-2 p-3 border-neutral-200 h-10 rounded-tl-md rounded-bl-md' type="email" placeholder='Enter your email'/>
          <button className='text-white bg-black h-10 w-[75px] text-[12px] rounded-tr-md rounded-br-md '>Subscribe</button>
        </form>
      </div>



      <div className='-mt-9' >
        <h4 className='mb-4 text-[18px]'>Shop</h4>
        <div className='text-neutral-500 text-[15px] leading-8'>
        <p>Men's Top Wear</p>
        <p>Women's Top Wear</p>
        <p>Mens Bottom Wear</p>
        <p>Women's Bottom Wear</p>
        </div>
      </div>



      <div className='-mt-9' >
        <h4 className='mb-4 text-[18px]'>Support</h4>
        <div className='text-neutral-500 text-[15px] leading-8'>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Features</p>
        </div>
      </div>



      <div className='-mt-16' >
        <h4 className='-mt-5 mb-3 text-[18px]'>Follow Us</h4>
        <div className='flex gap-3'>
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