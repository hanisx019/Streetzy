import React, { useRef, useState } from 'react'
import New1 from "../../../assets/New1.jpg"
import New2 from "../../../assets/New2.jpg"
import New3 from "../../../assets/New3.jpg"
import New4 from "../../../assets/New4.jpg"
import New5 from "../../../assets/New5.jpg"
import New6 from "../../../assets/New6.jpg"
import New7 from "../../../assets/New7.jpg"
import New8 from "../../../assets/New8.jpg"
import New9 from "../../../assets/New9.jpg"



const Arrivals = () => {

  const Arrivals=[
    {
      _id:"1",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          src:New2,
        },
      ],
    },
    {
      _id:"2",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          src:New1,
        },
      ],
    },
    {
      _id:"3",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          src:New3,
        },
      ],
    },
    {
      _id:"4",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          src:New4,
        },
      ],
    },
    {
      _id:"5",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          src:New5,
        },
      ],
    },
    {
      _id:"6",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          src:New6,
        },
      ],
    },
    {
      _id:"7",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          src:New7,
        },
      ],
    },
    {
      _id:"8",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          src:New8,
        },
      ],
    },
    {
      _id:"9",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          src:New9,
        },
      ],
    },
  ];

  return (
    <div className='mt-[200px] mb-4'>
        <h2 className="text-center text-5xl uppercase font-bold">Explore New Arrivals</h2>
        <h3 className='py-2 text-center text-2xl uppercase font-bold'>Outfits louder than your ex’s excuses.</h3>

        {/* Horizontal scroll by arrow buttons */}
        {/* Mobile: Single carousel image with arrows */}
        <div className='md:hidden flex justify-center items-center relative w-full mt-10 mb-10'>
          {(() => {
            const [currentIndex, setCurrentIndex] = useState(0);
            const handlePrev = () => {
              setCurrentIndex((prev) => (prev === 0 ? Arrivals.length - 1 : prev - 1));
            };
            const handleNext = () => {
              setCurrentIndex((prev) => (prev === Arrivals.length - 1 ? 0 : prev + 1));
            };
            return (
              <>
                <button
                  onClick={handlePrev}
                  className='absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer'
                  style={{marginLeft: '8px'}}
                >&lt;</button>
                <div className='relative mx-auto'>
                  <img className='max-w-[280px] rounded-3xl mx-auto' src={Arrivals[currentIndex].images[0].src} />
                  <h2 className='absolute inset-0 mt-[120%] text-white w-full px-4'>{Arrivals[currentIndex].name}</h2>
                  <h3 className='absolute inset-0 mt-[130%] text-white px-4'>{Arrivals[currentIndex].price}</h3>
                </div>
                <button
                  onClick={handleNext}
                  className='absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer'
                  style={{marginRight: '8px'}}
                >&gt;</button>
              </>
            );
          })()}
        </div>

        {/* Desktop: Scrollable gallery */}
        {(() => {
          const scrollRef = useRef(null);
          const scrollAmount = 200;
          const handleScrollLeft = () => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
          };
          const handleScrollRight = () => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
          };
          return (
            <div className='hidden md:flex relative w-full justify-center items-center'>
              <button
                onClick={handleScrollLeft}
                className='absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer'
                style={{marginLeft: '8px'}}
              >&lt;</button>
              <div
                ref={scrollRef}
                className='flex mx-auto w-[98vw] gap-12 px-12 overflow-x-scroll mt-10 mb-10 cursor-pointer scrollbar-hide'
              >
                {Arrivals.map((product) => (
                  <div className='relative ' key={product._id}>
                    <img className='max-w-[280px] rounded-3xl shadow-lg' src={product.images[0].src} />
                    <h2 className='absolute inset-0 mt-[125%] py-2 tracking-widest text-white font-normal backdrop-blur-xs rounded-b-3xl  w-full px-4'>{product.name}</h2>
                    <h3 className='absolute inset-0 mt-[125%] py-2 tracking-widest text-right text-white  px-4'>${product.price}</h3>
                  </div>
                ))}
              </div>
              <button
                onClick={handleScrollRight}
                className='absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer'
                style={{marginRight: '8px'}}
              >&gt;</button>
            </div>
          );
        })()}


    </div>
  )
}

export default Arrivals