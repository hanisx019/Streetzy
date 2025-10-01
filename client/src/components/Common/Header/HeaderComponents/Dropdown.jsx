import React from 'react'

const Dropdown = ({openDropdown,setOpenDropdown}) => {


  return (
    <>
        <div  className={`w-full bg-white h-[250px] absolute top-24 left-0 z-50 opacity-0 -translate-y-2 transition-all duration-150 ${openDropdown?'opacity-100 translate-y-2':''}   `}>
          <div className='flex justify-items-center justify-center mt-4 gap-10'>
              <div className='leading-8'>
                <h2 className='text-[16px] font-semibold'>Featured</h2>
                <p className='text-[13px] font-semibold text-neutral-600'>New Upcoming Drops</p>
                <p className='text-[13px] font-semibold text-neutral-600'>New Arrivals</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Best Sellers</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Cutomize</p>
              </div>
              <div className='leading-8'>
                <h2 className='text-[16px] font-semibold'>Trending</h2>
                <p className='text-[13px] font-semibold text-neutral-600'>Summer</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Lifestyle</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Yoga</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Gym Training</p>
              </div>
              <div className='leading-8'>
                <h2 className='text-[16px] font-semibold'>Clothing</h2>
                <p className='text-[13px] font-semibold text-neutral-600'>All Clothing</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Performance Essentials</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Tops and T-shirts</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Shorts</p>
              </div>
              <div className='leading-8'>
                <h2 className='text-[16px] font-semibold'>Sales and Offer's</h2>
                <p className='text-[13px] font-semibold text-neutral-600'>Shop All Sales</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Best Seller</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Last Chances</p>
                <p className='text-[13px] font-semibold text-neutral-600'>Clothing</p>
              </div>
          </div>
        </div>
    </>
  )
}

export default Dropdown
