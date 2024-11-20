"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const animation1 = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const animation2 = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const mission = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <motion.section
        variants={animation1}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.5 }}
        className="mb-8"
      >
        <div className="aspect-w-16 aspect-h-9 w-full max-w-6xl overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/mission/group.svg"
            alt="Group Mission"
            layout="responsive"
            width={1600}
            height={900}
            className="object-cover"
          />
        </div>
      </motion.section>

      <motion.section
        variants={animation2}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.5 }}
        className="mb-8 mt-8 max-w-6xl px-8 text-center"
      >
        <p className="text-4xl font-medium leading-normal text-isa-light-red">
          The Iranian Student Association at UCR aims to promote inclusivity and
          cultural awareness by organizing events that celebrate our shared
          heritage, educate on political and historical topics, and foster a
          united community where we can learn and grow together.
        </p>
      </motion.section>
    </div>
  );
};

export default mission;
