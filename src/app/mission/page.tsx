import React from "react";
import Image from "next/image";
import MissionTitle from "@/public/mission/MissionStatement.svg";
import Page from "../../components/mission/page";

const page = () => {
  return (
    <div>
      <div className="mb-20 flex justify-center">
        <Image src={MissionTitle} alt="Our Mission Page Title" />
      </div>
      <Page />
    </div>
  );
};

export default page;
