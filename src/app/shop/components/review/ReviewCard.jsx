import ReviewImage from "@/assets/review/review.png";
import Image from "next/image";

function ReviewCard() {
  return (
    <>
      {/* review card */}
      <div className="mt-6">
        {/* top part */}
        <div className="w-full flex items-start gap-2">
          <figure>
            <Image
              src={ReviewImage}
              alt="review image"
              className="w-[40px] h-[40px] rounded-full"
            />
          </figure>

          <div className="flex flex-col gap-2">
            <h1 className="text-black text-body font-body_semibold leading-[20.8px]">
              Cameron Williamson{" "}
              <span className="ml-2 text-[#656565] text-caption_1 leading-[16.9px]">
                3 days
              </span>
            </h1>

            {/* stars */}
            <div>
              {[...Array(5)].map((_, index) => (
                <button key={index + 1}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
                      fill={index < 4 ? "#FFCF11" : "#DFDFDF"}
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* down part */}
        <div className="mt-[15px] mb-[15px]">
          <h1 className="items-stretch text-black text-body font-body_bold leading-[20.8px]">
            Very Nice!!
          </h1>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1.3335 8.33333C1.3335 7.59693 1.93045 7 2.66683 7C3.7714 7 4.66683 7.8954 4.66683 9V11.6667C4.66683 12.7713 3.7714 13.6667 2.66683 13.6667C1.93045 13.6667 1.3335 13.0697 1.3335 12.3333V8.33333Z"
                stroke="#1D1D1D"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.319 5.20417L10.1414 5.77756C9.99597 6.24741 9.92324 6.48233 9.97917 6.66787C10.0244 6.81793 10.1238 6.94733 10.2592 7.03247C10.4265 7.13767 10.6796 7.13767 11.1859 7.13767H11.4552C13.1686 7.13767 14.0253 7.13767 14.43 7.64487C14.4762 7.7028 14.5173 7.76447 14.5529 7.82913C14.8642 8.39473 14.5103 9.15673 13.8025 10.6807C13.153 12.0793 12.8282 12.7785 12.2252 13.1901C12.1668 13.2299 12.1068 13.2675 12.0454 13.3027C11.4105 13.6667 10.624 13.6667 9.05077 13.6667H8.70957C6.80364 13.6667 5.85069 13.6667 5.2586 13.093C4.6665 12.5193 4.6665 11.5959 4.6665 9.74927V9.1002C4.6665 8.12973 4.6665 7.64453 4.83873 7.2004C5.01096 6.75627 5.34074 6.39109 6.0003 5.66075L8.7279 2.64037C8.7963 2.56463 8.8305 2.52675 8.8607 2.5005C9.14217 2.25552 9.57664 2.28309 9.82277 2.56157C9.84917 2.5914 9.87797 2.63327 9.93557 2.71703C10.0257 2.84803 10.0708 2.91354 10.1101 2.97843C10.4617 3.55942 10.5681 4.24957 10.407 4.90477C10.389 4.97795 10.3657 5.0534 10.319 5.20417Z"
                stroke="#1D1D1D"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <span className="text-caption_1 leading-[16.9px] text-black ml-1">
            10
          </span>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
