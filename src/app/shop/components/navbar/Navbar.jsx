function Navbar() {
  return (
    <>
      {/* nested link */}
      <nav>
        <ul className="flex items-center justify-between md:justify-start md:gap-[72px]">
          <li className="text-body md:text-title font-body_semibold md:font-title_semibold leading-[20.8px] md:leading-[24.7px] text-[#747474] cursor-pointer">
            Details
          </li>

          <li className="text-body md:text-title font-body_semibold md:font-title_semibold leading-[20.8px] md:leading-[24.7px] text-primary_600 cursor-pointer">
            Review & Rating
          </li>

          <li className="text-body md:text-title font-body_semibold md:font-title_semibold leading-[20.8px] md:leading-[24.7px] text-[#747474] cursor-pointer">
            Discussion
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
