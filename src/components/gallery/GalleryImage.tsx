"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

type GalleryImageProps = {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
};

const GalleryImage = ({ src, alt, width, height }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`transition-opacity duration-700 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default GalleryImage;
