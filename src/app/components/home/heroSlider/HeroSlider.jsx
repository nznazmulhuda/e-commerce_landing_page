"use client";

import Button_shop from "@/shared/buttons/button_shop/Button_shop";
import React, { useState } from "react";
import first from "@/assets/heroSlider/first.png";
import second from "@/assets/heroSlider/second.png";
import third from "@/assets/heroSlider/third.png";
import Image from "next/image";

// slides data
const slides = [
  {
    id: 1,
    title: "MEN COLLECTION",
    image: first,
  },
  {
    id: 2,
    title: "WOMEN COLLECTION",
    image: second,
  },
  {
    id: 3,
    title: "KID COLLECTION",
    image: third,
  },
  // Add more slides as needed
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative md:w-[1272px] mx-auto overflow-hidden mt-[91px]">
      <div className="inset-0 hidden md:flex overflow-hidden ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full h-full flex-shrink-0 transition-transform duration-500 ease-out flex items-center justify-between gap-10 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            <aside className="flex flex-col justify-center gap-6 flex-1">
              <h1 className="text-black text-heading_1 font-heading_1_semibold leading-[62.4px]">
                {slide.title} 
              </h1>
              <Button_shop href={"/shop"} />
            </aside>

            <aside className="flex relative items-center justify-center w-[621px]">
              {/* bg */}
              <div className="w-[621px] h-[481px] flex-shrink-0 bg-primary_100 absolute bottom-0"></div>

              <Image
                src={slide.image}
                alt="Collection Preview"
                className={`scale-100`}
              />
            </aside>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full md:hidden">
        {slides.slice(0, 2).map((slide, index) => (
          <div
            key={slide.id}
            className={`w-full flex flex-col px-4 mt-[94.49px]`}
          >
            <aside className="w-full h-[356.33px] relative overflow-hidden">
              <Image
                src={slide.image}
                alt="Collection Preview"
                className={`object-cover mx-auto ${
                  slide.id === 2
                    ? "w-[215.51px] h-[358.34px]"
                    : "w-[278.265px] h-[356.33px]"
                }`}
              />

              {/* bg */}
              <div className="h-[302.818px] w-full bg-primary_100 absolute bottom-0 -z-20"></div>
            </aside>

            <div className="mt-2">
              <h1 className="text-black text-heading_5 font-heading_5_semibold leading-[29.9px] mb-4 ">
                {slide.title}
              </h1>
              <Button_shop href={"/shop"} />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="hidden md:flex items-center justify-center mt-10 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-[8px] transition-all ${
              currentSlide === index
                ? "w-8 h-2 bg-primary_600"
                : "bg-primary_200 w-4 h-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
