import React from 'react'
import Nike from "../../../assets/Nike.avif"
import g1 from "../../../assets/g1.jpg"
import g2 from "../../../assets/g2.jpg"
import { HiShoppingBag } from "react-icons/hi2";
import { MdReplay } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";

const Apparel = () => {
  return (
    <div>
        <div className='flex py-4 px-8 mt-[200px] h-[90vh] '>
            <div className='w-1/2 flex flex-col justify-center items-start gap-4 px-12 rounded-l-4xl bg-black text-white'>
                <h2 className='text-lg'>Comfort and Style</h2>
                <h3 className='text-4xl font-bold'>Apparel Made For Your<br/> Everyday Life</h3>
                <p className='text-sm'>Dicover high qualtiy, comfortable clothing that effortlessly blends fashion and<br/> function. Designed to make you look and feel great everyday</p>
                <button className='text-black bg-white py-2 px-6 font-semibold rounded-md'>Shop Now</button>
            </div>
            <img className='w-1/2 object-cover rounded-r-4xl' src={g2}/>
        </div>

        <div className='mt-30 flex justify-around items-center mb-16'>
            <div className='flex flex-col items-center'>
                <HiShoppingBag className='size-5' />
                <h3 className='mt-6 font-semibold'>FREE INTERNATIONAL SHIPPING</h3>
                <h4 className='mt-1 text-sm font-semibold text-neutral-600'>On all order's over $100.0</h4>
            </div>
            <div className='flex flex-col items-center'>
                <MdReplay className='size-5'/>
                <h3 className='mt-6 font-semibold'>45 DAYS RETURNS</h3>
                <h4 className='mt-1 text-sm font-semibold text-neutral-600'>Money back gurantee</h4>
            </div>
            <div className='flex flex-col items-center'>
                <CiCreditCard1 className='size-5' />
                <h3 className='mt-6 font-semibold'>SECURE CHECKOUT</h3>
                <h4 className='mt-1 text-sm font-semibold text-neutral-600'>100% secure payment</h4>
            </div>
        </div>
    </div>
  )
}

export default Apparel