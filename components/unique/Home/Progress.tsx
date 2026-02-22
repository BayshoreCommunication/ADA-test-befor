"use client";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
// starts

interface progress {
  title: string;
  bg: string;
  border: string;
  percentage: string;
  percentageVal: string;
  percentageValpx: string;
}
const Progress = ({
  title,
  bg,
  border,
  percentage,
  percentageVal,
  percentageValpx,
}: progress) => {
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleVisibilityChange = (isVisible: any) => {
    if (isVisible && !hasPlayed) {
      setHasPlayed(true);
    }
  };
  return (
    <VisibilitySensor onChange={handleVisibilityChange} delayedCall>
      <div>
        <h5 className="text-headingPrimary mb-3">{title}</h5>
        <div
          className={`h-[2.5rem] rounded-r-3xl rounded-l-3xl w-full ${border} relative`}
        >
          <div
            className={`absolute ${hasPlayed ? percentage : "w-0"
              } rounded-[4px] h-full ${bg} top-0 left-0 transition-all duration-1000 rounded-r-3xl rounded-l-3xl`}
          ></div>
          <p
            className={`absolute ${percentageValpx} z-10 top-[50%] translate-y-[-50%] font-semibold !text-[#f4f4f4] text-[1.5rem]`}
          >
            <span className="bg-blue-gray-700 px-3 py-1 rounded-r-3xl rounded-l-3xl text-[10px] font-normal flex justify-center items-center">
              {percentageVal}
            </span>
          </p>
          {/* <div
            className={`border-2 rounded-full ${border} h-[72px] w-[72px] absolute top-0 right-0 translate-y-[-40%]`}
          ></div> */}
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Progress;
