import React from "react";
import Image from "next/image";
import Background from "@/public/home/ucr.webp";

const Home = () => {
  return (
    <div>
      <div className="z-0">
        <Image src={Background} alt={"Background"} />
      </div>
    </div>
  );
};

export default Home;
