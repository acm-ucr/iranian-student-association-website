"use client";

import React from "react";
import Image from "next/image";
import HomeBG from "@/public/home/homeBG.webp";

const LandingBackground = () => (
  <div className="absolute -z-10 h-screen w-screen">
    <Image
      src={HomeBG}
      alt="Home Page BG"
      layout="fill"
      objectFit="cover"
      priority
    />
  </div>
);

export default LandingBackground;
