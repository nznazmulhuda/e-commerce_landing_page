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

const HomePage = () => {
  return (
    <>
      <h1 className="font-heading_1_bold text-heading_4 text-primary_500">
        This is Home page!
      </h1>

      <Button_arrival>New Arrival</Button_arrival>
      <Button_shop href={"/shop"} />
      <Button_cart href={"/shop/20"}>Add to Cart</Button_cart>
      <Button_cart href={"/shop/22"}>Add to Cart</Button_cart>
      <Button_cart href={"/shop/50"}>Add to Cart</Button_cart>
      <Button_cart href={"/shop/30"}>Add to Cart</Button_cart>
      <div className="flex gap-4">
        <Button_arrow left={true} />
        <Button_arrow />
      </div>

      <Button_subs>Subscribe</Button_subs>
      <Button_see href={"/shop"}>See more</Button_see>

      <Button_buy href={"/deals"}>Buy Now</Button_buy>
      <Description className={"text-primary_700 w-[500px]"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra,
        nulla vel consectetur laoreet, nunc mauris dictum mauris, at ultricies
        mi turpis ut justo. Integer vel nunc in ligula aliquet finibus. Sed vel
        tristique neque, at auctor neque. Sed et ex vel neque facilisis
        consectetur. Integer tincidunt, urna vel condimentum dignissim, felis
        velit semper nunc, vel vestibulum velit velit at sapien.
      </Description>
      <Section_title />
      <Price>bdt 2,300</Price>
      <Logo className={"w-[50.61px] h-[28.57px]"} />
      <div className="bg-black">
        <Logo className={"w-[62px] h-[35px]"} light={true} />
      </div>
    </>
  );
};

export default HomePage;
