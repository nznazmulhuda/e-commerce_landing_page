import Details from "../components/details/Details";
import ProductShowcase from "../components/productShowCase/ProductShowCase";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
import Navbar from "../components/navbar/Navbar";
import Review from "../components/review/Review";

function SingleProduct() {
  return (
    <main className="mt-6">
      <section className="flex flex-col md:flex-row items-start gap-6 md:w-[1280px] mx-auto  px-4 md:px-0">
        {/* products showcase */}
        <ProductShowcase />

        {/* product details */}
        <Details />
      </section>

      {/* details, review secitons */}
      <section className="bg-white py-6 mt-[61px]">
        <div className="md:w-[1280px] mx-auto  px-4 md:px-0">
          {/* nested links */}
          <Navbar />

          {/* review seciton */}
          <Review />
        </div>
      </section>

      {/* related product section */}
      <section className="mt-[80px] flex flex-col gap-6 md:w-[1280px] mx-auto  px-4 md:px-0">
        <RelatedProducts />
      </section>
    </main>
  );
}

export default SingleProduct;
