import React, { useEffect, useState } from "react";
import logo from "../assets/npl_flag.png";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32">
        <img src={logo} className="w-20" alt="" />
        <ul className="hidden md:flex gap-7 text-black">
          <a href="#Header" className="cursor-pointer hover:text-[#799EFF]">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-[#799EFF]">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-[#799EFF]">
            Visit Places
          </a>
          <a href="#Footer" className="cursor-pointer hover:text-[#799EFF]">
            Footer
          </a>
        </ul>
        <a href="#Contact">
          <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">
            Contact Us
          </button>
        </a>
        <img
          src={menu}
          onClick={() => setshowMobileMenu(true)}
          className="md:hidden w-10 cursor-pointer"
          alt=""
        />
      </div>
      {/* --------Mobile Menu----------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-[#799EFF] transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={cross}
            onClick={() => setshowMobileMenu(false)}
            className="w-10"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Visit Places
          </a>
          <a
            onClick={() => setshowMobileMenu(false)}
            href="#Contact"
            className="px-4 py-2 rounded-full inline-block"
          >
            Contact Us
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
