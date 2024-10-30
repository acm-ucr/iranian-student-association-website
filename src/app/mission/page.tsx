import React from "react";
import Image from "next/image";
import MissionTitle from "@/public/Mission/Mission Statement.svg";

const page = () => {
  return (
    <div>
      <div className="mb-20 flex justify-center">
        <Image src={MissionTitle} alt="Our Mission Page Title" />
      </div>
    </div>
  );
};

export default page;
