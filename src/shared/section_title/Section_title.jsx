function Section_title({ title, heading }) {
  return (
    <div className="space-y-1">
      <p className="text-body md:text-title leading-[20.8px] md:leading-[24.7px] text-primary_600 uppercase">
        {title}
      </p>

      <h1 className="text-heading_5 md:text-heading_4 font-heading_5_bold  md:font-heading_4_bold leading-[29.9px] md:leading-[36.4px] text-black">
        {heading}
      </h1>
    </div>
  );
}

export default Section_title;
