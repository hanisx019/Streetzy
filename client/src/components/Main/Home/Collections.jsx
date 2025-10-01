import React from "react";

const Collections = () => {
  return (
    <div className="mt-[180px] md:mt-[200px] flex flex-col px-4 xl:px-8 2xl:px-16 ">
      <h2 className="py-2 text-center text-5xl uppercase font-bold">Collections</h2>
      <h3 className="text-center text-2xl uppercase font-bold">Pick your drip. Own your style.</h3>
      <div className="mt-14 md:mt-10 flex flex-col justify-center  md:flex md:flex-row md:justify-between  items-center gap-0 md:gap-6">

        <div className="w-full  lg:w-1/4 relative group mb-30 md:mb-0">
          <div className="overflow-hidden">
            <img loading="eager" className="px-6 md:px-0 object-cover  h-[55vh] md:h-[65vh] w-full transition duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105 cursor-pointer" src="https://res.cloudinary.com/dfwq8rih1/image/upload/MensCollecyioncropped1_moc9i8.jpg" />
          </div>
          <div className="absolute bottom-33 left-1/2 -translate-x-1/2 text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg text-nowrap">Men's Collection</div>
          <button className="absolute bottom-20 left-1/2 -translate-x-1/2 px-8 py-2 text-black bg-white  font-semibold shadow cursor-pointer">Shop Now</button>
        </div>

        <div className="w-full lg:w-1/4  relative group -mt-22 md:mt-0">
          <div className="overflow-hidden">
            <img loading="eager" className="px-6 md:px-0 object-cover h-[55vh] md:h-[65vh] w-full transition duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105 cursor-pointer" src="https://res.cloudinary.com/dfwq8rih1/image/upload/WomensCollection_cropped_m3enog.jpg" />
          </div>
          <div className="absolute bottom-33 left-1/2 -translate-x-1/2 text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg text-nowrap">Women's Collection</div>
          <button className="absolute bottom-20 left-1/2 -translate-x-1/2 px-8 py-2 text-black bg-white  font-semibold shadow cursor-pointer">Shop Now</button>
        </div>


        <div className="w-1/4 relative group hidden lg:block">
          <div className="overflow-hidden">
            <img loading="eager" className="object-cover h-[65vh] w-full transition duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105 cursor-pointer" src="https://res.cloudinary.com/dfwq8rih1/image/upload/MensCollection_resized_e74vpt.jpg" />
          </div>
          <div className="absolute bottom-33 left-1/2 -translate-x-1/2 text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg text-nowrap">Party Collection</div>
          <button className="absolute bottom-20 left-1/2 -translate-x-1/2 px-8 py-2 text-black bg-white  font-semibold shadow cursor-pointer">Shop Now</button>
        </div>
        <div className="w-1/4 relative group hidden lg:block">
          <div className="overflow-hidden">
            <img loading="eager" className="object-cover h-[65vh] w-full transition duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105 cursor-pointer" src="https://res.cloudinary.com/dfwq8rih1/image/upload/WomenBag_wlta8l.jpg" />
          </div>
          <div className="absolute bottom-33 left-1/2 -translate-x-1/2 text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg text-nowrap">Casual Collection</div>
          <button className="absolute bottom-20 left-1/2 -translate-x-1/2 px-8 py-2 text-black bg-white  font-semibold shadow cursor-pointer">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
