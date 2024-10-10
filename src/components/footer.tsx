import React from "react";
import { FOOTER } from "@/utils/footer";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full text-center font-sans">
      <div className="flex items-center justify-between px-6 py-2 text-black drop-shadow">
        <div className="font-sans text-xl tracking-wide"> ISA at UCR</div>
        <div className="flex space-x-6">
          {FOOTER.map((social, index) => (
            <Link className="" key={index} href={social.link}>
              {React.createElement(social.icon)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;
