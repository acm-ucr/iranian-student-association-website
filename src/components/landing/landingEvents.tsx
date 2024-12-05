"use client";

import React from "react";
import { motion } from "framer-motion";
import EventCard from "./eventCard";
import EVENTS from "@/data/landing/tempEvents";

type event = {
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
};

const LandingEvents = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="mx-auto mt-16 grid max-w-md gap-6 px-4 pb-10 md:mt-28 md:max-w-4xl md:grid-cols-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {EVENTS.map((event: event, index: number) => (
        <motion.div key={index} variants={cardVariants}>
          <EventCard
            date={event.date}
            time={event.time}
            title={event.title}
            location={event.location}
            description={event.description}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default LandingEvents;
