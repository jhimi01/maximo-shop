import React from "react";
import { FcSearch } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";

import { marcellus } from "../app/fonts";

const Footer = () => {
  return (
    <div className="container mb-6 bg-[#eeeeee] py-6">
      <div className="md:flex items-center md:text-start text-center justify-between py-6">
        <h2 className={`text-2xl text-[#3f3f3f] ${marcellus.className}`}>
          Subscribe to our newsletter
        </h2>
        <div className="w-full sm:w-[300px] md:w-[50%] relative">
          <input
            className="border-gray-200 border p-2 px-4 w-full"
            type="text"
            placeholder="Your Email Address..."
          />
          <MdOutlineMail
            className="absolute right-0 -top-1 mr-3 mt-3 text-gray-400"
            size={25}
          />
        </div>
      </div>
      <hr className="border-[#999]" />
      <div className="py-10 text-[#3f3f3f] md:flex items-center justify-between">
        <h2 className="text-4xl md:mb-0 mb-5 w-[42%] text-blackish font-bold">Logo</h2>
        <ul className="space-y-3 text-[15px] underline">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Blog</li>
        </ul>
        <ul className="space-y-3 md:my-0 my-5 text-[15px] underline">
          <li>Refund Policy</li>
          <li>Terms & Conditions</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="space-y-3 text-[15px] underline">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>WhatsApp</li>
        </ul>
      
     
      </div>
      <hr className="border-[#999]" />
    <div className="py-6 text-[#7e7e7e] text-center font-light">
        <h3>Copyright © 2024 Maximo | Powered by Maximo</h3>
      </div>
    </div>
  );
};

export default Footer;
