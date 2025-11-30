import React from "react";
import img16 from "../assets/image/img16.png";
import img13 from "../assets/image/img13.png";
import img14 from "../assets/image/img14.png";
import img15 from "../assets/image/img15.png";

const Hero3 = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 md:px-0 mt-16 pb-12">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          FeaturedStories
        </h2>

        <p className="text-gray-300 max-w-3xl">
          Our team focuses on crafting and engineering emotion-catching stories
          and content that stays in the mind of your customers even if they
          close eyes to sleep. We have done it for this brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-0 pb-10 md:p-10">
        <div>
          <img
            src={img14}
            className="w-full h-120 object-cover rounded-sm"
            alt=""
          />
          <p className="text-gray-400 mt-3 text-sm">September, 2025</p>
          <h3 className="text-xl font-semibold">viral content</h3>
        </div>

        <div>
          <img
            src={img15}
            className="w-full h-120 object-cover rounded-sm"
            alt=""
          />
          <p className="text-gray-400 mt-3 text-sm">September, 2025</p>
          <h3 className="text-xl font-semibold">viral content</h3>
        </div>

        <div>
          <img
            src={img16}
            className="w-full h-120 object-cover rounded-sm"
            alt=""
          />
          <p className="text-gray-400 mt-3 text-sm">September, 2025</p>
          <h3 className="text-xl font-semibold">viral content</h3>
        </div>

        <div>
          <img
            src={img13}
            className="w-full h-120 object-cover rounded-sm"
            alt=""
          />
          <p className="text-gray-400 mt-3 text-sm">September, 2025</p>
          <h3 className="text-xl font-semibold">viral content</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
