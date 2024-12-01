import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.webp";

const landingTitle = () => {
  return (
    <div className="pt-56 text-center">
      <div className="flex justify-center pb-14">
        <Image src={Logo} alt="Logo" width={200} height={200} />
      </div>
      <h1 className="text-8xl text-white">
        Iranian Student <br />
        Association
      </h1>
      <p className="mx-auto mt-16 max-w-2xl text-lg text-white">
        Lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum
        lorem ipsumv
      </p>
    </div>
  );
};

export default landingTitle;
