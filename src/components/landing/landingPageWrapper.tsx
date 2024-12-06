"use client";

import React from "react";

import LandingHeader from "./landingHeader";
import LandingTitle from "./landingTitle";
import LandingEvents from "./landingEvents";
import HomeBG from "@/public/home/homeBG.webp";
import Image from "next/image";

const landingPageWrapper = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        src={HomeBG}
        alt="Home Page BG"
        className="absolute -z-10 h-full w-full object-cover"
      />
      <LandingHeader />
      <LandingTitle />
      <LandingEvents />
    </div>
  );
};

export default landingPageWrapper;
