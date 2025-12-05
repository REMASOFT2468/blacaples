import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";
import img4 from "../assets/image/img4.png";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <nav
        className="w-full flex items-center justify-between py-6 px-6 md:px-20"
        data-aos="fade-down"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full">
            <img src={img2} alt="logo" className="-mt-2" />
          </div>
          <h1 className="text-xl font-semibold">Blacaples</h1>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-gray-300">
          <li className="hover:text-white cursor-pointer">
            <span className="text-red-400">Home</span>
          </li>
          <li className="hover:text-white cursor-pointer">Portfolio</li>
          <li className="hover:text-white cursor-pointer">Documentary</li>
          <li className="hover:text-white cursor-pointer">About</li>
        </ul>
      </nav>

      <section className="w-full flex flex-col items-center text-center mt-10 px-4 md:px-0">
        <div
          className="relative w-full max-w-3xl h-[420px] md:h-[500px] flex justify-center items-center"
          data-aos="fade-up"
        >
          <img
            src={img3}
            alt="Left"
            className="absolute left-0 md:left-10 w-40 md:w-80 rotate-[-8deg] rounded-lg object-cover shadow-lg"
            data-aos="fade-right"
          />
          <img
            src={img4}
            alt="Center"
            className="absolute w-48 md:w-72 rounded-lg shadow-xl object-cover z-10"
            data-aos="zoom-in"
          />
          <img
            src={img1}
            alt="Right"
            className="absolute right-0 md:right-10 w-40 md:w-72 rotate-[8deg] rounded-lg object-cover shadow-lg"
            data-aos="fade-left"
          />

          <div
            className="absolute inset-0 z-30 mt-60 md:mt-80 flex flex-col justify-center items-center px-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight">
              We engineer digital presence that is
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-red-600 leading-tight mt-2">
              hard to forget
            </h1>
          </div>
        </div>
      </section>

      <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
        <p className="text-center px-6 md:w-[600px] md:mx-auto mt-10">
          We use storytelling and thoughtful content to make people connect,
          remember, and care about your brand online.
        </p>
      </div>

      <div
        className="flex justify-center mt-10"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <button className="w-55 h-10 bg-white text-red-700 rounded-lg">
          Whatsapp us now
        </button>
      </div>

      <div
        className="flex text-xs gap-10 p-6 mt-15 md:justify-between md:p-10 md:mt-10"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <h6>BLACAPLE</h6>
        <h6>A CONTENT STUDIO BASED IN PH.</h6>
        <h6>@2025</h6>
      </div>
    </div>
  );
};

export default Header;
