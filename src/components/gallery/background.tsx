import React from "react";
import Image from "next/image";
import Paisley1 from "@/public/gallery/paisley1.svg";
import Paisley2 from "@/public/gallery/paisley2.svg";

const background = () => {
  return (
    <div className="">
      <div className="absolute left-0 top-36 -z-10">
        <Image
          src={Paisley1}
          className="h-[35vh] w-fit md:h-[50vh] xl:h-[60vh] 2xl:h-[70vh]"
          alt="First Paisley on Top Left of Page"
        />
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <Image
          src={Paisley2}
          className="h-[35vh] w-fit md:h-[50vh] xl:h-[60vh] 2xl:h-[70vh]"
          alt="Second Paisley on Top Left of Page"
        />
      </div>
    </div>
  );
};

export default background;
