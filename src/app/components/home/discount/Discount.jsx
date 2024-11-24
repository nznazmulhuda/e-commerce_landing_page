import Button_shop from "@/shared/buttons/button_shop/Button_shop";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

function Discount() {
  return (
    <section className="w-[1280px] h-[450px] mx-auto flex justify-between flex-shrink-0 bg-primary_100 pl-[64px] pr-[88px] overflow-hidden mt-[48px]">
      {/* left side */}
      <aside className="flex flex-col justify-center">
        {/* title */}
        <h2
          className={`${pacifico.className} items-stretch text-[24px] text-primary_700`}
        >
          Big Deal
        </h2>

        {/* heading for discount */}
        <h1 className="items-stretch text-heading_1 font-heading_1_semibold leading-[62.4px] mt-2 mb-6">
          <span className="text-primary_700 ">30%</span> Off for New Customers
        </h1>

        {/* shop now button */}
        <Button_shop href={"/shop"} />
      </aside>

      {/* right side */}
      <aside className="discount"></aside>
    </section>
  );
}

export default Discount;
