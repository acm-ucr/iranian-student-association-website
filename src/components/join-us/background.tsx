import React from "react";
import Paisley1 from "@/public/join-us/paisley1.webp";
import Paisley2 from "@/public/join-us/paisley2.webp";
import Title from "@/components/join-us/title";

const BackgroundComponent = () => {
  return (
    <div>
      <div className="bg-beige-100 relative h-screen w-full">
        <img
          src={Paisley1.src}
          alt="Paisley Top Left"
          className="absolute left-0 top-10 h-auto w-60"
        />
        <div className="mb-20 flex justify-center">
          <Title />
        </div>
        <img
          src={Paisley2.src}
          alt="Paisley Bottom Right"
          className="absolute bottom-0 right-0 h-auto w-64"
        />
      </div>
    </div>
  );
};

export default BackgroundComponent;
