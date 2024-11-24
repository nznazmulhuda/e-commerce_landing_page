import Button_shop from "@/shared/buttons/button_shop/Button_shop";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

function Discount() {
  return (
    <section className="md:w-[1280px] md:h-[450px] mx-auto flex flex-col md:flex-row justify-between flex-shrink-0 bg-primary_100 md:pl-[64px] md:pr-[88px] overflow-hidden mt-[50px] md:mt-[48px] pt-6 md:pt-0 px-4 md:px-0 gap-[46px] md:gap-0 text-center">
      {/* left side */}
      <aside className="flex flex-col justify-center">
        {/* title */}
        <h2
          className={`${pacifico.className} items-stretch text-[24px] text-primary_600 md:text-primary_700`}
        >
          Big Deal
        </h2>

        {/* heading for discount */}
        <h1 className="items-stretch text-heading_4 md:text-heading_1 font-heading_4_semibold md:font-heading_1_semibold leading-[36.4px] md:leading-[62.4px] mt-2 mb-6">
          <span className="text-primary_600 md:text-primary_700">30%</span> Off
          for New Customers
        </h1>

        {/* shop now button */}
        <Button_shop href={"/shop"} className={"mx-auto"} />
      </aside>

      {/* right side */}
      <aside className="discount"></aside>
    </section>
  );
}

export default Discount;
