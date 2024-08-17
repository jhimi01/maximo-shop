import React from "react";
import { marcellus } from "../app/fonts";

const NewCollection = () => {
  return (
    <div className="md:flex gap-10 md:space-y-0 space-y-5 container my-20">
      <div
        className="py-6 group md:w-1/2 h-[50vh] md:h-[90vh] bg-center bg-cover relative"
        style={{
          backgroundImage: `url(/products/newCollection1.jpg)`,
        }}
      >
        <div className="absolute text-center left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] sm:bg-transparent sm:p-0 rounded-lg sm:rounded-none backdrop-blur-md bg-white/30 group-hover:hidden">
          <div className={`px-3 py-3 w-[100%] ${marcellus.className}`}>
            <h3 className="text-white text-[20px] lg:text-[28px]">
              New collection
            </h3>
            <h2 className="text-white text-[26px] md:text-[30px] lg:text-[43px] leading-[1.2]">
              Awesome perfumes Kit Gift Sets
            </h2>
            <h3 className="text-[20px] font-extralight text-gray-100">
              Find your unique style.
            </h3>
            <div className="bg-gray-100 text-accent hover:text-gray-100 inline-block cursor-pointer hover:bg-blackish p-2 px-4 text-[14px] md:text-[16px] mt-4">
              Shop Now
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-6 group md:w-1/2 h-[50vh] md:h-[90vh] bg-center bg-cover relative"
        style={{
          backgroundImage: `url(/products/newCollection2.jpg)`,
        }}
      >
        <div className="absolute text-center left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] sm:bg-transparent sm:p-0 rounded-lg sm:rounded-none group-hover:hidden backdrop-blur-md bg-white/30">
          <div className={`px-3 py-3 w-[100%] ${marcellus.className}`}>
            <h3 className="text-white text-[20px] lg:text-[28px]">
              New collection
            </h3>
            <h2 className="text-white text-[26px] md:text-[30px] lg:text-[43px] leading-[1.2]">
              The Ultimate Jewellery
            </h2>
            <h3 className="text-[20px] font-extralight text-gray-100">
              Find your unique style.
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

export default NewCollection;
