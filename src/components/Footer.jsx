import React from "react";
import img22 from "../assets/image/img22.png";
import img23 from "../assets/image/img23.png";
import img24 from "../assets/image/img24.png";
import img25 from "../assets/image/img25.png";

const Footer = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-10">
      <div className="max-w-md w-90">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-snug">
            Connect with us on
          </h2>

          {/* Red line exactly in the middle */}
          <div className="flex justify-center my-2">
            <div className="h-[3px] w-78 bg-red-600 left-60 right-10 -translate-x-30 "></div>
          </div>

          <h2 className="text-3xl  font-semibold  -ml-30 leading-snug">
            our socials
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-4">
            <img
              src={img22}
              alt="YouTube Icon"
              className=" w-15 h-15 md:w-20 md:h-20"
            />
            <p className="text-lg">Blacaples Studio</p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={img23}
              alt="Instagram Icon"
              className=" w-15 h-15 md:w-20 md:h-20"
            />
            <p className="text-lg">@blacaple</p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={img24}
              alt="TikTok Icon"
              className="w-15 h-15
            md:w-20 md:h-20"
            />
            <p className="text-lg">@blacaple</p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={img25}
              alt="LinkedIn Icon"
              className="w-15 h-15 md:w-20 md:h-20"
            />
            <p className="text-lg">Blacaples Studio</p>
          </div>
        </div>

        <div className="mt-12 text-center text-sm space-y-3">
          <div className="flex justify-center items-center gap-3">
            <span>Blacaples.com</span>
            <span className="text-red-600 text-xl">|</span>
            <span>hello@blacaples.com</span>
          </div>

          <div className="pt-3 text-gray-400">
            Blacaples © 2025 Studio Limited — All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
