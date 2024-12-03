import React from "react";

import Header from "./landingHeader";
import LandingTitle from "./landingTitle";
import LandingEvents from "./landingEvents";
import HomeBG from "@/public/home/ucr.webp";
import Image from "next/image";

const landingPageWrapper = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        src={HomeBG}
        alt="Home Page BG"
        className="absolute -z-10 h-full w-full object-cover"
      />
      <Header />
      <LandingTitle />
      <LandingEvents />
    </div>
  );
};

export default landingPageWrapper;
