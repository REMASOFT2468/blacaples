import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import img2 from "../assets/image/img2.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/Portfolio" },
    { name: "Documentary", path: "/documentary" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="bg-black text-white font-sans">
      <nav
        className="w-full flex items-center justify-between py-6 px-6 md:px-20"
        data-aos="fade-down"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={img2} alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-semibold">Blacaples</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`cursor-pointer hover:text-white transition ${
                  location.pathname === link.path
                    ? "text-red-400 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden bg-black text-gray-300 flex flex-col gap-5 px-6 py-6 border-t border-gray-700"
          data-aos="fade-down"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`cursor-pointer hover:text-white transition text-lg ${
                location.pathname === link.path ? "text-red-400 font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
