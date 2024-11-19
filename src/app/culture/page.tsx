import React from "react";
import Image from "next/image";
import Background from "@/components/culture/background";
import CultureTitle from "@/public/culture/Culture.svg";

const page = () => {
  return (
    <div>
      <div className="m-10 mb-10 mt-2 justify-self-center sm:m-20 sm:mt-5">
        <Image src={CultureTitle} alt="Our Culture Page Title" />
      </div>
      <Background />
    </div>
  );
};

export default page;
