import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.webp";

const landingTitle = () => {
  return (
    <div className="pt-64 text-center">
      <div className="flex justify-center pb-14">
        <Image src={Logo} alt="Logo" width={200} height={200} />
      </div>
      <h1 className="text-8xl text-white">
        Iranian Student <br />
        Association
      </h1>
      <p className="mx-auto max-w-2xl text-6xl font-bold leading-relaxed tracking-wider text-white">
        خوش آمدید
      </p>
    </div>
  );
};

export default landingTitle;
