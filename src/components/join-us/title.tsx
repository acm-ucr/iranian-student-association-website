import React from "react";
import Image from "next/image";
import Title from "/public/join-us/JoinUs.svg";

const title = () => {
  return (
    <div className="max-w-screen relative flex-col justify-center text-center scale-75">
      <Image src={Title} alt="Join Us Title" width={755} height={222}></Image>
    </div>
  );
};

export default title;
