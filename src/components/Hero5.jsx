import React from "react";
import img26 from "../assets/image/img26.mov";

const Hero5 = () => {
  return (
    <div className="relative w-full md:h-screen overflow-hidden md:p-20 flex flex-col md:flex-row items-center gap-6 md:gap-20">
      <video
        src={img26}
        autoPlay
        muted
        loop
        playsInline
        className="w-full md:w-1/2  rounded-[40px] object-cover max-h-[800px] p-5 md:max-h-[800px]"
      ></video>

      <div className="text-center md:text-left px-4 md:px-0 md:w-1/2">
        <p className="text-red-400 mb-2">/06</p>
        <h2 className="font-bold text-2xl md:text-4xl mb-4">
          Customized Studio Rental
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          We offer spaces to content creators and brands, customized according
          to their needs for podcasts and content creation.
        </p>
      </div>
    </div>
  );
};

export default Hero5;
