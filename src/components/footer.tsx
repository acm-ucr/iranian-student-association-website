import React from "react";
import { FOOTER } from "@/utils/footer";
import Link from "next/link";
const Footer  = () => {
    return (
        <div className="w-full font-sans text-center">

            <div className="flex drop-shadow items-center justify-between px-6 py-2 bg-cream text-black">
            <div className="text-xl font-sans tracking-wide"> ISA at UCR</div>
            <div className="flex space-x-6">
            {FOOTER.map((social, index) => (
          <Link
            className=""
            key={index}
            href={social.link}
          >
            {React.createElement(social.icon)}
          </Link>
        ))}
      </div>
      </div>
      </div>

    );

};
export default Footer;
