"use client";

import React, { useState } from "react";
import Button_arrow from "@/shared/buttons/button_arrow/Button_arrow";
import image_1 from "@/assets/shop/image_1.png";
import image_2 from "@/assets/shop/image_2.png";
import image_3 from "@/assets/shop/image_3.png";
import image_4 from "@/assets/shop/image_4.png";
import image_5 from "@/assets/shop/image_5.png";
import Image from "next/image";

const images = [image_1, image_2, image_3, image_4, image_5];

const ProductShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-[628px] rounded-[16px] bg-primary_50">
      <div className="relative flex-shrink-0">
        <Image
          src={images[currentImage]}
          alt="Image"
          className="w-[580px] h-[507px] mx-auto"
        />

        <Button_arrow
          right
          func={nextImage}
          className={"absolute top-1/2 -translate-y-1/2 right-2"}
        />
        <Button_arrow
          left
          func={prevImage}
          className={"absolute top-1/2 -translate-y-1/2"}
        />
      </div>

      <div className="w-full h-[142px] flex gap-4 mt-4">
        {images.slice(1).map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index + 1)}
            className={`w-[137px] h-[142px] bg-[#ECE9FE] rounded-[16px] overflow-hidden flex items-center justify-center`}
          >
            <Image
              src={img}
              alt="picture"
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
