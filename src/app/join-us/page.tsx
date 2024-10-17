import React from "react";
import BackgroundComponent from "@/components/join-us/background";
import Socials from "@/components/join-us/socials";
import Calendar  from "@/components/join-us/calendar";

const page = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundComponent />

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-12 z-10">
        <div className="w-full max-w-3xl mx-auto">
          <Socials />
        </div>

        <div className="mt-8 text-2xl bg-gold-600 text-isa-dark-yellow py-2 px-4 rounded-lg border-isa-dark-red border-2 bg-gray-300">
          Event Calendar
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default page;
