import React from "react";
import MensCollectionIMG from "../../../assets/MensCollecyioncropped1.jpg";
import MensCollection_resized from "../../../assets/MensCollection_resized.jpg";
import WomensCollectionIMG from "../../../assets/WomensCollection_cropped.jpg";
import WomenBag from "../../../assets/WomenBag.jpg";

const Collections = () => {
  return (
    <div className="mt-[38px] md:mt-[200px] flex flex-col px-4 xl:px-8 2xl:px-16 ">
      <h2 className="py-2 text-center text-5xl uppercase font-bold">Collections</h2>
      <h3 className="text-center text-2xl uppercase font-bold">Pick your drip. Own your style.</h3>
      <div className="mt-14 md:mt-10 flex flex-col justify-center  md:flex md:flex-row md:justify-between  items-center gap-0 md:gap-6">

        <div className="w-full lg:w-1/4 relative group mb-30 md:mb-0">
          <div className="overflow-hidden">
            <img className="px-6 md:px-0 object-cover h-[65vh] w-full transition duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105 cursor-pointer" src={MensCollectionIMG} />
          </div>
          <div className="absolute bottom-33 left-1/2 -translate-x-1/2 text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg text-nowrap">Men's Collection</div>
          <button className="absolute bottom-20 left-1/2 -translate-x-1/2 px-8 py-2 text-black bg-white  font-semibold shadow cursor-pointer">Shop Now</button>
        </div>

        <div className="w-full lg:w-1/4  relative group -mt-22 md:mt-0">
          <div className="overflow-hidden">
            <img className="px-6 md:px-0 object-cover h-[65vh] w-full transition duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105 cursor-pointer" src={WomensCollectionIMG} />
          </div>
          <div className="absolute bottom-33 left-1/2 -translate-x-1/2 text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg text-nowrap">Women's Collection</div>
          <button className="absolute bottom-20 left-1/2 -translate-x-1/2 px-8 py-2 text-black bg-white  font-semibold shadow cursor-pointer">Shop Now</button>
        </div>


        <div className="w-1/4 relative group hidden lg:block">
          <div className="overflow-hidden">
            <img className="object-cover h-[65vh] w-full transition duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105 cursor-pointer" src={MensCollection_resized} />
          </div>
          <div className="absolute bottom-33 left-1/2 -translate-x-1/2 text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg text-nowrap">Party Collection</div>
          <button className="absolute bottom-20 left-1/2 -translate-x-1/2 px-8 py-2 text-black bg-white  font-semibold shadow cursor-pointer">Shop Now</button>
        </div>
        <div className="w-1/4 relative group hidden lg:block">
          <div className="overflow-hidden">
            <img className="object-cover h-[65vh] w-full transition duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105 cursor-pointer" src={WomenBag} />
          </div>
          <div className="absolute bottom-33 left-1/2 -translate-x-1/2 text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg text-nowrap">Casual Collection</div>
          <button className="absolute bottom-20 left-1/2 -translate-x-1/2 px-8 py-2 text-black bg-white  font-semibold shadow cursor-pointer">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
