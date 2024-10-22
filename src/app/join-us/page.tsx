import React from "react";
import BackgroundComponent from "@/components/join-us/background";
import Socials from "@/components/join-us/socials";
import Calendar from "@/components/join-us/calendar";

const page = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundComponent />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-12">
        <div className="mx-auto w-full max-w-3xl">
          <Socials />
        </div>

        <div className="bg-gold-600 mt-8 rounded-lg border-2 border-isa-dark-red bg-gray-300 px-4 py-2 text-2xl text-isa-dark-yellow">
          Event Calendar
        </div>

        <div className="mx-auto w-full max-w-5xl">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default page;
