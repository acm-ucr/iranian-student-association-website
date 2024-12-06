"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/public/logo.webp";

const landingTitle = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.1 },
    },
  };

  return (
    <motion.div
      className="pt-40 text-center md:pt-64"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex justify-center pb-8 md:pb-14"
        variants={logoVariants}
      >
        <Image
          src={Logo}
          alt="Logo"
          width={150}
          height={150}
          className="md:h-52 md:w-52"
        />
      </motion.div>

      <motion.h1
        className="text-4xl font-bold text-white md:text-6xl lg:text-8xl"
        variants={titleVariants}
      >
        Iranian Student <br />
        Association
      </motion.h1>

      <motion.p
        className="mx-auto mt-4 max-w-xl text-2xl font-semibold leading-relaxed tracking-wide text-white md:mt-8 md:max-w-2xl md:text-4xl"
        variants={descriptionVariants}
      >
        خوش آمدید
      </motion.p>
    </motion.div>
  );
};

export default landingTitle;
