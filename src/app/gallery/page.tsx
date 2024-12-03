import React from "react";
import Image from "next/image";
import Background from "@/components/gallery/background";
import ButtonLayout from "@/components/gallery/buttonLayout";
import GalleryTitle from "@/public/gallery/Gallery.svg";

const gallery = () => {
  return (
    <div className="relative h-full">
      <div className="flex w-screen justify-center">
        <Image
          src={GalleryTitle}
          alt="Our Gallery Page Title"
          className="md:mb-15 w-4/6 md:w-1/2 lg:mb-10 xl:w-5/12"
        />
      </div>
      <ButtonLayout />
      <Background />
    </div>
  );
};

export default gallery;
