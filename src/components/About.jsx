import React from "react";
import about from "../assets/image_gallery.png";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto px-6 py-14 md:px-12 lg:px-24 w-full overflow-hidden"
      id="About"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
        About{" "}
        <span className="underline underline-offset-4 decoration-2 font-light text-[#799EFF]">
          Our Nepal
        </span>
      </h1>

      {/* Content Section: Image Left, Paragraph Right */}
      <div className="flex flex-col md:flex-row items-center md:items-center md:gap-16 lg:gap-24 w-full">
        {/* Image */}
        <img
          src={about}
          className="w-full md:w-1/2 max-w-lg rounded-xl shadow-lg mb-8 md:mb-0"
          alt="About our brand"
        />

        {/* Paragraph */}
        <p className="text-gray-600 max-w-3xl text-center md:text-left leading-relaxed md:pl-6">
          Nepal is a small but very beautiful country in South Asia. It is a
          landlocked country that lies between two big countries, India and
          China. Even though Nepal is small, it is world famous because of its
          natural beauty and rich culture. The highest mountain in the world,
          Mount Everest, is in Nepal. Many travelers from around the world come
          here to climb mountains and enjoy trekking. Nepal is also called the
          land of the Himalayas. Nepal is not only about mountains. There are
          green hills, fertile valleys, rivers, and the flat Terai region with
          forests and wildlife. The weather and landscapes change as you move
          from one place to another. Because of this, Nepal is home to many
          plants and animals. Culturally, Nepal is very diverse. There are more
          than 100 ethnic groups and over 120 languages spoken. Some well-known
          communities are Newar, Magar, Tharu, Gurung, Tamang, and many more.
          People follow different religions like Hinduism, Buddhism, Islam, and
          Christianity, but they live together with peace and respect. Nepal is
          also known as the birthplace of Lord Buddha, who taught peace to the
          world. Although Nepal is developing and faces challenges, it is rich
          in beauty, culture, and tradition.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
