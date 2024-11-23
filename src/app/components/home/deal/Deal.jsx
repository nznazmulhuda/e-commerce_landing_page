import Button_see from "@/shared/buttons/button_see/Button_see";
import Button_cart from "@/shared/buttons/button_cart/Button_cart";
import Description from "@/shared/description/Description";
import Button_arrow from "@/shared/buttons/button_arrow/Button_arrow";
import Section_title from "@/shared/section_title/Section_title";
import Price from "@/shared/price/Price";
import { products } from "../../../../../public/fake_data/deal";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

// get Nunito_Sans font
const nunito_sans = Nunito_Sans({
  weight: "400",
});

function Deal() {
  return (
    <section className="w-[1280px] flex flex-col gap-6 mt-[80px] mx-auto">
      {/* section title and navigation button */}
      <div className="flex items-center justify-between">
        {/* section title */}
        <Section_title title={"Summer"} heading={"Big Deal"} />

        {/* navigation button */}
        <div className="flex gap-2">
          <Button_arrow left /> {/* left side button */}
          <Button_arrow right /> {/* right side button */}
        </div>
      </div>

      {/* slider */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-2 rounded-2xl bg-default h-[400px] flex flex-col gap-4"
          >
            {/* image */}
            <div className="bg-primary_50 w-full h-[252px] rounded-[8px] relative flex items-center justify-center overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                className="object-cover h-full mt-4"
              />

              {/* badge */}
              <div className="absolute top-0 right-0 w-[44px] pt-[2px] pl-[7px] pb-[7px] pr-[6px] flex items-center rounded-b-[22px] bg-primary_600 text-center text-default text-caption_1 font-caption_1_bold leading-[16.9px]">
                <h1>Up to 40% </h1>
              </div>
            </div>

            {/* rating */}
            <div className="flex items-center gap-1">
              {/* svg */}
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.15165 2.29616L10.3249 4.66196C10.4849 4.99129 10.9115 5.30717 11.2715 5.36766L13.3979 5.72387C14.7577 5.95239 15.0777 6.94711 14.0978 7.92837L12.4447 9.59517C12.1647 9.87744 12.0114 10.4218 12.098 10.8117L12.5713 12.875C12.9446 14.5082 12.0847 15.14 10.6515 14.2864L8.65838 13.0968C8.29845 12.8818 7.70518 12.8818 7.33852 13.0968L5.34543 14.2864C3.91892 15.14 3.05235 14.5015 3.42564 12.875L3.89892 10.8117C3.98558 10.4218 3.83226 9.87744 3.55229 9.59517L1.89914 7.92837C0.925918 6.94711 1.23922 5.95239 2.59906 5.72387L4.7255 5.36766C5.07879 5.30717 5.50541 4.99129 5.66539 4.66196L6.83858 2.29616C7.47852 1.01245 8.51838 1.01245 9.15165 2.29616Z"
                    fill="#FFC700"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.15165 2.29616L10.3249 4.66196C10.4849 4.99129 10.9115 5.30717 11.2715 5.36766L13.3979 5.72387C14.7577 5.95239 15.0777 6.94711 14.0978 7.92837L12.4447 9.59517C12.1647 9.87744 12.0114 10.4218 12.098 10.8117L12.5713 12.875C12.9446 14.5082 12.0847 15.14 10.6515 14.2864L8.65838 13.0968C8.29845 12.8818 7.70518 12.8818 7.33852 13.0968L5.34543 14.2864C3.91892 15.14 3.05235 14.5015 3.42564 12.875L3.89892 10.8117C3.98558 10.4218 3.83226 9.87744 3.55229 9.59517L1.89914 7.92837C0.925918 6.94711 1.23922 5.95239 2.59906 5.72387L4.7255 5.36766C5.07879 5.30717 5.50541 4.99129 5.66539 4.66196L6.83858 2.29616C7.47852 1.01245 8.51838 1.01245 9.15165 2.29616Z"
                    fill="#FFC700"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.15165 2.29616L10.3249 4.66196C10.4849 4.99129 10.9115 5.30717 11.2715 5.36766L13.3979 5.72387C14.7577 5.95239 15.0777 6.94711 14.0978 7.92837L12.4447 9.59517C12.1647 9.87744 12.0114 10.4218 12.098 10.8117L12.5713 12.875C12.9446 14.5082 12.0847 15.14 10.6515 14.2864L8.65838 13.0968C8.29845 12.8818 7.70518 12.8818 7.33852 13.0968L5.34543 14.2864C3.91892 15.14 3.05235 14.5015 3.42564 12.875L3.89892 10.8117C3.98558 10.4218 3.83226 9.87744 3.55229 9.59517L1.89914 7.92837C0.925918 6.94711 1.23922 5.95239 2.59906 5.72387L4.7255 5.36766C5.07879 5.30717 5.50541 4.99129 5.66539 4.66196L6.83858 2.29616C7.47852 1.01245 8.51838 1.01245 9.15165 2.29616Z"
                    fill="#FFC700"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.15165 2.29616L10.3249 4.66196C10.4849 4.99129 10.9115 5.30717 11.2715 5.36766L13.3979 5.72387C14.7577 5.95239 15.0777 6.94711 14.0978 7.92837L12.4447 9.59517C12.1647 9.87744 12.0114 10.4218 12.098 10.8117L12.5713 12.875C12.9446 14.5082 12.0847 15.14 10.6515 14.2864L8.65838 13.0968C8.29845 12.8818 7.70518 12.8818 7.33852 13.0968L5.34543 14.2864C3.91892 15.14 3.05235 14.5015 3.42564 12.875L3.89892 10.8117C3.98558 10.4218 3.83226 9.87744 3.55229 9.59517L1.89914 7.92837C0.925918 6.94711 1.23922 5.95239 2.59906 5.72387L4.7255 5.36766C5.07879 5.30717 5.50541 4.99129 5.66539 4.66196L6.83858 2.29616C7.47852 1.01245 8.51838 1.01245 9.15165 2.29616Z"
                    stroke="#FFC700"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M9.15165 2.29616L10.3249 4.66196C10.4849 4.99129 10.9115 5.30717 11.2715 5.36766L13.3979 5.72387C14.7577 5.95239 15.0777 6.94711 14.0978 7.92837L12.4447 9.59517C12.1647 9.87744 12.0114 10.4218 12.098 10.8117L12.5713 12.875C12.9446 14.5082 12.0847 15.14 10.6515 14.2864L8.65838 13.0968C8.29845 12.8818 7.70518 12.8818 7.33852 13.0968L5.34543 14.2864C3.91892 15.14 3.05235 14.5015 3.42564 12.875L3.89892 10.8117C3.98558 10.4218 3.83226 9.87744 3.55229 9.59517L1.89914 7.92837C0.925918 6.94711 1.23922 5.95239 2.59906 5.72387L4.7255 5.36766C5.07879 5.30717 5.50541 4.99129 5.66539 4.66196L6.83858 2.29616C7.47852 1.01245 8.51838 1.01245 9.15165 2.29616Z"
                    stroke="#FFC700"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h1 className={`${nunito_sans.className} text-[14px] text-black`}>
                (50)
              </h1>
            </div>

            {/* caption and price */}
            <div className="flex items-center justify-between px-2">
              {/* caption */}
              <Description className={"text-black"}>{product.name}</Description>

              {/* price */}
              <Price className={"text-default"}>
                BDT {product.price.toLocaleString()}
              </Price>
            </div>

            {/* cart button */}
            <div>
              <Button_cart className={"w-full"} href={`/shop/${product.id}`}>
                Add to Cart
              </Button_cart>
            </div>
          </div>
        ))}
      </div>

      {/* see more */}
      <div className="flex justify-center">
        <Button_see href={"/shop"}>See more</Button_see>
      </div>
    </section>
  );
}

export default Deal;
