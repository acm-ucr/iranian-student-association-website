import React from "react";
import Image from "next/image";


const text = () => {
  return (
    <>
      <div>
        <Image src={"/isalogo.png"} width={300} height={400} alt={"isalogo"} />
      </div>
      <div>
        <h1 className="py-8 text-center text-4xl text-white font-sans">
          Iranian Student Association
        </h1>
      </div>
      <div>
        <p className="py-8 text-center text-4xl text-gray-500 font-serif">
          Lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem 
          </p>
      </div>
      <div>
        <p className="py-8 text-center text-4xl text-gray-500 font-serif">
          ipsumlorem ipsumv
          </p>
      </div>
    </>
  );
};

export default text;
