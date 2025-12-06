import React from "react";
import Hero4 from "../components/Hero4";

const Portfolio = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center  text-white px-4">
        <h1 className="text-center text-2xl md:text-7xl font-light leading-relaxed">
          Our Portfolio will be <br className="md:hidden" /> available soon.
        </h1>

        <svg
          className="mt-6 w-[260px] md:w-[380px] lg:w-[480px]"
          height="30"
          viewBox="0 0 400 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15 C120 50, 280 -20, 390 15"
            stroke="red"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <Hero4 />
    </div>
  );
};

export default Portfolio;
