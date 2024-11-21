import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weights: ["400", "700"],
});

function Footer({ children }) {
  return (
    <footer className="w-full h-[58px] bg-primary_600 py-4 flex items-center justify-center">
      <h1
        className={`${nunitoSans.className} text-body leading-[21.82px] text-default`}
      >
        {children}
      </h1>
    </footer>
  );
}

export default Footer;
