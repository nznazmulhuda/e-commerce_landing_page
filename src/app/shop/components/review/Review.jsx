import ReviewCard from "./ReviewCard";
import StarRange from "./StarRange";

function Review() {
  return (
    <section className="mt-6 md:mt-10 flex flex-col-reverse md:flex-row md:items-center gap-6">
      {/* left side */}
      <aside className="flex-1">
        {/* dropdown */}
        <select className="border border-primary_600 rounded-[8px] py-2 px-4 flex items-center justify-between text-body font-body_semibold leading-[20.8px] outline-none text-black bg-transparent">
          <option value="new">Newest</option>
        </select>

        {/* reviews */}
        <ReviewCard />

        {/* divider */}
        <div className="w-full border-t border-dashed my-4"></div>

        <ReviewCard />
      </aside>

      {/* right side */}
      <aside className="md:w-[411px] flex flex-col gap-4">
        {/* top part */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <h2 className="text-[#000] text-body font-body_bold leading-[20.8px]">
              Product Review
            </h2>

            <span className="ml-2 text-primary_600 text-body font-body_semibold leading-[20.8px]">
              121 reviews
            </span>
          </div>

          {/* stars */}
          <div className="flex items-center justify-between">
            <div>
              {[...Array(5)].map((_, index) => (
                <button key={index + 1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M22.8795 5.74031L25.8125 11.6548C26.2125 12.4781 27.279 13.2678 28.179 13.4191L33.495 14.3096C36.8947 14.8809 37.6947 17.3677 35.2448 19.8208L31.112 23.9878C30.412 24.6935 30.0288 26.0545 30.2453 27.0292L31.4287 32.1875C32.3618 36.2705 30.212 37.85 26.6292 35.716L21.6463 32.742C20.7465 32.2043 19.2633 32.2043 18.3467 32.742L13.3639 35.716C9.79766 37.85 7.63124 36.2537 8.56448 32.1875L9.74768 27.0292C9.96431 26.0545 9.58103 24.6935 8.88109 23.9878L4.74823 19.8208C2.31516 17.3677 3.09841 14.8809 6.49803 14.3096L11.8141 13.4191C12.6973 13.2678 13.7639 12.4781 14.1638 11.6548L17.0968 5.74031C18.6967 2.53102 21.2963 2.53102 22.8795 5.74031Z"
                      fill={index < 4 ? "#FFCF11" : "#DFDFDF"}
                    />
                  </svg>
                </button>
              ))}
            </div>

            <p className="text-black text-title font-title_semibold leading-[24.7px]">
              (4.0)
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="w-full border-t border-dashed"></div>

        {/* range */}
        <div>
          <StarRange rating={5} totalRating={50} />
          <StarRange rating={4} totalRating={5} />
          <StarRange rating={3} totalRating={10} />
          <StarRange rating={2} totalRating={30} />
          <StarRange rating={1} totalRating={2} />
        </div>
      </aside>
    </section>
  );
}

export default Review;
