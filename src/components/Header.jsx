import React from "react";
import Navbar from "./Navbar";
import nepalImg from "../assets/nepal.webp";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div id="Header" className="min-h-screen w-full flex flex-col">
      <Navbar />

      {/* Hero Image */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={nepalImg}
          alt="Nepal Mountains"
          className="w-full h-full object-cover"
        />

        {/* Text overlay */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-6 md:px-20 lg:px-32"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-semibold max-w-3xl text-center leading-snug tracking-tight"
            style={{ fontFamily: "custumeFont" }}
          >
            Explore Nepal, where mountains touch the sky...
          </h2>

          <div className="space-x-6 mt-16">
            <a href="#Contact" className="bg-[#799EFF] px-8 py-3 rounded">
              Explore
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
