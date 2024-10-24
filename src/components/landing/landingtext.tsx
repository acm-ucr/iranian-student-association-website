import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.webp";

const text = () => {
  return (
    <>
      <div>
        <Image src={Logo} alt={"Logo"} width={300} height={400} />
      </div>
      <div>
        <h1 className="py-8 text-center font-sans text-4xl text-white">
          Iranian Student Association
        </h1>
      </div>
      <div>
        <p className="py-8 text-center font-serif text-4xl text-gray-500">
          Lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
        </p>
      </div>
      <div>
        <p className="py-8 text-center font-serif text-4xl text-gray-500">
          ipsumlorem ipsumv
        </p>
      </div>
    </>
  );
};

export default text;
