import React, { useState, useRef, useEffect } from "react";
import leftIcon from "../assets/left_icon.png";
import rightIcon from "../assets/right_icon.png";
import kathmandu from "../assets/kathmandu.jpg";
import pokhara from "../assets/pokhara.jpg";
import lumbini from "../assets/lumbini.png";
import chitwan from "../assets/chitwan.jpg";
import mustang from "../assets/mustang.jpg";
import solukhumbu from "../assets/solukhumbu.jpg";
import rasuwa from "../assets/rasuwa.jpg";
import janakpur from "../assets/janakpur.jpg";
import { motion } from "motion/react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTouching, setIsTouching] = useState(false); // new state
  const sliderRef = useRef(null);

  const projects = [
    { name: "Kathmandu", location: "Nepal", image: kathmandu },
    { name: "Pokhara", location: "Nepal", image: pokhara },
    { name: "Lumbini", location: "Nepal", image: lumbini },
    { name: "Chitwan", location: "Nepal", image: chitwan },
    { name: "Mustang", location: "Nepal", image: mustang },
    { name: "Solukhumbu", location: "Nepal", image: solukhumbu },
    { name: "Rasuwa", location: "Nepal", image: rasuwa },
    { name: "Janakpur", location: "Nepal", image: janakpur },
  ];

  const minSwipeDistance = 50;

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsTouching(true); // user started touching
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsTouching(false); // user finished touching
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    else if (distance < -minSwipeDistance) handlePrev();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      scrollToIndex(prev);
      return prev;
    });
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth * 0.75; // same as before
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll only when not touching (disable auto scroll on mobile swipe)
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Tailwind md breakpoint
    if (sliderRef.current && !isMobile) {
      const slideWidth = sliderRef.current.clientWidth * 0.75;
      sliderRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Projects"
      className="container mx-auto px-4 pt-20 md:px-20 lg:px-32 pb-20"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Places{" "}
        <span className="underline underline-offset-4 decoration-2 font-light text-[#799EFF]">
          To Visit
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        These are some beautiful places to visit in Nepal.
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center mb-6 gap-2">
        <button
          onClick={handlePrev}
          className="p-3 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <img src={leftIcon} className="w-6 h-6" alt="Previous" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          <img src={rightIcon} className="w-6 h-6" alt="Next" />
        </button>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x md:snap-mandatory gap-4 scrollbar-hide"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start w-[80%] sm:w-1/3 md:w-1/4 lg:w-1/5 transition-transform"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative h-102 md:h-80 lg:h-96">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-lg font-bold">{project.name}</h3>
                <p className="text-white text-sm">{project.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
