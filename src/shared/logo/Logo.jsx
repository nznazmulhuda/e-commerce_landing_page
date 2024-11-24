import Image from "next/image";
import LogoLight from "@/assets/logo_light.svg";
import LogoDark from "@/assets/logo_dark.svg";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weights: "700",
  subsets: ["latin"],
});

function Logo({ className, light }) {
  if (light) {
    return (
      <figure className="flex items-center gap-2">
        <Image src={LogoLight} alt="We5ive logo" className={`${className}`} />

        <span
          className={`${nunitoSans.className} font-bold text-[17.633px] md:text-[36px] leading-normal md:leading-[49.1px] text-default`}
        >
          We<span className="text-[#7436F1]">5</span>ive
        </span>
      </figure>
    );
  }

  return (
    <figure className="flex items-center gap-[3.92px] md:gap-[6.53px]">
      <Image src={LogoDark} alt="We5ive logo" className={`${className}`} />

      <h2
        className={`${nunitoSans.className} font-bold text-[17.633px] md:text-[29.39px] leading-normal md:leading-[40.08px] text-black`}
      >
        We<span className="text-[#7436F1]">5</span>ive
      </h2>
    </figure>
  );
}

export default Logo;
