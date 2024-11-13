import React from "react";
import BackgroundComponent from "@/components/join-us/background";
import Socials from "@/components/join-us/socials";
import WrappedEvents from "@/components/join-us/WrappedEvents";

const page = () => {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col">
        <div className="absolute inset-0 -z-10">
          <BackgroundComponent />
        </div>

        <div className="flex flex-grow flex-col items-center space-y-12">
          <div className="mt-8 rounded-lg px-4 py-2 text-4xl tracking-widest text-black">
            Join Us
          </div>
          <div className="mx-auto w-full max-w-2xl">
            <Socials />
          </div>

          <div className="mt-8 rounded-lg px-4 py-2 text-4xl tracking-widest text-black">
            Event Calendar
          </div>

          <div className="w-full max-w-4xl">
            <WrappedEvents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
