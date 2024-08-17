import React from "react";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
        Maximo
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 w-full"
            type="text"
            placeholder="inter any product name..."
          />
          <IoSearch
            className="absolute right-0 -top-1 mr-3 mt-3 text-gray-400"
            size={25}
          />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />

          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <BiShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
