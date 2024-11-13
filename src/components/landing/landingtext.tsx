import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.webp";

const text = () => {
  return (
    <div>
      <div>
        <Image
          src={Logo}
          alt={"Logo"}
          width={200}
          height={200}
          className="flex justify-self-center rounded-full pb-4"
        />
      </div>
      <div>
        <h1 className="py-100 text-center font-josefin text-7xl tracking-widest text-white">
          Iranian Student
        </h1>
        <h1 className="py-100 text-center font-josefin text-7xl tracking-widest text-white">
          Association
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
    </div>
  );
};

export default text;
