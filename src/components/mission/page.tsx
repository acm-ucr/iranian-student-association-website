"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import groupPic from "@/public/mission/group.svg";

const animation1 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const mission = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <section className="mb-8 md:mb-16">
        <motion.div
          variants={animation1}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="aspect-w-16 aspect-h-9 w-full max-w-6xl overflow-hidden rounded-lg shadow-lg"
        >
          <Image
            src={groupPic}
            alt="Group Mission"
            layout="responsive"
            width={1600}
            height={900}
            className="object-cover"
          />
        </motion.div>
      </section>
      <section className="mb-8 mt-8 max-w-6xl px-8 text-center">
        <motion.p
          variants={animation1}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="text-2xl font-medium leading-normal text-isa-light-red md:text-5xl lg:text-5xl"
        >
          The Iranian Student Association at UCR aims to promote inclusivity and
          cultural awareness by organizing events that celebrate our shared
          heritage, educate on political and historical topics, and foster a
          united community where we can learn and grow together.
        </motion.p>
      </section>
    </div>
  );
};

export default mission;
