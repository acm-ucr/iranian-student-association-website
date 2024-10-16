import React from "react";
import Image from "next/image";
import OurPhilanthropy from "@/public/philanthropy/ourPhilanthropy.svg";
import Handshake from "@/public/philanthropy/handshake.svg";
import ChildrenInternational from "@/public/philanthropy/childrenInternational.png";
import IAWF from "@/public/philanthropy/IAWF.png";
import Button from "@/components/button";
import Footer from "@/components/footer";

const page = () => {
  return (
    <div className="max-w-screen flex-col justify-center text-center">
      <div className="m-20">
        <Image
          src={OurPhilanthropy}
          width={1362}
          height={162}
          alt="Our Philanthropy Page Title"
        />
      </div>

      <Image src={Handshake} width={1524} height={309} alt="Handshake" />

      <div className="m-8 pt-4 text-center text-[52px] font-[400] leading-[65px] tracking-wider text-isa-dark-red">
        Our philanthropic partner for 2023-2024 is Child International is a
        non-political, non-sectarian volunteer based nonprofit organization that
        aims to provide equal opportunities for displaced and underprivileged
        children by empowering them, providing them access to education, housing
        and family assistance programs.
      </div>

      <Button />

      <div className="m-6 mb-0 text-[80px] tracking-widest text-black">
        Previously Supported
      </div>

      <div className="flex justify-center gap-12">
        <div className="h-[235px] w-[467px]">
          <Image
            src={ChildrenInternational}
            width={467}
            height={235}
            alt="Children International Logo"
          />
        </div>
        <div className="h-[278px] w-[590px]">
          <Image
            src={IAWF}
            width={590}
            height={278}
            alt="Iranian American Women Foundation Logo"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
