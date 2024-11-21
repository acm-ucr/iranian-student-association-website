"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Nowruz from "/src/public/culture/Nowruz.png";
import ShabeYalda from "/src/public/culture/ShabeYalda.png";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const CultureText = () => {
  return (
    <div>
      {/* Animated Nowruz Description */}
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8 }}
        className="mb-11 w-full text-balance px-11 pt-24 text-center text-4xl text-isa-dark-red"
      >
        <p>
          <b>Nowruz Significance:</b> Nowruz, the Persian New Year, is a
          significant cultural celebration that marks the beginning of the new
          year in the Iranian calendar. It typically falls on the vernal
          equinox, around March 20th or 21st, and is celebrated by millions of
          people not only in Iran but also in many other countries with Persian
          cultural influence.
        </p>
      </motion.div>

      {/* Animated Images */}
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8, delay: 0.3 }}
        className="z-40 mb-11 flex flex-row"
      >
        <Image
          className="w-1/2 scale-90 pl-9"
          src={ShabeYalda}
          alt="ShabeYaldaPhoto"
          width={711}
          height={433}
        ></Image>
        <Image
          className="w-1/2 scale-90 pr-32"
          src={Nowruz}
          alt="NowruzPhoto"
          width={556}
          height={431}
        ></Image>
      </motion.div>

      {/* Animated Shabe Yalda Description */}
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8, delay: 0.6 }}
        className="px-52 text-center text-4xl text-isa-dark-red"
      >
        <p>
          <b>Shabe Yalda Significance:</b> Shabe Yalda, also known as Yalda
          Night or the Winter Solstice celebration, is a significant and ancient
          Persian festival observed on the longest night of the year, which
          typically falls on December 20th or 21st. This celebration marks the
          victory of light over darkness as the days begin to grow longer after
          the solstice. It is an event rich in symbolism and cultural importance
          for Iranians and others with Persian cultural ties.
        </p>
      </motion.div>
    </div>
  );
};

export default CultureText;
