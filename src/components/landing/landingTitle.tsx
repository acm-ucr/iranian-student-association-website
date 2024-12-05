"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/public/logo.webp";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const landingTitle = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="pt-64 text-center"
    >
      {/* Logo Animation */}
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center pb-14"
      >
        <Image src={Logo} alt="Logo" width={200} height={200} />
      </motion.div>

      {/* Title Animation */}
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-8xl text-white"
      >
        Iranian Student <br />
        Association
      </motion.div>

      {/* Subtitle Animation */}
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto max-w-2xl text-6xl font-bold leading-relaxed tracking-wider text-white"
      >
        خوش آمدید
      </motion.div>
    </motion.div>
  );
};

export default landingTitle;
