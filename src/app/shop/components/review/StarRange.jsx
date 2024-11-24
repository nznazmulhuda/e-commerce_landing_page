"use client";

import { getTrackBackground, Range } from "react-range";
import { useState } from "react";

function StarRange({ range, rating, totalRating }) {
  const [values, setValues] = useState([100 / (100 / totalRating)]);
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  return (
    <div className="flex items-center gap-2 ">
      <span className="text-black text-title leading-[24.7px]">{rating}</span>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          borderRadius: "8px",
          flexGrow: "1",
        }}
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => setValues(values)}
          disabled
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "10px",
                display: "flex",
                width: "100%",
                borderRadius: "8px",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "10px",
                  width: "100%",
                  borderRadius: "8px",
                  background: getTrackBackground({
                    values,
                    colors: ["#FFCF11", "#DFDFDF"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              key={props.key}
              style={{
                ...props.style,
                height: "0px",
                width: "0px",
              }}
            ></div>
          )}
        />
      </div>

      <span className="text-black text-body leading-[20.8px]">
        {totalRating}
      </span>
    </div>
  );
}

export default StarRange;
