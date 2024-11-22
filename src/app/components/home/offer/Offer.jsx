import Feature_card from "@/shared/cards/feature_card/Feature_card";
import truck from "@/assets/offer/truck.svg";
import round from "@/assets/offer/round.svg";
import payment from "@/assets/offer/payment.svg";

function Offer() {
  return (
    <section className="offer">
      {/* feature 1 */}
      <Feature_card
        src={truck}
        title={"free shipping"}
        caption={"buy bdt 3000+ & get free delivery"}
      />

      {/* feature 2 */}
      <Feature_card
        src={round}
        title={"7 days exchange"}
        caption={"exchange within 7 days with similar type of products"}
      />

      {/* feature 3 */}
      <Feature_card
        src={payment}
        title={"100% payment secure"}
        caption={"cash on delivery and secured online payment"}
      />
    </section>
  );
}

export default Offer;
