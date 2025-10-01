import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='text-center '>
        <h3 className='text-sm md:1ext-[14.5px] pt-3 md:pt-1 font-semibold -mb-[3px] tracking-wide'>New Styles On Sale: Up To 40% Off</h3>
        <a href="#" className='text-[10px] md:text-xs underline font-semibold'>Shop All Our New Markdowns</a>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <picture>
          <source srcSet="https://res.cloudinary.com/dfwq8rih1/image/upload/MensCollection2_mxldq1.jpg" media="(min-width: 1280px)" />
          <source srcSet="https://res.cloudinary.com/dfwq8rih1/image/upload/MensCollection2_mxldq1.jpg" media="(min-width: 1024px)" />
          <img className="w-[100vw] px-0 xl:px-0 select-none filter brightness-70" src="https://res.cloudinary.com/dfwq8rih1/image/upload/MensCollection_ekbrgj.jpg" alt="Hero" draggable={false} />
        </picture>
  <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 pointer-events-none z-20">
          <div className="relative mb-4 pointer-events-auto">
            <div className="absolute inset-10 bg-black/10 rounded-lg blur-sm"></div>
            <div className="uppercase font-extrabold text-white text-2xl md:text-6xl xl:text-7xl text-shadow-lg tracking-wider select-none drop-shadow-lg relative px-4 py-2 text-center">
              <span className='text-4xl'>Level Up</span><br/>Your Look
            </div>
          </div>
          <button className="mt-0 md:mt-4 pointer-events-auto text-black bg-white px-8 py-2 font-semibold shadow-lg text-base md:text-lg xl:text-xl transition-all cursor-pointer hover:scale-105 ease-in duration-300">Shop Now</button>
        </div>
      </div>
      <p className='text-2xl px-2 mt-14 md:mt-10 text-center uppercase font-bold'>Only one way to find out.</p>
      <h3 className='uppercase text-7xl px-2 font-bold text-center mt-1'>Streezy</h3>
    </div>
  )
}

export default Hero