import React, { useRef, useState, memo } from 'react';

function Arrivals() {
  // Mobile carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop scroll state
  const scrollRef = useRef(null);
  const scrollAmount = 200;

  // Show scrollbar on mouse hover
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef();

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setIsHovered(false), 600); // fade out after 0.6s
  };

  // Arrow handlers
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Dummy products
  const Arrivals = [
    { _id: "1", name: "Stylish Jacket", price: 120, images: [{ url: "https://res.cloudinary.com/dfwq8rih1/image/upload/New2_idzbhu.jpg" }] },
    { _id: "2", name: "Stylish Jacket", price: 120, images: [{ url: "https://res.cloudinary.com/dfwq8rih1/image/upload/New3_gqyylw.jpg" }] },
    { _id: "3", name: "Stylish Jacket", price: 120, images: [{ url: "https://res.cloudinary.com/dfwq8rih1/image/upload/v1759032405/New8_eutdvj.jpg" }] },
    { _id: "4", name: "Stylish Jacket", price: 120, images: [{ url: "https://res.cloudinary.com/dfwq8rih1/image/upload/v1759032439/New7_lu7vl0.jpg" }] },
    { _id: "5", name: "Stylish Jacket", price: 120, images: [{ url: "https://res.cloudinary.com/dfwq8rih1/image/upload/v1759032381/New1_mpdmro.jpg" }] },
    { _id: "6", name: "Stylish Jacket", price: 120, images: [{ url: "https://res.cloudinary.com/dfwq8rih1/image/upload/v1759032371/New5_eilbit.jpg" }] },
    { _id: "7", name: "Stylish Jacket", price: 120, images: [{ url: "https://res.cloudinary.com/dfwq8rih1/image/upload/v1759032371/New4_xmhbbh.jpg" }] },
    { _id: "8", name: "Stylish Jacket", price: 120, images: [{ url: "https://res.cloudinary.com/dfwq8rih1/image/upload/v1759032435/New9_idvnrl.jpg" }] },
    { _id: "9", name: "Stylish Jacket", price: 120, images: [{ url: "https://res.cloudinary.com/dfwq8rih1/image/upload/v1759032390/New6_wnck4d.jpg" }] },
  ];

  return (
    <div className="mt-[200px] mb-4">
      <h2 className="text-center text-5xl uppercase font-bold">Explore New Arrivals</h2>
      <h3 className="py-2 text-center text-2xl uppercase font-bold">Outfits louder than your ex’s excuses.</h3>

      {/* Mobile carousel */}
      <div className="md:hidden flex justify-center items-center relative w-full mt-10 mb-10">
        <button
          onClick={() => setCurrentIndex(currentIndex === 0 ? Arrivals.length - 1 : currentIndex - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer"
          style={{ marginLeft: "8px" }}
        >&lt;</button>
        <div className="relative mx-auto">
          <img
            className="max-w-[280px] rounded-3xl mx-auto"
            src={Arrivals[currentIndex].images[0].url}
            loading="eager"
          />
          <h2 className="absolute inset-0 mt-[120%] text-white w-full px-4">{Arrivals[currentIndex].name}</h2>
          <h3 className="absolute inset-0 mt-[130%] text-white px-4">{Arrivals[currentIndex].price}</h3>
        </div>
        <button
          onClick={() => setCurrentIndex(currentIndex === Arrivals.length - 1 ? 0 : currentIndex + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer"
          style={{ marginRight: "8px" }}
        >&gt;</button>
      </div>

      {/* Desktop scrollable gallery with hover scrollbar */}
      <div className="hidden md:flex relative w-full justify-center items-center">
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer"
          style={{ marginLeft: "8px" }}
        >&lt;</button>
        <div
          ref={scrollRef}
          className={`flex mx-auto w-[98vw] gap-12 px-12 overflow-x-scroll mt-10 mb-10 scrollbar-custom${isHovered ? " scrollbar-visible" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {Arrivals.map((product) => (
            <div className="relative" key={product._id}>
              <img
                className="max-w-[280px] rounded-3xl shadow-lg"
                src={product.images[0].url}
                loading="eager"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleScrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 font-bold rounded-full bg-black text-white shadow-lg z-20 cursor-pointer"
          style={{ marginRight: "8px" }}
        >&gt;</button>
      </div>
    </div>
  );
}

export default memo(Arrivals);
