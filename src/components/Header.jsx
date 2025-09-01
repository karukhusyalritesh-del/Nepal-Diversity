import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/nepal.webp')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg-px-32 text-white"
      >
        <h2
          className="
    text-4xl sm:text-5xl md:text-6xl lg:text-[82px] 
    font-semibold 
    max-w-3xl 
    mx-auto 
    leading-snug 
    tracking-tight 
    pt-20
    text-white
  "
          style={{ fontFamily: "custumeFont" }}
        >
          Explore Nepal, where mountains touch the sky...
        </h2>

        <div className="space-x-6 mt-16">
          {/* <a href="#Projects" className='border border-white px-8 py-3 rounded'>Visit</a> */}
          <a href="#Contact" className="bg-[#799EFF] px-8 py-3 rounded">
            Explore
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
