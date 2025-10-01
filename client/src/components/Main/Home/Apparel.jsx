import React from 'react'
import { HiShoppingBag } from "react-icons/hi2";
import { MdReplay } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";

const Apparel = () => {
  return (
    <div>
        <div className='flex-col md:flex md:flex-row py-4 px-8 -mb-10 md:mb-0 mt-50 md:mt-[200px] h-[90vh] '>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-4 px-5 py-2 rounded-t-4xl md:rounded-l-4xl md:rounded-t-none bg-black text-white'>
                <h2 className='text-lg mt-5 md:mt-0'>Comfort and Style</h2>
                <h3 className='text-3xl md:text-4xl font-bold -mt-3 md:mt-0'>Apparel Made For Your<br className='hidden md:block'/> Everyday Life</h3>
                <p className='text-sm -mt-2 md:mt-0'>Dicover high qualtiy, comfortable clothing that effortlessly blends fashion and<br className='hidden md:block'/> function. Designed to make you look and feel great everyday</p>
                <button className='text-black bg-white py-2 px-6 font-semibold rounded-md -mt-1 md:mt-0 mb-2 md:mb-0'>Shop Now</button>
            </div>
            <img className='w-full md:w-1/2 object-cover rounded-b-4xl md:rounded-r-4xl md:rounded-b-none md:rounded-br-4xl' src="https://res.cloudinary.com/dfwq8rih1/image/upload/v1759068669/g2_jfz83f.jpg"/>
        </div>

        <div className=' md:mt-30 flex-col md:flex md:flex-row justify-around items-center mb-16'>
            <div className='flex flex-col items-center'>
                <HiShoppingBag className='size-5' />
                <h3 className='mt-6 font-semibold'>FREE INTERNATIONAL SHIPPING</h3>
                <h4 className='mb-10 md:mb-0 mt-1 text-sm font-semibold text-neutral-600'>On all order's over $100.0</h4>
            </div>
            <div className='flex flex-col items-center'>
                <MdReplay className='size-5'/>
                <h3 className='mt-6 font-semibold'>45 DAYS RETURNS</h3>
                <h4 className='mb-10 md:mb-0 mt-1 text-sm font-semibold text-neutral-600'>Money back gurantee</h4>
            </div>
            <div className='flex flex-col items-center'>
                <CiCreditCard1 className='size-5' />
                <h3 className='mt-6 font-semibold'>SECURE CHECKOUT</h3>
                <h4 className='mb-10 md:mb-0 mt-1 text-sm font-semibold text-neutral-600'>100% secure payment</h4>
            </div>
        </div>
    </div>
  )
}

export default Apparel