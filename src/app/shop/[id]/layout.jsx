import ProductShowcase from "../components/productShowCase/ProductShowCase";

function layout({ children }) {
  return (
    <main className="w-[1280px] mx-auto mt-6">
      <section>
        {/* products showcase */}
        <ProductShowcase />
      </section>

      {children}

      <section>Related Products</section>
    </main>
  );
}

export default layout;
