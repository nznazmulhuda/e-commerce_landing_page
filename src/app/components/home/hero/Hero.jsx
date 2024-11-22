import heroImage from "@/assets/homePage/hero.png";
import Button_shop from "@/shared/buttons/button_shop/Button_shop";
import Description from "@/shared/description/Description";
import Image from "next/image";

function Hero() {
  return (
    <section className={`hero`}>
      <div className="flex flex-col items-center">
        <h1 className="text-default text-heading_1 font-heading_1_bold leading-[62.4px]">
          Elevate Your Everyday Style
        </h1>

        <p className="text-[#F5F3FF] text-title leading-[24.7px] mt-2">
          Discover the Latest Trends in Sustainable Fashion
        </p>

        <Button_shop href={"/shop"} className={"mt-[24px]"} />
      </div>
    </section>
  );
}

export default Hero;
