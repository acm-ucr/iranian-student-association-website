"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const LandingHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <div className="relative z-50 bg-gradient-to-b from-[#422c0c]/40 to-transparent px-6 py-4 md:px-40 md:py-8">
      {/* DESKTOP */}
      <motion.div
        className="hidden items-center justify-between md:flex"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        {["Mission", "Culture", "Join Us", "Gallery", "Philanthropy"].map(
          (label, index) => (
            <Link
              key={index}
              href={label.toLowerCase().replace(" ", "-")}
              className="text-lg text-white transition-transform duration-300 hover:scale-105 hover:text-isa-light-beige"
            >
              {label}
            </Link>
          ),
        )}
      </motion.div>

      {/* MOBILE HEADER */}
      <motion.div
        className="flex items-center justify-between md:hidden"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <h1 className="text-3xl font-bold text-white">
          ISA <span className="relative -top-1">@</span> UCR
        </h1>
        <button
          className="text-3xl text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.div>

      {/* SANDWICH MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute left-4 right-4 top-16 z-10 rounded-lg bg-isa-light-red bg-opacity-95 p-6 shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="space-y-4 text-center">
              {["Mission", "Culture", "Join Us", "Gallery", "Philanthropy"].map(
                (label, index) => (
                  <li key={index}>
                    <Link
                      href={label.toLowerCase().replace(" ", "-")}
                      className="text-lg font-semibold text-white transition duration-300 hover:text-[#ffdd94]"
                      onClick={toggleMenu}
                    >
                      {label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingHeader;
