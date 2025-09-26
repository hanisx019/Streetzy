import React from 'react'


import MensCollection2 from "../../../assets/MensCollection2.jpg";
import MensCollection from "../../../assets/MensCollection.jpg";

const Hero = () => {
  return (
    <div>
      <div className='text-center'>
        <h3 className='text-xs md:text-[14.5px] pt-1 font-semibold -mb-[3px] tracking-wide'>New Styles On Sale: Up To 40% Off</h3>
        <a href="#" className='text-[10px] md:text-xs underline font-semibold'>Shop All Our New Markdowns</a>
      </div>
  <div className="relative w-full flex justify-center items-center">
        <picture>
          <source srcSet={MensCollection2} media="(min-width: 1280px)" />
          <img className="w-[100vw] px-0 xl:px-0 select-none filter brightness-70" src={MensCollection} alt="Hero" draggable={false} />
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
    </div>
  )
}

export default Hero