import Details from "../components/details/Details";
import ProductShowcase from "../components/productShowCase/ProductShowCase";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
import Navbar from "../components/navbar/Navbar";
import Review from "../components/review/Review";

function SingleProduct() {
  return (
    <main className="mt-6">
      <section className="flex items-start gap-6 w-[1280px] mx-auto ">
        {/* products showcase */}
        <ProductShowcase />

        {/* product details */}
        <Details />
      </section>

      {/* details, review secitons */}
      <section className="bg-white py-6 mt-[61px]">
        <div className="w-[1280px] mx-auto">
          {/* nested links */}
          <Navbar />

          {/* review seciton */}
          <Review />
        </div>
      </section>

      {/* related product section */}
      <section className="mt-[80px] flex flex-col gap-6 w-[1280px] mx-auto">
        <RelatedProducts />
      </section>
    </main>
  );
}

export default SingleProduct;
