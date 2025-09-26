import React from "react";
import MensCollectionIMG from "../../../assets/MensCollecyioncropped1.jpg";
import MensCollection_resized from "../../../assets/MensCollection_resized.jpg";
import WomensCollectionIMG from "../../../assets/WomensCollection_cropped.jpg";
import WomenBag from "../../../assets/WomenBag.jpg";

const Collections = () => {
  return (
    <div className="mt-[200px] flex flex-col px-4 xl:px-8 2xl:px-16 mb-20 ">
      <h2 className="py-2 text-center text-5xl uppercase font-bold">Collections</h2>
      <h3 className="text-center text-2xl uppercase font-bold">Pick your drip. Own your style.</h3>
      <div className="mt-10 flex justify-between  items-center  gap-6">
        <div className="w-1/4 relative group">
          <img className="object-contain h-[70vh] w-full transition duration-300 ease-in-out group-hover:brightness-50  cursor-pointer" src={MensCollectionIMG} />
          <div className="absolute mt-[330px] inset-0 flex items-center justify-center text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg">Men's Collection</div>
          <button className="absolute mt-[400px] inset-14 flex items-center justify-center text-black bg-white cursor-pointer">Shop Now</button>
        </div>
        <div className="w-1/4 relative group">
          <img className="object-contain h-[70vh] w-full transition duration-300 ease-in-out group-hover:brightness-50  cursor-pointer" src={WomensCollectionIMG} />
          <div className="absolute mt-[330px] inset-0 flex items-center justify-center text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg">Women's Collection</div>
          <button className="absolute mt-[400px] inset-14 flex items-center justify-center text-black bg-white cursor-pointer">Shop Now</button>
        </div>
        <div className="w-1/4 relative group">
          <img className="object-contain h-[70vh] w-full transition duration-300 ease-in-out group-hover:brightness-50  cursor-pointer" src={MensCollection_resized} />
          <div className="absolute mt-[330px] inset-0 flex items-center justify-center text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg">Party Collection</div>
          <button className="absolute mt-[400px] inset-14 flex items-center justify-center text-black bg-white cursor-pointer">Shop Now</button>
        </div>
        <div className="w-1/4 relative group">
          <img className="object-contain h-[70vh] w-full transition duration-300 ease-in-out group-hover:brightness-50  cursor-pointer" src={WomenBag} />
          <div className="absolute mt-[330px] inset-0 flex items-center justify-center text-white text-[20px] tracking-widest font-bold uppercase text-shadow-lg">Casual Collection</div>
          <button className="absolute mt-[400px] inset-14 flex items-center justify-center text-black bg-white cursor-pointer">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
