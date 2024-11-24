"use client";

import Button_arrival from "@/shared/buttons/button_arrival/Button_arrival";
import { useState } from "react";
import { Inter } from "next/font/google";
import Button_buy from "@/shared/buttons/button_buy/Button_buy";
import Button_cart from "@/shared/buttons/button_cart/Button_cart";

const inter = Inter({
  weight: "400",
});

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Off White");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Off White", "Black"];

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        {/* New Arrival Badge */}
        <Button_arrival>New Arrival</Button_arrival>

        {/* Product Title */}
        <h1 className="text-heading_3 font-heading_3_semibold leading-[42.9px] text-black items-stretch">
          White Hoodie
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-4">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <button key={index + 1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                    fill={index < 4 ? "#FFCF11" : "#DFDFDF"}
                  />
                </svg>
              </button>
            ))}
          </div>

          <span className="text-black text-body font-body_semibold leading-[20.8px] -ml-3">
            (4.0)
          </span>

          <p className="text-primary_600 text-body font-body_semibold leading-[20.8px]">
            121 reviews
          </p>
        </div>

        {/* Price */}
        <h1 className="text-black text-heading_4 font-heading_4_bold leading-[36.4px] items-stretch">
          BDT 2500
        </h1>
      </div>

      {/* divider */}
      <div className="w-full border-t border-dashed my-8"></div>

      <div className="flex items-start gap-[69px]">
        {/* Available Size */}
        <div className="flex flex-col gap-4">
          <h3 className="text-black text-title font-title_semibold leading-[24.7px]">
            Available Size
          </h3>

          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-[40px] h-[40px] flex items-center justify-center border text-black text-body leading-[20.8px]
                ${
                  selectedSize === size
                    ? "border-primary_600 bg-primary_50 rounded-lg"
                    : "border-transparent bg-primary_50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Available Color */}
        <div className="flex flex-col gap-4">
          <h3 className="text-black text-title font-title_semibold leading-[24.7px]">
            Available Color
          </h3>
          <div className="flex gap-3">
            {colors.map((color) => (
              <div key={color} className="flex items-center gap-2">
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`relative w-4 h-4 rounded-full
                ${color === "Off White" ? "bg-[#F1F0F5]" : "bg-black"}
                ${
                  selectedColor === color &&
                  "ring-2 ring-purple-600 ring-offset-2"
                }
              `}
                />
                <span
                  className={`text-black text-[12px] mt-1 ${inter.className}`}
                >
                  {color}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="w-full border-t border-dashed my-8"></div>

      {/* Quantity */}
      <div className="flex flex-col gap-4">
        <h3 className="text-black text-body font-body_bold leading-[20.8px]">
          Quantity
        </h3>

        <div className="flex items-center justify-between px-4 py-2 bg-[#ECE9FE] rounded-3xl w-[132px] h-[48px]">
          <button onClick={decreaseQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.3332 8H2.6665"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <span className="text-black text-body font-body_bold leading-[20.8px]">
            {quantity}
          </span>

          <button onClick={increaseQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 2.66669V13.3334"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.6665 8H13.3332"
                stroke="#1D1D1D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-[32px] w-full flex gap-4">
        <Button_buy href={"/"} className={"w-full"}>
          Buy Now
        </Button_buy>

        <Button_cart href={"/"} className={"w-full"}>
          Add to Cart
        </Button_cart>
      </div>
    </div>
  );
};

export default ProductDetails;
