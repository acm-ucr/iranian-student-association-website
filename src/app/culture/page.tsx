import React from "react";
import Image from "next/image";
import Background from "@/components/culture/background";
import CultureTitle from "@/public/culture/Culture.svg";

const page = () => {
  return (
    <div>
      <div className="mb-20 flex justify-center">
        <Image src={CultureTitle} alt="Our Culture Page Title" />
      </div>
      <Background />
    </div>
  );
};

export default page;
