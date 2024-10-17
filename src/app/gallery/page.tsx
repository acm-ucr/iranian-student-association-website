import React from "react";
import Image from "next/image";
import Button from "@/components/gallery/buttons";
import { Titles } from "@/data/gallery/Titles";
import Paisley1 from "@/public/gallery/paisley1.svg";

const gallery = () => {
  return (
    <div className="h-screen w-screen">
      <div className="absolute top-1/4 z-0">
        <Image
          src={Paisley1}
          width={200}
          height={200}
          alt="First Paisley on Top Left of Page"
        />
      </div>
      <div className="z-10 mx-auto flex h-2/6 w-4/5 items-center justify-center rounded-3xl border-2 border-isa-light-red bg-isa-light-gray text-6xl">
        {Titles.map((items, index) => (
          <Button key={index} name={items.title} />
        ))}
      </div>
    </div>
  );
};

export default gallery;
