"use client";

import React from "react";
import GalleryImage from "@/components/gallery/GalleryImage";
import { StaticImageData } from "next/image";

type GalleryImagesProps = {
  images: (string | StaticImageData)[];
  pageTitle: string;
};

const GalleryImages = ({ images, pageTitle }: GalleryImagesProps) => {
  return (
    <div className="flex flex-col items-center pt-10">
      <div className="grid w-4/5 grid-cols-1 gap-2 py-10 lg:grid-cols-3">
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={typeof image === "string" ? image : image.src}
            width={typeof image === "string" ? 500 : image.width}
            height={typeof image === "string" ? 300 : image.height}
            alt={`${pageTitle}_${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
