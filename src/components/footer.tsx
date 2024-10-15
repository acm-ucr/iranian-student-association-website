import React from "react";
import { FOOTER } from "@/utils/footer";
import Link from "next/link";
import Image from "next/image";
import FooterBg from "../public/footer-bg.svg";
import BottomBg from "../public/Group 400.svg";
const Footer = () => {
  return (
    <div className="font-sans drop-shadow">
      <Image
        className="flex w-full justify-center py-1"
        src={FooterBg}
        alt="Footer Bg"
      />
      <div className="flex justify-between py-1 pl-9 pr-10 font-medium text-black">
        <div className="text-4xl tracking-widest"> ISA at UCR</div>
        <div className="mt-1 flex space-x-10 text-4xl">
          {FOOTER.map((social, index) => (
            <Link key={index} href={social.link}>
              {React.createElement(social.icon)}
            </Link>
          ))}
        </div>
      </div>
      <Image className="mt-2 w-full" src={BottomBg} alt="Bottom Bg" />
      <div className="flex flex-row gap-2"></div>
    </div>
  );
};
export default Footer;
