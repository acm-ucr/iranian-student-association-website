import React from "react";
import "./landing.css";

import Header from "./landingHeader";
import LandingTitle from "./landingTitle";
import LandingEvents from "./landingEvents";

const landingPageWrapper = () => {
  return (
    <div className="bg-landing min-h-screen">
      <Header />
      <LandingTitle />
      <LandingEvents />
    </div>
  );
};

export default landingPageWrapper;
