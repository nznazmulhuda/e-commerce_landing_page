import Details from "../components/details/Details";
import ProductShowcase from "../components/productShowCase/ProductShowCase";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";
import Navbar from "../components/navbar/Navbar";

function SingleProduct() {
  return (
    <main className="w-[1280px] mx-auto mt-6">
      <section className="flex items-start gap-6">
        {/* products showcase */}
        <ProductShowcase />

        {/* product details */}
        <Details />
      </section>

      {/* nested links */}
      <Navbar />

      {/* related product section */}
      <section className="mt-[80px] flex flex-col gap-6">
        <RelatedProducts />
      </section>
    </main>
  );
}

export default SingleProduct;
