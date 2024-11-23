import Button_arrival from "@/shared/buttons/button_arrival/Button_arrival";
import Button_arrow from "@/shared/buttons/button_arrow/Button_arrow";
import Button_buy from "@/shared/buttons/button_buy/Button_buy";
import Button_cart from "@/shared/buttons/button_cart/Button_cart";
import Button_see from "@/shared/buttons/button_see/Button_see";
import Button_shop from "@/shared/buttons/button_shop/Button_shop";
import Button_subs from "@/shared/buttons/button_subs/Button_subs";
import Description from "@/shared/description/Description";
import Logo from "@/shared/logo/Logo";
import Price from "@/shared/price/Price";
import Section_title from "@/shared/section_title/Section_title";
import Hero from "./components/home/hero/Hero";
import Offer from "./components/home/offer/Offer";
import New_arrivals from "./components/home/new_arrivals/New_arrivals";
import Discount from "./components/home/discount/Discount";
import HeroSlider from "./components/home/heroSlider/HeroSlider";
import Deal from "./components/home/deal/Deal";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <Hero />

      {/* offer section */}
      <Offer />

      {/* new arrivals section */}
      <New_arrivals />

      {/* discount */}
      <Discount />

      {/* hero slider */}
      <HeroSlider />

      {/* big deal */}
      <Deal />
    </>
  );
};

export default HomePage;
