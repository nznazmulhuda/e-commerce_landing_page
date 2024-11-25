"use client";

import Button_shop from "@/shared/buttons/button_shop/Button_shop";
import React, { useState, useEffect } from "react";

// slides data
const slides = [
  {
    id: 1,
    title: "MEN COLLECTION",
    image:
      "https://s3-alpha-sig.figma.com/img/96b9/80c3/8268341e1a92db8b67bccbdc7aa09a1a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LsUFBjrUGsaE3JboB2ZOuMR~0Y2CLcQ9E5xz5cV0c7V2Qm7ahyvAndQVnWJOjkzWa7D2ccBuR~l7u2~ui0~IIGqii8V9580nSNqID8QyfFp02kNsy0x09G0vV-5oXIesbq0dTvjk3PxDgWK205kEUuQdReJIABrrYHQCwE8JhTSiRF9Jv25BxsJUodG52XTuW4GdgBx4xlKzMCwyPFQvH0x1~n0r3f1X3UxvuW0hycV1Q6kudN~DTUlZ965EBg121ZebeSq33YqK2hQQbuY7fr4EGn~a7muo-7GQ6Mpb1Ko~1wdIhzcD04yqZRTDBKbBazMOisd2HgPyji0CVNaVUw__",
  },
  {
    id: 2,
    title: "WOMEN COLLECTION",
    image:
      "https://s3-alpha-sig.figma.com/img/c1c2/0c63/237f6a3d920fbe706d9b39bc346ba623?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Um1vfe8cezr1yRg~Nv4BisDmYrAZYVOZ4RHrqBgEQFrlDXFFoahIMhMH-c5BEhTO8T25geVHXja9QKAgnpgIFyGQM14ErtV5Wgk1xvdpQUH2GdIAJmu4x9dYZPuzc~PCHq3JV6orOgm9WTws4-8qeSkGQdjApu3nlFCxO9fSeZJldv0ZNsZKRIOMlff93~7gH-dSY4J3gniFXA9x3Nifop6AKSAmIokGZ4f4oXRFcZTrAKGZCN11yV2L-OqI4roYl4KgT0GJjD3CGYGw1XIcZUMAPsrKKaHrxXhp1P5rBZUwbIHqdtU~cpyCX77NXrrQKer~CMmv-aBhbZ2hrzgdLQ__",
  },
  {
    id: 3,
    title: "KID COLLECTION",
    image:
      "https://s3-alpha-sig.figma.com/img/dc57/5a17/2e8eeaf6a9686f90ebb432b602fbe649?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fH5tKJXh4K6Yui6V6qdlVal8frxZgstJI2ExvscSwfR~3ShCr-siloT2eNzLkW-2oIx5RHTnGHwRWe-qc~Ny~MG1rLyb0V-6TuQjXHTutNBe9doy5fqQ7BM7utKrDAXQacSISCNy4M1n2vST8l00V8Q2IbXGCMYrZOSPHPdKerzKMtXTTK9dus5jYyVydREX4XhJCVd47ROi2eV1PAHw-yjxeW3a7K9U4V0BwC3IXJcIYh78xASzA4-O32g-2CJaJ6z2BteHMw6jnb5HJ2p~0W6SjCYeFbmAWedeRljTreCpCoAtPY1Y7JCc3swXlgmOlZoutD5oh4ZvxZ1QabEkPw__",
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

              <img
                src={slide.image}
                alt="Collection Preview"
                className={`w-[468px] h-[538px] scale-100 object-cover`}
              />
            </aside>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full md:hidden">
        {slides.slice(0, 2).map((slide, index) => (
          <div key={slide.id} className={`w-full flex flex-col px-4`}>
            <aside className="w-full h-[356.33px] relative overflow-hidden">
              <img
                src={slide.image}
                alt="Collection Preview"
                className={`object-cover w-[278.265px]  h-[356.33px] mx-auto`}
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
