"use client";

import React from "react";
import Image from "next/image";
import Background from "@/components/gallery/background";
import ButtonLayout from "@/components/gallery/buttonLayout";
import GalleryTitle from "@/public/gallery/Gallery.svg";
import { motion } from "framer-motion";

// Animation Variants
const animation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const gallery = () => {
  return (
    <div className="relative h-full">
      {/* Animated Title */}
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8 }}
        className="flex w-screen justify-center"
      >
        <Image
          src={GalleryTitle}
          alt="Our Gallery Page Title"
          className="md:mb-15 w-4/6 md:w-1/2 lg:mb-10 xl:w-5/12"
        />
      </motion.div>

      {/* Animated Button Layout */}
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8 }}
      >
        <ButtonLayout />
      </motion.div>
      <Background />
    </div>
  );
};

export default gallery;
