import React, { useRef, useState, memo } from 'react'




function Arrivals() {
  // Mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  // Desktop scroll/drag state
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
  // Drag-to-scroll logic (pointer events for smoothness)
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false); // Only for cursor style
  // Pointer event handlers
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    scrollRef.current.setPointerCapture(e.pointerId);
  };
  const handlePointerUp = (e) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    scrollRef.current.releasePointerCapture(e.pointerId);
  };
  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const x = e.clientX;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };
  const handlePointerLeave = (e) => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const Arrivals=[
    {
      _id:"1",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          url:"https://res.cloudinary.com/dfwq8rih1/image/upload/New2_idzbhu.jpg",
        },
      ],
    },
    {
      _id:"2",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          url:"https://res.cloudinary.com/dfwq8rih1/image/upload/New7_lu7vl0.jpg",
        },
      ],
    },
    {
      _id:"3",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          url:"https://res.cloudinary.com/dfwq8rih1/image/upload/New7_lu7vl0.jpg",
        },
      ],
    },
    {
      _id:"4",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          url:"https://res.cloudinary.com/dfwq8rih1/image/upload/New7_lu7vl0.jpg",
        },
      ],
    },
    {
      _id:"5",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          url:"https://res.cloudinary.com/dfwq8rih1/image/upload/New7_lu7vl0.jpg",
        },
      ],
    },
    {
      _id:"6",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          url:"https://res.cloudinary.com/dfwq8rih1/image/upload/New7_lu7vl0.jpg",
        },
      ],
    },
    {
      _id:"7",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          url:"https://res.cloudinary.com/dfwq8rih1/image/upload/New7_lu7vl0.jpg",
        },
      ],
    },
    {
      _id:"8",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          url:"https://res.cloudinary.com/dfwq8rih1/image/upload/New7_lu7vl0.jpg",
        },
      ],
    },
    {
      _id:"9",
      name:"Stylish Jacket",
      price:120,
      images:[
        {
          url:"https://res.cloudinary.com/dfwq8rih1/image/upload/New7_lu7vl0.jpg",
        },
      ],
    },
  ]

  return (
    <div className='mt-[200px] mb-4'>
      <h2 className="text-center text-5xl uppercase font-bold">Explore New Arrivals</h2>
      <h3 className='py-2 text-center text-2xl uppercase font-bold'>Outfits louder than your ex’s excuses.</h3>

      {/* Mobile: Single carousel image with arrows */}
      <div className='md:hidden flex justify-center items-center relative w-full mt-10 mb-10'>
        <button
          onClick={() => setCurrentIndex(currentIndex === 0 ? Arrivals.length - 1 : currentIndex - 1)}
          className='absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer'
          style={{marginLeft: '8px'}}
        >&lt;</button>
        <div className='relative mx-auto'>
          <img className='max-w-[280px] rounded-3xl mx-auto' src={Arrivals[currentIndex].images[0].src} loading="lazy" />
          <h2 className='absolute inset-0 mt-[120%] text-white w-full px-4'>{Arrivals[currentIndex].name}</h2>
          <h3 className='absolute inset-0 mt-[130%] text-white px-4'>{Arrivals[currentIndex].price}</h3>
        </div>
        <button
          onClick={() => setCurrentIndex(currentIndex === Arrivals.length - 1 ? 0 : currentIndex + 1)}
          className='absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer'
          style={{marginRight: '8px'}}
        >&gt;</button>
      </div>

      {/* Desktop: Scrollable gallery */}
      <div className='hidden md:flex relative w-full justify-center items-center'>
        <button
          onClick={handleScrollLeft}
          className='absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer'
          style={{marginLeft: '8px'}}
        >&lt;</button>
        <div
          ref={scrollRef}
          className={`flex mx-auto w-[98vw] gap-12 px-12 overflow-x-scroll mt-10 mb-10 scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={{ userSelect: isDragging ? 'none' : 'auto' }}
        >
          {Arrivals.map((product) => (
            <div className='relative' key={product._id}>
              <img className='max-w-[280px] rounded-3xl shadow-lg' src={product.images[0].url} loading="lazy" />
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
    </div>
  )
}

export default memo(Arrivals);