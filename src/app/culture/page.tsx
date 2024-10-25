import React from "react";
import Image from "next/image";
import Background from "@/components/culture/background";
import CultureTitle from "@/public/culture/Culture.svg";

const page = () => {
  return (
    <div>
      <div className="mb-19 flex justify-center">
        <Image src={CultureTitle} alt="Our Gallery Page Title" />
      </div>
      <Background />
    </div>
  );
};

export default page;
