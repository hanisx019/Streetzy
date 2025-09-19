import React from "react";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="Tzfont bg-gradient-to-t from-gray-300 to-gray-950 text-white flex justify-evenly items-center 
    p-3 lg:gap-[250px] sm:text-[10px] lg:text-[14px] sm:gap-[100px]  drop-shadow-gray-950 ">
      <p className='flex items-center gap-1'><FiMail/>support@streetzy.com</p>
      <h2>Streetzy – Where Style Hits the Streets</h2>
      <p className='flex items-center gap-1'><FaPhoneAlt />+1(124) 584-890</p>
    </div>
  );
};

export default Topbar;

