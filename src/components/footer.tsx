import React from "react";
import { ICONS } from "@/data/icons";
import Link from "next/link";
import Image from "next/image";
import FooterBg from "../data/footer-bg-cropped7.svg";
import BottomBg from "../data/Group 400.svg";

const Footer = () => {
  return (
    <footer className="font-sans drop-shadow">
      <div className="flex w-full flex-row">
        <Image
          className="flex w-1/3 object-cover"
          src={FooterBg}
          alt="Footer Bg"
        />
        <Image
          className="flex w-1/3 scale-x-[-1] object-cover"
          src={FooterBg}
          alt="Footer Bg"
        />
        <Image
          className="flex w-1/3 object-cover"
          src={FooterBg}
          alt="Footer Bg"
        />
      </div>
      <div className="flex justify-between pl-4 pr-4 text-sm font-medium text-black sm:pl-9 sm:pr-10 sm:text-2xl">
        <div className="pt-1 text-lg tracking-widest sm:text-3xl">
          ISA at UCR
        </div>
        <div className="flex space-x-4 pt-2 text-lg sm:space-x-8 sm:pt-3 sm:text-3xl">
          {ICONS.map((social, index) => (
            <Link key={index} href={social.link} target="_blank">
              {React.createElement(social.icon)}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex w-1/3 flex-row">
        <Image className="mt-2" src={BottomBg} alt="Bottom Bg" />
        <Image className="mt-2 scale-x-[-1]" src={BottomBg} alt="Bottom Bg" />
        <Image className="mt-2" src={BottomBg} alt="Bottom Bg" />
      </div>
    </footer>
  );
};
export default Footer;
