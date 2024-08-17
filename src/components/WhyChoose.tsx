import React from "react";

import { marcellus } from "../app/fonts";
import { FaDolly, FaShippingFast } from "react-icons/fa";
import { MdKeyboardReturn } from "react-icons/md";

const WhyChoose = () => {
  return (
    <div className="md:grid grid-cols-4 gap-10 text-center space-y-4 md:space-y-0 md:text-justify container py-6 my-10">
      <div>
        <h2 className={`${marcellus.className}`}>WHY CHOOSE US</h2>
        <div className="w-[25%] mt-5 h-[1px] bg-[#999] mx-auto md:mx-0 mb-10"></div>
      </div>

      <div className="flex flex-row text-start">
        <div className="mr-3">
          <div className="header_top__icon_wrapper rounded-full  p-2 text-2xl">
            <FaShippingFast />
          </div>
        </div>
        <div>
          <h2 className={` ${marcellus.className} text-2xl mb-1`}>
            Fast Delivery
          </h2>
          <p className="text-[#666] font-light text-justify leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            quaerat? Nostrum ptatum praesentium aperiam recusandae.
          </p>
        </div>
      </div>
      <div className="flex flex-row text-start">
        <div className="mr-3">
          <div className="header_top__icon_wrapper rounded-full  p-2 text-2xl">
            <FaDolly />
          </div>
        </div>
        <div>
          <h2 className={` ${marcellus.className} text-2xl mb-1`}>
            Free Shipping
          </h2>
          <p className="text-[#666] font-light text-justify leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            quaerat?
          </p>
        </div>
      </div>
      <div className="flex flex-row text-start">
        <div className="mr-3">
          <div className="header_top__icon_wrapper rounded-full  p-2 text-2xl">
            <MdKeyboardReturn />
          </div>
        </div>
        <div>
          <h2 className={` ${marcellus.className} text-2xl mb-1`}>
            Easy Returns
          </h2>
          <p className="text-[#666] font-light text-justify leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            quaerat? Nostrum asperiores .
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
