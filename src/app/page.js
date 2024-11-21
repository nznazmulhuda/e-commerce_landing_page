import Button_arrival from "@/shared/buttons/button_arrival/Button_arrival";
import Button_cart from "@/shared/buttons/button_cart/Button_cart";
import Button_shop from "@/shared/buttons/button_shop/Button_shop";

const HomePage = () => {
  return (
    <>
      <h1 className="font-heading_1_bold text-heading_4 text-primary_500">
        This is Home page!
      </h1>

      <Button_arrival text={"New Arrival"} />
      <Button_shop href={"/shop"} />
      <Button_cart href={"/shop/20"} />
    </>
  );
};

export default HomePage;
