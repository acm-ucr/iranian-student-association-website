"use client";

import React from "react";
import BackgroundComponent from "@/components/join-us/background";
import Socials from "@/components/join-us/socials";
import Calendar from "@/components/join-us/calendar/calendarWrapper";
import Title from "@/components/join-us/title";
import { motion } from "framer-motion";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const page = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <BackgroundComponent />
      </div>

      <div className="flex min-h-screen flex-col">
        <div className="flex flex-grow flex-col items-center space-y-8 px-4 sm:space-y-10 sm:px-8 lg:space-y-12 lg:px-16">
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
            className="mb-3 flex justify-center sm:mb-4 md:mb-6 lg:mb-10"
          >
            <Title />
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
            className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-2xl"
          >
            <Socials />
          </motion.div>

          {/* Event Calendar Heading */}
          <motion.div
            variants={animation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 rounded-lg px-4 py-2 text-center text-2xl font-bold tracking-widest text-black sm:mt-8 sm:text-3xl md:text-4xl lg:mt-10 lg:text-5xl"
          >
            Event Calendar
          </motion.div>

          {/* Calendar */}
          <div className="w-full max-w-2xl md:max-w-4xl">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
