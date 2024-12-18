import Link from "next/link";

function Button_buy({ href, children, className }) {
  return (
    <Link href={href} className={className}>
      <button
        className={`w-full h-[40px] rounded-[8px] text-default text-body font-body_semibold leading-[20.8px] transition-all bg-primary_700 hover:bg-primary_800 duration-500`}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button_buy;
