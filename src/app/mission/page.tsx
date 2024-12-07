"use client";
import React from "react";
import Image from "next/image";
import updatedmissiontitle from "@/public/mission/updatedmissiontitle.svg";
import Page from "../../components/mission/page";
import { motion } from "framer-motion";

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

const page = () => {
  return (
    <div>
      <motion.div
        variants={animation1}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        className="mb-8 flex justify-center sm:px-5 md:mb-16 lg:mb-20"
      >
        <Image src={updatedmissiontitle} alt="Our Mission Page Title" />
      </motion.div>
      <Page />
    </div>
  );
};

export default page;
