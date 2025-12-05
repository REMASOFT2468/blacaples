import React from "react";
import img4 from "../assets/image/img4.png";
import img5 from "../assets/image/img5.png";
import img6 from "../assets/image/img6.png";
import img7 from "../assets/image/img7.png";

const Hero = () => {
  return (
    <div className="mt-5">
      <div className="text-4xl p-6  md:p-10 md:ml-80 md:w-200 md:text-6xl md:mt-20">
        <h1 className="relative">
          <span className="bg-gradient-to-b from-transparent to-red-900">
            We craft
          </span>{" "}
          human-emotion centric stories.
        </h1>
        <p className="mt-10 text-xs md:w-90 md:ml-60">
          our team focuses on crafting and engineering emotion catching stories
          and contents that stays in the mind of your customers when they close
          eyes to sleep.
        </p>
      </div>
      <div className="flex justify-between p-10 text-red-800">
        <h6>Projects</h6>
        <h6>More +200</h6>
      </div>

      <div>
        <section className="bg-black text-white -mt-20 px-5 py-16 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <img
                src={img7}
                alt="Event storytelling"
                className="w-full h-72 object-cover rounded-lg"
              />
              <p className="text-gray-400 mt-3 text-sm">August, 2025</p>
              <h3 className="text-xl font-semibold">Event storytelling</h3>
            </div>

            <div>
              <img
                src={img6}
                alt="Viral Content"
                className="w-full h-72  md:h-90 md:-mt-10 md:-ml-20 object-cover rounded-lg"
              />
              <p className="text-gray-400 mt-3 text-sm">September, 2025</p>
              <h3 className="text-xl font-semibold">Viral content</h3>
            </div>

            <div>
              <img
                src={img5}
                alt="Viral Content"
                className="w-full h-72 md:h-100 md:-mt-14 md:-ml-25 object-cover rounded-lg"
              />
              <p className="text-gray-400 mt-3 text-sm">September, 2025</p>
              <h3 className="text-xl font-semibold">Viral content</h3>
            </div>

            <div>
              <img
                src={img4}
                alt="Personal brand reimagine"
                className="w-full h-72 md:h-120 md:-mt-20 md:-ml-30 object-cover rounded-lg"
              />
              <p className="text-gray-400 mt-3 text-sm">October, 2025</p>
              <h3 className="text-xl font-semibold">
                Personal brand reimagine
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
