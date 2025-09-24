import React from "react";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="Tzfont bg-black text-white flex justify-center sm:justify-between md:px-[50px] lg:px-[100px] items-center p-3 
      sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[14px] text-center text-[8px] gap-[3px] select-none ">
      <a href="mailto:support@streetzy.com" className='hidden sm:flex items-center gap-1 cursor-pointer  transition-all ease-in'><span className="mb-[2px]"><FiMail/></span>support@streetzy.com</a>
      <h2 className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[20px] ">Streetzy – Where Style Hits the Streets</h2>
      <a href="tel:+1124584890" className='hidden sm:flex items-center gap-1 cursor-pointer   transition-all ease-in'><span className="mb-[2px]"><FaPhoneAlt /></span>+1(124) 584-890</a>
    </div>
  );
};

export default Topbar;

