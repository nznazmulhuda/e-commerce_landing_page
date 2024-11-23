function Section_title({ title, heading }) {
  return (
    <div className="space-y-1">
      <p className="text-title leading-[24.7px] text-primary_600 uppercase">
        {title}
      </p>

      <h1 className="text-heading_4 font-heading_4_bold leading-[36.4px] text-black">
        {heading}
      </h1>
    </div>
  );
}

export default Section_title;
