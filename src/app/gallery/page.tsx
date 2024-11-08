import React from "react";
import Image from "next/image";
import BackGround from "@/components/gallery/background";
import ButtonLayout from "@/components/gallery/buttonLayout";
import GalleryTitle from "@/public/gallery/Gallery.svg";

const gallery = () => {
  return (
    <div className="relative h-full ">
      <div className="flex justify-center w-screen">
        <Image src={GalleryTitle} 
        alt="Our Gallery Page Title" 
        className="w-4/6 md:w-1/2 md:mb-15 lg:mb-10 xl:w-5/12"
        />
      </div>
      <BackGround />
      <ButtonLayout />
    </div>
  );
};

export default gallery;
