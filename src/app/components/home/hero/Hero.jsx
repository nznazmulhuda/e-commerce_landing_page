import Button_shop from "@/shared/buttons/button_shop/Button_shop";

function Hero() {
  return (
    <section className={`hero`}>
      <div className="flex flex-col items-center">
        <h1 className="text-default text-heading_5 md:text-heading_1 font-heading_5_bold leading-[29.9px] md:font-heading_1_bold md:leading-[62.4px]">
          Elevate Your Everyday Style
        </h1>

        <p className="text-[#F5F3FF] text-caption_1 md:text-title leading-[16.9px] md:leading-[24.7px] mt-2">
          Discover the Latest Trends in Sustainable Fashion
        </p>

        <Button_shop href={"/shop"} className={"mt-[24px]"} />
      </div>
    </section>
  );
}

export default Hero;
