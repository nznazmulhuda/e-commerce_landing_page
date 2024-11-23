import Details from "../components/details/Details";
import ProductShowcase from "../components/productShowCase/ProductShowCase";

function layout({ children }) {
  return (
    <main className="w-[1280px] mx-auto mt-6">
      <section className="flex items-start gap-6">
        {/* products showcase */}
        <ProductShowcase />

        {/* product details */}
        <Details />
      </section>

      {children}

      <section>Related Products</section>
    </main>
  );
}

export default layout;
