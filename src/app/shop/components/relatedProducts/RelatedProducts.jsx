"use client";

import Button_arrow from "@/shared/buttons/button_arrow/Button_arrow";
import Section_title from "@/shared/section_title/Section_title";
import { useState } from "react";
import { products } from "../../../../../public/fake_data/new_products";
import Description from "@/shared/description/Description";
import Price from "@/shared/price/Price";
import Button_cart from "@/shared/buttons/button_cart/Button_cart";
import Button_see from "@/shared/buttons/button_see/Button_see";
import Image from "next/image";

function RelatedProducts() {
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
    <>
      {/* section title and navigation button */}
      <div className="flex items-center justify-between">
        {/* section title */}
        <Section_title heading={"Related Products"} />

        {/* navigation button */}
        <div className="flex gap-2">
          <Button_arrow left func={previous} /> {/* left side button */}
          <Button_arrow right func={next} /> {/* right side button */}
        </div>
      </div>

      {/* products */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / productsToShow)}%)`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className={`w-[302px] flex-shrink-0`}>
              <div className="p-2 bg-default rounded-[16px] overflow-hidden flex flex-col gap-4">
                <div className="relative bg-primary_50 rounded-[8px] overflow-hidden flex items-center justify-center h-[287px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-full"
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
    </>
  );
}

export default RelatedProducts;
