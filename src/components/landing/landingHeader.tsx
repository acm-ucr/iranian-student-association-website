"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const LandingHeader = () => {
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.8 }}
      className="flex justify-between bg-gradient-to-b from-[#422c0c]/40 to-transparent px-40 py-8"
    >
      {["Mission", "Culture", "Join Us", "Gallery", "Philanthropy"].map(
        (label, index) => (
          <Link
            key={index}
            href={label.toLowerCase().replace(" ", "-")}
            className="text-xl text-white transition-transform duration-300 hover:scale-105 hover:text-gray-400"
          >
            {label}
          </Link>
        ),
      )}
    </motion.div>
  );
};

export default LandingHeader;
