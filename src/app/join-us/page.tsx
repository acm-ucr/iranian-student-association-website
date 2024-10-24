import React from "react";
import BackgroundComponent from "@/components/join-us/background";
import Socials from "@/components/join-us/socials";
import WrappedEvents from "@/components/join-us/WrappedEvents";

const page = () => {
  return (
    <div className="relative max-h-screen">
      <BackgroundComponent />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-12">
        <div className="mt-8 rounded-lg px-4 py-2 text-4xl tracking-widest text-black">
          Join Us
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <Socials />
        </div>

        <div className="mt-8 rounded-lg px-4 py-2 text-4xl tracking-widest text-black">
          Event Calendar
        </div>

        <div className="bg-beige flex max-w-4xl items-center justify-center">
          <WrappedEvents />
        </div>
      </div>
    </div>
  );
};

export default page;
