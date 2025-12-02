import React from "react";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";
import img4 from "../assets/image/img4.png";

const Header = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between py-6 px-6 md:px-20">
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

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center text-center mt-10 px-4 md:px-0">
        <div className="relative w-full max-w-3xl h-[420px] md:h-[500px] flex justify-center items-center">
          {/* Left Image */}
          <img
            src={img3}
            alt="Left"
            className="absolute left-0 md:left-10 w-40 md:w-80 rotate-[-8deg] rounded-lg object-cover shadow-lg"
          />

          <img
            src={img4}
            alt="Center"
            className="absolute w-48 md:w-72  rounded-lg shadow-xl object-cover z-10"
          />

          <img
            src={img1}
            alt="Right"
            className="absolute right-0 md:right-10 w-40 md:w-75 rotate-[8deg] rounded-lg object-cover shadow-lg"
          />

          <div className="absolute inset-0 z-30 mt-60 md:mt-100 flex flex-col justify-center items-center px-2">
            <h1 className="text-3xl  sm:text-4xl md:text-6xl font-light leading-tight">
              We engineer digital presence that is
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-red-600 leading-tight mt-2">
              hard to forget
            </h1>
          </div>
        </div>
      </section>
      <div className="-mt-30">
        <p className="text-center  w-100 md: mt-30 md:w-140 md: md:ml-110 md:mt-60 ">
          We use storytelling and thoughtful content to make people connect,
          remember, and care about your brand online
        </p>
      </div>
      <button className="w-50 h-9 bg-white text-red-700 ml-22 mt-10 justify-center md:ml-150 ">
        Whatsapp us now
      </button>
      <div className="flex text-xs gap-3 p-3 mt-20 md:justify-between md:p-10 md:mt-5">
        <h6>BLACAPLE</h6>
        <h6>A CONTENT STUDIO BASED IN PH.</h6>
        <h6>@2025</h6>
      </div>
    </div>
  );
};

export default Header;
