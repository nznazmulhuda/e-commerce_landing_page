"use client";

import Section_title from "@/shared/section_title/Section_title";
import Details from "../components/details/Details";
import ProductShowcase from "../components/productShowCase/ProductShowCase";
import { products } from "../../../../public/fake_data/new_products";
import Description from "@/shared/description/Description";
import Price from "@/shared/price/Price";
import Button_cart from "@/shared/buttons/button_cart/Button_cart";
import Button_see from "@/shared/buttons/button_see/Button_see";
import { useState } from "react";
import Button_arrow from "@/shared/buttons/button_arrow/Button_arrow";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";

function layout({ children }) {
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
    <main className="w-[1280px] mx-auto mt-6">
      <section className="flex items-start gap-6">
        {/* products showcase */}
        <ProductShowcase />

        {/* product details */}
        <Details />
      </section>

      {children}

      {/* related product section */}
      <section className="mt-[80px] flex flex-col gap-6">
        <RelatedProducts />
      </section>
    </main>
  );
}

export default layout;
