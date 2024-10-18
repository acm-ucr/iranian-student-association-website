import React from "react";
import Image from "next/image";
import Button from "@/components/gallery/buttons";
import { Titles } from "@/data/gallery/Titles";
import Paisley1 from "@/public/gallery/paisley1.svg";
import Paisley2 from "@/public/gallery/paisley2.svg";

const gallery = () => {
  return (
    <div className="h-screen w-screen">
      <div className="absolute top-1/4 -z-10">
        <Image
          src={Paisley1}
          width={300}
          height={300}
          alt="First Paisley on Top Left of Page"
        />
      </div>
      <div className="absolute right-0 top-full">
        <Image
          src={Paisley2}
          width={350}
          height={350}
          alt="First Paisley on Top Left of Page"
        />
      </div>
      <div className="h-full w-full">
        {Titles.map((items, index) => (
          <Button key={index} name={items.title} />
        ))}
      </div>
    </div>
  );
};

export default gallery;
