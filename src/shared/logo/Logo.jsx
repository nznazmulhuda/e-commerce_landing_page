import Image from "next/image";
import LogoLight from "@/assets/logo_light.png";
import LogoDark from "@/assets/logo_dark.png";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weights: "700",
});

function Logo({ className, light }) {
  if (light) {
    return (
      <figure className="flex items-center gap-2">
        <Image src={LogoLight} alt="We5ive logo" className={`${className}`} />

        <caption
          className={`${nunitoSans.className} font-bold text-[36px] leading-[49.1px] text-default`}
        >
          We<span className="text-[#7436F1]">5</span>ive
        </caption>
      </figure>
    );
  }

  return (
    <figure className="flex items-center gap-[6.53px]">
      <Image src={LogoDark} alt="We5ive logo" className={`${className}`} />

      <caption
        className={`${nunitoSans.className} font-bold text-[29.39px] leading-[40.08px] text-black`}
      >
        We<span className="text-[#7436F1]">5</span>ive
      </caption>
    </figure>
  );
}

export default Logo;
