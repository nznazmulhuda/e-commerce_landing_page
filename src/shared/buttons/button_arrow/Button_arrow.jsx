"use client";

import { FaArrowUpLong } from "react-icons/fa6";

function Button_arrow({ left, right, func, className }) {
  return (
    <button
      className={`w-[32px] h-[32px] rounded-[16px] border border-primary_600 transition-all duration-500 text-primary_600 hover:text-default hover:bg-primary_600 flex items-center justify-center ${
        left ? "-rotate-[90deg]" : right ? "rotate-[90deg]" : null
      } text-[18px] ${className}`}
      onClick={() => func()}
    >
      <FaArrowUpLong />
    </button>
  );
}

export default Button_arrow;
