import React from "react";
import Image from "next/image";
import updatedmissiontitle from "@/public/mission/updatedmissiontitle.svg";
import Page from "../../components/mission/page";

const page = () => {
  return (
    <div>
      <div className="mb-8 flex justify-center md:mb-16 lg:mb-20">
        <Image src={updatedmissiontitle} alt="Our Mission Page Title" />
      </div>
      <Page />
    </div>
  );
};

export default page;
