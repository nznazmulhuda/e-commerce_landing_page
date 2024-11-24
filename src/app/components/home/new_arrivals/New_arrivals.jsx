"use client";

import Button_arrow from "@/shared/buttons/button_arrow/Button_arrow";
import Section_title from "@/shared/section_title/Section_title";
import Description from "@/shared/description/Description";
import Price from "@/shared/price/Price";
import Button_cart from "@/shared/buttons/button_cart/Button_cart";
import Button_see from "@/shared/buttons/button_see/Button_see";
import { products } from "../../../../../public/fake_data/new_products";
import { useState } from "react";

function New_arrivals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsToShow = 3;

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= products.length ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? products.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className="w-full md:w-[1280px] flex flex-col gap-6 mt-[40px] md:mt-[47px] mx-auto">
      {/* section title and navigation button */}
      <div className="flex items-center justify-between px-4 md:px-0">
        {/* section title */}
        <Section_title title={"Featured Product"} heading={"New Arrivals"} />

        {/* navigation button */}
        <div className="flex gap-2">
          <Button_arrow left func={previous} /> {/* left side button */}
          <Button_arrow right func={next} /> {/* right side button */}
        </div>
      </div>

      {/* slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / productsToShow)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`w-[286px] md:w-[302px] flex-shrink-0`}
            >
              <div className="p-2 bg-default rounded-[16px] overflow-hidden flex flex-col gap-4">
                <div className="relative pb-[133%] bg-primary_50 rounded-[8px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`absolute top-0 left-0 w-full h-full  ${
                      product.name === "Jacket"
                        ? "scale-[2] mt-12"
                        : "object-cover"
                    }`}
                  />
                </div>

                <div className="flex items-center justify-between px-2">
                  <Description className={"text-black"}>
                    {product.name}
                  </Description>
                  <Price>BDT {product.price.toLocaleString()}</Price>
                </div>
                <Button_cart className={"w-full"} href={`/shop/${product.id}`}>
                  Add to Cart
                </Button_cart>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* see more */}
      <div className="flex justify-center">
        <Button_see href={"/shop"}>See more</Button_see>
      </div>
    </section>
  );
}

export default New_arrivals;
