import Link from "next/link";

function Button_see({ href, children }) {
  return (
    <Link
      href={href}
      className="w-[120px] h-[40px] flex items-center justify-center rounded-[8px] bg-primary_600 text-default"
    >
      <button className="text-body font-body_semibold leading-[20.8px]">
        {children}
      </button>
    </Link>
  );
}

export default Button_see;
