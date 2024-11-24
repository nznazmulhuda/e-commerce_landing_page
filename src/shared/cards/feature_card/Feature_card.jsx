import Image from "next/image";

function Feature_card({ src, title, caption }) {
  return (
    <div className="flex gap-4">
      {/* icon */}
      <figure>
        <Image src={src} className="w-[32px] h-[32px]" alt="picture" />
      </figure>

      {/* feature */}
      <div>
        {/* title */}
        <h1 className="text-body md:text-title font-body_bold md:font-title_semibold leading-[20.8px] md:leading-[24.7px] text-default uppercase">
          {title}
        </h1>

        {/* caption */}
        <p className="text-default text-caption_1 leading-[16.9px] uppercase mt-2">
          {caption}
        </p>
      </div>
    </div>
  );
}

export default Feature_card;
