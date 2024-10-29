import React from "react";
import Image from "next/image";
import TopPaisley from "@/public/culture/paisley1.svg";
import BottomPaisley from "@/public/culture/paisley2.svg";

const background = () => {
  return (
    <div className="max-w-screen relative mb-11 mt-11 h-auto min-h-screen">
      <div className="absolute right-0 top-0 z-0">
        <Image src={TopPaisley} height={530} alt={"Top Background Paisley"} />
      </div>
      <div className="absolute bottom-0 left-0 z-0">
        <Image
          src={BottomPaisley}
          height={650}
          alt={"Bottom Background Paisley"}
        />
      </div>
    </div>
  );
};

export default background;
