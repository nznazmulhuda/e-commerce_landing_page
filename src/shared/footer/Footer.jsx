import React from "react";
import { Nunito_Sans } from "next/font/google";
import Description from "../description/Description";
import Logo from "../logo/Logo";
import Button_subs from "../buttons/button_subs/Button_subs";
import Facebook from "@/assets/offer/Facebook.png";
import Twitter from "@/assets/offer/Twitter.png";
import Linkedin from "@/assets/offer/Linkedin.png";
import Image from "next/image";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weights: ["400", "700"],
});

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center mt-[108px]">
      <div className="bg-black w-full pt-6 md:pt-[55px]">
        {/* top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between md:w-[1280px] mx-auto px-4 md:px-0">
          {/* left side */}
          <aside>
            {/* logo */}
            <Logo
              className={"w-[30.367px] md:w-[62px] h-[17.143px] md:h-[35px]"}
              light={true}
            />

            {/* description */}
            <Description
              className={"md:w-[411px] text-default mt-[16px] md:mt-[27px]"}
            >
              Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam
              unde quae qui quasi mollitia tenetur. Dicta explicabo est
              consectetur maxime quos fugit velit assumenda est.
            </Description>
          </aside>

          {/* right side */}
          <aside className="w-full md:w-[628px] mt-6 md:mt-0">
            <h1 className="text-title md:text-heading_5 font-title_bold md:font-heading_5_bold leading-[24.7px] md:leading-[29.9px] text-default w-full">
              Sign Up For Our Newsletter!
            </h1>

            <Description
              className={
                "items-stretch text-default text-caption_1 md:text-body leading-[16.9px] md:leading-[20.8px] w-full mt-2 md:mt-0"
              }
            >
              Get notified about updates and be the first to get early access to
              new Podcast episodes.
            </Description>

            {/* input */}
            <form className="mt-[16px] md:mt-[30px] w-full flex bg-default rounded-[8px] rounded-r-[20px]">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent px-4 w-full p-4 text-black text-body leading-[20.8px] outline-none"
              />

              <Button_subs>Subscribe</Button_subs>
            </form>
          </aside>
        </div>

        {/* down */}
        <div className="md:w-[1280px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center mt-[16px] md:mt-[64px] md:mb-[66px] px-4 md:px-0">
          <div>
            <h1 className="text-default text-body font-body_bold leading-[20.8px] mb-4">
              Contact Us
            </h1>

            <Description className={"text-default"}>
              support@we5ive.com
            </Description>
          </div>

          <div>
            <h1 className="text-default text-body font-body_bold leading-[20.8px] mb-4">
              About Us
            </h1>

            <Description className={"text-default"}>Contact Us</Description>
          </div>

          <div>
            <h1 className="text-default text-body font-body_bold leading-[20.8px] mb-4">
              Privacy policy
            </h1>

            <Description className={"text-default"}>
              Terms & Condition
            </Description>
          </div>

          {/* social icons */}
          <div className="mb-12 md:mb-0">
            <h1 className="text-default text-body font-body_bold leading-[20.8px] mb-4">
              Social Link
            </h1>

            <div className="flex items-center gap-6">
              <Image src={Facebook} alt="Facebook" />
              <Image src={Twitter} alt="Twitter" />
              <Image src={Linkedin} alt="Linkedin" />
            </div>
          </div>
        </div>
      </div>

      {/* copy right */}
      <h1
        className={`${nunitoSans.className} text-[16px] leading-[21.82px] text-default bg-primary_600 w-full text-center py-4`}
      >
        &copy; 2024 | We5ive
      </h1>
    </footer>
  );
}

export default Footer;
