import Link from "next/link";

function Button_cart({ href }) {
  return (
    <Link href={href}>
      <button className="w-[286px] h-[40px] rounded-[8px] py-2 px-6 text-primary_600 border border-primary_600 text-body font-body_semibold leading-[20.8px] transition-all hover:bg-primary_700 hover:border-primary_700 hover:text-default duration-500">
        Add to Cart
      </button>
    </Link>
  );
}

export default Button_cart;
