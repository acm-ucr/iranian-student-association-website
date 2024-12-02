import React from "react";
import Image from "next/image";
import TopPaisley from "@/public/culture/paisley1.svg";
import BottomPaisley from "@/public/culture/paisley2.svg";
import CultureText from "./text";

const background = () => {
  return (
    <div className="max-w-screen relative mb-11 mt-11 h-auto min-h-screen">
      <div className="absolute right-0">
        <Image src={TopPaisley} height={500} alt={"Top Background Paisley"} />
      </div>
      <CultureText />
      <div className="absolute bottom-0 left-0 -z-10">
        <Image
          src={BottomPaisley}
          height={500}
          alt={"Bottom Background Paisley"}
          className="z-0"
        />
      </div>
    </div>
  );
};

export default background;
