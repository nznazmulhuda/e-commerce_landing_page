"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Button_shop({ href }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link href={href} className="w-[197px] h-[48px] flex">
      <button
        className="flex items-center justify-center text-default"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span
          className={`w-[149px] h-[48px] rounded-[28px] flex items-center justify-center transition-all text-title leading-[24.7px] duration-500 ${
            isHover ? "bg-primary_700" : "bg-primary_500"
          }`}
        >
          Shop Now
        </span>

        <span
          className={`w-[48px] h-[48px] rounded-[24px] flex items-center justify-center transition-all duration-500 ${
            isHover
              ? " bg-primary_700 rotate-[135deg]"
              : " bg-primary_500 rotate-[45deg]"
          }`}
        >
          <FaArrowUpLong className="text-[22px]" />
        </span>
      </button>
    </Link>
  );
}

export default Button_shop;