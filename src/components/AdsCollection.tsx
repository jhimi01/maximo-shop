import React from "react";
import { marcellus } from "../app/fonts";

const AdsCollection = () => {
  return (
    <div
      className={`container py-6 h-[50vh] md:h-[90vh] bg-fixed bg-center bg-cover relative ${marcellus.className} `}
      style={{
        backgroundImage: `url(/banner3.png)`,
      }}
    >
      <div>
        <div className="absolute text-center left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%]  sm:bg-transparent sm:p-0 rounded-lg sm:rounded-none backdrop-blur-md bg-white/30">
          <div className="px-10 py-5 w-[100%]">
            <h3 className="text-white text-[25px] md:text-[28px]">
              New collection
            </h3>
            <h2 className="text-white text-[35px] font-bold md:text-[70px] leading-[1.2]">
              Autumn Fashion Sale
            </h2>
            <h3 className="text-[19px] font-extralight text-gray-100">
              Discount up to 75% off
            </h3>
            <div className="bg-gray-100 text-accent hover:text-gray-100 inline-block cursor-pointer hover:bg-blackish p-2 px-4 text-[14px] md:text-[16px] mt-4">
              Shop Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCollection;
