"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../logo/Logo";
import cart from "@/assets/cart.svg";
import user from "@/assets/user.svg";
import search from "@/assets/search.svg";
import { usePathname } from "next/navigation";
import { Nunito_Sans } from "next/font/google";

// get Nunito_Sans font
const nunitoSans = Nunito_Sans({
  weights: "400",
});

function Navbar() {
  // all links or routes are here
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Deals",
      href: "/deals",
    },
    {
      label: "What's New",
      href: "/what-new",
    },
  ];

  // get pathname
  const pathName = usePathname();

  return (
    <nav className="bg-[#F5F3FF] pt-[19.5px] pb-[20.5px]">
      <div className="w-[1280px] h-[40px] mx-auto flex justify-between">
        {/* dark logo */}
        <Logo className={"w-[50.61px] h-[28.57px]"} />

        {/* routes */}
        <ul className="flex items-center gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${
                pathName === link.href ? "text-[#581FC1]" : "text-[#646464]"
              } text-body font-body_semibold leading-[20.8px] transition-all`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* search, cart and user */}
        <div className="flex items-center gap-4 ">
          {/* search */}
          <form className="flex items-center gap-2 bg-default  rounded-[17px] p-2">
            {/* seach icon */}
            <Image
              src={search}
              alt="search icon"
              className="w-[16px] h-[16px]"
            />

            {/* seach field */}
            <input
              type="text"
              placeholder="Search"
              className={`w-[242px] border-none outline-none focus-within:outline-none focus:outline-none placeholder:leading-[19.1px] text-[14px] text-black bg-transparent ${nunitoSans.className}`}
            />
          </form>

          {/* cart */}
          <button className="relative">
            {/* cart icon */}
            <Image src={cart} alt="cart icon" className="w-[24px] h-[24px]" />

            {/* total cart, default 0 */}
            <span
              className={`w-[16px] h-[16px] absolute -top-[3px] left-[15px] rounded-[8px] bg-[#1E1E1E] text-[12px] leading-[16.37px] text-default ${nunitoSans.className} flex items-center justify-center`}
            >
              0
            </span>
          </button>

          {/* user */}
          <button>
            <Image src={user} alt="user icon" className="w-[24px] h-[24px]" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
