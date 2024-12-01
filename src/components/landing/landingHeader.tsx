import React from "react";
import Link from "next/link";

const landingHeader = () => {
  return (
    <div className="flex justify-between bg-gradient-to-b from-[#422c0c]/40 to-transparent px-40 py-4">
      {["Culture", "Join Us", "Gallery", "Philanthropy"].map((label, index) => (
        <Link
          key={index}
          href={label.toLowerCase().replace(" ", "-")}
          className="text-xl text-white transition-transform duration-300 hover:scale-105 hover:text-gray-400"
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default landingHeader;
