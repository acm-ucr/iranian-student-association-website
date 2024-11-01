import React from "react";
import Image from "next/image";
import BackGround from "@/components/gallery/background";
import ButtonLayout from "@/components/gallery/buttonLayout";
import GalleryTitle from "@/public/gallery/Gallery.svg";

const gallery = () => {
  return (
    <div className="relative min-h-screen">
      <div className="mb-20 flex justify-center">
        <Image src={GalleryTitle} alt="Our Gallery Page Title" />
      </div>
      <ButtonLayout />
      <BackGround />
    </div>
  );
};

export default gallery;
