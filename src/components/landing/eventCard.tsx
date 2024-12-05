"use client";

import React from "react";
import { motion } from "framer-motion";

type EventCardProps = {
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
};

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const EventCard = ({
  date,
  time,
  title,
  location,
  description,
}: EventCardProps) => {
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.8 }}
      className="flex max-w-md overflow-hidden rounded-3xl border-4 border-isa-events-beige bg-isa-events-beige shadow-md"
    >
      {/* Date Section */}
      <div className="flex flex-col items-center justify-center bg-isa-dark-red px-6 py-8 text-white">
        <span className="text-3xl font-bold">{date.split(" ")[0]}</span>
        <span className="text-lg">{date.split(" ")[1]}</span>
        <span className="mt-2 text-sm">{time}</span>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{location}</p>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;
