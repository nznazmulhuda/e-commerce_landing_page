function Navbar() {
  return (
    <>
      {/* nested link */}
      <nav className="mt-[61px]">
        <ul className="flex items-center gap-[72px]">
          <li className="text-title font-title_semibold leading-[24.7px] text-[#747474] cursor-pointer">
            Details
          </li>

          <li className="text-title font-title_semibold leading-[24.7px] text-primary_600 cursor-pointer">
            Review & Rating
          </li>

          <li className="text-title font-title_semibold leading-[24.7px] text-[#747474] cursor-pointer">
            Discussion
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
