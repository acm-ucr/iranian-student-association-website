import React from "react";
import { FOOTER } from "@/utils/footer";
import Link from "next/link";
import Image from "next/image";
import FooterBg from "../data/footer-bg-cropped7.svg";
import BottomBg from "../data/Group 400.svg";

const Footer = () => {
  return (
    <div className="font-sans drop-shadow">
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
      <div className="flex justify-between pl-9 pr-10 font-medium text-black">
        <div className="pt-1 text-3xl tracking-widest"> ISA at UCR</div>
        <div className="flex space-x-8 pt-3 text-3xl">
          {FOOTER.map((social, index) => (
            <Link key={index} href={social.link}>
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
    </div>
  );
};
export default Footer;
