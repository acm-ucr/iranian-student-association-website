"use client";

import React from "react";
import BackgroundComponent from "@/components/join-us/background";
import Socials from "@/components/join-us/socials";
import WrappedEvents from "@/components/join-us/WrappedEvents";
import Title from "@/components/join-us/title";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const page = () => {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <div className="absolute inset-0 -z-10">
          <BackgroundComponent />
        </div>

        <div className="flex flex-grow flex-col items-center space-y-12">
          {/* Animated Title */}
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
            className="mb-20 flex justify-center"
          >
            <Title />
          </motion.div>

          {/* Animated Socials */}
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
            className="mx-auto w-full max-w-2xl"
          >
            <Socials />
          </motion.div>

          {/* Animated "Event Calendar" Text */}
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 rounded-lg px-4 py-2 text-4xl tracking-widest text-black"
          >
            Event Calendar
          </motion.div>

          <div className="w-full max-w-4xl">
            <WrappedEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
